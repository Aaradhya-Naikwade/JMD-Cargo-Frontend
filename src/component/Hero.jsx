import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import heroVideo from "../assets/express-images/Altitude_Ai_Vision.mp4";
import heroVideo from "../../src/assets/express-images/Altitude_Ai_Vision.mp4"


const slides = [
  {
    id: 1,
    tag: "01 · AIR FREIGHT",
    title: "Fast & Safe",
    highlight: "Transport",
    subtitle: "Worldwide Logistics",
  },
  {
    id: 2,
    tag: "02 · SEA FREIGHT",
    title: "Reliable Ocean",
    highlight: "Shipping",
    subtitle: "Across Continents",
  },
  {
    id: 3,
    tag: "03 · ROAD FREIGHT",
    title: "Quick & Secure",
    highlight: "Delivery",
    subtitle: "Door to Door",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover scale-110 animate-video"
>
  <source src={heroVideo} type="video/mp4" />
</video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div
          key={slides[active].id}
          className="max-w-3xl animate-centerHero"
        >
          <p className="text-[#b21f2d] tracking-[6px] text-xs font-bold mb-6">
            {slides[active].tag}
          </p>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {slides[active].title}{" "}
            <span className="text-[#b21f2d]">
              {slides[active].highlight}
            </span>
            <br />
            {slides[active].subtitle}
          </h1>

          <p className="mt-6 text-white/80 text-sm sm:text-base leading-relaxed">
            Our goal is to exceed customer expectations by delivering secure,
            efficient and globally connected logistics solutions.
          </p>

          <button
            onClick={() => navigate("/rate")}
            className="mt-10 inline-flex items-center gap-3
                       bg-[#b21f2d] hover:bg-[#9e1b27]
                       text-white font-semibold
                       px-10 py-4 rounded-full
                       shadow-2xl transition-all duration-300
                       hover:scale-105"
          >
            Get Rate Quote
            <FiArrowRight />
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i
                ? "w-10 bg-[#b21f2d]"
                : "w-3 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* ARROWS */}
     
      

      {/* ANIMATIONS */}
      <style>{`
        @keyframes videoMove {
          from {
            transform: scale(1.25);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-video {
          animation: videoMove 8s ease-in-out forwards;
        }

        @keyframes centerHero {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-centerHero {
          animation: centerHero 1.2s ease-out;
        }

        .heroArrow {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.85);
          color: #140826;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        .heroArrow:hover {
          background: #b21f2d;
          color: #fff;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
