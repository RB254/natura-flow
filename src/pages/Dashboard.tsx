import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockOrders } from "@/data/orders";
import { Link, useNavigate } from "react-router-dom";
import { Package, Calendar, Heart, User, LogOut, Truck } from "lucide-react";
import { toast } from "sonner";

const statusColor: Record<string, string> = {
  Pending: "bg-accent/20 text-accent",
  Processing: "bg-secondary/20 text-secondary",
  Shipped: "bg-primary/20 text-primary",
  "Out for delivery": "bg-secondary/20 text-secondary",
  Delivered: "bg-primary/20 text-primary",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("gw_user");
  const user = userStr ? JSON.parse(userStr) : null;

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("gw_user");
    toast.success("Logged out");
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">My Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.name}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}><LogOut className="mr-2 h-4 w-4" />Logout</Button>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-4">
        {[
          { icon: Package, label: "My Orders", value: mockOrders.length.toString(), color: "text-primary" },
          { icon: Calendar, label: "Appointments", value: "2", color: "text-secondary" },
          { icon: Heart, label: "Saved Products", value: "5", color: "text-accent" },
          { icon: User, label: "Profile", value: "Active", color: "text-primary" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl border bg-card p-5 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6 space-y-4">
          {mockOrders.map((o) => (
            <div key={o.id} className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-card">
              <div>
                <p className="font-medium text-card-foreground">{o.id}</p>
                <p className="text-sm text-muted-foreground">{o.items.map(i => i.name).join(", ")}</p>
                <p className="text-xs text-muted-foreground">{o.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">KSh {o.total.toLocaleString()}</p>
                <Badge className={statusColor[o.status]}>{o.status}</Badge>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="appointments" className="mt-6">
          <div className="rounded-xl border bg-card p-6 text-center shadow-card">
            <Calendar className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-muted-foreground">Your upcoming appointments will appear here.</p>
            <Link to="/appointments"><Button className="mt-4 bg-primary text-primary-foreground">Book Consultation</Button></Link>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <div className="max-w-md rounded-xl border bg-card p-6 shadow-card">
            <h3 className="mb-4 font-display font-semibold text-card-foreground">Profile Details</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{user.name}</span></p>
              <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{user.email}</span></p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
