import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Home,
  Calendar,
  UserCheck,
  FileText,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Book Your Test",
    description:
      "Call us or send a WhatsApp message to schedule your doorstep Holter test at a convenient time.",
  },
  {
    icon: Calendar,
    title: "Schedule Visit",
    description:
      "Our coordinator will confirm your appointment and share details about the technician visiting you.",
  },
  {
    icon: UserCheck,
    title: "Technician Visit",
    description:
      "A trained technician arrives at your home, explains the process, and sets up the Holter device.",
  },
  {
    icon: Clock,
    title: "24-48 Hour Monitoring",
    description:
      "Wear the device and continue your normal activities. The device records every heartbeat automatically.",
  },
  {
    icon: Home,
    title: "Device Collection",
    description:
      "Our technician returns to collect the device at the scheduled time. No hospital visit needed!",
  },
  {
    icon: FileText,
    title: "Receive Report",
    description:
      "Get your comprehensive AI-analyzed, cardiologist-reviewed report within 24-48 hours.",
  },
];

const benefits = [
  {
    title: "No Hospital Visits",
    description: "Complete the entire test from your home",
  },
  {
    title: "Flexible Scheduling",
    description: "Book at times that suit your routine",
  },
  {
    title: "Same-Day Setup",
    description: "Urgent appointments available",
  },
  {
    title: "Expert Technicians",
    description: "Trained professionals handle setup",
  },
  {
    title: "Comfortable Testing",
    description: "Test in your natural environment",
  },
  {
    title: "Fast Results",
    description: "Reports within 24-48 hours",
  },
];

export default function DoorstepTest() {
  return (
    <>
      <SEOHead
        title="Doorstep Holter Test - Home ECG Monitoring Service"
        description="Book doorstep Holter test at home. Our technicians come to you for device setup and collection. 24-hour ECG monitoring without hospital visits. South India coverage."
        keywords="doorstep holter test, holter test at home, home ECG monitoring, holter home service, doorstep heart test, home holter monitoring"
        canonicalUrl="/doorstep-test"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Doorstep Holter Test Service",
          serviceType: "Home Medical Testing",
          provider: {
            "@type": "MedicalBusiness",
            name: "Holter Test India",
          },
          areaServed: "South India",
        }}
      />

      {/* Hero */}
      <section className="section-padding bg-accent">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Home className="w-4 h-4 inline mr-2" />
              Home Enrollment
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Holter Test at Your{" "}
              <span className="text-gradient">Doorstep</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Skip the hospital queues and travel hassles. Our trained
              technicians bring the Holter monitoring service directly to your
              home, ensuring comfort and convenience throughout the testing
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919447355775?text=Hi, I want to book a doorstep Holter Test"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Book Doorstep Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+919447355775">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call to Book
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="How It Works"
            title="Simple 6-Step Process"
            description="From booking to receiving your report, we handle everything with care."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Why Doorstep"
            title="Benefits of Home Enrollment"
            description="Experience the convenience of professional cardiac testing without leaving your home."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Comfort */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                Patient Comfort
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Your Comfort is Our Priority
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand that medical tests can be stressful. That's why
                our doorstep service is designed with your comfort and
                convenience in mind.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Trained & Verified Technicians",
                    description:
                      "All our technicians undergo thorough background checks and professional training.",
                  },
                  {
                    title: "Hygiene Protocols",
                    description:
                      "Strict sanitization procedures followed for all equipment and during visits.",
                  },
                  {
                    title: "Clear Communication",
                    description:
                      "Technician details shared in advance. Track their arrival in real-time.",
                  },
                  {
                    title: "Privacy Respected",
                    description:
                      "Your health data is handled with strict confidentiality and security.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">
                What to Expect During the Visit
              </h3>
              <div className="space-y-4">
                {[
                  "Technician arrives at scheduled time with all equipment",
                  "Brief explanation of the procedure and device",
                  "Electrode placement on chest (takes ~15 minutes)",
                  "Device is secured comfortably on belt or strap",
                  "Instructions for the monitoring period",
                  "Contact number provided for any concerns",
                  "Scheduled return for device collection",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
              Transparent Pricing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              No Hidden Charges
            </h2>
            <p className="text-white/70">
              Our pricing is straightforward and includes everything from
              technician visits to the final report.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="text-center mb-6">
                <p className="text-white/60 mb-2">24-Hour Holter Test</p>
                <p className="font-display text-4xl font-bold text-gradient-reverse">
                  Contact for Pricing
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Technician home visit for setup",
                  "24-hour continuous monitoring",
                  "Device collection from home",
                  "AI-powered analysis",
                  "Cardiologist-reviewed report",
                  "Digital report delivery",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919447355775?text=Hi, I want to know the pricing for doorstep Holter Test"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" size="xl" className="w-full">
                  Get Quote on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Doorstep Test?
            </h2>
            <p className="text-muted-foreground mb-8">
              Experience the convenience of professional Holter monitoring at
              home. Our team is ready to serve you across South India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919447355775?text=Hi, I want to book a doorstep Holter Test"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Book on WhatsApp
                </Button>
              </a>
              <a href="tel:+919447355775">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Call: +91 94473 55775
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
