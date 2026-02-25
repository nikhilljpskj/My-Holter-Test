import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  Battery,
  Shield,
  ArrowRight,
} from "lucide-react";
import holterDevice from "@/assets/holter-device.jpg";

const symptoms = [
  "Palpitations or racing heart",
  "Dizziness or lightheadedness",
  "Fainting or near-fainting spells",
  "Unexplained fatigue",
  "Shortness of breath",
  "Chest pain or discomfort",
  "Irregular heartbeat sensations",
  "History of heart conditions",
];

const advantages = [
  {
    icon: Clock,
    title: "Continuous 24-48 Hour Recording",
    description:
      "Unlike a standard ECG that captures just seconds, Holter monitors your heart around the clock to catch intermittent issues.",
  },
  {
    icon: Activity,
    title: "Detect Hidden Arrhythmias",
    description:
      "Many heart rhythm problems only occur during specific activities or times. Extended monitoring catches what brief tests miss.",
  },
  {
    icon: Heart,
    title: "Natural Environment Testing",
    description:
      "Recording your heart activity during normal daily life provides more accurate, real-world data than hospital tests.",
  },
  {
    icon: Shield,
    title: "Non-Invasive & Painless",
    description:
      "Small electrodes placed on your chest connect to a portable device. No needles, no discomfort, no restrictions.",
  },
];

const faqItems = [
  {
    question: "What is a Holter test?",
    answer:
      "A Holter test is a continuous ECG monitoring method where you wear a small device for 24-48 hours that records every heartbeat. It helps detect irregular heart rhythms that may not appear during a brief clinic ECG.",
  },
  {
    question: "How long does the test take?",
    answer:
      "The monitoring period is typically 24 hours, though 48-hour monitoring may be recommended in some cases. Device setup takes about 15-20 minutes.",
  },
  {
    question: "Can I shower during the test?",
    answer:
      "The Biocalculus device we use is water-resistant, but we recommend avoiding prolonged water exposure. Brief showers are generally fine with proper precautions.",
  },
  {
    question: "Will it affect my daily activities?",
    answer:
      "Not at all! The device is compact and lightweight. You can continue your normal activities, work, and even sleep comfortably with it.",
  },
  {
    question: "How soon will I get results?",
    answer:
      "Reports are typically available within 24-48 hours after device collection. Our AI-powered analysis ensures fast, accurate results reviewed by cardiologists.",
  },
];

export default function HolterTest() {
  return (
    <>
      <SEOHead
        title="What is Holter Test - 24 Hour ECG Monitoring Explained"
        description="Learn about Holter test - a 24-48 hour continuous ECG monitoring. Understand who needs it, how it works, and advantages over standard ECG. Book doorstep test."
        keywords="what is holter test, 24 hour holter monitoring, holter ECG, continuous ECG, heart rhythm monitoring, arrhythmia detection"
        canonicalUrl="/holter-test"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Holter Test - Complete Guide",
          about: {
            "@type": "MedicalTest",
            name: "Holter Monitor Test",
            usedToDiagnose: "Cardiac arrhythmia",
          },
        }}
      />

      {/* Hero */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                Understanding Holter Test
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                What is a{" "}
                <span className="text-gradient">Holter Test?</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Holter monitor test is a type of continuous ECG monitoring
                that records your heart's electrical activity for 24 to 48
                hours. Unlike a standard ECG that only captures a few seconds,
                Holter monitoring detects heart rhythm abnormalities that occur
                during your daily activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Named after physicist Norman J. Holter, this test is the gold
                standard for diagnosing intermittent cardiac arrhythmias that
                may not appear during brief clinic visits.
              </p>
              <a
                href="https://wa.me/919447355775?text=Hi, I want to learn more about Holter Test"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  Book Your Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={holterDevice}
                  alt="Holter ECG Monitoring Device"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-card shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">48+ Hours</p>
                    <p className="text-sm text-muted-foreground">Battery Life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Holter Test */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Who Needs It"
            title="Is Holter Test Right For You?"
            description="Your doctor may recommend a Holter test if you experience any of these symptoms or conditions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
              >
                <AlertCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium">{symptom}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-accent/50 border border-accent">
            <p className="text-center text-accent-foreground">
              <strong>Note:</strong> Holter tests are also commonly prescribed
              after heart attacks, for monitoring pacemaker function, or to
              evaluate treatment effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="The Process"
            title="How Holter Test Works"
            description="Simple, non-invasive monitoring that fits into your daily life."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Electrode Placement",
                description:
                  "Small adhesive electrodes are placed on your chest by our trained technician.",
              },
              {
                step: "2",
                title: "Device Connection",
                description:
                  "Electrodes connect to a compact, battery-powered recording device worn on your belt or strap.",
              },
              {
                step: "3",
                title: "24-48 Hour Monitoring",
                description:
                  "The device continuously records every heartbeat while you go about your normal activities.",
              },
              {
                step: "4",
                title: "Analysis & Report",
                description:
                  "Data is analyzed using AI technology and reviewed by cardiologists for comprehensive results.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-20 w-full h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Why Holter"
            title="Advantages Over Standard ECG"
            description="Holter monitoring provides insights that a brief clinic ECG simply cannot capture."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biocalculus Device */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
                Our Technology
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                The Biocalculus Advantage
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We use the advanced Biocalculus Holter monitoring system, known
                for its accuracy, comfort, and AI-powered analysis capabilities.
              </p>

              <div className="space-y-4">
                {[
                  "Compact, lightweight design for maximum comfort",
                  "High-resolution ECG recording with minimal artifacts",
                  "AI-powered arrhythmia detection algorithm",
                  "Water-resistant for daily activities",
                  "Long battery life for extended monitoring",
                  "Cardiologist-reviewed reports within 48 hours",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold">
                    AI-Powered Analysis
                  </h3>
                </div>
                <p className="text-white/70">
                  Our advanced algorithms analyze millions of heartbeats to
                  detect even subtle abnormalities, reducing false positives and
                  ensuring accurate diagnosis.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                  <h3 className="font-display text-xl font-semibold">
                    Expert Review
                  </h3>
                </div>
                <p className="text-white/70">
                  Every report is reviewed by experienced cardiologists who
                  provide detailed insights and recommendations for your
                  physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about Holter test answered."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <h3 className="font-display text-lg font-semibold mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Tested?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book your doorstep Holter test today and get accurate heart rhythm
            analysis from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doorstep-test">
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Learn About Doorstep Test
              </Button>
            </Link>
            <a
              href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="heroOutline"
                size="xl"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Book Now on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
