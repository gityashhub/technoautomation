import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import autoImage from "@/assets/auto.png";
import heroHome from "@/assets/hero-home.jpg";

const timeline = [
  {
    step: "01",
    title: "Concept",
    description: "We begin by understanding your vision, lifestyle, and requirements through detailed consultations.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our experts create custom blueprints and system designs tailored to your space and needs.",
  },
  {
    step: "03",
    title: "Installation",
    description: "Professional installation by certified technicians ensuring seamless integration.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorous testing of all systems to ensure flawless performance and reliability.",
  },
  {
    step: "05",
    title: "Maintenance",
    description: "Ongoing support and maintenance to keep your smart systems running perfectly.",
  },
];

const values = [
  {
    title: "Client-First Approach",
    description: "Your satisfaction is our top priority. We work closely with you at every step.",
  },
  {
    title: "Excellence in Quality",
    description: "We use only premium products and maintain the highest installation standards.",
  },
  {
    title: "Punctuality & Reliability",
    description: "We respect your time with punctual meetings and timely project completion.",
  },
  {
    title: "Budget Respect",
    description: "We never force a budget. Your budget defines the scale and creativity of your project.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32">
        <div
          className="absolute inset-0"
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
              About Us
            </p>
            <h1 className="text-display-xl animate-fade-up opacity-0-initial delay-100">
              OUR STORY
            </h1>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl animate-fade-up opacity-0-initial delay-200 font-body font-light">
              Building the future of intelligent living since 2018
            </p>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main About Content */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <div>
                <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-body">
                  Est. 2018
                </p>
                <h2 className="text-display-lg">
                  HELLO!
                </h2>
              </div>

              <div className="h-px w-24 bg-primary" />

              <p className="text-foreground/80 text-xl leading-relaxed font-body font-light">
                The Techknow Automations believes that your space is more than just four walls & a ceiling.
              </p>

              <p className="text-foreground/60 leading-relaxed font-body">
                It can be your working, shopping, travelling, learning, breathing and finally a living space. A shrine where your journey unfolds & evolves. It is the place which accommodates all your moods for every occasion.
              </p>

              <p className="text-foreground/60 leading-relaxed font-body">
                We help adapt your place to the rhythm of your life. We provide ingeniously designed services to enhance every single facet of your life.
              </p>

              <div className="glass-card p-8 mt-8 hover-shine">
                <h3 className="font-display text-2xl tracking-wider mb-4">Our Code of Ethics</h3>
                <p className="text-foreground/70 font-body">
                  We have an immaculate track record with our clients - be it punctuality for client meetings, timeliness in project completion, reliability in servicing, excellence in product quality & presenting achievable project milestones.
                </p>
              </div>
            </div>

            {/* Right - Values */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl tracking-wider mb-8">
                WHY <span className="text-primary">CHOOSE US</span>
              </h3>

              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="float-card p-6 hover-shine group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl tracking-wider mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm font-body">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Section */}
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

        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-body">
              Our Philosophy
            </p>
            <h2 className="text-display-lg">
              YOUR BUDGET,<br />
              <span className="text-primary">OUR CREATIVITY</span>
            </h2>
            <div className="flex justify-center my-8">
              <div className="accent-line" />
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed font-body font-light">
              Coming from very humble origins and building a business from scratch with little support, we understand the importance of money. We respect your budget and NEVER force a budget on to you. Your budget defines the scale & creativity of your project.
            </p>
            <p className="mt-6 text-foreground/60 leading-relaxed font-body">
              At The Techknow Automations, we passionately work on latest technologies of modern living and provide those solutions to our clients as per their requisites.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-body">
              Our Process
            </p>
            <h2 className="text-display-lg">
              HOW WE <span className="text-primary">WORK</span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="accent-line" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="float-card p-6 hover-lift">
                    <p className="text-primary font-display text-4xl mb-2">{item.step}</p>
                    <h3 className="font-display text-2xl tracking-wider mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-body">{item.description}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-card border-y border-border/30">
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-20" />

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-display-lg">
            READY TO START YOUR <span className="text-primary">PROJECT?</span>
          </h2>
          <p className="mt-6 text-foreground/70 text-lg max-w-2xl mx-auto font-body font-light">
            Let's discuss how we can transform your space into an intelligent living environment.
          </p>
          <div className="mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
