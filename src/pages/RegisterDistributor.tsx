import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Check, Users, Package, TrendingUp, Shield } from "lucide-react";

const benefits = [
  { icon: Package, title: "Wholesale Pricing", desc: "Access exclusive distributor pricing on all products." },
  { icon: TrendingUp, title: "Business Growth", desc: "Earn commissions and build your own distribution network." },
  { icon: Shield, title: "Brand Support", desc: "Marketing materials and training from Green World." },
  { icon: Users, title: "Community", desc: "Join a network of health-conscious entrepreneurs." },
];

const RegisterDistributor = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", location: "", businessName: "", productsOfInterest: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Application submitted! We'll review and contact you soon.");
  };

  if (submitted) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Application Received!</h2>
          <p className="mt-2 max-w-md text-muted-foreground">
            Thank you, {formData.fullName}. Our team will review your application and contact you at {formData.phone} within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            💼 Business Opportunity
          </span>
          <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Become a Green World Distributor</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join our growing network of distributors and earn by selling premium nutraceutical health products across Kenya and Africa.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-display font-semibold text-card-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="bg-muted py-12">
        <div className="container mx-auto max-w-xl px-4">
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground">Distributor Application</h2>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border bg-card p-6 shadow-card">
            <div className="grid gap-4 md:grid-cols-2">
              <div><Label>Full Name *</Label><Input value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} placeholder="Your full name" required /></div>
              <div><Label>Phone Number *</Label><Input value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+254..." required /></div>
            </div>
            <div><Label>Email *</Label><Input value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your@email.com" type="email" required /></div>
            <div><Label>Location / County *</Label><Input value={formData.location} onChange={(e) => handleChange("location", e.target.value)} placeholder="e.g. Nairobi, Mombasa" required /></div>
            <div><Label>Business Name (if any)</Label><Input value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} placeholder="Your business name" /></div>
            <div><Label>Products of Interest</Label><Textarea value={formData.productsOfInterest} onChange={(e) => handleChange("productsOfInterest", e.target.value)} placeholder="Which products would you like to distribute?" rows={3} /></div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
              Submit Application
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterDistributor;
