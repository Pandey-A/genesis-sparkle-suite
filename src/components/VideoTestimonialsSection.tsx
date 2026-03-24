import { useRef } from "react";
import { Heart, Send, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { buildCloudinaryVideoUrl } from "@/lib/cloudinary";
import { useLanguage } from "@/context/LanguageContext";

const VideoTestimonialsSection = () => {
  const { t } = useLanguage();
  const videoItems = [
    { id: "WhatsApp_Video_2026-03-24_at_16.55.47_sdl5iz", views: t("videos.views1"), title: t("videos.title1"), treatment: t("videos.treatment1") },
    { id: "Testimonial-3_ri72v3", views: t("videos.views1"), title: t("videos.title1"), treatment: t("videos.treatment1") },
    { id: "Testimonial-6_dyfjjr", views: t("videos.views2"), title: t("videos.title2"), treatment: t("videos.treatment2") },
    { id: "Testimonial-2_e3asbp", views: t("videos.views3"), title: t("videos.title3"), treatment: t("videos.treatment3") },
    { id: "Testimonial-1_ffq4ou", views: t("videos.views4"), title: t("videos.title4"), treatment: t("videos.treatment4") },
    { id: "Testimonial-5_qalsln", views: t("videos.views5"), title: t("videos.title5"), treatment: t("videos.treatment5") },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = direction === "left" ? -420 : 420;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-20 bg-secondary/40" id="ivf-stories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <p className="inline-flex rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs md:text-sm font-semibold mb-4">
            {t("videos.badge")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
            {t("videos.title")}
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            {t("videos.subtitle")}
          </p>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="hidden md:flex absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-background/95 border border-border shadow-elevated rounded-full p-3 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label={t("videos.scrollLeft")}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="hidden md:flex absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-background/95 border border-border shadow-elevated rounded-full p-3 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label={t("videos.scrollRight")}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div 
            ref={scrollRef} 
            className="overflow-x-auto scrollbar-hide px-1 md:px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 md:gap-6 min-w-max pb-4 md:pb-6">
              {videoItems.map((video) => (
                <div
                  key={video.id}
                  className="relative snap-start w-[300px] md:w-[470px] aspect-video overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-black shadow-card shrink-0 border border-border/50 group/card"
                >
                  <video
                    src={buildCloudinaryVideoUrl(video.id)}
                    className="w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  <div className="absolute top-3 left-3 md:top-4 md:left-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-sm px-2.5 py-1 text-white text-[10px] md:text-xs font-semibold">
                    <Play className="h-3 w-3 fill-current" />
                    {t("videos.realStory")}
                  </div>

                  {/* UI Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/25 to-transparent">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] md:text-[12px] font-bold text-white/90 uppercase tracking-widest">
                        {video.treatment}
                      </span>
                      <span className="text-sm md:text-base font-bold text-white leading-tight">
                        {video.title}
                      </span>
                      <span className="text-[12px] md:text-[14px] font-semibold text-white bg-white/20 backdrop-blur-md rounded-full px-3 py-1 w-fit">
                        {video.views}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 md:gap-3 text-white">
                      <button className="p-2 bg-white/10 rounded-full hover:bg-rose-500 transition-colors" aria-label={t("videos.likeStory")}>
                        <Heart className="h-4 w-4 md:h-5 md:w-5 fill-current" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label={t("videos.shareStory")}>
                        <Send className="h-4 w-4 md:h-5 md:w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="md:hidden text-center text-xs text-muted-foreground mt-2">{t("videos.swipeHint")}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;