import { mockOrders } from "@/data/orders";
import { products } from "@/data/products";
import { doctors } from "@/data/doctors";
import {
  DollarSign, ShoppingCart, Users, Calendar, TrendingUp,
  Package, Activity, BarChart3, Leaf, ArrowUpRight, ArrowDownRight
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const revenueData = [
  { month: "Oct", revenue: 145000 },
  { month: "Nov", revenue: 198000 },
  { month: "Dec", revenue: 230000 },
  { month: "Jan", revenue: 210000 },
  { month: "Feb", revenue: 265000 },
  { month: "Mar", revenue: 310000 },
];

const productPerformance = [
  { name: "Cordyceps Plus", sales: 85 },
  { name: "Ganoderma", sales: 62 },
  { name: "Slimming Tea", sales: 78 },
  { name: "Women's Wellness", sales: 45 },
  { name: "NeutricPlant", sales: 120 },
  { name: "Blood Sugar", sales: 55 },
];

const appointmentTrends = [
  { month: "Oct", appointments: 32 },
  { month: "Nov", appointments: 45 },
  { month: "Dec", appointments: 38 },
  { month: "Jan", appointments: 52 },
  { month: "Feb", appointments: 61 },
  { month: "Mar", appointments: 74 },
];

const customerGrowth = [
  { month: "Oct", customers: 820 },
  { month: "Nov", customers: 910 },
  { month: "Dec", customers: 985 },
  { month: "Jan", customers: 1100 },
  { month: "Feb", customers: 1250 },
  { month: "Mar", customers: 1420 },
];

const categoryBreakdown = [
  { name: "Immune Boosters", value: 28 },
  { name: "Digestive", value: 18 },
  { name: "Energy", value: 15 },
  { name: "Weight Mgmt", value: 12 },
  { name: "Fertilizer", value: 20 },
  { name: "Other", value: 7 },
];

const COLORS = ["hsl(145, 78%, 27%)", "hsl(105, 49%, 52%)", "hsl(43, 78%, 46%)", "hsl(145, 50%, 40%)", "hsl(105, 30%, 60%)", "hsl(0, 0%, 70%)"];

const totalRevenue = mockOrders.reduce((s, o) => s + o.total, 0);

const metrics = [
  { icon: DollarSign, label: "Total Revenue", value: `KSh ${totalRevenue.toLocaleString()}`, change: "+18%", up: true, color: "text-primary" },
  { icon: ShoppingCart, label: "Orders Today", value: "12", change: "+5%", up: true, color: "text-secondary" },
  { icon: Calendar, label: "Appointments Today", value: "8", change: "+12%", up: true, color: "text-accent" },
  { icon: Users, label: "Active Customers", value: "1,420", change: "+14%", up: true, color: "text-primary" },
  { icon: Package, label: "Products Sold", value: "342", change: "+22%", up: true, color: "text-secondary" },
  { icon: Leaf, label: "Fertilizer Sales", value: "120 units", change: "+35%", up: true, color: "text-accent" },
];

const CEODashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <BarChart3 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">CEO Dashboard</h1>
          <p className="text-muted-foreground">Executive overview — Green World Operations</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metrics.map((m, i) => (
          <div key={i} className="rounded-xl border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <m.icon className={`h-5 w-5 ${m.color}`} />
              <span className={`flex items-center text-xs font-medium ${m.up ? "text-primary" : "text-destructive"}`}>
                {m.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {m.change}
              </span>
            </div>
            <p className="text-xl font-bold text-foreground">{m.value}</p>
            <p className="text-xs text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        {/* Revenue Trend */}
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-display font-semibold text-foreground">Revenue Trends</h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="hsl(145, 78%, 27%)" strokeWidth={2} dot={{ fill: "hsl(145, 78%, 27%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Performance */}
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <Package className="h-5 w-5 text-secondary" />
            <h3 className="font-display font-semibold text-foreground">Product Performance</h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={productPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Bar dataKey="sales" fill="hsl(105, 49%, 52%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="mb-6 grid gap-6 lg:grid-cols-3">
        {/* Appointment Trends */}
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            <h3 className="font-display font-semibold text-foreground">Appointment Trends</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={appointmentTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="appointments" stroke="hsl(43, 78%, 46%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Growth */}
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="font-display font-semibold text-foreground">Customer Growth</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={customerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="customers" stroke="hsl(145, 78%, 27%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown */}
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-secondary" />
            <h3 className="font-display font-semibold text-foreground">Sales by Category</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} fontSize={10}>
                {categoryBreakdown.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-display font-semibold text-foreground">Top Performing Products</h3>
          <div className="space-y-3">
            {productPerformance.sort((a, b) => b.sales - a.sales).slice(0, 5).map((p, i) => (
              <div key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">{i + 1}</span>
                  <span className="text-sm text-foreground">{p.name}</span>
                </div>
                <span className="text-sm font-medium text-primary">{p.sales} units</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-display font-semibold text-foreground">Low Stock Alerts</h3>
          <div className="space-y-3">
            {products.filter(p => p.stock < 80).map((p) => (
              <div key={p.id} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{p.name}</span>
                <span className={`text-sm font-medium ${p.stock < 30 ? "text-destructive" : "text-accent"}`}>{p.stock} left</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEODashboard;
