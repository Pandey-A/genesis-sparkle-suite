import React, { useState } from 'react';
import { 
  MapPin,
  Phone, 
  Mail,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import logo from '@/assets/Babygen-Logo.webp';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { key: "header.nav.home", href: "/", hasDropdown: false, active: true },
    { key: "header.nav.services", href: "#", hasDropdown: true },
    { key: "header.nav.whyUs", href: "#", hasDropdown: false },
    { key: "header.nav.ourTeam", href: "#", hasDropdown: false },
    { key: "header.nav.gallery", href: "#", hasDropdown: false },
    { key: "header.nav.successStories", href: "#", hasDropdown: false },
    { key: "header.nav.blog", href: "#", hasDropdown: false },
    { key: "header.nav.contactUs", href: "/contact-us", hasDropdown: false },
  ];

  return (
    <header className="w-full font-serif sticky top-0 z-50 shadow-sm">
      {/* Top Bar: Pink Background */}
      <div className="bg-[#E6518B] text-white py-3 md:py-6 px-4 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Phone */}
        <div className="flex items-center gap-2">
          <div className="bg-white p-2 rounded-full text-[#D15B8F]">
            <Phone size={18} className="md:w-5 md:h-5" fill="currentColor" />
          </div>
          <a href="tel:07314855000" className="text-md md:text-sm font-bold tracking-wide">
            7314855000
          </a>
        </div>

        {/* Center: Social + Email */}
        <div className="hidden xl:flex items-center gap-3">
          <SocialIconSvg name="instagram" href="https://www.instagram.com/VedanshaHospital" />
          <SocialIconSvg name="youtube" href="https://www.youtube.com/channel/UCmEbG7AKy3BTDej328gAshQ" />
          <SocialIconSvg name="facebook" href="https://www.facebook.com/VedanshaHospital/" />
          <SocialIconSvg name="google" href="#" />
        </div>
        <a href="mailto:babygenivf@gmail.com" className="hidden lg:flex items-center gap-2 text-sm md:text-[15px] font-bold hover:opacity-80 transition">
          <Mail size={32} />
          <span className='text-sm md:text-md'>babygenivf@gmail.com</span>
        </a>

        {/* Right Side: Address, Appointment & Language */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-white p-2.5 rounded-full shadow-md">
              <MapPin size={28} className="text-[#D15B8F]" fill="none" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-[12px] font-bold leading-tight">{t("header.address.line1")}</span>
              <span className="text-xs md:text-[9px] text-white/80">{t("header.address.line2")}</span>
            </div>
          </div>
          <a href="#" className="text-sm md:text-md font-bold hover:opacity-80 transition hidden sm:block">
            {t("header.bookAppointment")}
          </a>
          
          <div className="relative group">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "hi" | "mr")}
              className="bg-white border border-gray-400 text-black text-xs md:text-sm py-1 pl-2 pr-8 appearance-none cursor-pointer focus:outline-none min-w-[100px] md:min-w-[140px]"
            >
              <option value="en">{t("lang.english")}</option>
              <option value="hi">{t("lang.hindi")}</option>
              <option value="mr">{t("lang.marathi")}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={16} className="text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white py-4 px-4 md:px-12 border-b">
        <div className="max-w-full mx-auto flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
            <img 
              src={logo}
              alt="Babygen IVF Centre Logo" 
              className="h-10 md:h-16 w-auto object-contain"
            />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-md md:text-md font-bold">{t("header.hospitalName")}</span>
                <span className="text-xs md:text-xs text-[#D15B8F] font-semibold">{t("header.location")} | {t("header.location2")}</span>
              </div>
              {/* <p className="sm:text-xs md:text- text-gray-600">Hospital</p> */}
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden xl:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.key} className="relative group">
                <a 
                  href={link.href} 
                  className={`flex items-center gap-1 text-md lg:text-md font-bold transition duration-300 ${
                    link.active ? 'text-[#D15B8F]' : 'text-gray-800 hover:text-[#D15B8F]'
                  }`}
                >
                  {t(link.key)}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  )}
                </a>
                
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#D15B8F]">{t("header.serviceDetails")}</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#D15B8F]">{t("header.viewAll")}</a>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="xl:hidden text-[#D15B8F] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Sidebar Navigation */}
        <div className={`xl:hidden fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
          <div 
            className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-500"><X size={28} /></button>
              </div>
              <ul className="flex flex-col gap-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <a 
                      href={link.href} 
                      className={`text-xl font-medium ${link.active ? 'text-[#D15B8F]' : 'text-gray-800'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t">
                  <a href="tel:07314855000" className="flex items-center gap-3 text-[#D15B8F] font-bold text-lg">
                    <Phone size={20} fill="currentColor" /> 0731 485 5000
                 </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const SocialIconSvg = ({ name, href }: { name: string; href: string }) => {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg className="w-6 h-18" fill="currentColor" viewBox="0 0 24 24 ">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24 ">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24 ">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24 ">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    ),
    google: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24 ">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.91 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    ),
  };

  if (name === "linkedin") return null;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="bg-white text-[#D15B8F] rounded-full w-8 md:w-10 h-8 md:h-10 flex items-center justify-center hover:bg-gray-100 transition shadow-sm"
    >
      {icons[name]}
    </a>
  );
};

export default Navbar;