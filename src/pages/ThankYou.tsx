import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Submission Confirmed</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Thank You for Reaching Out</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
              Your request has been received successfully. Our fertility care team will connect with you shortly to guide you on the next best steps.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
              <a
                href="tel:7314855000"
                className="inline-flex items-center justify-center rounded-xl border border-input px-5 py-3 font-semibold text-foreground hover:bg-accent transition-colors"
              >
                Call: 731 485 5000
              </a>
              <a
                href="https://wa.me/917314855000?text=Hello,%20I%20submitted%20a%20consultation%20request.%20Please%20guide%20me%20with%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl gradient-hero text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Continue on WhatsApp
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-accent/40 rounded-2xl p-4 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">What happens next?</p>
                <p className="text-sm text-muted-foreground">Our coordinator calls you to understand your case and schedule your consultation.</p>
              </div>
              <div className="bg-accent/40 rounded-2xl p-4 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">Keep your slot reserved</p>
                <p className="text-sm text-muted-foreground">Share your preferred call time on WhatsApp to avoid delays in booking.</p>
              </div>
              <div className="bg-accent/40 rounded-2xl p-4 border border-border/60">
                <p className="text-sm font-semibold text-foreground mb-1">Offer reminder</p>
                <p className="text-sm text-muted-foreground">You can save up to Rs. 40000 on eligible treatment plans.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-input px-6 py-3 font-semibold text-foreground hover:bg-accent transition-colors"
              >
                Back to Home
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
