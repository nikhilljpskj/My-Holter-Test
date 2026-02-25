import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919447355775?text=Hi, I want to book a Holter Test"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
        style={{ "--tw-shadow-color": "#25D366" } as React.CSSProperties}
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919447355775"
        className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
