import { motion } from "framer-motion";
import { Award, ShieldCheck, FileCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Importing all certificates
import cert1 from "@/assets/certificates/1-1-1024x768.webp";
import cert2 from "@/assets/certificates/2-2-1024x768.webp";
import cert3 from "@/assets/certificates/3-1-1024x768.webp";
import cert4 from "@/assets/certificates/4-1-1024x768.webp";
import cert5 from "@/assets/certificates/5-1-1024x768.webp";
import cert6 from "@/assets/certificates/6-1-1024x768.webp";
import cert7 from "@/assets/certificates/7-1024x768.webp";
import cert8 from "@/assets/certificates/8-1024x768.webp";
import cert9 from "@/assets/certificates/9-1024x768.webp";
import cert10 from "@/assets/certificates/10-1024x768.webp";
import cert11 from "@/assets/certificates/11-1024x768.webp";
import cert12 from "@/assets/certificates/12-1024x768.webp";

const CertificatesSection = () => {
  const { t } = useLanguage();
  const certificates = [
    { src: cert1, title: t("cert.card1") },
    { src: cert2, title: t("cert.card2") },
    { src: cert3, title: t("cert.card3") },
    { src: cert4, title: t("cert.card4") },
    { src: cert5, title: t("cert.card5") },
    { src: cert6, title: t("cert.card6") },
    { src: cert7, title: t("cert.card7") },
    { src: cert8, title: t("cert.card8") },
    { src: cert9, title: t("cert.card9") },
    { src: cert10, title: t("cert.card10") },
    { src: cert11, title: t("cert.card11") },
    { src: cert12, title: t("cert.card12") },
  ];

  return (
    <section id="certificates" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <ShieldCheck size={18} />
            {t("cert.badge")}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("cert.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("cert.subtitle")}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[4/3] bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50">
                {/* Certificate Image */}
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-60"
        >
           {/* Add any specific small logos here if needed */}
           <div className="flex items-center gap-2 font-display font-bold text-xl">
             <Award className="text-primary" /> {t("cert.badge1")}
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-xl">
             <ShieldCheck className="text-primary" /> {t("cert.badge2")}
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-xl">
             <FileCheck className="text-primary" /> {t("cert.badge3")}
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;