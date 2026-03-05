"use client";
import React, { useEffect, useRef, useState } from 'react';
import { 
  PhoneCall, 
  Calendar, 
  User, 
  ChevronDown 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';

// Assets
import reception from "@/assets/hospital/babygen-ivf-reception.webp";

// EmailJS Configuration
const PUBLIC_KEY = "xtY2ROIREFxFMiKHw";
const SERVICE_ID = "service_3fgv0du";
const TEMPLATE_ID = "template_d5e6qyy";
const DESTINATION_EMAIL = "babygenivfpune@gmail.com"; // Updated as requested

// --- Helper Component: Animated Counter ---
type AnimatedCountProps = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const AnimatedCount: React.FC<AnimatedCountProps> = ({
  end,
  suffix = '',
  duration = 1200,
  className,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let animationFrameId = 0;
    const startTime = performance.now();
    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) animationFrameId = requestAnimationFrame(updateCount);
    };
    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, end, hasStarted]);

  return (
    <span ref={numberRef} className={`inline-block transition-all duration-500 ${hasStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${className ?? ""}`}>
      {count}{suffix}
    </span>
  );
};

// --- Main Component: LandingPage ---
const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleHeroFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus(t("hero.status.sending"));
    setStatusType("");

    const formData = new FormData(formRef.current);

    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: formData.get("name"),
      from_email: formData.get("email") || "Not provided",
      from_phone: formData.get("phone"),
      service_type: formData.get("service"),
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus(t("hero.status.success"));
        setStatusType("success");
        formRef.current?.reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        setStatus(t("hero.status.failed"));
        setStatusType("error");
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[550px] flex items-center overflow-visible bg-[#FFF5F8]">
        <div className="absolute inset-0 z-0">
          <img 
            src={reception} 
            className="w-full h-full object-cover opacity-30" 
            alt="Clinic Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-5 pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#0054A6] leading-tight">
                {t("hero.mainHeadingTop")} <br />
                <span className="text-[#0054A6]">{t("hero.mainHeadingBottom")}</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                {t("hero.description")}
              </p>
              <div className="inline-flex items-center rounded-full bg-[#D97017]/10 border border-[#D97017]/30 px-4 py-2">
                <span className="text-sm md:text-base font-bold text-[#D97017]">
                  {t("common.offerLine")}
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:7314855000" className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#0054A6] text-[#0054A6] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-sm">
                  <PhoneCall size={22} /> {t("common.callUs")}
                </a>
                <a href="#form" className="flex items-center gap-3 px-8 py-4 bg-[#D97017] text-white rounded-xl font-bold text-lg hover:bg-[#c26213] transition-all shadow-lg">
                  <Calendar size={22} fill="currentColor" /> {t("common.bookConsultation")}
                </a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end" id="form">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-[420px] border border-gray-100">
                <h2 className="text-gray-800 font-bold text-xl mb-6">{t("hero.form.heading")}</h2>
                <form ref={formRef} onSubmit={handleHeroFormSubmit} className="space-y-4">
                  <div className="relative">
                    <select name="service" defaultValue="" className="w-full px-4 py-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 appearance-none bg-white text-gray-700" required>
                      <option value="" disabled>{t("hero.selectService")}</option>
                      <option value="IVF Treatment">{t("hero.service.ivf")}</option>
                      <option value="Consultation">{t("hero.service.consultation")}</option>
                      <option value="Gynaecologist">{t("hero.service.gynaecologist")}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" name="name" placeholder={t("hero.input.name")} className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100" required />
                  </div>
                  <div className="relative flex">
                    <div className="flex items-center gap-1 px-3 border border-r-0 border-gray-200 rounded-l-xl bg-gray-50 text-gray-600 font-bold">
                      <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-5" />
                      <span>+91</span>
                    </div>
                    <input type="tel" name="phone" placeholder={t("hero.input.phone")} className="w-full px-4 py-4 border border-gray-200 rounded-r-xl outline-none focus:ring-2 focus:ring-blue-100" required />
                  </div>
                  <input type="email" name="email" placeholder={t("hero.input.email")} className="w-full px-4 py-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100" />
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#8E568F] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#7a497b] transition-all disabled:opacity-50">
                    {isSubmitting ? status : t("common.submit")}
                  </button>
                  {status && (
                    <p className={`text-center font-bold text-sm p-2 rounded-md ${statusType === "success" ? "bg-green-100 text-green-700" : statusType === "error" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* STATS BAR */}
          <div className="relative mt-8 lg:mt-0 lg:absolute lg:left-3 lg:right-3 lg:bottom-0 lg:translate-y-1/2 z-20 max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-50 p-4 md:p-8 grid grid-cols-1 sm:grid-cols-3 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <div className="flex flex-col items-center justify-center gap-1 py-4 text-center">
                <AnimatedCount end={8000} suffix="+" className="text-3xl md:text-4xl font-black text-gray-900" />
                <span className="text-sm md:text-base font-bold text-[#8E568F]">{t("hero.stats.bornTillDate")}</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 py-4 text-center">
                <AnimatedCount end={100} suffix="+" className="text-3xl md:text-4xl font-black text-gray-900" />
                <span className="text-sm md:text-base font-bold text-[#8E568F]">{t("hero.stats.everyMonth")}</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 py-4 text-center">
                <AnimatedCount end={20} suffix="+" className="text-3xl md:text-4xl font-black text-gray-900" />
                <span className="text-sm md:text-base font-bold text-[#8E568F]">{t("hero.stats.ivfExperience")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hidden lg:block h-24 md:h-32 bg-white"></div>
    </div>
  );
};

export default LandingPage;