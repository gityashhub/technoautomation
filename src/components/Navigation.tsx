import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/30 transition-transform duration-300 ${isScrolled ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:+919725724010" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91-9725724010</span>
            </a>
            <a href="mailto:thetechknowautomation@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span>thetechknowautomation@gmail.com</span>
            </a>
          </div>
          <div className="text-muted-foreground">
            <span>Est. 2018 | Vadodara, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? "top-0 lg:top-0 bg-background/95 backdrop-blur-xl border-b border-border/30 py-3"
          : "top-0 lg:top-9 bg-background/80 backdrop-blur-md py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Techknow Automation"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-3xl tracking-wider text-foreground">TECHKNOW</h1>
              <p className="text-sm tracking-[0.3em] text-primary uppercase">Automations</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group font-display text-lg tracking-wider transition-colors duration-300 ${location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-background/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-6">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-display text-4xl tracking-wider transition-all duration-500 ${isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                } ${location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={`mt-8 transition-all duration-500 ${isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Contact Info */}
          <div
            className={`mt-8 flex flex-col items-center gap-4 text-muted-foreground transition-all duration-500 ${isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <a href="tel:+919725724010" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91-9725724010</span>
            </a>
            <a href="mailto:thetechknowautomation@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>thetechknowautomation@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
