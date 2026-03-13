import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  HeartPulse, Stethoscope, Leaf, Sprout,
  ArrowRight, CheckCircle,
  Bone, Brain, Activity, ShieldAlert, ShieldCheck, 
  Baby, Wind, Flower2, Zap, ShieldPlus, 
  Eye, Apple, BugOff, Sparkles, Scale
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Full Body Check-Up",
    desc: "Comprehensive non-invasive health screening using the Quantum Magnetic Analyzer. Detects early health conditions across all major organs and body systems.",
    features: ["Non-invasive diagnostics", "Full organ system analysis", "Early disease detection", "Personalized health report"],
    link: "/body-checkup",
    linkLabel: "Book Check-Up",
  },
  {
    icon: Stethoscope,
    title: "Nutraceutical Health Consultation",
    desc: "One-on-one consultations with our experienced naturopathic doctors who recommend nutraceutical medicines tailored to your health needs.",
    features: ["Personalized assessment", "Product recommendations", "Follow-up guidance", "Dietary advice"],
    link: "/appointments",
    linkLabel: "Book Consultation",
  },
  {
    icon: Leaf,
    title: "Wellness Guidance",
    desc: "Holistic wellness programs including immune support, weight management, digestive reset, and energy enhancement using natural nutraceutical protocols.",
    features: ["Custom wellness plans", "Lifestyle coaching", "Immune support programs", "Ongoing monitoring"],
    link: "/appointments",
    linkLabel: "Get Started",
  },
  {
    icon: Sprout,
    title: "Agricultural Nutrient Solutions",
    desc: "Expert farming consultation and organic fertilizer solutions with NeutricPlant to improve soil health, crop yield, and sustainable farming practices.",
    features: ["Soil health analysis", "NeutricPlant fertilizer", "Crop-specific guidance", "Yield improvement plans"],
    link: "/fertilizer",
    linkLabel: "Explore Solutions",
  },
];

const carePackages = [
  { name: "Bone & Joints Health Care", icon: Bone, desc: "Strengthen your bones and support joint mobility with essential nutrients." },
  { name: "Detox Care Package", icon: Leaf, desc: "Cleanse your body from toxins and promote natural metabolic health." },
  { name: "Brain Care Package", icon: Brain, desc: "Enhance cognitive function, memory, and overall neurological wellness." },
  { name: "Digestive Care Package", icon: Activity, desc: "Improve gut health, digestion, and nutrient absorption effectively." },
  { name: "Cancer Care Package", icon: ShieldAlert, desc: "Specialized nutritional support tailored for holistic care and recovery." },
  { name: "Immune Care Package", icon: ShieldCheck, desc: "Boost your body's natural defenses against infections and diseases." },
  { name: "Children Care Package", icon: Baby, desc: "Essential vitamins and minerals for optimal childhood growth." },
  { name: "Respiratory Care Package", icon: Wind, desc: "Support lung health and clear breathing with natural formulations." },
  { name: "Female Care Package", icon: Flower2, desc: "Comprehensive support for women's hormonal balance and vitality." },
  { name: "Male Care Package", icon: Zap, desc: "Targeted nutrition for men's stamina, energy, and prostate health." },
  { name: "Circulatory Care Package", icon: HeartPulse, desc: "Promote healthy blood flow and cardiovascular function." },
  { name: "Anti-COVID Care Package", icon: ShieldPlus, desc: "Advanced immune boosting protocols for respiratory protection." },
  { name: "Eye Care Package", icon: Eye, desc: "Protect vision and maintain healthy eyes with vital antioxidants." },
  { name: "Nutrition Care Package", icon: Apple, desc: "Complete daily nutritional support for balanced overall health." },
  { name: "Anti Parasite Care Package", icon: BugOff, desc: "Natural defense protocols against internal parasites and pathogens." },
  { name: "Skin Care Package", icon: Sparkles, desc: "Nourish your skin from within for a radiant and healthy glow." },
  { name: "Slimming Care Package", icon: Scale, desc: "Support healthy weight management and natural fat burning." }
];

const Services = () => (
  <div>
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 font-display text-4xl font-bold text-foreground">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Comprehensive health and wellness services designed to support your journey to better living.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((svc, i) => (
            <div key={i} className="rounded-xl border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <svc.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-card-foreground">{svc.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              <ul className="mb-6 space-y-2">
                {svc.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link to={svc.link}>
                <Button className="bg-primary text-primary-foreground">
                  {svc.linkLabel} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Health Care Programs</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
          Explore our comprehensive range of specialized health care packages designed to address specific wellness needs using the best of nature and science.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-left">
          {carePackages.map((pkg, i) => (
            <div key={i} className="group relative flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <pkg.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">
                {pkg.name}
              </h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                {pkg.desc}
              </p>
              <div className="mt-auto">
                <Link to="/appointments">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Consult Doctor
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
