import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Top accent bar */}
      <div className="h-1 bg-secondary" />
      
      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">
                  Holter Test
                </p>
                <p className="text-xs text-white/50">by Biocalculus</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              India's trusted doorstep Holter monitoring service. Partnered with
              100+ hospitals and 300+ doctors across South India.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919447355775"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919447355775"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@redeemertechnologies.com"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/holter-test", label: "What is Holter Test?" },
                { href: "/doorstep-test", label: "Doorstep Test" },
                { href: "/hospital-collaboration", label: "For Hospitals" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                "24-Hour Holter Monitoring",
                "48-Hour Extended Monitoring",
                "Home Enrollment",
                "Hospital Partnerships",
                "Doctor Referral Program",
                "Technician Visit",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-white/50">Call Us</p>
                  <a
                    href="tel:+919447355775"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    +91 94473 55775
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <a
                    href="mailto:info@redeemertechnologies.com"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    info@redeemertechnologies.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-white/50">Service Area</p>
                  <p className="text-sm font-medium">
                    South India
                    <br />
                    (TN, KA, AP, TS, KL)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <span>Distributed by</span>
              <span className="font-medium text-white/80">
                Redeemer Technologies
              </span>
              <span>|</span>
              <span>Billing Entity:</span>
              <span className="font-medium text-white/80">
                Daya Life Science
              </span>
            </div>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Holter Test. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}