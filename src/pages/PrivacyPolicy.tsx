import { SEO } from "@/components/SEO";
import { contact } from "@/data/site";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for My Holter Test, covering how inquiry and booking information is collected and used."
        path="/privacy-policy"
      />
      <section className="page-hero legal-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">Privacy Policy</p>
          <h1>How we handle your information.</h1>
          <p>
            This policy explains how My Holter Test collects and uses details
            shared through website contact and booking forms.
          </p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container legal-content">
          <h2>Information We Collect</h2>
          <p>
            We may collect name, email, mobile number, hospital name, doctor
            name, monitoring duration, health issue details, location, and
            message content submitted through our forms.
          </p>

          <h2>How We Use It</h2>
          <p>
            Information is used to respond to inquiries, coordinate Holter test
            bookings, support patient scheduling, and communicate with hospitals,
            doctors, or attendants involved in the request.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell personal information. Details may be shared with our
            internal coordination team or relevant healthcare partners only when
            needed to process the request.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
