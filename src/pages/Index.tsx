import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustBadges } from "@/components/shared/TrustBadges";
import {
  ArrowRight,
  Heart,
  Clock,
  Home,
  CheckCircle,
  Activity,
  Users,
  MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero-holter.jpg";
import holterDevice from "@/assets/holter-device.jpg";

const features = [
  {
    icon: Clock,
    title: "24/48 Hour Monitoring",
    description:
      "Continuous ECG recording to detect irregular heart rhythms that may not appear during a brief clinic visit.",
    color: "bg-primary",
  },
  {
    icon: Home,
    title: "Doorstep Service",
    description:
      "Our trained technicians come to your home for device setup and collection. No hospital visits required.",
    color: "bg-secondary",
  },
  {
    icon: Activity,
    title: "AI-Powered Analysis",
    description:
      "Advanced Biocalculus technology provides accurate, comprehensive reports reviewed by cardiologists.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Expert Support",
    description:
      "Network of 300+ referring doctors and 100+ partner hospitals across South India.",
    color: "bg-secondary",
  },
];

const benefits = [
  "Non-invasive and painless",
  "Continue daily activities",
  "Waterproof device",
  "Same-day setup available",
  "Fast report turnaround",
  "Insurance accepted",
];

export default function Index() {
  return (
    <>
      <SEOHead
        title="Holter Test at Home"
        description="Book doorstep Holter test across South India. 24-hour ECG monitoring at your home with Biocalculus device. Trusted by 100+ hospitals & 300+ doctors."
        keywords="holter test, 24 hour holter test, doorstep holter test, holter test at home, holter test south india, ECG monitoring, heart monitoring"
        canonicalUrl="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalService",
          name: "Holter Test India - Doorstep ECG Monitoring",
          description:
            "24-hour Holter ECG monitoring service at your doorstep across South India",
          provider: {
            "@type": "MedicalBusiness",
            name: "Redeemer Technologies",
          },
          serviceType: "Holter Monitoring",
          areaServed: {
            "@type": "Place",
            name: "South India",
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Holter ECG Monitoring Device"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm border border-white/10">
              <Heart className="w-4 h-4 text-secondary" />
              Trusted Across South India
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Holter Test at Your{" "}
              <span className="text-primary-light">Doorstep</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed animate-fade-in max-w-xl">
              24-hour ECG monitoring from the comfort of your home. Our trained
              technicians bring the advanced Biocalculus Holter device to you,
              ensuring accurate heart rhythm detection without hospital visits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
              <a
                href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Book Holter Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-light" />
                <span>100+ Partner Hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-light" />
                <span>300+ Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-light" />
                <span>Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary z-10" />
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16 bg-white border-b border-border/50">
        <div className="container-wide">
          <TrustBadges />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Why Choose Us"
            title="Advanced Heart Monitoring Made Simple"
            description="Experience the convenience of professional Holter monitoring with our doorstep service backed by cutting-edge technology."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-border/50 hover-lift shadow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Section */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-6">
                Biocalculus Technology
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The Most Advanced Holter Device
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                The Biocalculus Holter monitor is a compact, lightweight device
                that records your heart's electrical activity continuously for
                24-48 hours. Its AI-powered analysis ensures no arrhythmia goes
                undetected.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/holter-test">
                <Button variant="hero" size="lg">
                  Learn More About Holter Test
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={holterDevice}
                  alt="Biocalculus Holter Device"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden bg-secondary p-8 md:p-12 lg:p-16">
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Book Your Holter Test?
              </h2>
              <p className="text-lg text-white/85 mb-8">
                Get professional heart monitoring at your doorstep. Our team is
                ready to assist you across South India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="heroOutline"
                    size="xl"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-secondary"
                  >
                    Book on WhatsApp
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="xl"
                    className="w-full sm:w-auto bg-white text-secondary hover:bg-white/90 font-semibold"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Coverage Area"
            title="Serving Across South India"
            description="We provide doorstep Holter test services in major cities and towns across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Chennai",
              "Bangalore",
              "Hyderabad",
              "Kochi",
              "Coimbatore",
              "Madurai",
              "Trichy",
              "Vizag",
              "Vijayawada",
              "Mysore",
            ].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 p-4 rounded-xl bg-white border border-border/50 shadow-soft"
              >
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Not listed? Contact us – we're expanding rapidly and may cover your
            area!
          </p>
        </div>
      </section>
    </>
  );
}