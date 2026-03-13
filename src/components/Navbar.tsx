import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

type NavLink = {
  label: string;
  href?: string;
  subLinks?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "NeutricPlant", href: "/fertilizer" },
  { 
    label: "Services", 
    subLinks: [
      { label: "Packages", href: "/services" },
      { label: "Book Appointment", href: "/appointments" },
      { label: "Full Body Check-Up", href: "/body-checkup" }
    ] 
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/branches" },
];

export const Navbar = () => {
  const { itemCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("gw_user");

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Green Health Logo" className="h-10 w-auto" />
          <span className="font-display text-xl font-bold text-foreground">Green World</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted text-muted-foreground"
                >
                  {link.label}
                </button>
                <div className="absolute left-0 top-full hidden w-48 rounded-md border bg-popover p-2 text-popover-foreground shadow-md group-hover:block">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      to={subLink.href}
                      className="block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted text-foreground"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href!}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.href ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to={isLoggedIn ? "/dashboard" : "/login"}>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent p-0 text-xs text-accent-foreground">
                {itemCount}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-card p-4 lg:hidden">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.label} className="mb-2">
                <div className="px-3 py-2 text-sm font-semibold text-foreground">
                  {link.label}
                </div>
                <div className="pl-4 flex flex-col gap-1">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted text-muted-foreground"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href!}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.href ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link to={isLoggedIn ? "/dashboard" : "/login"} onClick={() => setMobileOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted">
            {isLoggedIn ? "Dashboard" : "Login"}
          </Link>
        </div>
      )}
    </nav>
  );
};
