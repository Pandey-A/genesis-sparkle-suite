import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Globe2, Microscope } from "lucide-react";
import { buildCloudinaryVideoUrl } from "@/lib/cloudinary";
import { useLanguage } from "@/context/LanguageContext";

const doctorVideoUrl = buildCloudinaryVideoUrl("English_pitch_video_babygen_1_ckleoh");

const DoctorSection = () => {
  const { t } = useLanguage();
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
    <section id="about" ref={sectionRef} className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="lg:hidden text-center mb-6">
          <p className="inline-flex rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold mb-3">
            {t("doctor.expertMessage")}
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground leading-tight">
            {t("doctor.heading.prefix")} <span className="text-gradient">{t("doctor.heading.name")}</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            {t("doctor.degrees")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated max-w-sm mx-auto lg:mx-0 border border-border/60 bg-card">
              <video
                ref={videoRef}
                src={doctorVideoUrl}
                className="w-full h-auto object-cover"
                controls
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 gradient-hero p-4 md:p-5">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                  {t("doctor.name")}
                </h3>
                <p className="mt-1 text-primary-foreground/90 text-[10px] md:text-xs leading-relaxed font-medium">
                  {/* {t("doctor.degrees")} */}
                </p>
                <p className="text-primary-foreground/85 text-xs md:text-sm">
                  {t("doctor.position")}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3 max-w-sm mx-auto lg:mx-0">
              <div className="rounded-xl border border-border bg-card px-2 py-2 md:px-3 md:py-2.5 text-center">
                <p className="text-base md:text-lg font-extrabold text-foreground">20+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-semibold">{t("doctor.stat.years")}</p>
              </div>
              <div className="rounded-xl border border-border bg-card px-2 py-2 md:px-3 md:py-2.5 text-center">
                <p className="text-base md:text-lg font-extrabold text-foreground">10K+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-semibold">{t("doctor.stat.ivficsi")}</p>
              </div>
              <div className="rounded-xl border border-border bg-card px-2 py-2 md:px-3 md:py-2.5 text-center">
                <p className="text-base md:text-lg font-extrabold text-foreground">8K+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-semibold">{t("doctor.stat.successes")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pr-4"
          >
            <p className="hidden lg:inline-flex rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs md:text-sm font-semibold mb-4">
              {t("doctor.expertMessage")}
            </p>

            <h2 className="hidden lg:block font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {t("doctor.heading.prefix")} <span className="text-gradient">{t("doctor.heading.name")}</span>
            </h2>
            <p className="hidden lg:block -mt-1 mb-4 text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-3xl">
              {t("doctor.degrees")}
            </p>
            <p className="text-muted-foreground italic mb-5 md:mb-6">
              {t("doctor.subtitle")}
            </p>

            <div className="grid sm:grid-cols-3 gap-2 md:gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs md:text-sm font-semibold text-foreground">
                <Award className="h-4 w-4 text-primary" />
                {t("doctor.badge.years")}
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs md:text-sm font-semibold text-foreground">
                <Microscope className="h-4 w-4 text-primary" />
                {t("doctor.badge.ivficsi")}
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs md:text-sm font-semibold text-foreground">
                <Globe2 className="h-4 w-4 text-primary" />
                {t("doctor.badge.global")}
              </div>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
              <p>
                {t("doctor.p1.start")} <strong className="text-foreground">{t("doctor.p1.h1")}</strong>{" "}
                {t("doctor.p1.mid1")} <strong className="text-foreground">{t("doctor.p1.h2")}</strong>{" "}
                {t("doctor.p1.mid2")} <strong className="text-foreground">{t("doctor.p1.h3")}</strong>.
              </p>
              <p>
                {t("doctor.p2.start")} <strong className="text-foreground">{t("doctor.p2.h1")}</strong>{" "}
                {t("doctor.p2.mid1")} <strong className="text-foreground">{t("doctor.p2.h2")}</strong>{" "}
                {t("doctor.p2.mid2")} <strong className="text-foreground">{t("doctor.p2.h3")}</strong>.
              </p>
              <p>
                {t("doctor.p3.start")} <strong className="text-foreground">{t("doctor.p3.h1")}</strong>{" "}
                {t("doctor.p3.mid1")} <strong className="text-foreground">{t("doctor.p3.h2")}</strong>{" "}
                {t("doctor.p3.mid2")} <strong className="text-foreground">{t("doctor.p3.h3")}</strong>{" "}
                {t("doctor.p3.end")}
              </p>
              <p>
                {t("doctor.p4.start")} <strong className="text-foreground">{t("doctor.p4.h1")}</strong>{" "}
                {t("doctor.p4.mid1")} <strong className="text-foreground">{t("doctor.p4.h2")}</strong>, {t("doctor.p4.end")}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex mt-8 gradient-hero text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              {t("doctor.cta")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
