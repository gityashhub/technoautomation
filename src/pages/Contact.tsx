import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroHome from "@/assets/hero-home.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroHome})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="image-overlay-strong" />
        <div className="absolute inset-0 bg-gradient-radial-primary opacity-40" />

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-primary tracking-[0.4em] uppercase text-sm mb-6 animate-fade-up opacity-0-initial font-body">
              Get in Touch
            </p>
            <h1 className="text-display-xl animate-fade-up opacity-0-initial delay-100">
              CONTACT US
            </h1>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl animate-fade-up opacity-0-initial delay-200 font-body font-light">
              Let's design your smart space together
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-display-md mb-4">
                  LET'S <span className="text-primary">CONNECT</span>
                </h2>
                <div className="h-px w-16 bg-primary" />
              </div>

              <p className="text-foreground/70 font-body">
                Ready to transform your space into an intelligent living environment? We'd love to hear from you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+919725724010"
                  className="float-card p-6 flex items-start gap-4 group hover-shine"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider mb-1">Phone</h3>
                    <p className="text-foreground/80">+91-9725724010</p>
                    <p className="text-muted-foreground text-sm">+91-9173968695</p>
                  </div>
                </a>

                <a
                  href="mailto:thetechknowautomation@gmail.com"
                  className="float-card p-6 flex items-start gap-4 group hover-shine"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider mb-1">Email</h3>
                    <p className="text-foreground/80 text-sm">thetechknowautomation@gmail.com</p>
                  </div>
                </a>

                <div className="float-card p-6 flex items-start gap-4 hover-shine group">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider mb-1">Address</h3>
                    <p className="text-foreground/80 text-sm">
                      F-5, First Floor, Mahavir Chambers,<br />
                      Opp Ellora Milk Center, Ellorapark,<br />
                      Vadodara, Gujarat - 390023
                    </p>
                  </div>
                </div>

                <div className="float-card p-6 flex items-start gap-4 hover-shine group">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider mb-1">Business Hours</h3>
                    <p className="text-foreground/80 text-sm">
                      Monday - Saturday<br />
                      10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild className="flex-1">
                  <a href="tel:+919725724010">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button variant="glassPrimary" size="lg" asChild className="flex-1">
                  <a
                    href="https://wa.me/919725724010?text=Hello! I'm interested in your automation services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card-strong p-8 md:p-10 hover-shine">
                <h3 className="font-display text-2xl tracking-wider mb-2">
                  SEND US A MESSAGE
                </h3>
                <p className="text-muted-foreground text-sm mb-8 font-body">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-foreground/80 font-body">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-foreground/80 font-body">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-foreground/80 font-body">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-XXXXXXXXXX"
                        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-foreground/80 font-body">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Home Automation Inquiry"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-foreground/80 font-body">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, and any specific questions you have..."
                      required
                      rows={6}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 bg-card border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-body">
              Visit Us
            </p>
            <h2 className="text-display-md">
              OUR <span className="text-primary">LOCATION</span>
            </h2>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px] glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0856878716657!2d73.16548731495!3d22.30999768531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b8df6b7a45%3A0x5c6c2c2c5c6c2c2c!2sEllora%20Park%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Techknow Automation Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-display-md">
            PREFER A <span className="text-primary">QUICK CALL?</span>
          </h2>
          <p className="mt-4 text-foreground/70 font-body">
            Our team is ready to discuss your project requirements.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+919725724010">
                <Phone className="w-5 h-5 mr-2" />
                +91-9725724010
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
