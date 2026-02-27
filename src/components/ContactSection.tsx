import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
    setFormData({ service: "", name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">Request a consultation today</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
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
            <textarea
              placeholder="Message / Requirements"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-hero text-primary-foreground py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Send Request
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-accent/50 rounded-2xl p-6 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "0731 485 5000 / 9270 933 119", href: "tel:07314855000" },
                { icon: Mail, label: "Email", value: "babygenivf@gmail.com", href: "mailto:babygenivf@gmail.com" },
                { icon: MapPin, label: "Address", value: "2nd Floor, Kumar Prism, Amanora Park Town, Hadapsar, Pune" },
                { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA banner */}
            <div className="gradient-hero rounded-2xl p-6 text-center">
              <p className="text-primary-foreground font-display text-xl font-bold mb-2">
                Rs. 40,000 Discount on IVF*
              </p>
              <p className="text-primary-foreground/80 text-sm mb-4">Only 3 slots left! Book now.</p>
              <a
                href="https://wa.me/919270933119?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-background text-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-accent transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
