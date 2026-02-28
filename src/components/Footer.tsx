import { Phone, Mail, MapPin } from "lucide-react";
import babygenLogo from "@/assets/Babygen-Logo.webp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={babygenLogo}
                alt="Babygen IVF"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="font-display font-bold text-xl text-primary-foreground">Babygen</span>
                <span className="font-display font-bold text-xl text-rose-glow"> IVF</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Our team at Babygen IVF has helped thousands of childless couples achieve their dream 
              of having a healthy baby. Our doctors and counsellors guide couples every step of the way.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:07314855000" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> 0731 485 5000
              </a>
              <a href="tel:9270933119" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> 9270 933 119
              </a>
              <a href="mailto:babygenivf@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" /> babygenivf@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>2nd Floor, Kumar Prism, Amanora Park Town, Hadapsar, Pune</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Important Links</h4>
            <div className="space-y-2 text-sm">
              {["About Us", "Privacy Policy", "Disclaimer", "Contact Us"].map((link) => (
                <a key={link} href="#" className="block hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold hover:bg-primary-foreground/20 transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Babygen IVF, Pune. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
