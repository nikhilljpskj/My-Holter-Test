import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, navItems, reportAccessUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/myholtertest.svg" alt="My Holter Test" className="footer-logo" />
          <p>
            Premium Holter monitoring, ECG monitoring services, and remote
            patient monitoring support for hospitals, doctors, and patients.
          </p>
        </div>

        <div>
          <h3>Pages</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={reportAccessUrl} target="_blank" rel="noreferrer">
              Report System
            </a>
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
