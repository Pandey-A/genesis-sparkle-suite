import { motion } from "framer-motion";
import { Stethoscope, Baby, Microscope, ScanLine, Scissors, FlaskConical, HeartPulse, Syringe } from "lucide-react";

const services = [
  { icon: FlaskConical, title: "IVF Treatment" },
  { icon: Microscope, title: "ICSI" },
  { icon: Syringe, title: "IUI Treatment" },
  { icon: ScanLine, title: "Sonography" },
  { icon: Scissors, title: "Laparoscopy" },
  { icon: Stethoscope, title: "Hysteroscopy" },
  { icon: Baby, title: "Painless Childbirth" },
  { icon: HeartPulse, title: "Fertility Preservation" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Specialties
          </h2>
          <p className="text-muted-foreground text-lg">Comprehensive fertility and reproductive care</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-accent/50 hover:bg-accent transition-colors duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-background shadow-card flex items-center justify-center mb-4 text-primary group-hover:gradient-hero group-hover:text-primary-foreground transition-all duration-300">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
