import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  Sprout, Leaf, Droplets, Sun, TreePine, ArrowRight,
  CheckCircle, Star, ShoppingCart
} from "lucide-react";
import { toast } from "sonner";

const crops = [
  { name: "Maize", icon: "🌽" },
  { name: "Tomatoes", icon: "🍅" },
  { name: "Vegetables", icon: "🥬" },
  { name: "Coffee", icon: "☕" },
  { name: "Tea", icon: "🍵" },
  { name: "Horticulture", icon: "🌺" },
];

const applicationSteps = [
  { step: "1", title: "Soil Preparation", desc: "Clear weeds and loosen the top 15cm of soil before application." },
  { step: "2", title: "Proper Mixing", desc: "Apply 250g per square meter and mix thoroughly into the topsoil." },
  { step: "3", title: "Application Timing", desc: "Apply 1–2 weeks before planting or as top dressing during growth." },
  { step: "4", title: "Watering", desc: "Water the soil after application to activate the nutrients." },
];

const benefits = [
  { icon: Sprout, title: "Improves Soil Fertility", desc: "Enriches soil with beneficial microorganisms and natural nutrients." },
  { icon: TreePine, title: "Increases Crop Yield", desc: "Proven to improve harvest by up to 40% in field trials." },
  { icon: Leaf, title: "Strengthens Plant Roots", desc: "Mycorrhizal fungi boost root development and nutrient uptake." },
  { icon: Sun, title: "Supports Organic Farming", desc: "100% organic and compliant with sustainable farming standards." },
];

const farmerTestimonials = [
  { name: "Joseph Kamau", crop: "Maize", location: "Nakuru", story: "My maize harvest doubled after using NeutricPlant. I used to get 8 bags per acre, now I consistently get 16 bags.", rating: 5 },
  { name: "Mary Wanjiku", crop: "Tomatoes", location: "Kiambu", story: "My tomatoes grew faster and healthier. The fruit size increased and I got better prices at the market.", rating: 5 },
  { name: "David Ochieng", crop: "Vegetables", location: "Kisumu", story: "I switched from chemical fertilizers to NeutricPlant. My kale and spinach are greener and customers love the taste.", rating: 5 },
  { name: "Agnes Chebet", crop: "Tea", location: "Kericho", story: "NeutricPlant improved my tea bush health significantly. New shoots are stronger and more plentiful each season.", rating: 4 },
];

const Fertilizer = () => {
  const neutricPlant = products.find((p) => p.id === "p13");
  const certificateImage = "/products/Neutrica fertilizer licence or certificate.png";
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (neutricPlant) {
      addItem(neutricPlant);
      toast.success("NeutricPlant added to cart!");
    }
  };

  return (
    <div>
      {/* Hero / Product Showcase */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                🌱 Green World Agriculture
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                NeutricPlant <span className="text-primary">Organic Fertilizer</span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                {neutricPlant?.description || "Premium organic fertilizer designed to improve crop yield, enhance soil fertility, and support sustainable farming practices across Kenya."}
              </p>
              {neutricPlant && (
                <p className="mb-6 text-3xl font-bold text-primary">
                  KSh {neutricPlant.price.toLocaleString()}
                </p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-primary text-primary-foreground text-base px-8" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
                </Button>
                <Link to="/book-appointment">
                  <Button size="lg" variant="outline" className="text-base px-8">
                    <Droplets className="mr-2 h-5 w-5" /> Request Farm Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={neutricPlant?.image || "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=500&fit=crop"}
                alt="NeutricPlant Organic Fertilizer"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crop Compatibility */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Crop Compatibility</h2>
          <p className="mb-8 text-center text-muted-foreground">NeutricPlant works with all major crops grown in Kenya</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {crops.map((c) => (
              <div key={c.name} className="flex flex-col items-center rounded-xl border bg-card p-6 text-center shadow-card">
                <span className="mb-2 text-4xl">{c.icon}</span>
                <p className="font-medium text-card-foreground">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Method */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">How to Apply</h2>
          <p className="mb-8 text-center text-muted-foreground">Simple steps for maximum results</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((s) => (
              <div key={s.step} className="rounded-xl border bg-card p-6 shadow-card">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {s.step}
                </div>
                <h3 className="mb-2 font-display font-semibold text-card-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground">Why NeutricPlant?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display font-semibold text-card-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Legitimacy */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="rounded-2xl overflow-hidden shadow-xl border bg-card p-2">
              <img
                src={certificateImage}
                alt="NutriPlant Fertilizer Licence/Certificate"
                className="h-auto w-full object-contain"
              />
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Legitimacy & Certification</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                NutriPlant Organic Plus Fertilizer is fully licensed and approved by the <strong>Kenya Plant Health Inspectorate Service (KEPHIS)</strong> for commercialization in Kenya.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our certificate confirms that our product meets all national standards for legumes, maize, and solanacea, ensuring safety and efficacy for Kenyan farmers.
              </p>
              <div className="flex items-center gap-3 text-primary font-medium">
                <CheckCircle className="h-5 w-5" />
                <span>KEPHIS Approved</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-primary font-medium">
                <CheckCircle className="h-5 w-5" />
                <span>Ministry of Agriculture Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Technical Information</h2>
          <p className="mb-8 text-center text-muted-foreground">Detailed scientific breakdown of NeutricPlant Fertilizer</p>
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="formula" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 h-auto gap-2 bg-transparent p-0">
                <TabsTrigger value="formula" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border bg-card py-3 rounded-lg shadow-sm whitespace-normal h-auto">Formula</TabsTrigger>
                <TabsTrigger value="specs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border bg-card py-3 rounded-lg shadow-sm whitespace-normal h-auto">Specifications</TabsTrigger>
                <TabsTrigger value="report" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border bg-card py-3 rounded-lg shadow-sm whitespace-normal h-auto">Analytical Report</TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border bg-card py-3 rounded-lg shadow-sm whitespace-normal h-auto">Features</TabsTrigger>
                <TabsTrigger value="amino" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border bg-card py-3 rounded-lg shadow-sm whitespace-normal h-auto">Amino Acids</TabsTrigger>
              </TabsList>
              <div className="rounded-xl border bg-card p-6 md:p-8 shadow-card">
                <TabsContent value="formula" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                  <h3 className="font-display text-xl font-bold text-card-foreground">Fertilizer Formula</h3>
                  <p className="text-muted-foreground leading-relaxed">Advanced organic formulation combining essential macronutrients and micronutrients tailored for optimal soil health. Enriched with live microbial cultures that synergistically break down organic matter and release bound nutrients.</p>
                </TabsContent>
                <TabsContent value="specs" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                  <h3 className="font-display text-xl font-bold text-card-foreground">Specifications Composition</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Nitrogen (N) - 5%</li>
                    <li>Phosphorus (P2O5) - 3%</li>
                    <li>Potassium (K2O) - 4%</li>
                    <li>Organic Matter - &gt;60%</li>
                    <li>Moisture Content - &lt;15%</li>
                    <li>pH Value - 6.5 - 7.5</li>
                  </ul>
                </TabsContent>
                <TabsContent value="report" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                  <h3 className="font-display text-xl font-bold text-card-foreground">Analytical Report</h3>
                  <p className="text-muted-foreground leading-relaxed">Laboratory testing confirms the absence of heavy metals (Lead, Cadmium, Mercury are within safe limits). High microbial count of Bacillus subtilis and Trichoderma species verified at 1x10^8 CFU/g.</p>
                </TabsContent>
                <TabsContent value="features" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                  <h3 className="font-display text-xl font-bold text-card-foreground">Unique Product Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Improves soil structure and water retention capacity.</li>
                    <li>Enhances plant resistance to drought, cold, and diseases.</li>
                    <li>Slow-release mechanism prevents nutrient leaching.</li>
                    <li>Completely safe for the environment and non-toxic to bees and earthworms.</li>
                  </ul>
                </TabsContent>
                <TabsContent value="amino" className="mt-0 space-y-4 focus-visible:outline-none focus-visible:ring-0">
                  <h3 className="font-display text-xl font-bold text-card-foreground">Importance of Amino Acids</h3>
                  <p className="text-muted-foreground leading-relaxed">Amino acids are the building blocks of proteins. In NeutricPlant, they act as natural chelating agents, making micronutrients readily available to the roots. They also stimulate plant metabolism, increase chlorophyll synthesis, and facilitate rapid recovery from environmental stress.</p>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Farmer Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Farmer Success Stories</h2>
          <p className="mb-8 text-center text-muted-foreground">Real results from real Kenyan farmers</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {farmerTestimonials.map((t, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-3 text-sm text-muted-foreground italic">"{t.story}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    {t.crop}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground">Ready to Transform Your Farm?</h2>
          <p className="mb-6 text-primary-foreground/80">Join thousands of farmers who trust NeutricPlant for better harvests.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8" onClick={handleAddToCart}>
              Buy NeutricPlant Now
            </Button>
            <Link to="/branches">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Find Nearest Branch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fertilizer;
