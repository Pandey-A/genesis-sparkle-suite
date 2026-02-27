import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Award, Syringe, Snowflake, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "8000+ IVF Babies",
    desc: "By our team across 14 countries worldwide",
  },
  {
    icon: Award,
    title: "3 out of 4 Couples Positive",
    desc: "In first attempt — amongst India's highest success rates",
  },
  {
    icon: FlaskConical,
    title: "International Standard Labs",
    desc: "Highly equipped IVF lab maintained with international standards",
  },
  {
    icon: Syringe,
    title: "Best Quality Treatment",
    desc: "Best quality injections and disposables for highest embryo quality",
  },
  {
    icon: Snowflake,
    title: "Advanced Freezing Facility",
    desc: "State-of-the-art embryo and egg freezing capabilities",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    desc: "Doctors trained in Germany & Austria with 1 lakh+ ICSI experience",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose <span className="text-gradient">Babygen IVF</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            India's highest IVF success rates backed by decades of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
