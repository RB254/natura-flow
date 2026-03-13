import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { Stethoscope } from "lucide-react";

const Appointments = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="mb-8 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
        <Stethoscope className="h-6 w-6 text-secondary" />
      </div>
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Doctor Consultations</h1>
        <p className="text-muted-foreground">Book a session with our expert naturopathic doctors</p>
      </div>
    </div>

    <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Our Doctors</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {doctors.map((d) => (
        <DoctorCard key={d.id} doctor={d} />
      ))}
    </div>
  </div>
);

export default Appointments;
