import { Doctor } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const DoctorCard = ({ doctor }: { doctor: Doctor }) => (
  <div className="overflow-hidden rounded-xl border bg-card shadow-card transition-all hover:shadow-elevated">
    <div className="flex flex-col items-center p-6 text-center">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-primary/20"
      />
      <h3 className="font-display text-lg font-semibold text-card-foreground">{doctor.name}</h3>
      <p className="text-sm text-secondary">{doctor.specialization}</p>
      <p className="mt-1 text-xs text-muted-foreground">{doctor.experience} years experience</p>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        <span>{doctor.availableDays.join(", ")}</span>
      </div>
      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3 w-3" />
        <span>{doctor.timeSlots.length} slots available</span>
      </div>
      <Link to={`/book-appointment?doctor=${doctor.id}`} className="mt-4 w-full">
        <Button className="w-full bg-primary text-primary-foreground">
          Book Consultation
        </Button>
      </Link>
    </div>
  </div>
);
