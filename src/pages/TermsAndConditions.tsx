import { SEO } from "@/components/SEO";
import { contact } from "@/data/site";

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for using the My Holter Test website and submitting Holter monitoring requests."
        path="/terms-and-conditions"
      />
      <section className="page-hero legal-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">Terms & Conditions</p>
          <h1>Website and booking request terms.</h1>
          <p>
            These terms apply when you use the My Holter Test website or submit
            a Holter monitoring inquiry or booking request.
          </p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container legal-content">
          <h2>Medical Disclaimer</h2>
          <p>
            Website information is for service awareness and coordination. It is
            not a substitute for medical advice, diagnosis, or treatment from a
            qualified healthcare professional.
          </p>

          <h2>Booking Requests</h2>
          <p>
            Submitting a booking form does not guarantee appointment
            confirmation. Our team will contact you to verify details,
            availability, location, and next steps.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            Users are responsible for providing accurate patient, contact,
            doctor, hospital, and health issue information so the team can
            coordinate the service properly.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
