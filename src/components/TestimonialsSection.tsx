import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Harsh Rajput",
    text: "Dr. Bhavna Sharma is such a great doctor. She is very clear on how she will proceed and does not confuse you. She is very straightforward and makes it very simple for you to understand the procedure.",
  },
  {
    name: "Mamta Sikarwar",
    text: "Very well mannered staff, good coordination with patients. Dr. Bhavna Sharma ma'am assisted very well and took good care of patients. Highly recommend!",
  },
  {
    name: "Ruchi Rathour",
    text: "Their IVF expertise, care and advanced treatment options provided us with a successful and fulfilling experience. We are forever grateful to the entire team.",
  },
  {
    name: "Raju Singh",
    text: "I had a pregnancy in the first attempt. The staff is very helpful — I have called them so many times, even in the night. I am very thankful to the entire team.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            IVF Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">Happy families created at Babygen IVF</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-card relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold-warm text-gold-warm" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-semibold text-foreground text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
