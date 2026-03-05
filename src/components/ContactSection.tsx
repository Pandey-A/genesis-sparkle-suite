"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/context/LanguageContext";

// EmailJS Configuration
const PUBLIC_KEY = "xtY2ROIREFxFMiKHw";
const SERVICE_ID = "service_3fgv0du";
const TEMPLATE_ID = "template_d5e6qyy";
const DESTINATION_EMAIL = "babygenivfpune@gmail.com";

const ContactSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    // Map state to EmailJS Template Parameters
    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: formData.name,
      from_email: formData.email || "Not provided",
      from_phone: formData.phone,
      service_type: formData.service,
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      .then(() => {
        setFormData({ service: "", name: "", email: "", phone: "" });
        navigate("/thank-you");
      })
      .catch((error) => {
        setSubmitError(t("hero.status.failed"));
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
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
              <option value="">{t("hero.selectService")}</option>
              <option value="IVF Treatment">{t("hero.service.ivf")}</option>
              <option value="Consultation">{t("hero.service.consultation")}</option>
              <option value="Gynaecologist">{t("hero.service.gynaecologist")}</option>
            </select>
            <input
              type="text"
              placeholder={t("contact.input.name")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <input
              type="email"
              placeholder={t("contact.input.email")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder={t("contact.input.phone")}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-hero text-primary-foreground py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? t("hero.status.sending") : t("contact.submit")}
            </button>

            {submitError ? (
              <p className="text-sm text-red-500 font-medium text-center">{submitError}</p>
            ) : null}
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
                { icon: Phone, label: t("contact.info.phone"), value: "731 485 5000", href: "tel:7314855000" },
                { icon: Mail, label: t("contact.info.email"), value: "babygenivfpune@gmail.com", href: "mailto:babygenivfpune@gmail.com" },
                { icon: MapPin, label: t("contact.info.address"), value: t("contact.info.addressValue") },
                { icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue") },
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
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8"
        >
          <div className="gradient-hero rounded-2xl p-6 text-center">
            <p className="text-primary-foreground font-display text-xl font-bold mb-2">
              {t("common.saveUpto")}
            </p>
            <p className="text-primary-foreground/80 text-sm mb-4">{t("common.slotsLeft")}</p>
            <a
              href="https://wa.me/917314855000?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-background text-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-accent transition-colors"
            >
              {t("common.chatWhatsapp")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;