import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Users,
  Target,
  Building2,
  Heart,
  MapPin,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description:
      "Every service we provide is designed with patient comfort and convenience as the top priority.",
  },
  {
    icon: Shield,
    title: "Quality & Accuracy",
    description:
      "We use only certified, cutting-edge equipment and follow strict protocols for accurate results.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description:
      "Making advanced cardiac diagnostics accessible to everyone, everywhere in South India.",
  },
  {
    icon: Users,
    title: "Expert Network",
    description:
      "Backed by 300+ specialist doctors and 100+ partner hospitals for comprehensive care.",
  },
];

const milestones = [
  { year: "2018", event: "Founded as a medical device distributor" },
  { year: "2019", event: "Partnership with Biocalculus for Holter devices" },
  { year: "2020", event: "Launched doorstep Holter test service" },
  { year: "2021", event: "Expanded to 50+ hospitals across South India" },
  { year: "2022", event: "Crossed 5,000 successful Holter tests" },
  { year: "2023", event: "100+ hospital partnerships achieved" },
  { year: "2024", event: "Serving all 5 South Indian states" },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Holter Test India - South India's trusted doorstep Holter monitoring service. Distributed by Redeemer Technologies, billing by Daya Life Science."
        keywords="about holter test india, redeemer technologies, daya life science, biocalculus distributor, south india holter"
        canonicalUrl="/about"
      />

      {/* Hero */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bringing Heart Care to Your{" "}
              <span className="text-gradient">Doorstep</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're on a mission to make advanced cardiac diagnostics accessible
              to everyone across South India. No more long hospital queues or
              travel hassles – we bring the test to you.
            </p>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Product Technology
              </h3>
              <p className="text-2xl font-bold text-primary mb-2">Biocalculus</p>
              <p className="text-muted-foreground">
                World-class Holter monitoring devices with AI-powered analysis
                for accurate cardiac diagnostics.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Distributed By
              </h3>
              <p className="text-2xl font-bold text-secondary mb-2">
                Redeemer Technologies
              </p>
              <p className="text-muted-foreground">
                Your trusted partner for medical device distribution and
                doorstep diagnostic services.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Billing Entity
              </h3>
              <p className="text-2xl font-bold text-gradient mb-2">
                Daya Life Science
              </p>
              <p className="text-muted-foreground">
                Ensuring transparent, compliant billing for all our diagnostic
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us Forward"
            description="Our core values shape every interaction and service we provide."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Journey"
            title="Growing With South India"
            description="From a small distributor to South India's trusted Holter test provider."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary" />

              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative pl-20 pb-8 last:pb-0">
                  <div className="absolute left-5 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/50">
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <p className="text-foreground font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
                Service Coverage
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Serving All of South India
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Our network spans across five states with plans to expand
                further. Whether you're in a metropolitan city or a smaller
                town, we strive to bring our doorstep Holter test service to
                you.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Tamil Nadu",
                  "Karnataka",
                  "Andhra Pradesh",
                  "Telangana",
                  "Kerala",
                ].map((state) => (
                  <div key={state} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "100+", label: "Partner Hospitals" },
                { value: "300+", label: "Referring Doctors" },
                { value: "10,000+", label: "Tests Completed" },
                { value: "5", label: "States Covered" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <p className="font-display text-3xl font-bold text-gradient-reverse mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Partner With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're a hospital, clinic, or doctor looking to offer
              Holter test services, or a patient seeking convenient heart
              monitoring, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hospital-collaboration">
                <Button variant="hero" size="lg">
                  Hospital Partnership
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
