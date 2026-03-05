import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useLanguage } from "@/context/LanguageContext";

const ThankYou = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{t("thankyou.badge")}</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("thankyou.title")}</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
              {t("thankyou.subtitle")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
              <a
                href="tel:7314855000"
                className="inline-flex items-center justify-center rounded-xl border border-input px-5 py-3 font-semibold text-foreground hover:bg-accent transition-colors"
              >
                {t("thankyou.call")}
              </a>
              <a
                href="https://wa.me/917314855000?text=Hello,%20I%20submitted%20a%20consultation%20request.%20Please%20guide%20me%20with%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl gradient-hero text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                {t("thankyou.whatsapp")}
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-accent/40 rounded-2xl p-4 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">{t("thankyou.card1.title")}</p>
                <p className="text-sm text-muted-foreground">{t("thankyou.card1.desc")}</p>
              </div>
              <div className="bg-accent/40 rounded-2xl p-4 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">{t("thankyou.card2.title")}</p>
                <p className="text-sm text-muted-foreground">{t("thankyou.card2.desc")}</p>
              </div>
              <div className="bg-accent/40 rounded-2xl p-4 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">{t("thankyou.card3.title")}</p>
                <p className="text-sm text-muted-foreground">{t("thankyou.card3.desc")}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-input px-6 py-3 font-semibold text-foreground hover:bg-accent transition-colors"
              >
                {t("thankyou.backHome")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      </div>
  );
};

export default ThankYou;
