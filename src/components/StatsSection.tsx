import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import baby from "@/assets/871e4688f1c8b0b9992917e3a3ce76f4.jpg";
import positiveBg from "@/assets/403ba0ccfa16247f8c9c3c848907d6ce.jpg";
import icsiBg from "@/assets/7e4424a26dbd23310a3f9d55202bc81f.jpg";

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. HERO CARD (Text focused) */}
          <motion.div 
            className="md:col-span-7 bg-background rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center shadow-card border border-border/40"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.2] mb-6">
              IVF Success Stories <br />
              <span className="text-muted-foreground/60">An incredible experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mb-10">
              We have helped more than 8000 couples from 14 countries. We can help you too!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Explore
              </button>
              <button className="flex items-center gap-2 border border-border px-10 py-4 rounded-full font-bold bg-background hover:bg-accent transition-colors">
                Book An Appointment Now <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* 2. MAIN IMAGE CARD (The Anchor) */}
          <motion.div 
            className="md:col-span-5 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] min-h-[500px] shadow-card"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <img 
              src={baby}
              alt="IVF Baby" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-elevated border border-white/20">
              <div className="font-bold text-foreground text-xl leading-tight">
                8000+ IVF Babies till date by our team
              </div>
            </div>
          </motion.div>

          {/* 3. SMALL CARD A - Couples Positive */}
          <motion.div 
            className="md:col-span-3 relative group overflow-hidden rounded-[2.5rem] min-h-[320px] shadow-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <img
              src={positiveBg}
              alt="Positive couples"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md p-5 rounded-2xl shadow-elevated border border-white/20">
              <h3 className="text-xl font-bold text-foreground leading-tight">3 out of every 4</h3>
              <p className="text-sm font-medium text-muted-foreground">Couples Positive</p>
            </div>
          </motion.div>

          {/* 4. SMALL CARD B - ICSI Specialists (Now styled same as Card 3) */}
          <motion.div 
            className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem] min-h-[320px] shadow-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <img
              src={icsiBg}
              alt="ICSI Specialists"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md p-5 rounded-2xl shadow-elevated border border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">Expertise</p>
              <h3 className="text-xl font-bold text-foreground leading-tight">1 Lakh+ cases</h3>
              <p className="text-sm font-medium text-muted-foreground">ICSI Specialists</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;