import { useState } from "react";
import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 94473 55775",
    href: "tel:+919447355775",
    description: "Mon-Sat, 9 AM - 6 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 94473 55775",
    href: "https://wa.me/919447355775?text=Hi, I have an inquiry about Holter Test",
    description: "Quick responses",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@redeemertechnologies.com",
    href: "mailto:info@redeemertechnologies.com",
    description: "24-48 hour response",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "South India",
    href: "#coverage",
    description: "TN, KA, AP, TS, KL",
  },
];

const serviceAreas = [
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli"],
  },
  {
    state: "Karnataka",
    cities: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
  },
  {
    state: "Andhra Pradesh",
    cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"],
  },
  {
    state: "Telangana",
    cities: ["Hyderabad", "Secunderabad", "Warangal", "Karimnagar"],
  },
  {
    state: "Kerala",
    cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "patient",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry Submitted!",
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      inquiryType: "patient",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Book Holter Test"
        description="Contact Holter Test India for booking, inquiries, or partnership. Call, WhatsApp, or email us. Serving South India - Tamil Nadu, Karnataka, AP, Telangana, Kerala."
        keywords="contact holter test, book holter test, holter test inquiry, holter test south india, holter test booking"
        canonicalUrl="/contact"
      />

      {/* Hero */}
      <section className="section-padding bg-accent">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're Here to{" "}
              <span className="text-gradient">Help You</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about Holter testing or want to book a doorstep
              test? Our team is ready to assist you across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-6 rounded-2xl bg-card border border-border/50 hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Inquiry Type *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "patient", label: "Patient" },
                      { value: "hospital", label: "Hospital" },
                      { value: "doctor", label: "Doctor" },
                      { value: "other", label: "Other" },
                    ].map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, inquiryType: type.value })
                        }
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                          formData.inquiryType === type.value
                            ? "bg-secondary text-white border-transparent"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Quick Booking
              </h2>
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Fastest Way to Book
                </h3>
                <p className="text-muted-foreground mb-4">
                  For immediate assistance, WhatsApp us directly. We typically
                  respond within 15 minutes during business hours.
                </p>
                <a
                  href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Book on WhatsApp
                  </Button>
                </a>
              </div>

              <h3 className="font-display text-xl font-semibold mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                  <span>Sunday</span>
                  <span className="font-medium text-muted-foreground">
                    Emergency Only
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-3">
                {[
                  "Our team reviews your inquiry within 2 hours",
                  "We call or WhatsApp you to understand your needs",
                  "Schedule a convenient time for doorstep visit",
                  "Technician arrives with all equipment",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section id="coverage" className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Service Areas"
            title="Where We Serve"
            description="Our doorstep Holter test service is available across South India."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.state}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {area.state}
                </h3>
                <ul className="space-y-2">
                  {area.cities.map((city) => (
                    <li
                      key={city}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary/50" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Don't see your city? Contact us – we're expanding rapidly and may
            cover your area or can make special arrangements!
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Google Map will be embedded here
            </p>
            <p className="text-sm text-muted-foreground">
              Serving all major cities in South India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
