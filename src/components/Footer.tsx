import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t bg-foreground text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <img src="/logo.svg" alt="Green Health Logo" className="h-10 w-auto bg-white rounded-md p-0.5" />
          <span className="font-display text-lg font-bold">Green World</span>
        </div>
        <p className="text-sm opacity-70">
          Your trusted partner in nutraceutical health and sustainable agriculture across Kenya and Africa.
        </p>
      </div>

      <div>
        <h4 className="mb-3 font-display font-semibold">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <Link to="/products" className="hover:opacity-100 transition-opacity">Nutraceutical Products</Link>
          <Link to="/fertilizer" className="hover:opacity-100 transition-opacity">NeutricPlant Fertilizer</Link>
          <Link to="/appointments" className="hover:opacity-100 transition-opacity">Consult Doctor</Link>
          <Link to="/body-checkup" className="hover:opacity-100 transition-opacity">Full Body Check-Up</Link>
          <Link to="/services" className="hover:opacity-100 transition-opacity">Our Services</Link>
          <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
          <Link to="/branches" className="hover:opacity-100 transition-opacity">Our Branches</Link>
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display font-semibold">Account</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <Link to="/login" className="hover:opacity-100 transition-opacity">Login</Link>
          <Link to="/register" className="hover:opacity-100 transition-opacity">Register</Link>
          <Link to="/register-distributor" className="hover:opacity-100 transition-opacity">Become Distributor</Link>
          <Link to="/dashboard" className="hover:opacity-100 transition-opacity">My Dashboard</Link>
          <Link to="/admin/login" className="hover:opacity-100 transition-opacity">Admin Panel</Link>
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display font-semibold">Contact Us</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +254 700 123 456</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@greenworld.co.ke</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nairobi, Kenya</span>
        </div>
      </div>
    </div>
    <div className="border-t border-muted-foreground/20 py-4 text-center text-xs opacity-50">
      © 2026 Green World Natural Health. All rights reserved.
    </div>
  </footer>
);
