import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { farmProducts } from "@/data/products";
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
  DollarSign, Activity, BarChart3,
} from "lucide-react";
import { useState } from "react";

const allProducts = [...products, ...farmProducts];
const allOrders = mockOrders;

const statusColor: Record<string, string> = {
  Pending: "bg-accent/20 text-accent",
  Processing: "bg-secondary/20 text-secondary",
  Shipped: "bg-primary/20 text-primary",
  Delivered: "bg-primary/20 text-primary",
};

const Admin = () => {
  const [orderSearch, setOrderSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");

  const filteredOrders = allOrders.filter((o) =>
    o.customerName.toLowerCase().includes(orderSearch.toLowerCase()) ||
    o.id.toLowerCase().includes(orderSearch.toLowerCase())
  );

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  const totalRevenue = allOrders.reduce((s, o) => s + o.total, 0);

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
                    <TableCell><Badge className={statusColor[o.status]}>{o.status}</Badge></TableCell>
                    <TableCell className="text-muted-foreground">{o.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Products */}
        <TabsContent value="products">
          <div className="mb-4">
            <Input placeholder="Search products..." value={productSearch} onChange={(e) => setProductSearch(e.target.value)} className="max-w-sm" />
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Doctors */}
        <TabsContent value="doctors">
          <div className="grid gap-4 sm:grid-cols-2">
            {doctors.map((d) => (
              <div key={d.id} className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-card">
                <img src={d.photo} alt={d.name} className="h-14 w-14 rounded-full object-cover" />
                <div className="flex-1">
                  <h3 className="font-medium">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.specialization}</p>
                  <p className="text-xs text-muted-foreground">{d.experience} years · {d.availableDays.join(", ")}</p>
                </div>
                <Badge className="bg-primary/10 text-primary">{d.timeSlots.length} slots</Badge>
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
