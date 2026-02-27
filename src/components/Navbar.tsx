import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
            B
          </div>
          <div>
            <span className="font-display font-bold text-xl text-foreground">Babygen</span>
            <span className="font-display font-bold text-xl text-primary"> IVF</span>
            <p className="text-[10px] text-muted-foreground leading-none">Pune &bull; Gurugram</p>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-hero text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center gradient-hero text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
