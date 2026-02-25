import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Stethoscope,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Handshake,
  HeartPulse,
  Clock,
  Award,
} from "lucide-react";

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: "Expand Service Offerings",
    description:
      "Add Holter monitoring to your diagnostic services without capital investment in equipment.",
  },
  {
    icon: Users,
    title: "Better Patient Care",
    description:
      "Offer your patients convenient home-based cardiac monitoring with professional support.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Receive comprehensive, cardiologist-reviewed reports within 24-48 hours.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "AI-powered analysis with expert review ensures accurate, reliable results.",
  },
];

const hospitalBenefits = [
  "No equipment investment required",
  "Trained technicians provided",
  "Comprehensive reporting",
  "Revenue sharing model",
  "Marketing support",
  "Dedicated account manager",
];

const doctorBenefits = [
  "Easy patient referral process",
  "Direct report access",
  "Consultation on complex cases",
  "CME opportunities",
  "Referral incentives",
  "Priority scheduling",
];

const workflowSteps = [
  {
    step: "1",
    title: "Refer Patient",
    description: "Recommend Holter test and share patient details with us.",
  },
  {
    step: "2",
    title: "We Handle Everything",
    description:
      "Our team contacts the patient, schedules visit, and conducts the test.",
  },
  {
    step: "3",
    title: "Receive Report",
    description:
      "Get the comprehensive report directly, ready for your clinical review.",
  },
  {
    step: "4",
    title: "Continue Care",
    description:
      "Use insights to guide treatment decisions for your patient.",
  },
];

export default function HospitalCollaboration() {
  return (
    <>
      <SEOHead
        title="Hospital & Doctor Partnership - Holter Test Collaboration"
        description="Partner with us for Holter test services. Hospital collaboration and doctor referral program for cardiac monitoring. Expand your diagnostic capabilities."
        keywords="hospital partnership, doctor referral program, holter test collaboration, cardiac diagnostics partnership, hospital holter service"
        canonicalUrl="/hospital-collaboration"
      />

      {/* Hero */}
      <section className="section-padding bg-accent">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 inline mr-2" />
              Partnership Program
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partner With{" "}
              <span className="text-gradient">South India's Trusted</span>{" "}
              Holter Service
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Join our network of 100+ hospitals and 300+ doctors offering
              convenient, accurate Holter monitoring to patients across South
              India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919447355775">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Call Our Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Hospital Partners" },
              { value: "300+", label: "Referring Doctors" },
              { value: "10,000+", label: "Tests Completed" },
              { value: "5", label: "States Covered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Why Partner"
            title="Benefits of Partnership"
            description="Expand your diagnostic capabilities and provide better cardiac care to your patients."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Programs */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Partnership Options"
            title="Choose Your Partnership Model"
            description="We offer flexible partnership programs for hospitals and individual doctors."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hospital Partnership */}
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    Hospital Partnership
                  </h3>
                  <p className="text-muted-foreground">
                    For healthcare facilities
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Integrate Holter monitoring into your hospital's diagnostic
                services. We provide equipment, trained technicians, and
                comprehensive reporting while you focus on patient care.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {hospitalBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="w-full" size="lg">
                  Hospital Inquiry
                </Button>
              </Link>
            </div>

            {/* Doctor Referral */}
            <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    Doctor Referral Program
                  </h3>
                  <p className="text-muted-foreground">
                    For cardiologists & physicians
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Simply refer your patients who need Holter monitoring. We handle
                the entire process and deliver comprehensive reports directly to
                you.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {doctorBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button variant="secondary" className="w-full" size="lg">
                  Doctor Registration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Workflow */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Simple Process"
            title="How Referral Works"
            description="A seamless process designed to save your time and serve your patients better."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-wide">
          <SectionHeading
            badge="Partner Stories"
            title="Trusted by Leading Healthcare Providers"
            description="Hear from hospitals and doctors who have partnered with us."
            className="text-white [&_p]:text-white/70"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The doorstep service has been a game-changer for our patients. Reports are accurate and delivered promptly.",
                name: "Dr. Rajesh Kumar",
                role: "Cardiologist, Chennai",
              },
              {
                quote:
                  "Partnering with them helped us offer Holter monitoring without any capital investment. Great support team!",
                name: "Apollo Hospitals",
                role: "Multi-specialty Hospital",
              },
              {
                quote:
                  "The AI-powered analysis catches subtle arrhythmias that help in accurate diagnosis. Highly recommend.",
                name: "Dr. Priya Sharma",
                role: "Physician, Bangalore",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <HeartPulse className="w-8 h-8 text-primary mb-4" />
                <p className="text-white/80 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden bg-secondary p-8 md:p-12 lg:p-16">
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join our growing network of healthcare partners and expand your
                cardiac diagnostic capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="xl"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                  >
                    Contact Our Team
                  </Button>
                </Link>
                <a href="tel:+919447355775">
                  <Button
                    variant="heroOutline"
                    size="xl"
                    className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                  >
                    Call: +91 98765 43210
                  </Button>
                </a>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}
