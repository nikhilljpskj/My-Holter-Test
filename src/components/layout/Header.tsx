import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/holter-test", label: "Holter Test" },
  { href: "/doorstep-test", label: "Doorstep Test" },
  { href: "/hospital-collaboration", label: "For Hospitals" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/50 shadow-soft">
      <div className="container-wide">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-lg text-foreground leading-tight">
                  Holter Test
                </p>
                <p className="text-xs text-muted-foreground">
                  by Biocalculus
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919447355775">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call Us</span>
              </Button>
            </a>
            <a
              href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3 mt-4 pt-4 border-t border-border/50">
              <a href="tel:+919447355775" className="flex-1">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
              </a>
              <a
                href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="hero" className="w-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}