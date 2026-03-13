import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin auth
    if (email === "admin@greenworld.co.ke" && password === "admin123") {
      localStorage.setItem("gw_admin", "true");
      toast.success("Admin access granted");
      navigate("/admin");
    } else {
      toast.error("Invalid admin credentials. Use admin@greenworld.co.ke / admin123");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-card">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Green World Administration Panel</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label>Email</Label><Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@greenworld.co.ke" /></div>
          <div><Label>Password</Label><Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" /></div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground">Access Dashboard</Button>
        </form>
        <p className="mt-4 text-center text-xs text-muted-foreground">Demo: admin@greenworld.co.ke / admin123</p>
      </div>
    </div>
  );
};

export default AdminLogin;
