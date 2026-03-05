import akashwani from "@/assets/marque/akashwani.webp";
import amarUjala from "@/assets/marque/amar-ujala.webp";
import dainikBhaskar from "@/assets/marque/dainik-bhaskar.webp";
import dainikJagaran from "@/assets/marque/dainik-jagaran.webp";
import doordarshan from "@/assets/marque/doordarshan.webp";
import lemonBabygen from "@/assets/marque/Lemon-babygen-ivf.webp";
import naiDuniya from "@/assets/marque/nai-duniya.webp";
import radio from "@/assets/marque/radio.webp";
import toi from "@/assets/marque/toi.webp";
import { useLanguage } from "@/context/LanguageContext";

const marqueeLogos = [
  { src: akashwani, alt: "Akashwani" },
  { src: amarUjala, alt: "Amar Ujala" },
  { src: dainikBhaskar, alt: "Dainik Bhaskar" },
  { src: dainikJagaran, alt: "Dainik Jagaran" },
  { src: doordarshan, alt: "Doordarshan" },
  { src: lemonBabygen, alt: "Lemon Babygen IVF" },
  { src: naiDuniya, alt: "Nai Duniya" },
  { src: radio, alt: "Radio" },
  { src: toi, alt: "Times of India" },
];

const MarqueeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-3xl font-bold text-[#c94c92] mb-8">
          {t("marquee.title")}
        </h2>
      </div>
      <div className="marquee-track">
        {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
          <div key={`${logo.alt}-${index}`} className="marquee-item">
            <img src={logo.src} alt={logo.alt} className="h-20 md:h-24 w-auto rounded-lg object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
