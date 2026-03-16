import React, { useState } from 'react';
import { 
  Phone, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import logo from '@/assets/Babygen-Logo.webp';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links updated to match the clean, professional style
  const navLinks = [
    { key: "header.nav.doctors", href: "#", hasDropdown: false },
    { key: "header.nav.centers", href: "#", hasDropdown: true },
    { key: "header.nav.services", href: "#", hasDropdown: true },
    { key: "header.nav.blog", href: "#", hasDropdown: false },
    { key: "header.nav.stories", href: "#", hasDropdown: false },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm font-sans">
      {/* Top thin accent line (as seen in premium medical sites) */}
      <div className="h-1 bg-[#F3F4F6]"></div>

      <nav className="max-w-[1440px] mx-auto px-4 md:px-12 h-24 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <img 
            src={logo}
            alt="Babygen IVF Centre Logo" 
            className="h-14 md:h-16 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col border-l pl-3 border-gray-200">
            <span className="text-md font-bold text-[#1A365D] leading-tight">
              {t("header.hospitalName") || "BABYGEN"}
            </span>
            <span className="text-[11px] text-[#D15B8F] font-semibold uppercase tracking-wider">
              {t("header.location") || "IVF & FERTILITY CENTER"}
            </span>
          </div>
        </div>

        {/* 2. Desktop Navigation & Phone Pill */}
        <div className="hidden xl:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.key} className="relative group">
                <a 
                  href={link.href} 
                  className="flex items-center gap-1 text-[16px] font-medium text-gray-700 hover:text-[#D15B8F] transition-colors"
                >
                  {t(link.key)}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Phone Number Pill Component */}
          {/* <a 
            href="tel:07314855000" 
            className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-full pl-1 pr-6 py-1 hover:shadow-md transition-all group"
          >
            <div className="bg-[#8E568F] p-2 rounded-full text-white group-hover:bg-[#D15B8F] transition-colors">
              <Phone size={18} fill="currentColor" />
            </div>
            <span className="text-[#8E568F] group-hover:text-[#D15B8F] font-bold text-lg tracking-tight">
              07314855000
            </span>
          </a> */}
        </div>

        {/* 3. Language & Appointment Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative border rounded-md px-3 py-2 flex items-center min-w-[110px] bg-gray-50">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="appearance-none bg-transparent text-sm font-medium outline-none cursor-pointer pr-6 w-full text-gray-700"
            >
              <option value="en">{t("lang.english")}</option>
              <option value="hi">{t("lang.hindi")}</option>
              <option value="mr">{t("lang.marathi")}</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 pointer-events-none text-gray-500" />
          </div>

          <a 
            href="#" 
            className="bg-gradient-to-r from-[#B55D7B] to-[#D15B8F] text-white px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t("common.bookAppointment")}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-[#D15B8F] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`xl:hidden fixed inset-0 z-50 bg-black/50 transition-opacity ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
        <div 
          className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400"><X size={28} /></button>
            </div>
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                    {t(link.key)}
                    {link.hasDropdown && <ChevronDown size={18} />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4">
              <a href="tel:07314855000" className="flex items-center justify-center gap-3 py-3 border-2 border-[#8E568F] rounded-full text-[#8E568F] font-bold">
                <Phone size={18} fill="currentColor" /> 07314855000
              </a>
              <a href="#" className="bg-[#D15B8F] text-white text-center py-4 rounded-md font-bold">
                {t("common.bookAppointment")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;