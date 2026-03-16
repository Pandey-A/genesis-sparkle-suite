import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import babygenLogo from "@/assets/Babygen-Logo.webp";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/babygenivf",
      icon: Facebook,
      className: "bg-[#1877F2] text-white hover:opacity-90",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/babygenivf/",
      icon: Instagram,
      className: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:opacity-90",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@drbhavnasharmaivf",
      icon: Youtube,
      className: "bg-[#FF0000] text-white hover:opacity-90",
    },
  ];

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
              {t("footer.about")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">{t("footer.contactTitle")}</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:07314855000" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> 07314855000
              </a>
              <a href="mailto:babygenivf@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" /> babygenivf@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{t("footer.address")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">{t("footer.linksTitle")}</h4>
            <div className="space-y-2 text-sm">
              {[t("footer.link.about"), t("footer.link.privacy"), t("footer.link.disclaimer"), t("footer.link.contact")].map((link) => (
                <a key={link} href="#" className="block hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${social.className}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
