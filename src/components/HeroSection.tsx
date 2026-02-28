"use client";
import { FC, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Hospital Background Assets
import lab from "@/assets/hospital/babygen-ivf-lab_-1.webp";
import lobby from "@/assets/hospital/babygen-ivf-lobby.webp";
import lounge from "@/assets/hospital/babygen-ivf-lounge.webp";
import opd from "@/assets/hospital/babygen-ivf-opd.webp";
import ot from "@/assets/hospital/babygen-ivf-OT-_.webp";
import pune from "@/assets/hospital/babygen-ivf-pune_-1.webp";
import reception from "@/assets/hospital/babygen-ivf-reception.webp";

// Foreground Asset
import babyImg from "@/assets/hospital/baby.png";

const DESTINATION_EMAIL = "vedanshahospitalnagpur@gmail.com";
const bgImages = [pune, reception, lobby, lab, ot, lounge, opd];

const Hero: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [currentBg, setCurrentBg] = useState(0);
  
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Restoration of your background carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Restored your original emailjs logic with the language context
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus(t("hero.status.sending"));
    setStatusType("");

    const formData = new FormData(formRef.current);

    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email") || "Not provided",
      from_phone: formData.get("from_phone"),
      service_type: formData.get("service_type"),
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_9vp45rs",
        "template_8ppt4vd",
        templateParams,
        "vjx9LFYnhaXrb7FFd"
      )
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
      });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-[650px] flex items-center font-serif">
      
      {/* 1. BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#FDE2E4]/85 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          
          {/* LEFT CONTENT: TEXT & MIDDLE IMAGE */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-end gap-0">
            <div className="md:w-3/5 space-y-6 pb-16 md:pb-28">
              <h1 className="text-[40px] md:text-[54px] lg:text-[64px] font-black text-[#9B2B4E] leading-[1.1]">
                {t("hero.title")}
              </h1>
              <p className="text-[#1A1A1A] text-2xl md:text-3xl font-bold leading-tight">
                {t("hero.subtitle")}
              </p>
              
              {/* Promo Badge */}
              <div className="inline-block border-2 border-[#9B2B4E] rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="bg-[#9B2B4E] h-4 w-full"></div>
                <div className="px-6 py-3 text-[#9B2B4E] font-black text-lg md:text-xl uppercase">
                  {t("hero.badge")}
                </div>
              </div>
            </div>
            
            {/* MIDDLE IMAGE: Anchored to the bottom between Text and Form */}
            {/* <div className="hidden lg:flex md:w-2/5 justify-center items-end self-end">
              <motion.img 
                src={babyImg} 
                alt="IVF Baby" 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[440px] drop-shadow-2xl mb-[-5px] z-20" 
              />
            </div> */}
          </div>

          {/* RIGHT CONTENT: THE FORM */}
          <div className="lg:col-span-4 w-[450px]py-10">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-white">
              <h2 className="text-[#9B2B4E] font-black text-center text-3xl md:text-3xl mb-8 leading-tight uppercase">
                {t("hero.bookAppointment")}
              </h2>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <select 
                  name="service_type"
                  className="w-full p-5 border border-gray-200 rounded-xl bg-gray-50 text-gray-600 font-bold focus:ring-2 focus:ring-[#9B2B4E]/20 outline-none appearance-none"
                  required
                >
                  <option value="">{t("hero.selectService")}</option>
                  <option value="IVF Treatment">{t("hero.service.ivf")}</option>
                  <option value="Consultation">{t("hero.service.consultation")}</option>
                  <option value="Gynaecologist">{t("hero.service.gynaecologist")}</option>
                </select>

                <input 
                  type="text" 
                  name="from_name"
                  placeholder={t("hero.input.name")} 
                  className="w-full p-5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9B2B4E]/20 outline-none font-bold"
                  required 
                />

                <input 
                  type="email" 
                  name="from_email"
                  placeholder={t("hero.input.email")} 
                  className="w-full p-5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9B2B4E]/20 outline-none font-bold"
                />

                <input 
                  type="tel" 
                  name="from_phone"
                  placeholder={t("hero.input.phone")} 
                  className="w-full p-5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9B2B4E]/20 outline-none font-bold" 
                  required 
                />

                <button 
                  type="submit"
                  className="w-full bg-[#46A2C1] text-white py-5 rounded-xl font-black text-xl hover:bg-[#3488A5] transition-all transform hover:scale-[1.01] shadow-lg uppercase tracking-wider"
                >
                  {t("hero.requestCallback")}
                </button>

                {status && (
                  <p className={`text-center font-bold text-sm p-3 rounded-xl mt-4 ${
                    statusType === "success" ? "bg-green-100 text-green-700" : 
                    statusType === "error" ? "bg-red-100 text-red-700" : 
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;