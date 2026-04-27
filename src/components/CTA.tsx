import { ArrowRight, CalendarCheck2 } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { contact } from "@/data/site";

export function CTA({
  title = "Ready to arrange a Holter monitoring test?",
  description = "Speak with our team for patient scheduling, hospital partnership, or cardiac monitoring support.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="cta-panel reveal">
          <div>
            <p className="eyebrow eyebrow-light">Cardiac monitoring support</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cta-actions">
            <ButtonLink to="/book">
              <CalendarCheck2 size={18} /> Schedule a Holter Test
            </ButtonLink>
            <ButtonLink href={contact.whatsapp} target="_blank" rel="noreferrer" variant="outline">
              WhatsApp the Team <ArrowRight size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
