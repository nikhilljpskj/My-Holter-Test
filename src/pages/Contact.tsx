import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { cities, contact } from "@/data/site";

const methods = [
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Quick booking support",
    href: contact.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MapPin,
    label: "Coverage",
    value: contact.area,
    href: "#coverage",
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact My Holter Test to book Holter monitoring, discuss hospital partnerships, or get support for ECG monitoring services."
        path="/contact"
      />

      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">Contact</p>
          <h1>Book a test, ask about reports, or start a partnership.</h1>
          <p>
            Send a message and our team will help with Holter monitoring
            bookings, remote patient monitoring support, hospital onboarding, or
            general service questions.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-panel reveal">
            <h2>Direct contact</h2>
            <div className="contact-methods">
              {methods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <method.icon size={22} />
                  <span>
                    <strong>{method.label}</strong>
                    {method.value}
                  </span>
                </a>
              ))}
            </div>
            <div className="hours-box">
              <strong>Typical response window</strong>
              <p>Monday to Saturday, 9:00 AM to 6:00 PM.</p>
            </div>
          </aside>
        </div>
      </section>

      <Section
        eyebrow="Coverage"
        title="Service areas"
        description="We coordinate Holter testing and ECG monitoring services across major South Indian cities."
        className="section-muted"
      >
        <div id="coverage" className="city-grid">
          {cities.map((city) => (
            <span className="city-chip reveal" key={city}>
              {city}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
