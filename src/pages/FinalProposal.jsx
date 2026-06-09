/* eslint-disable react-hooks/purity */
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import peachLove from "../assets/peach-goma-love-peach-cat.gif";

// const FinalProposal = ({ onYes, noButtonPos, handleNoHover }) => {
//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-4 md:px-8">
//       {/* Ambient Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-200/20 blur-[100px] rounded-full pointer-events-none" />

//       {/* Main Glassmorphic Proposal Card */}
//       <div className="relative max-w-3xl w-full bg-white/60 backdrop-blur-md p-8 md:p-14 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(244,63,94,0.3)] border border-white/80 flex flex-col items-center text-center z-10 animate-in">
//         {/* Floating Icon Header */}
//         <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-6 z-10">
//           <div className="absolute inset-0 bg-rose-200 blur-3xl opacity-50 animate-pulse" />
//           <Heart className="absolute w-16 h-16 md:w-20 md:h-20 text-rose-500 fill-rose-500/20 -translate-x-4 -translate-y-1 -rotate-12 drop-shadow-xl" />
//           <Heart className="absolute w-12 h-12 md:w-16 md:h-16 text-pink-400 fill-pink-400/20 translate-x-6 translate-y-2 rotate-12 drop-shadow-xl" />
//           <Sparkles className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 text-amber-400 animate-pulse" />
//         </div>

//         {/* Structured Text Section */}
//         <div className="space-y-6 md:space-y-8 relative z-10 w-full">
//           <p className="text-lg md:text-2xl font-serif text-slate-700 italic leading-relaxed px-2 md:px-4">
//             "Everything before this... was just pieces of how much I adore you."
//           </p>

//           {/* Elegant Divider */}
//           <div className="flex items-center justify-center gap-4 w-full opacity-60">
//             <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-rose-300" />
//             <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
//             <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-rose-300" />
//           </div>

//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-800 leading-tight drop-shadow-sm px-2">
//             Will you hold my hand...
//             <br />
//             <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-bold italic block mt-4 md:mt-6 pb-2">
//               and walk into everything ahead with me? 🤍
//             </span>
//           </h2>
//         </div>

//         {/* Action Buttons Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 md:mt-16 w-full min-h-[80px]">
//           <button
//             onClick={onYes}
//             className="px-10 py-4 md:px-12 md:py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-xl md:text-3xl font-bold shadow-[0_10px_30px_rgba(244,63,94,0.4)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.6)] hover:scale-105 active:scale-95 transition-all z-30 border-4 border-white animate-[heartbeat_2s_ease-in-out_infinite]"
//           >
//             YES! 💖
//           </button>

//           <button
//             onMouseEnter={handleNoHover}
//             onTouchStart={handleNoHover}
//             style={{
//               transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
//               transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
//             }}
//             className="px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-400 hover:text-slate-600 rounded-full text-base md:text-xl shadow-sm z-20 relative cursor-not-allowed"
//           >
//             No 😢
//           </button>
//         </div>
//       </div>

//       {/* Gentle Floating Background Hearts */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
//         {[...Array(15)].map((_, i) => (
//           <Heart
//             key={i}
//             className="absolute text-rose-300 animate-[floatSlow_4s_ease-in-out_infinite]"
//             fill="currentColor"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${5 + Math.random() * 90}%`,
//               animationDelay: `${Math.random() * 4}s`,
//               animationDuration: `${3 + Math.random() * 3}s`,
//               opacity: 0.1 + Math.random() * 0.3,
//               transform: `scale(${0.5 + Math.random() * 1.5})`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const FinalProposal = ({ onYes }) => {
  const [noCount, setNoCount] = useState(0);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No 😢",
      "Are you sure?",
      "Really sure?",
      "Please? 🥺",
      "Don't do this to me",
      "I'm gonna cry...",
      "You're breaking my heart",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-4 md:px-8">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-200/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Glassmorphic Proposal Card */}
      <div className="relative max-w-lg w-full bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(244,63,94,0.3)] border border-white flex flex-col items-center text-center z-10 animate-in">
        {/* Floating Icon Header */}
        <div className="relative w-24 h-24 flex items-center justify-center mb-4 z-10">
          <div className="absolute inset-0 bg-rose-200 blur-2xl opacity-50 animate-pulse" />
          <img src={peachLove} alt="love gif" className="bject-contain" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-pulse" />
        </div>

        {/* Structured Text Section */}
        <div className="space-y-4 relative z-10 w-full">
          <h2 className="text-2xl md:text-4xl font-serif text-slate-800 leading-tight drop-shadow-sm px-2">
            Will you hold my hand...
            <br />
            <span className="bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-bold italic block mt-3 pb-2">
              and dance with me for the rest of our lives? 🤍
            </span>
          </h2>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-col items-center justify-center gap-6 mt-10 w-full min-h-35">
          <div
            style={{
              transform: `scale(${1 + noCount * 0.4})`,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="z-30 origin-center"
          >
            <button
              onClick={onYes}
              className="px-8 py-3 md:px-10 md:py-4 bg-linear-to-r from-rose-500 to-pink-500 text-white rounded-full text-lg md:text-xl font-bold shadow-[0_10px_30px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.5)] transition-all border-2 border-white animate-[heartbeat_2s_ease-in-out_infinite]"
            >
              YES! 💖
            </button>
          </div>

          {noCount < 6 && (
            <button
              onClick={handleNoClick}
              className="px-6 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-full text-sm md:text-base shadow-sm z-20 transition-all font-medium"
            >
              {getNoButtonText()}
            </button>
          )}
        </div>
      </div>

      {/* Gentle Floating Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-300 animate-[floatSlow_4s_ease-in-out_infinite]"
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              opacity: 0.1 + Math.random() * 0.3,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default FinalProposal;
