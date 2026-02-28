import { useRef } from "react";
import { Heart, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { buildCloudinaryVideoUrl } from "@/lib/cloudinary";

const videoItems = [
  { id: "Testimonial-3_ri72v3", views: "15.4K Views" },
  { id: "Testimonial-6_dyfjjr", views: "7.4K Views" },
  { id: "Testimonial-2_e3asbp", views: "5.3K Views" },
  { id: "Testimonial-1_ffq4ou", views: "27.5K Views" },
  { id: "Testimonial-5_qalsln", views: "13.6K Views" },
];

const VideoTestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!scrollRef.current) return;

    // Increased scroll amount to match the wider landscape cards
    const amount = direction === "left" ? -500 : 500;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            IVF Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Happy families created at Babygen IVF
          </p>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-background/95 border border-border shadow-elevated rounded-full p-3 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-background/95 border border-border shadow-elevated rounded-full p-3 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div 
            ref={scrollRef} 
            className="overflow-x-auto scrollbar-hide px-2 md:px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 min-w-max pb-6">
              {videoItems.map((video) => (
                <div
                  key={video.id}
                  /* LANDSCAPE DIMENSIONS: 16:9 Aspect Ratio */
                  className="relative w-[320px] md:w-[480px] aspect-video overflow-hidden rounded-[2rem] bg-black shadow-card shrink-0 border border-border/50 group/card"
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

                  {/* UI Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] font-bold text-white/90 uppercase tracking-widest">
                        Success Story
                      </span>
                      <span className="text-[14px] font-semibold text-white bg-white/20 backdrop-blur-md rounded-full px-3 py-1 w-fit">
                        {video.views}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-white">
                      <button className="p-2 bg-white/10 rounded-full hover:bg-rose-500 transition-colors">
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;