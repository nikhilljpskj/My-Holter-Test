import { ButtonLink } from "@/components/ButtonLink";
import { Helmet } from "react-helmet-async";

const faqItems = [
  {
    question: "What is a Holter test?",
    answer:
      "A Holter test is an ambulatory ECG monitoring test that records heart rhythm continuously, usually for 24 to 48 hours, while the patient continues normal daily activities.",
  },
  {
    question: "How does Holter monitoring work?",
    answer:
      "Small electrodes are placed on the chest and connected to a portable ECG device. The device records electrical activity of the heart to help doctors review rhythm changes and possible arrhythmia detection.",
  },
  {
    question: "Who needs a Holter test?",
    answer:
      "Doctors may advise a Holter test for palpitations, dizziness, fainting, irregular heartbeat, chest discomfort, unexplained fatigue, or follow-up cardiac diagnostics after treatment.",
  },
  {
    question: "Can I do a Holter test at home?",
    answer:
      "Yes. Depending on availability, an ECG at home service can help patients complete 24 hour ECG monitoring at home with technician-supported device setup and collection.",
  },
  {
    question: "What is the cost of Holter test in India?",
    answer:
      "Holter monitor cost in India depends on city, hospital, monitoring duration, home visit requirements, and report workflow. Submit a booking request to get current pricing guidance.",
  },
  {
    question: "How long should I wear a Holter monitor?",
    answer:
      "Most patients wear a Holter monitor for a 24 hour Holter test or 48 hour ECG test. Your doctor may recommend a longer duration depending on symptoms and clinical need.",
  },
];

export function FAQSection() {
  return (
    <section className="section section-muted">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container">
        <div className="section-heading mx-auto text-center reveal">
          <p className="eyebrow">FAQ</p>
          <h2>Holter test booking questions</h2>
          <p>
            Answers to common questions about holter monitoring services, ECG
            monitoring tests, cardiac monitoring, and booking a Holter test
            online in India.
          </p>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <article className="faq-card reveal" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="faq-cta reveal">
          <ButtonLink to="/book">Book Holter Test Online</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
