import { branches } from "@/data/branches";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Branches = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="mb-8 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Our Branch Locations</h1>
      <p className="mt-2 text-muted-foreground">Visit your nearest Green World branch across Kenya</p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {branches.map((b) => (
        <div key={b.id} className="rounded-xl border bg-card p-6 shadow-card">
          <h3 className="mb-3 font-display text-lg font-semibold text-card-foreground">{b.name}</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b.address}, {b.city}</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />{b.phone}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{b.workingHours}</p>
          </div>
          <a href={b.mapUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <ExternalLink className="mr-2 h-3 w-3" /> View on Map
            </Button>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Branches;
