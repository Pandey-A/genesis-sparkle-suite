import { motion } from "framer-motion";
import { Baby, Heart, Users, Microscope } from "lucide-react";

const stats = [
  { icon: Baby, value: "8000+", label: "IVF Babies by our team", color: "text-primary" },
  { icon: Heart, value: "3 out of 4", label: "Couples Positive", color: "text-rose-glow" },
  { icon: Users, value: "100+", label: "IVF babies born every month", color: "text-teal-medical" },
  { icon: Microscope, value: "1 Lakh+", label: "ICSI cases experience", color: "text-gold-warm" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Best IVF / Test Tube Baby Center
          </h2>
          <p className="text-muted-foreground text-lg">Our team boasts of an incredible experience</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent mb-4 ${stat.color}`}>
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
