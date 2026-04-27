import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { FAQSection } from "@/components/FAQSection";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import {
  features,
  services,
  stats,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <SEO
        title="Holter Test Booking Online | 24/48 Hour ECG Monitoring Services"
        description="Book Holter test online with advanced cardiac monitoring services. 24-hour and 48-hour ECG monitoring for accurate heart rhythm diagnosis at home or hospitals."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "My Holter Test",
          description: "Online Holter test booking and ECG monitoring services",
          medicalSpecialty: "Cardiology",
          areaServed: "India",
          availableService: {
            "@type": "MedicalTest",
            name: "Holter Monitoring",
            description:
              "24-48 hour ECG monitoring for detecting arrhythmias and heart rhythm issues",
          },
        }}
      />

      <section className="hero">
        <div
          className="hero-bg"
          role="img"
          aria-label="Patient wearing portable ECG Holter monitor"
        />
        <div className="container hero-content">
          <div className="hero-copy reveal">
            <p className="hero-kicker">
              <HeartPulse size={18} /> Advanced cardiac monitoring, made simpler
            </p>
            <h1>Advanced Holter Monitoring & ECG Test Booking Online</h1>
            <p>
              Accurate 24/48-hour cardiac monitoring services available at
              hospitals and home. Detect irregular heart rhythms with trusted
              Holter testing solutions.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/book" className="hero-primary-cta">
                <CalendarCheck2 size={18} /> Schedule a Holter Test
              </ButtonLink>
              <ButtonLink to="/services" variant="outline">
                Explore Services <ArrowRight size={18} />
              </ButtonLink>
            </div>
            <div className="trust-row">
              <span>
                <CheckCircle2 size={17} /> 24-48 hour monitoring
              </span>
              <span>
                <CheckCircle2 size={17} /> Doorstep setup
              </span>
              <span>
                <CheckCircle2 size={17} /> Doctor-friendly reports
              </span>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="pulse-mark">
              <ShieldCheck size={28} />
            </div>
            <p>Trusted cardiac monitoring workflow</p>
            <div className="mini-stats">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Why My Holter Test"
        title="A cleaner path from symptoms to cardiac diagnostics"
        description="Designed for patients who need holter test booking online, ECG at home service options, and clinically useful heart rhythm monitoring without operational friction."
      >
        <div className="card-grid four">
          {features.map((feature) => (
            <article className="feature-card reveal" key={feature.title}>
              <feature.icon size={28} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Holter monitoring services built around real workflows"
        description="From 24 hour Holter test setup to report coordination, every ECG monitoring test step is structured for clarity, comfort, and arrhythmia detection support."
        className="section-muted"
      >
        <div className="card-grid two">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <service.icon size={30} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Local SEO"
        title="Holter test booking near you"
        description="Looking for Holter test booking near you? Our platform connects patients with trusted hospitals and diagnostic centers offering ECG monitoring services across major cities in India, including home-based cardiac monitoring options."
      >
        <div className="seo-copy-card reveal">
          <p>
            Patients searching for ECG test near me, affordable Holter test cost
            India, or 24 hour ECG monitoring at home can use My Holter Test to
            request support for cardiac diagnostics, ambulatory ECG monitoring,
            and ECG test for irregular heartbeat evaluation.
          </p>
          <ButtonLink to="/book">Book Holter Test Online</ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Trust indicators"
        title="Built for patients, physicians, and care teams"
        description="Soft-touch service, clinically relevant reporting, and rapid coordination across hospitals and diagnostic partners."
      >
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote className="testimonial-card reveal" key={item.name}>
              <p>"{item.quote}"</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <FAQSection />

      <Section
        eyebrow="Guides"
        title="Holter monitoring blog suggestions"
        description="Helpful education pages for patients comparing ECG monitoring, Holter monitoring, and cardiac monitoring options."
        className="section-muted"
      >
        <div className="card-grid three">
          {[
            {
              title: "What is Holter Monitoring?",
              href: "/blog/what-is-holter-monitoring",
              text: "Learn how wearable heart rhythm monitoring works over 24 to 48 hours.",
            },
            {
              title: "ECG vs Holter Test",
              href: "/blog/ecg-vs-holter-test",
              text: "Understand when a standard ECG is enough and when ambulatory ECG monitoring helps.",
            },
            {
              title: "When should you take a Holter test?",
              href: "/blog/when-should-you-take-a-holter-test",
              text: "Review common symptoms such as palpitations, dizziness, and irregular heartbeat.",
            },
          ].map((post) => (
            <article className="feature-card reveal" key={post.href}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <ButtonLink to={post.href} variant="outline">
                Read guide
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
