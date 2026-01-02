import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Thermometer, Tv, Home, Speaker, Video, Shield, Lock, Camera, AlertTriangle, Network, Zap, DoorOpen, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroAutomation from "@/assets/hero-automation.jpg";
import heroAudiovisual from "@/assets/hero-audiovisual.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroNetworking from "@/assets/hero-networking.jpg";
import heroEntrance from "@/assets/hero-entrance.jpg";
import autoImage from "@/assets/auto.png";

const solutionCategories = [
  {
    id: "automation",
    title: "Home Automation",
    subtitle: "Intelligent Living",
    description: "Control your lighting, media and climate at home using your smartphone, physical keypads or by voice commands. Add elegance, mood, ambience, convenience and energy efficiency to your living space.",
    image: heroAutomation,
    services: [
      { icon: Lightbulb, name: "Lighting Control", desc: "Your home at your fingertips, control from anywhere in the world" },
      { icon: Thermometer, name: "Climate Control", desc: "Smart HVAC integration for optimal comfort" },
      { icon: Tv, name: "Media Control", desc: "Centralized control of all entertainment systems" },
      { icon: Home, name: "Motorized Curtains", desc: "Automated blinds and curtains for privacy and light control" },
      { icon: DoorOpen, name: "Motorized Gate", desc: "Smart gate automation with app control" },
    ],
  },
  {
    id: "audiovisual",
    title: "Audio Visual",
    subtitle: "Immersive Entertainment",
    description: "Improve your entertainment value in your living space with high-end Cinema Solutions as per your requisites with all controls in your hands.",
    image: heroAudiovisual,
    services: [
      { icon: Tv, name: "Home Theater", desc: "Premium cinema experience in your home" },
      { icon: Speaker, name: "Multiroom Audio", desc: "Access your music collection anywhere in your home" },
      { icon: Video, name: "Commercial AV", desc: "Professional audio-visual solutions for businesses" },
      { icon: Speaker, name: "Outdoor Speakers", desc: "Weather-resistant audio for outdoor spaces" },
      { icon: Speaker, name: "Soundbars & Dock Speakers", desc: "Premium audio accessories" },
    ],
  },
  {
    id: "security",
    title: "Security Systems",
    subtitle: "Complete Protection",
    description: "Monitor your home or building and deter crime by programmatically detecting suspicious activities and generating alerts before any incident takes place.",
    image: heroSecurity,
    services: [
      { icon: Camera, name: "CCTV Surveillance", desc: "Stay connected to your house even when you're away" },
      { icon: AlertTriangle, name: "Intrusion Alarm System", desc: "Advanced detection and alert systems" },
      { icon: Video, name: "Video Door Phone", desc: "Answer your doorbell through your smartphone" },
      { icon: Lock, name: "Digital Door Locks", desc: "Access using smartphone, fingerprint, passcode or RF tags" },
    ],
  },
  {
    id: "networking",
    title: "Networking & Electrical",
    subtitle: "Connected Infrastructure",
    description: "Robust networking infrastructure and electrical systems designed for modern smart homes and commercial spaces.",
    image: heroNetworking,
    services: [
      { icon: Network, name: "Network Design", desc: "Enterprise-grade networking for homes and businesses" },
      { icon: Zap, name: "Electrical Work", desc: "Professional electrical installations" },
      { icon: Lightbulb, name: "Lights & Switches", desc: "Premium switches and lighting solutions" },
      { icon: Cog, name: "System Integration", desc: "Seamless integration of all systems" },
    ],
  },
  {
    id: "entrance",
    title: "Entrance Automation",
    subtitle: "Secure Access",
    description: "Automated entrance solutions for residential and commercial properties, combining security with convenience.",
    image: heroEntrance,
    services: [
      { icon: DoorOpen, name: "Motorized Gate", desc: "Sliding and swing gate automation" },
      { icon: Shield, name: "Boom Barrier", desc: "Commercial parking and access control" },
      { icon: DoorOpen, name: "Roller Shutter", desc: "Automated roller shutters for security" },
      { icon: Lock, name: "Digital / EM Locks", desc: "Electromagnetic and digital locking systems" },
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(solutionCategories[0].id);
  const activeSolution = solutionCategories.find((cat) => cat.id === activeCategory) || solutionCategories[0];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage: `url(${autoImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="image-overlay-strong" />
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-40" />

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-primary tracking-[0.4em] uppercase text-sm mb-6 animate-fade-up opacity-0-initial font-body">
              Our Services
            </p>
            <h1 className="text-display-xl animate-fade-up opacity-0-initial delay-100">
              WHAT WE OFFER
            </h1>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl animate-fade-up opacity-0-initial delay-200 font-body font-light">
              Comprehensive automation, audio-visual, and security services for modern living
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 lg:top-24 z-20 bg-background/95 backdrop-blur-xl border-y border-border/30 py-4">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 md:gap-4 pb-2 scrollbar-hide">
            {solutionCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 md:px-6 py-3 font-display text-sm md:text-base tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Solution Detail */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          {/* Solution Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2 font-body">
                  {activeSolution.subtitle}
                </p>
                <h2 className="text-display-lg">{activeSolution.title}</h2>
              </div>
              <div className="h-px w-24 bg-primary" />
              <p className="text-foreground/70 text-lg font-body font-light leading-relaxed">
                {activeSolution.description}
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSolution.services.map((service, index) => (
              <div
                key={service.name}
                className="float-card p-8 group hover-shine"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl tracking-wider mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm font-body">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Solutions Overview */}
      <section className="relative py-32 bg-card border-y border-border/30">
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-10" />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-body">
              Complete Overview
            </p>
            <h2 className="text-display-lg">
              ALL <span className="text-primary">SERVICES</span>
            </h2>
          </div>

          <div className="space-y-16">
            {solutionCategories.map((category, catIndex) => (
              <div
                key={category.id}
                className={`grid lg:grid-cols-5 gap-8 items-center ${catIndex % 2 === 1 ? "" : ""
                  }`}
              >
                {/* Category Header */}
                <div className={`lg:col-span-2 ${catIndex % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-primary text-sm tracking-widest uppercase mb-1 font-body">
                        {category.subtitle}
                      </p>
                      <h3 className="font-display text-3xl tracking-wider">{category.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className={`lg:col-span-3 grid sm:grid-cols-2 gap-4 ${catIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground/80 text-sm font-body">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-display-lg">
            READY TO <span className="text-primary">TRANSFORM</span> YOUR SPACE?
          </h2>
          <p className="mt-6 text-foreground/70 text-lg max-w-2xl mx-auto font-body font-light">
            Contact us today for a personalized consultation and quote tailored to your needs.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919725724010">Call +91-9725724010</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
