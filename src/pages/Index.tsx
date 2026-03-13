import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";
import { branches } from "@/data/branches";
import { ProductCard } from "@/components/ProductCard";
import { DoctorCard } from "@/components/DoctorCard";
import {
  Leaf, Shield, Heart, Sprout, Star, ArrowRight,
  Stethoscope, ChevronRight, MapPin, Phone,
  BookOpen, Users, Award, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80",
    title: "Natural Wellness for a Better Life",
    subtitle: "Trusted nutraceutical solutions for your health journey",
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&q=80",
    title: "Nutraceutical Science Meets Nature",
    subtitle: "Traditional Chinese Medicine principles combined with modern research",
  },
  {
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80",
    title: "Supporting Healthy Living Globally",
    subtitle: "From Kenya to the world — natural health for every community",
  },
];

const healthPrograms = [
  { title: "Immune Defense Program", desc: "Strengthen your body's natural defenses with our curated nutraceutical protocol.", icon: Shield },
  { title: "Digestive Reset Program", desc: "A 30-day gut cleanse and restoration plan with nutraceutical teas and supplements.", icon: Heart },
  { title: "Weight Wellness Journey", desc: "Natural metabolism boosters paired with nutritional guidance.", icon: Award },
  { title: "Energy & Vitality Boost", desc: "Combat fatigue with adaptogenic herbs and ginseng-based formulations.", icon: Sprout },
];

const blogTips = [
  { title: "5 Herbs That Naturally Boost Immunity", excerpt: "Discover powerful herbs like Cordyceps and Ganoderma that support immune health without side effects.", date: "Mar 3, 2026" },
  { title: "Why Organic Fertilizers Outperform Chemical Ones", excerpt: "Learn how organic inputs improve soil health, crop quality, and long-term farm sustainability.", date: "Feb 28, 2026" },
  { title: "Managing Blood Sugar Naturally", excerpt: "Traditional nutraceutical approaches to blood sugar management that complement modern medicine.", date: "Feb 20, 2026" },
];

const Index = () => {
  const featured = products.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === i ? 1 : 0 }}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
          </div>
        ))}
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl">
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  opacity: currentSlide === i ? 1 : 0,
                  transform: currentSlide === i ? "translateY(0)" : "translateY(20px)",
                  pointerEvents: currentSlide === i ? "auto" : "none",
                }}
              >
                <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="text-lg text-primary-foreground/80 md:text-xl">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Pure nutraceutical ingredients with no chemicals" },
              { icon: Shield, title: "Certified Safe", desc: "Quality tested and approved for use" },
              { icon: Heart, title: "Health First", desc: "Doctor-guided wellness programs" },
              { icon: Sprout, title: "Farm Solutions", desc: "Organic inputs for better yields" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center rounded-xl border bg-card p-6 text-center shadow-card">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">About Green World</h2>
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
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center"><p className="text-2xl font-bold text-primary">50K+</p><p className="text-xs text-muted-foreground">Customers</p></div>
                <div className="text-center"><p className="text-2xl font-bold text-primary">200+</p><p className="text-xs text-muted-foreground">Products</p></div>
                <div className="text-center"><p className="text-2xl font-bold text-primary">6</p><p className="text-xs text-muted-foreground">Branches</p></div>
              </div>
              <Link to="/about" className="mt-4 inline-block">
                <Button variant="outline" size="sm">Learn More About Us <ArrowRight className="ml-1 h-3 w-3" /></Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop" alt="Green World nutraceutical products" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nutraceutical Medicine Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Our Nutraceutical Medicine Philosophy</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            We believe that nature holds the key to lasting health. Our products combine Traditional Chinese Medicine wisdom with modern science to deliver safe, effective, and sustainable health solutions.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Traditional Wisdom", desc: "Formulations rooted in centuries of TCM knowledge and natural medicine from Asia and Africa." },
              { title: "Scientific Validation", desc: "Every product undergoes rigorous testing and quality assurance before reaching you." },
              { title: "Sustainable Sourcing", desc: "We source ingredients responsibly, supporting local farmers and ecosystems." },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-card">
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-display font-semibold text-card-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Featured Products</h2>
              <p className="mt-1 text-muted-foreground">Our most popular nutraceutical solutions</p>
            </div>
            <Link to="/products">
              <Button variant="ghost" className="text-primary">View All <ChevronRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Health Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground">Health Programs</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthPrograms.map((hp, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-card">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <hp.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 font-display font-semibold text-card-foreground">{hp.title}</h3>
                <p className="text-sm text-muted-foreground">{hp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">Nutraceutical Medicines</h3>
              <p className="mb-4 text-sm text-muted-foreground">Premium quality nutraceutical supplements and natural remedies for various health conditions.</p>
              <Link to="/products"><Button variant="outline" size="sm">Browse Products <ArrowRight className="ml-1 h-3 w-3" /></Button></Link>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                <Stethoscope className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">Doctor Consultations</h3>
              <p className="mb-4 text-sm text-muted-foreground">Book appointments with our experienced naturopathic doctors for personalized health guidance.</p>
              <Link to="/appointments"><Button variant="outline" size="sm">Book Now <ArrowRight className="ml-1 h-3 w-3" /></Button></Link>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10">
                <Heart className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">Full Body Check-Up</h3>
              <p className="mb-4 text-sm text-muted-foreground">Non-invasive health diagnostics using the Quantum Magnetic Analyzer for early detection.</p>
              <Link to="/body-checkup"><Button variant="outline" size="sm">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Button></Link>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Sprout className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">Agricultural Solutions</h3>
              <p className="mb-4 text-sm text-muted-foreground">Organic fertilizers and plant nutrient solutions for sustainable farming and higher yields.</p>
              <Link to="/fertilizer"><Button variant="outline" size="sm">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Meet Our Doctors</h2>
            <p className="mt-2 text-muted-foreground">Expert natural health practitioners</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="mb-8 text-center text-muted-foreground">Real recovery stories and health transformations</p>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.id} className="rounded-xl border bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-2 text-xs font-medium text-primary">{t.condition} → {t.product}</p>
                <p className="mb-4 text-sm text-muted-foreground italic">"{t.story}"</p>
                <div>
                  <p className="font-medium text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Health Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground">Health Tips & Blog</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogTips.map((b, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-card">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <p className="mb-1 text-xs text-muted-foreground">{b.date}</p>
                <h3 className="mb-2 font-display font-semibold text-card-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Our Branches</h2>
              <p className="mt-1 text-muted-foreground">Visit us across Kenya</p>
            </div>
            <Link to="/branches"><Button variant="ghost" className="text-primary">View All <ChevronRight className="ml-1 h-4 w-4" /></Button></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.slice(0, 3).map((b) => (
              <div key={b.id} className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground">{b.name}</h4>
                  <p className="text-sm text-muted-foreground">{b.address}, {b.city}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Phone className="h-3 w-3" />{b.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Contact Us</h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            Have questions about our products or services? Reach out to us — we're here to help you on your natural health journey.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="tel:+254700123456"><Button variant="outline" size="lg"><Phone className="mr-2 h-4 w-4" />Call Us</Button></a>
            <a href="mailto:info@greenworld.co.ke"><Button variant="outline" size="lg"><Users className="mr-2 h-4 w-4" />Email Us</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
