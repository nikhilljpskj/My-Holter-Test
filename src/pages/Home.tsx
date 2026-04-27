import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
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
        title="Holter Monitoring and Cardiac Diagnostics"
        description="Book premium Holter monitoring, ECG monitoring services, and remote patient monitoring support for heart rhythm diagnostics across South India."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalService",
          name: "My Holter Test",
          serviceType: "Holter monitoring",
          areaServed: "South India",
          provider: {
            "@type": "MedicalBusiness",
            name: "Redeemer Technologies",
          },
        }}
      />

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy reveal">
            <p className="hero-kicker">
              <HeartPulse size={18} /> Advanced cardiac monitoring, made simpler
            </p>
            <h1>Holter monitoring for clearer heart rhythm decisions.</h1>
            <p>
              My Holter Test helps patients, doctors, and hospitals arrange
              continuous ECG monitoring with professional setup, smooth report
              coordination, and dependable support across South India.
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
        title="A cleaner path from symptom to cardiac insight"
        description="Designed for patients who need convenient testing and clinicians who need organized rhythm data without operational friction."
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
        title="Cardiac monitoring services built around real workflows"
        description="From doorstep ECG setup to report coordination, every step is structured for clarity and patient comfort."
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

      <CTA />
    </>
  );
}
