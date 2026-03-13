import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { branches } from "@/data/branches";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  HeartPulse, Shield, CalendarIcon, Check,
  Activity, Eye, Stethoscope, Zap
} from "lucide-react";

const analyzerFeatures = [
  "Heart Disease",
  "Diabetes (All Types)",
  "Prostate",
  "Low Libido",
  "Hormonal Imbalance",
  "Kidney Disorders",
  "High Blood Pressure",
  "Novel Corona Virus",
  "Skin Disorder",
  "Hepatitis",
  "Viral Pneumonia",
  "Arthritis",
  "Immune Disorder",
  "Tumour",
  "Memory Loss",
  "Cerebral Palsy",
  "Stroke",
  "Epilepsy",
  "Goitre",
  "Asthma / Bronchitis / TB",
  "Ulcers (All Types)",
  "Ovarian Cyst",
  "Infertility",
  "Drug Addiction",
  "Piles",
  "Fibroids",
  "Haemorrhoids",
  "Stress and Depression",
  "Thyroid Disorder",
  "Joint Disorder",
  "Old Age (Anti-Aging)",
  "Cancer (Stage 1-3)",
  "Erectile Disfunction",
  "Cardiovascular Diseases"
];

const detectionBenefits = [
  { icon: Shield, title: "Prevent Disease", desc: "Catch health issues before they become serious problems." },
  { icon: Activity, title: "Track Health Trends", desc: "Monitor your health metrics over time for better outcomes." },
  { icon: Eye, title: "Early Detection", desc: "Identify risk factors early when treatment is most effective." },
  { icon: Stethoscope, title: "Expert Analysis", desc: "Get professional assessment from experienced practitioners." },
];

const BodyCheckup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !branch) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Full Body Check-Up request submitted!");
  };

  if (submitted) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Request Submitted!</h2>
          <p className="mt-2 text-muted-foreground">
            We'll contact you at {phone} to confirm your Full Body Check-Up
            {date ? ` on ${format(date, "PPP")}` : ""}.
          </p>
          <Button className="mt-6 bg-primary text-primary-foreground" onClick={() => { setSubmitted(false); setName(""); setPhone(""); setEmail(""); setDate(undefined); }}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-2 font-display text-4xl font-black tracking-tight text-primary md:text-6xl uppercase" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Green Health Kenya
          </h1>
          <h2 className="mb-8 font-display text-xl font-bold text-red-600 md:text-3xl uppercase tracking-wide">
            Computerised Full Body Scanning @ 2000/=
          </h2>
          
          <div className="mx-auto max-w-3xl mt-8 p-6 md:p-10 bg-card rounded-2xl border shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            <p className="font-bold text-red-600 text-lg md:text-xl mb-6 uppercase tracking-wider">
              We have effective quality treatment through nutrition
            </p>
            <p className="font-semibold text-primary text-md md:text-lg mb-2 uppercase">
              Do you know anyone who has health challenges?
            </p>
            <p className="font-medium text-primary/90 text-md md:text-lg mb-8 uppercase">
              Enjoy good health, live a good life.
            </p>
            
            <div className="inline-flex items-center justify-center gap-3 bg-red-50 px-6 py-4 rounded-xl border border-red-100">
              <span className="font-bold text-red-600 text-lg uppercase">For Consultation Call Us On:</span>
              <a href="tel:0793671846" className="text-2xl font-black text-primary hover:underline transition-all">0793671846</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Magnetic Analyzer Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6 overflow-hidden rounded-xl border bg-white p-4 shadow-sm w-fit">
                <img src="/scanner.png" alt="Quantum Magnetic Analyzer Scanner" className="w-full max-w-[250px] h-auto object-contain" />
              </div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Quantum Magnetic Analyzer</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                The Quantum Magnetic Analyzer is a non-invasive health diagnostic device used to analyze body organs and health indicators. Using advanced magnetic resonance technology, it scans the body's electromagnetic signals to provide a comprehensive health assessment.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                It helps our doctors detect early health conditions and recommend appropriate nutraceutical products tailored to each patient's specific needs.
              </p>
              <h3 className="mb-3 font-display font-semibold text-foreground">How It Works</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">1</span> Hold the sensor — the device reads your body's electromagnetic signals</li>
                <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">2</span> In 60 seconds, it analyzes 39+ health indicators across major organs</li>
                <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">3</span> A detailed health report is generated for doctor review</li>
                <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">4</span> Your doctor recommends the right nutraceutical products for you</li>
              </ol>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-card h-fit">
              <h3 className="mb-4 font-display font-semibold text-card-foreground">We offer Best Advice on:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {analyzerFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground">Why Get a Full Body Check-Up?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {detectionBenefits.map((b, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                  <b.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-1 font-display font-semibold text-card-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-12">
        <div className="container mx-auto max-w-xl px-4">
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground">Request a Full Body Check-Up</h2>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border bg-card p-6 shadow-card">
            <div className="grid gap-4 md:grid-cols-2">
              <div><Label>Full Name *</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required /></div>
              <div><Label>Phone Number *</Label><Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254..." required /></div>
            </div>

            <div><Label>Email (Optional)</Label><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" type="email" /></div>

            <div>
              <Label>Preferred Branch *</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger><SelectValue placeholder="Select branch" /></SelectTrigger>
                <SelectContent>
                  {branches.map((b) => (
                    <SelectItem key={b.id} value={b.id}>{b.name} — {b.city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Preferred Date</Label>
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

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BodyCheckup;
