import { useEffect, useRef, useState } from "react";

const gatedModules = [
  {
    title: "5 Mistakes That Reduce IVF Success Chances",
    desc: "Avoid common decisions that waste time, increase stress, and lower outcomes.",
    cta: "Unlock This Guide",
  },
  {
    title: "7 Problems People Face While Choosing IVF in Pune",
    desc: "Spot red flags early and choose a center that is transparent and clinically strong.",
    cta: "Read Before You Decide",
  },
  {
    title: "Questions You Must Ask Before Starting IVF",
    desc: "Use this checklist in your first consultation so you can compare centers fairly.",
    cta: "Get The Question List",
  },
];

const riskPoints = [
  "Inexperienced doctors and embryologists can significantly reduce success rates.",
  "Poorly equipped labs can impact embryo quality and treatment outcomes.",
  "Low-quality consumables may reduce overall effectiveness of treatment.",
  "Hidden costs are often added later for injections, tests, and procedures.",
];

const verifyPoints = [
  "Ask for age-wise and case-wise success data, not only marketing claims.",
  "Confirm all major costs in writing before starting treatment.",
  "Check if the center has complete IVF + ICSI + freezing infrastructure.",
  "Verify whether the same specialist will manage your full cycle.",
];

type AnimatedStatProps = {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
};

const AnimatedStat = ({ end, label, suffix = "", duration = 1300 }: AnimatedStatProps) => {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [isPopped, setIsPopped] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrame = 0;
    let popTimeout: ReturnType<typeof setTimeout> | undefined;
    const startTime = performance.now();
    setIsCounting(true);

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setIsCounting(false);
        setIsPopped(true);
        popTimeout = setTimeout(() => setIsPopped(false), 420);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrame);
      if (popTimeout) {
        clearTimeout(popTimeout);
      }
    };
  }, [duration, end, hasStarted]);

  return (
    <div
      ref={statRef}
      className={`group rounded-xl border border-border bg-card px-3 py-3 md:px-4 md:py-4 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated hover:border-[#c94c92]/40 ${hasStarted ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-3 -rotate-6"} ${isCounting ? "shadow-[0_10px_28px_-18px_rgba(201,76,146,0.55)] border-[#c94c92]/25" : ""} ${isPopped ? "scale-[1.03]" : "scale-100"}`}
    >
      <p className={`text-lg md:text-2xl font-extrabold tabular-nums transition-all duration-300 ${isCounting ? "text-[#c94c92]" : "text-foreground"}`}>
        <span className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${isPopped ? "scale-110" : "scale-100"}`}>
          {value.toLocaleString()}
          {suffix}
        </span>
      </p>
      <p className="text-[11px] md:text-sm font-semibold text-muted-foreground">{label}</p>
    </div>
  );
};

const GatedContentSection = () => {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <p className="inline-flex rounded-full bg-[#c94c92]/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-[#c94c92] mb-4">
            Free IVF Decision Resources
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-3">
            Before You Choose an IVF Centre, Read This First
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            In <b className="text-black">20+ years</b>, our team has supported <b className="text-black">8000+ couples</b> across <b className="text-black">14 countries</b>. These resources help you
            avoid costly mistakes and make confident treatment decisions.
          </p>
          <p className="mt-4 text-sm md:text-base font-bold text-[#c94c92]">
            Save upto Rs. 40000. Only 3 slots left!!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-2 mb-8 md:mb-12">
          <AnimatedStat end={8000} suffix="+" label="Couples Supported" />
          <AnimatedStat end={14} label="Countries" />
          <AnimatedStat end={20} suffix="+" label="Years Experience" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14">
          <div className="rounded-2xl border border-border bg-card p-5 md:p-7">
            <h3 className="text-lg md:text-2xl font-bold text-[#c94c92] mb-4">What goes wrong with poor IVF centre selection?</h3>
            <ul className="space-y-3 text-sm md:text-base text-foreground/90">
              {riskPoints.map((point) => (
                <li key={point} className="flex gap-2.5 leading-relaxed">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c94c92]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 md:p-7">
            <h3 className="text-lg md:text-2xl font-bold text-[#c94c92] mb-4">What should you verify before starting IVF?</h3>
            <ul className="space-y-3 text-sm md:text-base text-foreground/90">
              {verifyPoints.map((point) => (
                <li key={point} className="flex gap-2.5 leading-relaxed">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {gatedModules.map((module) => (
            <div key={module.title} className="rounded-2xl border border-border bg-card p-5 md:p-6 flex flex-col">
              <p className="text-xs font-semibold text-[#c94c92] mb-2">Resource</p>
              <h4 className="text-base md:text-xl font-bold text-foreground leading-snug mb-3">{module.title}</h4>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{module.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c94c92] px-5 py-2.5 text-xs md:text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                {module.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 rounded-2xl bg-[#c94c92]/10 border border-[#c94c92]/20 p-5 md:p-7 text-center">
          <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2">Need help deciding quickly?</h3>
          <p className="text-sm md:text-base text-muted-foreground mb-5">
            Talk to our IVF counsellor and get a personalized treatment roadmap.
          </p>
          <p className="text-sm md:text-base font-bold text-[#c94c92] mb-5">
            Save upto Rs. 40000. Only 3 slots left!!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c94c92] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:7314855000"
              className="inline-flex items-center justify-center rounded-full border border-[#c94c92] px-6 py-3 text-sm font-semibold text-[#c94c92] hover:bg-[#c94c92]/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatedContentSection;
