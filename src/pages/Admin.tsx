import { Link } from "react-router-dom";
import { products, categories, farmProducts } from "@/data/products";
import { mockOrders } from "@/data/orders";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Package, ShoppingCart, Calendar, Users, TrendingUp,
  DollarSign, Activity, BarChart3, Plus, Edit, Trash2,
  CheckCircle, Clock, Truck, ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const allProducts = [...products, ...farmProducts];
const allOrders = mockOrders;
const allCategories = categories;

const statusColor: Record<string, string> = {
  Pending: "bg-accent/20 text-accent",
  Processing: "bg-secondary/20 text-secondary",
  Shipped: "bg-primary/20 text-primary",
  Delivered: "bg-primary/20 text-primary",
};

const Admin = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [allOrders, setAllOrders] = useState<any[]>([]);
  const [allDoctors, setAllDoctors] = useState<any[]>([]);
  
  const [orderSearch, setOrderSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  
  // Form States
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  
  useEffect(() => {
    // Basic Persistence Simulation
    const savedProducts = localStorage.getItem("admin_products");
    const savedOrders = localStorage.getItem("admin_orders");
    const savedDoctors = localStorage.getItem("admin_doctors");

    setAllProducts(savedProducts ? JSON.parse(savedProducts) : [...products, ...farmProducts]);
    setAllOrders(savedOrders ? JSON.parse(savedOrders) : mockOrders);
    setAllDoctors(savedDoctors ? JSON.parse(savedDoctors) : doctors);
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      localStorage.setItem("admin_products", JSON.stringify(allProducts));
      localStorage.setItem("admin_orders", JSON.stringify(allOrders));
      localStorage.setItem("admin_doctors", JSON.stringify(allDoctors));
    }
  }, [allProducts, allOrders, allDoctors, dataLoaded]);

  const filteredOrders = allOrders.filter((o) =>
    o.customerName.toLowerCase().includes(orderSearch.toLowerCase()) ||
    o.id.toLowerCase().includes(orderSearch.toLowerCase())
  );

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  const totalRevenue = allOrders.reduce((s, o) => s + (o.total || 0), 0);

  // CRUD Operations
  const handleSaveProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productData = {
      id: editingProduct?.id || `p${Date.now()}`,
      name: formData.get("name"),
      category: formData.get("category"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      description: formData.get("description"),
      image: editingProduct?.image || "/products/slide_1.png",
      benefits: editingProduct?.benefits || ["Natural health support"],
      ingredients: ["Natural Herbal Extract"],
      usage: "1-2 sachets daily",
      isFarm: formData.get("category") === "Agricultural Products"
    };

    if (editingProduct) {
      setAllProducts(allProducts.map(p => p.id === editingProduct.id ? productData : p));
      toast.success("Product updated successfully");
    } else {
      setAllProducts([...allProducts, productData]);
      toast.success("Product added successfully");
    }
    setIsProductModalOpen(false);
    setEditingProduct(null);
  };

  const deleteProduct = (id: string) => {
    setAllProducts(allProducts.filter(p => p.id !== id));
    toast.success("Product deleted");
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setAllOrders(allOrders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-display text-3xl font-bold text-foreground">Admin Dashboard</h1>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: DollarSign, label: "Total Revenue", value: `KSh ${totalRevenue.toLocaleString()}`, color: "text-primary" },
          { icon: ShoppingCart, label: "Total Orders", value: allOrders.length.toString(), color: "text-secondary" },
          { icon: Users, label: "Total Customers", value: "156", color: "text-accent" },
          { icon: Calendar, label: "Appointments", value: "24", color: "text-primary" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className={`mt-1 text-2xl font-bold ${s.color}`}>{s.value}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="orders">
        <TabsList className="mb-6">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="doctors">Doctors</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Orders */}
        <TabsContent value="orders">
          <div className="mb-4">
            <Input placeholder="Search orders..." value={orderSearch} onChange={(e) => setOrderSearch(e.target.value)} className="max-w-sm" />
          </div>
          <div className="rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-medium">{o.id}</TableCell>
                    <TableCell>{o.customerName}</TableCell>
                    <TableCell>{o.items.length} items</TableCell>
                    <TableCell>KSh {o.total.toLocaleString()}</TableCell>
                    <TableCell>
                      <Select defaultValue={o.status} onValueChange={(val) => updateOrderStatus(o.id, val as any)}>
                        <SelectTrigger className={`h-8 w-[120px] ${statusColor[o.status]}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(statusColor).map(status => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{o.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Products */}
        <TabsContent value="products">
          <div className="mb-4 flex items-center justify-between">
            <Input placeholder="Search products..." value={productSearch} onChange={(e) => setProductSearch(e.target.value)} className="max-w-sm" />
            
            <Dialog open={isProductModalOpen} onOpenChange={(open) => {
              setIsProductModalOpen(open);
              if (!open) setEditingProduct(null);
            }}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSaveProduct}>
                  <DialogHeader>
                    <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
                    <DialogDescription>
                      Fill in the details for the product. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" name="name" defaultValue={editingProduct?.name} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="category" className="text-right">Category</Label>
                      <div className="col-span-3">
                        <Select name="category" defaultValue={editingProduct?.category || "Nutraceutical Medicines"}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {allCategories.map(cat => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right">Price (KSh)</Label>
                      <Input id="price" name="price" type="number" defaultValue={editingProduct?.price} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="stock" className="text-right">Stock</Label>
                      <Input id="stock" name="stock" type="number" defaultValue={editingProduct?.stock} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">Description</Label>
                      <Textarea id="description" name="description" defaultValue={editingProduct?.description} className="col-span-3" required />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{p.name}</TableCell>
                    <TableCell>{p.category}</TableCell>
                    <TableCell>KSh {p.price.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className={p.stock < 20 ? "text-destructive font-medium" : ""}>{p.stock}</span>
                    </TableCell>
                    <TableCell><Badge variant="outline">{p.isFarm ? "Farm" : "Health"}</Badge></TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => {
                          setEditingProduct(p);
                          setIsProductModalOpen(true);
                        }}>
                          <Edit className="h-4 w-4 text-primary" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteProduct(p.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Doctors */}
        <TabsContent value="doctors">
          <div className="mb-4 flex justify-end">
             <Button className="flex items-center gap-2" onClick={() => toast.info("Doctor registration form coming soon. Use current profiles.")}>
                <Plus className="h-4 w-4" /> Add Doctor
             </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {allDoctors.map((d) => (
              <div key={d.id} className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-card">
                <img src={d.photo} alt={d.name} className="h-14 w-14 rounded-full object-cover" />
                <div className="flex-1">
                  <h3 className="font-medium">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.specialization}</p>
                  <p className="text-xs text-muted-foreground">{d.experience} years · {d.availableDays.join(", ")}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-primary/10 text-primary">{d.timeSlots.length} slots</Badge>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Doctor profile editing is enabled for admins.")}>
                      <Edit className="h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
                        setAllDoctors(allDoctors.filter(doc => doc.id !== d.id));
                        toast.success(`Dr. ${d.name} removed from registry`);
                    }}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-card">
              <div className="mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold">CEO Data Hub</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Simulated API endpoints for central monitoring system:
              </p>
              <div className="space-y-2 text-sm font-mono">
                <p className="rounded bg-muted px-3 py-2">GET /api/orders — Daily sales data</p>
                <p className="rounded bg-muted px-3 py-2">GET /api/products — Product performance</p>
                <p className="rounded bg-muted px-3 py-2">GET /api/appointments — Booking stats</p>
                <p className="rounded bg-muted px-3 py-2">GET /api/analytics — Revenue analytics</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-card">
              <div className="mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-secondary" />
                <h3 className="font-display font-semibold">Quick Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-muted-foreground">Today's Sales</span><span className="font-medium text-primary">KSh 23,400</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Appointments Today</span><span className="font-medium">4</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">New Customers</span><span className="font-medium">12</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Farm Product Demand</span><span className="font-medium text-secondary">↑ 18%</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Top Product</span><span className="font-medium">Cordyceps Plus</span></div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
