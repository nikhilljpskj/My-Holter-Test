import {
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { ButtonLink } from "@/components/ButtonLink";
import { SEO } from "@/components/SEO";
import { contact } from "@/data/site";

const bookingBenefits = [
  "Home or hospital setup coordination",
  "24, 48, or doctor-advised monitoring duration",
  "Call-back confirmation from the care team",
  "Referral, symptom, and location details captured upfront",
];

export default function Book() {
  return (
    <>
      <SEO
        title="Schedule a Holter Test"
        description="Schedule a Holter test with My Holter Test. Share patient details, hospital information, doctor referral, health issues, and preferred timing."
        path="/book"
      />

      <section
        className="booking-hero"
        aria-label="Holter monitoring ECG device for cardiac testing"
      >
        <div className="container booking-page-layout">
          <div className="booking-page-copy reveal">
            <p className="hero-kicker">
              <CalendarCheck2 size={18} /> Priority Holter test booking
            </p>
            <h1>Schedule a Holter test with less back-and-forth.</h1>
            <p>
              Send the patient, doctor, hospital, duration, symptoms, and
              location details in one clean request. Our team will review it and
              contact you to confirm the appointment.
            </p>

            <div className="booking-benefit-list">
              {bookingBenefits.map((benefit) => (
                <span key={benefit}>
                  <CheckCircle2 size={18} /> {benefit}
                </span>
              ))}
            </div>

            <div className="booking-support-card">
              <div>
                <HeartPulse size={24} />
                <strong>For urgent scheduling</strong>
                <p>Message us directly during working hours.</p>
              </div>
              <ButtonLink
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <MessageCircle size={18} /> WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="booking-form-wrap">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="section section-tight booking-assurance">
        <div className="container assurance-grid">
          <article>
            <ShieldCheck size={28} />
            <h3>Careful coordination</h3>
            <p>
              The form captures the practical details needed to arrange setup
              smoothly and avoid repeated calls.
            </p>
          </article>
          <article>
            <Clock3 size={28} />
            <h3>Fast follow-up</h3>
            <p>
              Your request is routed to the team for appointment confirmation
              and next-step guidance.
            </p>
          </article>
          <article>
            <CalendarCheck2 size={28} />
            <h3>Flexible scheduling</h3>
            <p>
              Choose the monitoring duration and share preferred timing or
              special patient requirements.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
