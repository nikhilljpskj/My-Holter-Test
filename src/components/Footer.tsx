import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, reportAccessUrl } from "@/data/site";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Services", href: "/services" },
  { label: "Book Test", href: "/book" },
  { label: "Patient Access", href: "/patient-access" },
  { label: "Holter Guide", href: "/blog/what-is-holter-monitoring" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img
            src="/myholtertest.svg"
            alt="Heart rhythm monitoring device"
            className="footer-logo"
            loading="lazy"
          />
          <p>
            Premium Holter monitoring, ECG monitoring services, and remote
            patient monitoring support for hospitals, doctors, and patients.
          </p>
        </div>

        <div>
          <h3>Company</h3>
          <div className="footer-links">
            {companyLinks.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Services</h3>
          <div className="footer-links">
            {serviceLinks.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={reportAccessUrl} target="_blank" rel="noreferrer">
              Report System
            </a>
            {legalLinks.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-contact">
            <a href={contact.phoneHref}>
              <Phone size={17} /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={17} /> {contact.email}
            </a>
            <span>
              <MapPin size={17} /> Serving {contact.area}
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} My Holter Test. All rights reserved.</span>
        <span>Distributed by {contact.company}</span>
      </div>
    </footer>
  );
}
