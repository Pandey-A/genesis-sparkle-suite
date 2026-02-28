import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { buildCloudinaryVideoUrl } from "@/lib/cloudinary";

const doctorVideoUrl = buildCloudinaryVideoUrl("English_pitch_video_babygen_1_ckleoh");

const DoctorSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const videoElement = videoRef.current;
    let isInView = false;

    if (!sectionElement || !videoElement) {
      return;
    }

    const playWithSound = async () => {
      if (!videoRef.current) {
        return;
      }

      videoRef.current.muted = false;
      videoRef.current.volume = 1;

      try {
        await videoRef.current.play();
      } catch {
        // Browser blocked autoplay with sound. Will retry on user interaction.
      }
    };

    const handleUserInteraction = () => {
      if (!isInView) {
        return;
      }

      void playWithSound();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) {
          return;
        }

        if (entry.isIntersecting) {
          isInView = true;
          void playWithSound();
          return;
        }

        isInView = false;
        videoRef.current.pause();
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionElement);
    window.addEventListener("pointerdown", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated max-w-sm mx-auto lg:mx-0">
              <video
                ref={videoRef}
                src={doctorVideoUrl}
                className="w-full h-auto object-cover"
                controls
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 gradient-hero p-4">
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
            {/* <div className="w-1 h-12 gradient-hero rounded-full mb-4" /> */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Message from <span className="text-gradient">Dr. Bhavna Sharma</span>
            </h2>
            <p className="text-muted-foreground italic mb-6">
              IVF Specialist, Babygen IVF Centre, Pune
            </p>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                At the heart of Babygen IVF lies a passionate vision brought to life by Dr. Bhavna Sharma, 
                a dexterous and dedicated IVF specialist with more than 20 years of experience. Her journey 
                began at the prestigious Maulana Azad Medical College (MAMC), Delhi University, where she 
                completed her MBBS and DGO.
              </p>
              <p>
                Her pursuit of excellence took her to Europe for advanced learning, including refined 
                training at Landes-Frauen-Und Kinderklinik, Linz, a Masters course in Assisted Reproductive 
                Technology (ART), and a Diploma in Pelvic Endoscopy from Kiel University, Germany.
              </p>
              <p>
                With rich international exposure, Dr. Sharma pioneered Kalyan IVF Centre in Gwalior, 
                bringing hope to couples dreaming of parenthood. She has performed over 10,000 IVF and 
                ICSI procedures, resulting in more than 8,000 successful IVF pregnancies, blending science 
                with compassionate care.
              </p>
              <p>
                Babygen IVF opens a new chapter as Dr. Sharma extends her expertise to Pune and Gurugram, 
                with centres equipped with cutting-edge embryology labs, advanced diagnostics, and the latest 
                innovations in IVF, ICSI, egg freezing, and fertility preservation — ensuring personalized care 
                and excellent outcomes for aspiring parents.
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
