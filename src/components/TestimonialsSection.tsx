import { motion } from "framer-motion";
import { Award, ShieldCheck, FileCheck } from "lucide-react";

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

const certificates = [
  { src: cert1, title: "Medical Accreditation" },
  { src: cert2, title: "IVF Specialization" },
  { src: cert3, title: "Clinical Excellence" },
  { src: cert4, title: "International Standards" },
  { src: cert5, title: "Laboratory Certification" },
  { src: cert6, title: "Quality Assurance" },
  { src: cert7, title: "Healthcare Compliance" },
  { src: cert8, title: "Safety Protocol" },
  { src: cert9, title: "Advanced Embryology" },
  { src: cert10, title: "Professional Affiliation" },
  { src: cert11, title: "Patient Care Award" },
  { src: cert12, title: "Innovation in IVF" },
];

const CertificatesSection = () => {
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
            Certified Excellence
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & Affiliations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our center adheres to the highest international standards of medical safety and ethical practices.
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
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <FileCheck className="text-white mb-3" size={32} />
                  <p className="text-white font-bold text-sm uppercase tracking-wider">
                    {cert.title}
                  </p>
                </div>
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
             <Award className="text-primary" /> ICMR ENROLLED
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-xl">
             <ShieldCheck className="text-primary" /> ISO CERTIFIED
           </div>
           <div className="flex items-center gap-2 font-display font-bold text-xl">
             <FileCheck className="text-primary" /> ISAR AFFILIATED
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;