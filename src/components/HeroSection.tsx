import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mother-baby.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ service: "", name: "", email: "", phone: "" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy mother with baby at Babygen IVF Centre Pune"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-primary-foreground/20">
              IVF Centre in Pune
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              We Take Dreams &<br />
              <span className="text-rose-glow">Turn Them Into</span><br />
              Families
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-md font-body">
              IVF center that puts you first. Trusted by 8000+ couples across 14 countries.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gradient-hero text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-elevated"
            >
              IVF Consultation & Treatment
            </a>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-background rounded-2xl p-8 shadow-elevated max-w-md ml-auto"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">
              Book an Appointment
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Get Rs. 40,000 discount on IVF charges*
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">Select Service</option>
                <option value="ivf">IVF Treatment</option>
                <option value="icsi">ICSI Treatment</option>
                <option value="consultation">General Consultation</option>
                <option value="gynaecology">Gynaecologist</option>
              </select>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <input
                type="email"
                placeholder="Your Email Address (Optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <button
                type="submit"
                className="w-full gradient-hero text-primary-foreground py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
              >
                REQUEST CALLBACK
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
