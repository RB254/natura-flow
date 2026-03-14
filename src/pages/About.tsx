import { Shield, Award, Globe, Leaf, CheckCircle, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const certifications = [
  { name: "FDA Certificate of Registration", type: "Global Health Standard", image: "/certificates/certificate_97.png" },
  { name: "United States Trademark: GREEN WORLD", type: "Brand Protection", image: "/certificates/certificate_100.png" },
  { name: "HACCP System Certification", type: "Food Safety Standard", image: "/certificates/certificate_103.png" },
  { name: "Halal Product Certificate", type: "Dietary Compliance", image: "/certificates/certificate_104.png" },
  { name: "ISO 9001:2015 Quality Management", type: "Quality Standard", image: "/certificates/certificate_105.png" },
  { name: "KEPHIS Fertilizer Commercialization Permit", type: "Agricultural Certification", image: "/products/Neutrica fertilizer licence or certificate.png" },
];

const milestones = [
  { year: "2000", event: "Green World Group founded with a mission to bring natural health solutions globally." },
  { year: "2010", event: "Expanded operations into Kenya, establishing the first East African branch." },
  { year: "2015", event: "Launched NeutricPlant organic fertilizer to support sustainable farming." },
  { year: "2020", event: "Reached 50,000+ customers across Kenya and established 6 branch offices." },
  { year: "2024", event: "Introduced digital health consultations and advanced Quantum Magnetic Analyzer diagnostics." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 font-display text-4xl font-bold text-foreground">About Green World</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A leading nutraceutical health company bringing natural wellness to Kenya and the world.
        </p>
      </div>
    </section>

    {/* Company Story */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Our Story</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Green World is a leading nutraceutical health company operating across Kenya and globally. We believe in the power of nature to cleanse, nourish, and sustain human health.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Our range of nutraceutical medicines is formulated using Traditional Chinese Medicine (TCM) principles combined with modern scientific research.
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              In addition to health solutions, we support farmers with organic agricultural inputs that promote sustainable farming and higher yields.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With branches across Kenya and a global network of expert doctors and scientists, Green World continues to bring natural wellness closer to every community.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop" alt="Green World products" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-8 shadow-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold text-card-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide safe, effective, and affordable nutraceutical health solutions that empower individuals and communities to achieve optimal wellness through the power of nature.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-8 shadow-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
              <Globe className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold text-card-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be Africa's most trusted nutraceutical health company, leading the integration of traditional medicine wisdom with modern scientific innovation for a healthier world.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Research Philosophy */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Nutraceutical Research Philosophy</h2>
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
          Our products are developed through a rigorous process that bridges Traditional Chinese Medicine with cutting-edge scientific research.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Natural Ingredients", desc: "Every formulation uses carefully selected natural ingredients sourced from trusted organic farms worldwide." },
            { icon: Shield, title: "Clinical Testing", desc: "All products undergo clinical trials and laboratory testing to ensure safety, efficacy, and quality." },
            { icon: Award, title: "Global Standards", desc: "Our manufacturing follows WHO GMP standards with ISO certification for consistent quality." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border bg-card p-6 shadow-card">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground">Our Journey</h2>
        <div className="mx-auto max-w-2xl space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {m.year.slice(2)}
                </div>
                {i < milestones.length - 1 && <div className="mt-1 h-full w-px bg-border" />}
              </div>
              <div className="pb-6">
                <p className="font-semibold text-card-foreground">{m.year}</p>
                <p className="text-sm text-muted-foreground">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Global Presence */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Global Presence</h2>
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
          Green World operates in over 20 countries worldwide with regional headquarters, research centers, and distribution networks spanning Africa, Asia, and beyond.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Globe, label: "20+ Countries", desc: "Global distribution network" },
            { icon: Users, label: "50,000+ Customers", desc: "Trusted across Kenya" },
            { icon: Award, label: "6 Branches", desc: "Across major Kenyan cities" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border bg-card p-6 shadow-card text-center">
              <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">Certifications & Licenses</h2>
        <p className="mb-10 text-center text-muted-foreground">
          Our commitment to quality is backed by international certifications and local regulatory approvals.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-card group">
              <div className="aspect-[4/3] w-full bg-muted overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col p-5">
                <h4 className="mb-1 font-display font-bold text-card-foreground leading-tight">{cert.name}</h4>
                <p className="text-sm text-primary font-medium">{cert.type}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          Certificate images will be uploaded and displayed here. Placeholders are shown for document names.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Experience Green World</h2>
        <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
          Explore our nutraceutical products, consult with our doctors, or visit a branch near you.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/products"><Button size="lg" className="bg-primary text-primary-foreground px-8">Browse Products</Button></Link>
          <Link to="/branches"><Button size="lg" variant="outline" className="px-8">Find a Branch</Button></Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
