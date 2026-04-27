import { Award, BadgeCheck, Building2, HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { contact } from "@/data/site";

const values = [
  {
    icon: HeartHandshake,
    title: "Patient comfort first",
    text: "Holter monitoring is easier when setup, guidance, and collection are handled with patience and clarity.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable process",
    text: "Each test follows a consistent workflow for device setup, monitoring instructions, data handling, and report coordination.",
  },
  {
    icon: Award,
    title: "Partner mindset",
    text: "We work with doctors, clinics, hospitals, and diagnostic centers as an extension of their cardiac care services.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about My Holter Test, a premium Holter monitoring and ECG monitoring services provider supporting patients, doctors, and hospitals across South India."
        path="/about"
      />

      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">About us</p>
          <h1>Modern heart health diagnostics with a human service layer.</h1>
          <p>
            My Holter Test exists to make cardiac monitoring easier to access.
            We coordinate Holter monitoring, ECG monitoring services, and remote
            patient monitoring support through a workflow that respects both
            patient comfort and clinical decision-making.
          </p>
        </div>
      </section>

      <Section
        title="A focused team for cardiac monitoring"
        description="Our work is centered on one important need: helping physicians capture meaningful rhythm data while reducing avoidable stress for patients."
      >
        <div className="story-grid">
          <div className="story-panel reveal">
            <Building2 size={32} />
            <h3>Distributed by {contact.company}</h3>
            <p>
              Redeemer Technologies supports medical technology distribution and
              service coordination for Holter testing workflows.
            </p>
          </div>
          <div className="story-copy reveal">
            <p>
              A short clinic ECG can miss symptoms that occur at home, at work,
              during sleep, or during everyday activity. Holter monitoring fills
              that diagnostic gap by recording the heart over a longer window.
            </p>
            <p>
              Our role is to simplify that process for everyone involved:
              patients receive guidance, doctors receive organized report
              support, and partners can offer cardiac monitoring without adding
              unnecessary operational complexity.
            </p>
            <ButtonLink to="/contact">Talk to our team</ButtonLink>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Our principles"
        title="Calm, accurate, and easy to coordinate"
        className="section-muted"
      >
        <div className="card-grid three">
          {values.map((value) => (
            <article className="feature-card reveal" key={value.title}>
              <value.icon size={28} />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA title="Need Holter monitoring support?" />
    </>
  );
}
