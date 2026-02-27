import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919270933119?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:07314855000"
        className="w-14 h-14 rounded-full gradient-hero text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
