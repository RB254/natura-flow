import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { branches } from "@/data/branches";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Check, Truck, MapPin, Smartphone, Banknote, CreditCard, Loader2 } from "lucide-react";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [selectedBranch, setSelectedBranch] = useState(branches[0].id);
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [mpesaStep, setMpesaStep] = useState<"idle" | "sending" | "sent">("idle");

  const handleMpesaPay = () => {
    if (!mpesaPhone || mpesaPhone.length < 10) {
      toast.error("Enter a valid M-Pesa phone number");
      return;
    }
    setMpesaStep("sending");
    setTimeout(() => {
      setMpesaStep("sent");
      toast.success("STK Push sent! Check your phone to complete payment.");
    }, 2000);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "mpesa" && mpesaStep !== "sent") {
      toast.error("Please complete M-Pesa payment first");
      return;
    }
    setPlaced(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (placed) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Order Placed!</h2>
          <p className="mt-2 text-muted-foreground">
            {deliveryMethod === "home"
              ? "Your order will be delivered to your address."
              : `Pick up your order at ${branches.find(b => b.id === selectedBranch)?.name}.`}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Payment: {paymentMethod === "mpesa" ? "M-Pesa (confirmed)" : paymentMethod === "cod" ? "Cash on Delivery" : "Pay on Pickup"}
          </p>
          <Button className="mt-6 bg-primary text-primary-foreground" onClick={() => navigate("/products")}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">Cart is Empty</h2>
          <Button className="mt-4 bg-primary text-primary-foreground" onClick={() => navigate("/products")}>Browse Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-8 font-display text-3xl font-bold text-foreground">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-5">
        <form onSubmit={handleOrder} className="space-y-6 lg:col-span-3">
          {/* Customer Details */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold">Customer Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div><Label>Full Name</Label><Input required placeholder="Your name" /></div>
              <div><Label>Phone</Label><Input required placeholder="+254..." /></div>
            </div>
            <div className="mt-4"><Label>Email</Label><Input type="email" placeholder="email@example.com" /></div>
          </div>

          {/* Delivery Method */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold">Delivery Method</h2>
            <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="grid gap-3 sm:grid-cols-2">
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${deliveryMethod === "home" ? "border-primary bg-primary/5" : "bg-card"}`}>
                <RadioGroupItem value="home" id="home" />
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">Home Delivery</p>
                  <p className="text-xs text-muted-foreground">Delivered to your door</p>
                </div>
              </label>
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${deliveryMethod === "pickup" ? "border-primary bg-primary/5" : "bg-card"}`}>
                <RadioGroupItem value="pickup" id="pickup" />
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">Pickup at Branch</p>
                  <p className="text-xs text-muted-foreground">Collect from nearest branch</p>
                </div>
              </label>
            </RadioGroup>

            {deliveryMethod === "home" && (
              <div className="mt-4 space-y-3">
                <div><Label>Delivery Address</Label><Input required placeholder="Street, City" /></div>
                <div><Label>County</Label><Input required placeholder="e.g. Nairobi" /></div>
              </div>
            )}

            {deliveryMethod === "pickup" && (
              <div className="mt-4">
                <Label>Select Branch</Label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>{b.name} — {b.city}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={(v) => { setPaymentMethod(v); setMpesaStep("idle"); }} className="grid gap-3 sm:grid-cols-3">
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${paymentMethod === "mpesa" ? "border-primary bg-primary/5" : "bg-card"}`}>
                <RadioGroupItem value="mpesa" id="mpesa" />
                <Smartphone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-medium text-card-foreground">M-Pesa</p>
                  <p className="text-xs text-muted-foreground">Mobile money</p>
                </div>
              </label>
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "bg-card"}`}>
                <RadioGroupItem value="cod" id="cod" />
                <Banknote className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium text-card-foreground">Cash on Delivery</p>
                  <p className="text-xs text-muted-foreground">Pay when delivered</p>
                </div>
              </label>
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${paymentMethod === "pickup_pay" ? "border-primary bg-primary/5" : "bg-card"}`}>
                <RadioGroupItem value="pickup_pay" id="pickup_pay" />
                <CreditCard className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-card-foreground">Pay on Pickup</p>
                  <p className="text-xs text-muted-foreground">Pay at branch</p>
                </div>
              </label>
            </RadioGroup>

            {/* M-Pesa STK Push Simulation */}
            {paymentMethod === "mpesa" && (
              <div className="mt-4 rounded-xl border bg-muted p-4">
                <h3 className="mb-3 font-medium text-foreground">M-Pesa Payment</h3>
                {mpesaStep === "idle" && (
                  <div className="space-y-3">
                    <div>
                      <Label>M-Pesa Phone Number</Label>
                      <Input
                        value={mpesaPhone}
                        onChange={(e) => setMpesaPhone(e.target.value)}
                        placeholder="+254 712 345678"
                        className="mt-1"
                      />
                    </div>
                    <Button type="button" onClick={handleMpesaPay} className="w-full bg-secondary text-secondary-foreground">
                      <Smartphone className="mr-2 h-4 w-4" /> Confirm Payment
                    </Button>
                  </div>
                )}
                {mpesaStep === "sending" && (
                  <div className="flex items-center gap-3 py-4">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">Sending STK Push to {mpesaPhone}...</p>
                  </div>
                )}
                {mpesaStep === "sent" && (
                  <div className="rounded-lg bg-primary/10 p-4 text-center">
                    <Check className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="font-medium text-primary">STK Push Sent!</p>
                    <p className="mt-1 text-sm text-muted-foreground">Check your phone ({mpesaPhone}) to complete payment.</p>
                    <p className="mt-2 text-xs text-muted-foreground">Payment status: <span className="font-medium text-primary">Confirmed</span></p>
                  </div>
                )}
              </div>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
            Place Order — KSh {(total + (deliveryMethod === "home" ? 300 : 0)).toLocaleString()}
          </Button>
        </form>

        <div className="rounded-xl border bg-card p-6 lg:col-span-2 h-fit">
          <h2 className="mb-4 font-display text-lg font-semibold">Order Summary</h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                <span className="font-medium">KSh {(item.product.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Delivery</span>
            <span>{deliveryMethod === "home" ? "KSh 300" : "Free"}</span>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-primary">KSh {(total + (deliveryMethod === "home" ? 300 : 0)).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
