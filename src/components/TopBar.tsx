import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="gradient-hero text-primary-foreground py-2.5">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:07314855000" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>0731 485 5000</span>
          </a>
          <a href="mailto:babygenivf@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Mail className="h-3.5 w-3.5" />
            <span>babygenivf@gmail.com</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="text-xs">Kumar Prism, Amanora Park Town, Hadapsar, Pune</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
