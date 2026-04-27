import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { cities, hospitals, partnerTypes } from "@/data/site";

export default function Hospitals() {
  return (
    <>
      <SEO
        title="Hospitals and Partners"
        description="Partner with My Holter Test for Holter monitoring, ECG monitoring services, cardiac monitoring, and remote patient monitoring support."
        path="/hospitals"
      />

      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">Hospitals and partners</p>
          <h1>Extend cardiac monitoring capacity without adding operational load.</h1>
          <p>
            We support hospitals, doctors, and diagnostic centers with a
            practical Holter monitoring workflow for referrals, patient
            coordination, setup, collection, and report delivery.
          </p>
          <ButtonLink to="/contact">
            Become a partner <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </section>

      <Section
        eyebrow="Partnership models"
        title="Built for healthcare teams"
        className="section-muted"
      >
        <div className="card-grid three">
          {partnerTypes.map((partner) => (
            <article className="feature-card reveal" key={partner.title}>
              <partner.icon size={28} />
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Representative network"
        title="Hospitals and healthcare brands we can support"
        description="The list below includes realistic partner and referral placeholders for South India. Replace with verified partner names as contracts are finalized."
      >
        <div className="hospital-grid">
          {hospitals.map((hospital) => (
            <div className="hospital-card reveal" key={hospital}>
              {hospital}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Coverage"
        title="Major service regions"
        description="Coverage can be coordinated across key South Indian cities and surrounding referral areas."
        className="section-muted"
      >
        <div className="city-grid">
          {cities.map((city) => (
            <span className="city-chip reveal" key={city}>
              {city}
            </span>
          ))}
        </div>
      </Section>

      <CTA title="Add Holter monitoring to your patient services." />
    </>
  );
}
