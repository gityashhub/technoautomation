import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="min-h-[80vh] flex items-center justify-center pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative mb-8">
              <h1 className="font-display text-[150px] md:text-[200px] leading-none text-foreground/5">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">
                    Page Not Found
                  </p>
                  <h2 className="text-display-md">OOPS!</h2>
                </div>
              </div>
            </div>

            <p className="text-foreground/70 text-lg mb-8 font-body">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/"><Home className="w-4 h-4 mr-2" />Back to Home</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact"><ArrowLeft className="w-4 h-4 mr-2" />Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
