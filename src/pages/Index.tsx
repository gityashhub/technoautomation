import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroHome from "@/assets/hero-home.jpg";
import heroAutomation from "@/assets/hero-automation.jpg";
import heroAudiovisual from "@/assets/hero-audiovisual.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroVideo from "@/assets/video.mp4";
import heroVideo2 from "@/assets/video2.mp4";
import autoImage from "@/assets/auto.png";

const solutions = [
  {
    title: "Home Automation",
    subtitle: "Intelligent Living",
    description: "Control your lighting, climate, media and more with a single touch or voice command.",
    image: heroAutomation,
    services: ["Lighting Control", "Climate Control", "Media Integration", "Motorized Curtains", "Gate Automation"],
  },
  {
    title: "Audio Visual",
    subtitle: "Immersive Experience",
    description: "Transform your space with cinema-quality sound and visuals.",
    image: heroAudiovisual,
    services: ["Home Theater", "Multiroom Audio", "Commercial AV", "Outdoor Speakers", "Soundbars"],
  },
  {
    title: "Security Systems",
    subtitle: "Peace of Mind",
    description: "Protect what matters most with intelligent surveillance and access control.",
    image: heroSecurity,
    services: ["CCTV Surveillance", "Intrusion Alarms", "Video Door Phones", "Digital Door Locks"],
  },
];

const stats = [
  { value: "2018", label: "Established" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

const heroImages = [heroHome, heroAutomation, heroAudiovisual, heroSecurity];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Overlays */}
        <div className="image-overlay" />
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-50" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 hidden lg:block">
          <div className="vertical-text text-xs tracking-[0.4em] text-muted-foreground">
            LUXURY AUTOMATION
          </div>
        </div>
        <div className="absolute bottom-1/4 right-8 hidden lg:block">
          <div className="vertical-text text-xs tracking-[0.4em] text-muted-foreground">
            EST. 2018
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center">
          <div className="max-w-5xl w-full">
            {/* Accent Line */}
            <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up opacity-0-initial">
              <div className="accent-line" />
            </div>

            {/* Tagline */}
            <p className="bg-primary text-white px-3 py-1 inline-block tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-up opacity-0-initial delay-100 font-body font-bold">
              We Automate
            </p>

            {/* Main Heading */}
            <h1 className="text-display-xl animate-fade-up opacity-0-initial delay-200 px-4">
              YOUR HOME
            </h1>

            {/* Subheading */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto animate-fade-up opacity-0-initial delay-300 font-body font-light px-4">
              Luxury Automation • Audio Visual • Security • Smart Living
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-up opacity-0-initial delay-400 px-4">
              <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up opacity-0-initial delay-500">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up opacity-0-initial hover-lift cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-3xl sm:text-4xl md:text-5xl text-primary text-glow">
                  {stat.value}
                </p>
                <p className="mt-2 text-muted-foreground text-xs sm:text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-8 font-body animate-fade-up">
            The Future of Living
          </p>
          <h2 className="text-display-xl text-white mb-12 animate-fade-up delay-100">
            EXPERIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">AURA</span>
          </h2>
          <Button variant="hero" size="xl" className="group hover-shine" asChild>
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Decorative Borders */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/50 rounded-tl-3xl" />
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/50 rounded-br-3xl" />
      </section>

      {/* About Preview */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-20" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-body">
                  About Us
                </p>
                <h2 className="text-display-lg">
                  YOUR BUDGET,<br />
                  <span className="text-primary">OUR CREATIVITY</span>
                </h2>
              </div>

              <div className="h-px w-24 bg-primary" />

              <p className="text-foreground/70 text-lg leading-relaxed font-body font-light">
                We are Home technology integrators that specialise in the custom designing of Home automation, Audio-visual services and Security services. We design fully integrated services based on your needs.
              </p>

              <p className="text-foreground/60 leading-relaxed font-body">
                From brainstorming to blueprinting, installing to initiating, testing to troubleshooting — We are here to design your world and we like to do it perfectly.
              </p>

              <Button variant="minimal" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="float-card aspect-square overflow-hidden hover-shine group">
                    <img
                      src={heroAutomation}
                      alt="Smart Home Control"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="float-card aspect-[4/3] overflow-hidden">
                    <img
                      src={heroSecurity}
                      alt="Security Systems"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="float-card aspect-[4/3] overflow-hidden">
                    <img
                      src={heroAudiovisual}
                      alt="Home Theater"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="glass-card p-6 text-center">
                    <p className="font-display text-5xl text-primary">6+</p>
                    <p className="text-muted-foreground text-sm mt-2">Years of Excellence</p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-body animate-fade-up">
              Our Services
            </p>
            <h2 className="text-display-lg">
              WHAT WE <span className="text-primary">OFFER</span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="accent-line" />
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-lg aspect-[16/10] group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                    {/* Floating Label */}
                    <div className="absolute bottom-6 left-6">
                      <p className="font-display text-6xl text-foreground/10">
                        0{index + 1}
                      </p>
                    </div>
                  </div>

                  {/* Decorative */}
                  <div className={`absolute -z-10 w-full h-full bg-primary/10 top-4 ${index % 2 === 0 ? "left-4" : "-left-4"
                    }`} />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <div>
                    <p className="text-primary tracking-[0.2em] uppercase text-sm mb-2 font-body">
                      {solution.subtitle}
                    </p>
                    <h3 className="text-display-md">{solution.title}</h3>
                  </div>

                  <div className={`h-px w-16 bg-primary ${index % 2 === 1 ? "ml-auto" : ""}`} />

                  <p className="text-foreground/70 text-lg font-body font-light">
                    {solution.description}
                  </p>

                  <ul className={`space-y-2 ${index % 2 === 1 ? "text-right" : ""}`}>
                    {solution.services.map((service) => (
                      <li
                        key={service}
                        className={`flex items-center gap-3 text-muted-foreground ${index % 2 === 1 ? "flex-row-reverse" : ""
                          }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Button variant="minimal" size="lg" asChild>
                    <Link to="/services" className={index % 2 === 1 ? "justify-end" : ""}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-20">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroHome})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="image-overlay-strong" />
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-40" />

        <div className="relative container mx-auto px-6 text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-body">
            Ready to Transform Your Space?
          </p>
          <h2 className="text-display-lg max-w-4xl mx-auto">
            LET'S DESIGN YOUR <span className="text-primary">SMART SPACE</span>
          </h2>
          <p className="mt-6 text-foreground/70 text-lg max-w-2xl mx-auto font-body font-light">
            From concept to completion, we create bespoke automation solutions tailored to your lifestyle.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919725724010">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
