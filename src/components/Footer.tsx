import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/30">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial-primary opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Techknow Automation" className="h-14 w-auto" />
              <div>
                <h3 className="font-display text-2xl tracking-wider text-foreground">TECHKNOW</h3>
                <p className="text-xs tracking-[0.3em] text-primary uppercase">Automations</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Home technology integrators specializing in custom designing of Home Automation, Audio-Visual and Security solutions since 2018.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/thetechknowautomations"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-xl tracking-wider text-foreground">Quick Links</h4>
            <div className="h-px w-12 bg-primary" />
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Solutions", path: "/solutions" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-xl tracking-wider text-foreground">Services</h4>
            <div className="h-px w-12 bg-primary" />
            <ul className="space-y-3">
              {[
                "Home Automation",
                "Audio Visual",
                "Security Systems",
                "Networking & Electrical",
                "Entrance Automation",
              ].map((solution) => (
                <li key={solution}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-xl tracking-wider text-foreground">Contact Us</h4>
            <div className="h-px w-12 bg-primary" />
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919725724010"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91-9725724010<br />+91-9173968695</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thetechknowautomation@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>thetechknowautomation@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  F-5, First Floor, Mahavir Chambers,<br />
                  Opp Ellora Milk Center, Ellorapark,<br />
                  Vadodara, 390023
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} The Techknow Automations. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Luxury Automation • Audio Visual • Security • Smart Living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
