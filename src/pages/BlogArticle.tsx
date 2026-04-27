import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";

const articles = {
  "what-is-holter-monitoring": {
    title: "What is Holter Monitoring?",
    description:
      "Learn how Holter monitoring records heart rhythm continuously for 24 to 48 hours and helps with arrhythmia detection.",
    heading: "What is Holter Monitoring?",
    body: [
      "Holter monitoring is a non-invasive ambulatory ECG monitoring test that records the heart's electrical activity over an extended period, commonly 24 to 48 hours.",
      "Unlike a standard ECG monitoring test that captures a short moment in time, a portable ECG device can record rhythm changes during sleep, work, walking, and regular daily activities.",
      "Doctors use Holter monitoring services for heart rhythm monitoring, arrhythmia detection, palpitations, dizziness, fainting, and cardiac diagnostics.",
    ],
  },
  "ecg-vs-holter-test": {
    title: "ECG vs Holter Test",
    description:
      "Understand the difference between a standard ECG test and a 24 hour Holter test for heart rhythm monitoring.",
    heading: "ECG vs Holter Test",
    body: [
      "A standard ECG test records heart electrical activity for a brief period, often while the patient is resting.",
      "A 24 hour Holter test or 48 hour ECG test records continuously with a wearable device, making it more useful when symptoms are intermittent.",
      "For irregular heartbeat, ambulatory ECG monitoring can provide more complete cardiac monitoring data than a short ECG alone.",
    ],
  },
  "when-should-you-take-a-holter-test": {
    title: "When Should You Take a Holter Test?",
    description:
      "Common symptoms and clinical reasons doctors may recommend Holter monitoring or 24 hour ECG monitoring at home.",
    heading: "When Should You Take a Holter Test?",
    body: [
      "A doctor may recommend Holter monitoring if you have palpitations, fainting, dizziness, unexplained fatigue, irregular heartbeat, or chest discomfort.",
      "Holter testing can also be useful after medication changes, cardiac procedures, pacemaker evaluation, or when a standard ECG does not explain symptoms.",
      "Patients looking for the best Holter monitoring service near me can book Holter test online in India and ask about home-based setup options.",
    ],
  },
};

export default function BlogArticle() {
  const { slug = "" } = useParams();
  const article = articles[slug as keyof typeof articles] ?? articles["what-is-holter-monitoring"];

  return (
    <>
      <SEO title={article.title} description={article.description} path={`/blog/${slug}`} />
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">Cardiac diagnostics guide</p>
          <h1>{article.heading}</h1>
          <p>{article.description}</p>
        </div>
      </section>
      <section className="section section-tight">
        <article className="container legal-content">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Ready to schedule cardiac monitoring?{" "}
            <Link to="/book">Book a Holter test online</Link> or{" "}
            <Link to="/services">explore ECG monitoring services</Link>.
          </p>
        </article>
      </section>
    </>
  );
}
