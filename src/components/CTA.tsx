import { ArrowRight, FileHeart } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { contact, reportAccessUrl } from "@/data/site";

export function CTA({
  title = "Ready to arrange a Holter monitoring test?",
  description = "Speak with our team for patient scheduling, hospital partnership, or report access support.",
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
            <ButtonLink href={contact.whatsapp} target="_blank" rel="noreferrer">
              Book a Test <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink
              href={reportAccessUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
            >
              <FileHeart size={18} /> Access Patient Report
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
