import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const BookAppointment = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const preselectedDoctor = params.get("doctor") || "";

  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor);
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  const doctor = doctors.find((d) => d.id === selectedDoctor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor || !date || !timeSlot || !name || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    setBooked(true);
    toast.success("Appointment booked successfully!");
  };

  if (booked) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Appointment Confirmed!</h2>
          <p className="mt-2 text-muted-foreground">
            Your consultation with {doctor?.name} on {date && format(date, "PPP")} at {timeSlot} has been booked.
          </p>
          <Button className="mt-6 bg-primary text-primary-foreground" onClick={() => navigate("/appointments")}>
            Back to Appointments
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <button onClick={() => navigate("/appointments")} className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Doctors
      </button>

      <h1 className="mb-6 font-display text-3xl font-bold text-foreground">Book Doctor Consultation</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label>Select Doctor *</Label>
          <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
            <SelectTrigger><SelectValue placeholder="Choose a doctor" /></SelectTrigger>
            <SelectContent>
              {doctors.map((d) => (
                <SelectItem key={d.id} value={d.id}>{d.name} — {d.specialization}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {doctor && (
          <div className="rounded-lg border bg-muted p-4">
            <div className="flex items-center gap-3">
              <img src={doctor.photo} alt={doctor.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-medium">{doctor.name}</p>
                <p className="text-sm text-muted-foreground">{doctor.specialization} · {doctor.experience}yrs</p>
                <p className="text-xs text-muted-foreground">Available: {doctor.availableDays.join(", ")}</p>
              </div>
            </div>
          </div>
        )}

        <div>
          <Label>Select Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
            </PopoverContent>
          </Popover>
        </div>

        {doctor && (
          <div>
            <Label>Select Time Slot *</Label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {doctor.timeSlots.map((slot) => (
                <Button key={slot} type="button" variant={timeSlot === slot ? "default" : "outline"} size="sm"
                  onClick={() => setTimeSlot(slot)}
                  className={timeSlot === slot ? "bg-primary text-primary-foreground" : ""}>
                  {slot}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Full Name *</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
          </div>
          <div>
            <Label>Phone Number *</Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254..." />
          </div>
        </div>

        <div>
          <Label>Email (Optional)</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" type="email" />
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default BookAppointment;
