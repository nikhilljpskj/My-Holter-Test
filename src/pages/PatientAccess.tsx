import { ExternalLink, FileHeart, LockKeyhole, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SEO } from "@/components/SEO";
import { reportAccessUrl } from "@/data/site";

export default function PatientAccess() {
  return (
    <>
      <SEO
        title="Patient Report Access"
        description="Access your Holter monitoring patient report through the secure My Holter Test monitoring portal."
        path="/patient-access"
      />

      <section className="access-page">
        <div className="container access-grid">
          <div className="access-copy reveal">
            <p className="eyebrow">Patient access</p>
            <h1>Access your Holter monitoring report securely.</h1>
            <p>
              Patients and care teams can open the monitoring portal to view
              available cardiac monitoring reports using the access details
              provided during the test workflow.
            </p>
            <ButtonLink href={reportAccessUrl} target="_blank" rel="noreferrer">
              Open Report Portal <ExternalLink size={18} />
            </ButtonLink>
          </div>

          <div className="access-card reveal">
            <FileHeart size={42} />
            <h2>Before you open the portal</h2>
            <ul>
              <li>
                <LockKeyhole size={18} /> Keep your access details ready.
              </li>
              <li>
                <ShieldCheck size={18} /> Use a private device or trusted browser.
              </li>
              <li>
                <FileHeart size={18} /> Contact support if your report is not visible yet.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
