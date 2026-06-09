import { Sparkles, Heart } from "lucide-react";

const FloatingDreamCards = ({ intro, dreams }) => {
  return (
    <div className="w-full relative z-10 flex flex-col items-center px-1">
      <p className="text-slate-600 leading-relaxed font-handwritten text-2xl md:text-3xl px-2 text-center mb-8">
        "{intro}"
      </p>

      <div className="relative w-full flex flex-wrap justify-center gap-4 md:gap-5 px-2 pb-4">
        {dreams.map((dream, idx) => (
          <div
            key={idx}
            className={`bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(244,63,94,0.3)] border border-rose-100 flex flex-col items-center justify-center gap-2 w-32.5 md:w-36.25 aspect-square transition-all duration-300 hover:scale-[1.15] hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(244,63,94,0.4)] cursor-pointer z-10 hover:z-20 ${dream.float} ${dream.rotation}`}
            style={{ animationDelay: dream.delay }}
          >
            <div className="w-12 h-12 bg-linear-to-br from-rose-100 to-pink-50 rounded-full flex items-center justify-center text-2xl shadow-inner mb-1 border border-white">
              {dream.icon}
            </div>
            <p className="font-serif text-rose-800 text-center text-sm font-bold leading-tight">
              {dream.text}
            </p>
          </div>
        ))}
      </div>

      <Sparkles className="absolute bottom-10 left-4 w-6 h-6 text-amber-200/60 pointer-events-none animate-pulse" />
      <Heart className="absolute top-10 right-4 w-8 h-8 text-rose-200/40 fill-rose-200/40 -rotate-12 pointer-events-none" />
    </div>
  );
};

export default FloatingDreamCards;
