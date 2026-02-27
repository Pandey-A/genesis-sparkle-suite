import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-portrait.jpg";

const DoctorSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated max-w-md mx-auto lg:mx-0">
              <img
                src={doctorImage}
                alt="Dr. Bhavna Sharma - IVF Expert"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 gradient-hero p-4">
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  Dr. Bhavna Sharma
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  MBBS, DGO | IVF & Infertility Specialist
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-1 h-12 gradient-hero rounded-full mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Message from <span className="text-gradient">Dr. Bhavna Sharma</span>
            </h2>
            <p className="text-muted-foreground italic mb-6">
              IVF Specialist, Babygen IVF Centre, Pune
            </p>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                At Babygen IVF, our treatments are guided by globally accepted medical protocols and 
                evidence-based fertility practices. Every couple receives personalised care based on a 
                thorough evaluation and a structured, science-driven approach.
              </p>
              <p>
                With more than <strong className="text-foreground">20 years of experience</strong> and training from 
                <strong className="text-foreground"> Germany and Austria</strong>, I have performed over 10,000 IVF 
                and ICSI procedures, resulting in more than 8,000 successful pregnancies.
              </p>
              <p>
                We believe fertility treatment must be ethical, transparent, and patient-focused. Our goal 
                is not just achieving pregnancy, but ensuring safe, responsible, and medically sound outcomes.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex mt-8 gradient-hero text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
