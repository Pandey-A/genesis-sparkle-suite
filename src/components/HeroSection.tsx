import React, { useState, useRef } from 'react';
import { 
  Phone, 
  PhoneCall, 
  Calendar, 
  User, 
  ChevronDown, 
  Menu, 
  X 
} from 'lucide-react';
import logo from '@/assets/Babygen-Logo.webp';
import { useLanguage } from '@/context/LanguageContext';

// Background image - ensure this path is correct in your project
import reception from "@/assets/hospital/babygen-ivf-reception.webp";

const LandingPage: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const navLinks = [
    { label: "Our Services", href: "#" },
    { label: "IVF Centres", href: "#" },
    { label: "Fertility Experts", href: "#" },
    { label: "Blog", href: "#" },
    { label: "IVF Stories", href: "#" },
    { label: "International Patients", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- NAVBAR SECTION --- */}
      {/* Updated to match the purple background and white text theme */}
    

      {/* --- HERO SECTION --- */}
      {/* overflow-visible is required to allow the stats bar to hang off the bottom */}
      <section className="relative min-h-[550px] flex items-center overflow-visible bg-[#FFF5F8]">
        
        {/* Background & Overlays */}
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
            
            {/* LEFT SIDE: Headings and Buttons */}
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#0054A6] leading-tight">
                Your Journey to <br />
                <span className="text-[#0054A6]">Parenthood Starts Here</span>
              </h1>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                Advanced fertility care designed to support every step of your parenthood 
                journey from medication-based treatments to advanced procedures like 
                IVF and ICSI, guided by experienced specialists who care.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:8938935353"
                  className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#0054A6] text-[#0054A6] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-sm"
                >
                  <PhoneCall size={22} />
                  Call Us
                </a>

                <a 
                  href="#form"
                  className="flex items-center gap-3 px-8 py-4 bg-[#D97017] text-white rounded-xl font-bold text-lg hover:bg-[#c26213] transition-all shadow-lg"
                >
                  <Calendar size={22} fill="currentColor" />
                  Book Consultation
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Appointment Form */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end" id="form">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-[420px] border border-gray-100">
                <h2 className="text-gray-800 font-bold text-xl mb-6">
                  Get Personalized Consultation!
                </h2>
                
                <form ref={formRef} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Enter Name" 
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="relative flex">
                    <div className="flex items-center gap-1 px-3 border border-r-0 border-gray-200 rounded-l-xl bg-gray-50 text-gray-600 font-bold">
                      <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-5" />
                      <span>+91</span>
                      <ChevronDown size={14} />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Enter Phone Number" 
                      className="w-full px-4 py-4 border border-gray-200 rounded-r-xl outline-none focus:ring-2 focus:ring-blue-100" 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#8E568F] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#7a497b] transition-all"
                  >
                    Submit
                  </button>

                  <div className="space-y-3 pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 accent-[#8E568F]" defaultChecked />
                      <span className="text-[11px] text-gray-400 leading-tight">
                        By continuing, you agree to our <span className="text-[#8E568F] font-bold underline">T&C</span> and <span className="text-[#8E568F] font-bold underline">Privacy Policies</span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="accent-green-500" defaultChecked />
                      <div className="flex items-center gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4" alt="WA" />
                        <span className="text-[11px] text-gray-500 font-bold">Opt-in for WhatsApp updates</span>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* --- STATS BAR: Aligned on the bottom line --- */}
          {/* translate-y-1/2 puts the bar exactly in the middle of the bottom edge */}
          <div className="absolute left-6 right-6 bottom-0 translate-y-1/2 z-20 max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-50 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl font-black text-gray-900">50+</span>
                <span className="text-lg font-bold text-[#8E568F]">Doctors Panel</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 md:py-0">
                <span className="text-3xl font-black text-gray-900">6+</span>
                <span className="text-lg font-bold text-[#8E568F]">Cities in India</span>
              </div>
              <div className="flex items-center justify-center gap-3 pt-4 md:pt-0">
                <span className="text-3xl font-black text-gray-900">20+ Years</span>
                <span className="text-lg font-bold text-[#8E568F]">Experienced Doctors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to prevent content from hiding behind the overlapping bar */}
      <div className="h-24 md:h-32 bg-white"></div>
    </div>
  );
};

export default LandingPage;