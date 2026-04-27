import { AlertCircle, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { services } from "@/data/site";

const symptoms = [
  "Palpitations or racing heartbeat",
  "Dizziness, fainting, or near-fainting",
  "Intermittent chest discomfort",
  "Unexplained fatigue or breathlessness",
  "Irregular rhythm on previous ECG",
  "Post-treatment rhythm follow-up",
  "Pacemaker or therapy monitoring",
  "Doctor-advised extended ECG recording",
];

const process = [
  "Share patient or referral details",
  "Schedule home or facility-based setup",
  "Technician places electrodes and explains care",
  "Device records ECG during normal activity",
  "Data is processed into a physician-ready report",
];

export default function Services() {
  return (
    <>
      <SEO
        title="Holter and ECG Monitoring Services"
        description="Explore Holter monitoring services, ECG monitoring tests, 24 hour Holter test support, and cardiac monitoring for arrhythmia detection."
        path="/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: "Holter monitoring",
          bodyLocation: "Heart",
          preparation: "Electrode placement and portable ECG recorder setup",
        }}
      />

      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">Services</p>
          <h1>Holter monitoring and ECG services for better rhythm visibility.</h1>
          <p>
            We support holter monitoring services for patients whose symptoms
            may not appear during a brief ECG. Book a 24 hour Holter test, 48
            hour ECG test, or home-based cardiac monitoring request with a
            workflow built for convenience and clinical clarity.
          </p>
          <ButtonLink to="/book">
            Book Holter Test Online
          </ButtonLink>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container seo-copy-card reveal">
          <h2>Holter monitoring for accurate heart rhythm monitoring</h2>
          <p>
            Holter monitoring is a non-invasive cardiac test that continuously
            records the heart's electrical activity for 24 to 48 hours, helping
            detect irregular heart rhythms (arrhythmias) and cardiac
            abnormalities. Patients can wear a portable ECG device during daily
            activities to capture real-time heart data, improving diagnosis
            accuracy compared to standard ECG tests.
          </p>
          <p>
            This ambulatory ECG monitoring approach supports arrhythmia
            detection, cardiac diagnostics, ECG test for irregular heartbeat
            evaluation, and 24 hour ECG monitoring at home when available.
          </p>
          <div className="inline-actions">
            <ButtonLink to="/book">Schedule ECG Monitoring Test</ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              Contact Our Team
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section title="What we provide" className="section-muted">
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
        eyebrow="Clinical use cases"
        title="When doctors commonly advise Holter testing"
        description="Holter monitoring helps capture intermittent rhythm changes that are often missed by short, resting ECG tests."
      >
        <div className="symptom-grid">
          {symptoms.map((symptom) => (
            <div className="symptom-item reveal" key={symptom}>
              <AlertCircle size={18} />
              <span>{symptom}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="Simple from booking to report"
        className="section-muted"
      >
        <div className="process-list">
          {process.map((step, index) => (
            <div className="process-item reveal" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
              <CheckCircle2 size={20} />
            </div>
          ))}
        </div>
      </Section>

      <CTA title="Arrange cardiac monitoring without unnecessary complexity." />
    </>
  );
}
