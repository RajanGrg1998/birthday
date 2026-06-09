/* eslint-disable react-hooks/purity */
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import FinalProposal from "./pages/FinalProposal";
import GiftHub from "./pages/GiftHub";

import dance from "./assets/dance.gif";

const InteractiveCake = ({ onNext }) => {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleBlowOut = () => {
    if (isBlownOut) return;
    setIsBlownOut(true);

    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: 30 + Math.random() * 40 + "%",
      animationDuration: 1.5 + Math.random() * 2 + "s",
      delay: Math.random() * 0.5 + "s",
    }));
    setHearts(newHearts);
    setTimeout(() => setShowNext(true), 1500);
  };

  const spongeTexture = {
    backgroundImage:
      "radial-gradient(rgba(217, 119, 6, 0.15) 1.5px, transparent 1.5px), radial-gradient(rgba(217, 119, 6, 0.15) 1.5px, transparent 1.5px)",
    backgroundSize: "16px 16px",
    backgroundPosition: "0 0, 8px 8px",
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-200 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
              animation: `flicker ${Math.random() * 2 + 1}s infinite ${Math.random()}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl flex justify-center z-0 opacity-0 pointer-events-none"
        style={{
          animation:
            "dropBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards",
        }}
      >
        <svg
          width="100%"
          height="80"
          viewBox="0 0 600 80"
          className="drop-shadow-sm overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M-50,20 Q150,60 300,30 T650,20"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <polygon
            points="20,25 45,60 70,30"
            fill="#fbcfe8"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow 3s ease-in-out infinite",
            }}
          />
          <polygon
            points="90,32 115,70 140,36"
            fill="#fde68a"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow2 4s ease-in-out infinite",
            }}
          />
          <polygon
            points="160,37 185,75 210,38"
            fill="#bae6fd"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow 3.5s ease-in-out infinite",
            }}
          />
          <polygon
            points="230,37 255,75 280,34"
            fill="#c7d2fe"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow2 3s ease-in-out infinite",
            }}
          />
          <polygon
            points="300,32 325,70 350,28"
            fill="#fbcfe8"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow 4s ease-in-out infinite",
            }}
          />
          <polygon
            points="370,27 395,65 420,23"
            fill="#fca5a5"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow2 3.5s ease-in-out infinite",
            }}
          />
          <polygon
            points="440,21 465,55 490,17"
            fill="#fde68a"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow 3s ease-in-out infinite",
            }}
          />
          <polygon
            points="510,16 535,50 560,11"
            fill="#bae6fd"
            className="drop-shadow-md"
            style={{
              transformOrigin: "top center",
              animation: "floatSlow2 4s ease-in-out infinite",
            }}
          />
        </svg>
      </div>

      <div
        className="absolute left-2 md:left-20 top-1/4 opacity-0 pointer-events-none z-0"
        style={{ animation: "fadeUp 1s forwards 1s" }}
      >
        <div className="animate-[floatSlow_4s_ease-in-out_infinite] origin-bottom scale-[0.6] md:scale-90">
          <div className="w-14 h-20 bg-linear-to-br from-rose-300 to-rose-500 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg relative">
            <div className="absolute top-2 left-3 w-4 h-6 bg-white/30 rounded-full -rotate-45" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-8 border-l-transparent border-r-transparent border-b-rose-600" />
          </div>
          <div className="w-px h-24 md:h-32 bg-slate-300 mx-auto mt-1" />
        </div>
      </div>

      <div
        className="absolute right-2 md:right-20 top-1/3 opacity-0 pointer-events-none z-0"
        style={{ animation: "fadeUp 1s forwards 1.2s" }}
      >
        <div className="animate-[floatSlow2_5s_ease-in-out_infinite] origin-bottom scale-[0.6] md:scale-90">
          <div className="w-12 h-16 bg-linear-to-br from-amber-200 to-amber-400 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg relative">
            <div className="absolute top-2 left-2 w-3 h-5 bg-white/40 rounded-full -rotate-45" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-[6px] border-l-transparent border-r-transparent border-b-amber-500" />
          </div>
          <div className="w-px h-28 md:h-40 bg-slate-300 mx-auto mt-1" />
        </div>
      </div>

      <div className="text-center space-y-1 relative z-10 px-4 mt-8">
        <div
          className="absolute -top-10 left-1/2 ml-2.5 md:ml-3.75 rotate-15 opacity-0 drop-shadow-md z-20"
          style={{
            animation:
              "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards",
          }}
        >
          <svg
            width="32"
            height="40"
            viewBox="0 0 48 60"
            className="scale-90 md:scale-100"
          >
            <circle cx="24" cy="6" r="6" fill="#38bdf8" />
            <path d="M12,54 L24,10 L36,54 Q24,60 12,54" fill="#fbbf24" />
            <path
              d="M14,46 L34,46"
              stroke="#f43f5e"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M17,34 L31,34"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M20,22 L28,22"
              stroke="#f43f5e"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-rose-500 font-bold tracking-tight drop-shadow-sm mb-2">
          Happy Birthday!
        </h1>
        <h2 className="text-xl md:text-2xl font-serif text-slate-700 transition-all duration-700">
          {isBlownOut
            ? "You make my life so beautiful ✨"
            : "Close your eyes & make a wish..."}
        </h2>
        <p className="text-base md:text-lg font-handwritten text-slate-500 h-6 transition-opacity duration-700">
          {!isBlownOut ? "Tap the flame to blow it out" : ""}
        </p>
      </div>

      <div
        className={`relative flex flex-col items-center mt-6 scale-[0.70] sm:scale-[0.85] md:scale-100 transition-transform duration-300 ${!isBlownOut ? "cursor-pointer hover:scale-[0.75] sm:hover:scale-[0.9] md:hover:scale-105" : ""}`}
        onClick={handleBlowOut}
      >
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-32 z-50 text-rose-400 opacity-0 pointer-events-none"
            style={{
              left: heart.left,
              animation: `floatUpHeart ${heart.animationDuration} ease-in forwards ${heart.delay}`,
            }}
          >
            <Heart size={24} fill="currentColor" stroke="none" />
          </div>
        ))}

        <div
          className="h-16 flex items-end justify-center -mb-1 relative w-full z-60"
          style={{
            opacity: 0,
            animation:
              "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards",
          }}
        >
          {!isBlownOut ? (
            <div className="w-6 h-12 bg-linear-to-t from-orange-500 via-yellow-400 to-yellow-100 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] flame-flicker shadow-[0_0_30px_rgba(250,204,21,0.8)]" />
          ) : (
            <div className="w-4 h-4 bg-gray-300 rounded-full smoke-anim absolute bottom-0 opacity-0" />
          )}
        </div>

        <div
          className="w-4 h-16 rounded-t-md z-50 shadow-[2px_0_4px_rgba(0,0,0,0.1)] relative border-x border-slate-100 -mb-0.5"
          style={{
            opacity: 0,
            animation:
              "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s forwards",
            background:
              "repeating-linear-gradient(45deg, #fce7f3, #fce7f3 8px, #fbcfe8 8px, #fbcfe8 16px)",
          }}
        ></div>

        <div className="relative flex flex-col items-center">
          <div
            className="absolute -top-10 z-45 flex gap-20 w-full justify-center px-4"
            style={{
              opacity: 0,
              animation:
                "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards",
            }}
          >
            <div className="relative -rotate-12 drop-shadow-md">
              <div className="w-9 h-11 bg-linear-to-br from-red-400 to-red-600 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] border border-red-700/20" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex">
                <div className="w-3 h-4 bg-green-500 rounded-full -mr-1 rotate-45" />
                <div className="w-3 h-4 bg-green-500 rounded-full -rotate-12" />
              </div>
              <div className="absolute top-3 left-2 w-1 h-1.5 bg-yellow-200/60 rounded-full" />
              <div className="absolute top-5 left-5 w-1 h-1 bg-yellow-200/60 rounded-full" />
            </div>
            <div className="relative rotate-12 drop-shadow-md mt-2">
              <div className="w-9 h-11 bg-linear-to-br from-red-400 to-red-600 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] border border-red-700/20" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex">
                <div className="w-3 h-4 bg-green-500 rounded-full -mr-1 rotate-45" />
                <div className="w-3 h-4 bg-green-500 rounded-full -rotate-12" />
              </div>
              <div className="absolute top-4 left-3 w-1 h-1.5 bg-yellow-200/60 rounded-full" />
              <div className="absolute top-7 left-5 w-1 h-1 bg-yellow-200/60 rounded-full" />
            </div>
          </div>

          <div
            className="w-67 h-12 bg-linear-to-b from-pink-300 to-pink-400 rounded-t-2xl relative z-40 border-t-2 border-pink-200/50"
            style={{
              opacity: 0,
              animation:
                "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards",
            }}
          >
            <div className="absolute top-[99%] left-0 w-full flex">
              <div className="w-[12%] h-7 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[15%] h-12 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[10%] h-5 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[14%] h-14 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[12%] h-8 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[15%] h-11 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[10%] h-6 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
              <div className="w-[12%] h-9 bg-pink-400 rounded-b-full shadow-[0_3px_5px_rgba(0,0,0,0.08)]"></div>
            </div>
          </div>

          <div
            className="w-65 h-12 bg-[#fef3c7] relative z-30 shadow-[inset_0_8px_8px_-8px_rgba(0,0,0,0.15)]"
            style={{
              opacity: 0,
              animation:
                "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards",
              ...spongeTexture,
            }}
          ></div>

          <div
            className="w-65 h-16 bg-white relative z-20 flex items-center justify-evenly px-2 shadow-[inset_0_4px_6px_rgba(0,0,0,0.04),inset_0_-4px_6px_rgba(0,0,0,0.04)] border-x border-slate-50"
            style={{
              opacity: 0,
              animation:
                "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 bg-linear-to-br from-red-400 to-rose-600 rounded-full border-2 border-red-400/50 shadow-inner relative overflow-hidden flex items-center justify-center ${i % 2 === 0 ? "rotate-12" : "-rotate-12 scale-90"}`}
              >
                <div className="w-3 h-3 bg-red-300/40 rounded-full" />
                <div className="absolute w-1 h-8 bg-white/20 rotate-45 rounded-full" />
                <div className="absolute w-1 h-8 bg-white/20 -rotate-45 rounded-full" />
              </div>
            ))}
          </div>

          <div
            className="w-65 h-14 bg-[#fef3c7] rounded-b-xl border-b-4 border-amber-200/60 relative z-10 shadow-[inset_0_4px_8px_-4px_rgba(0,0,0,0.1)]"
            style={{
              opacity: 0,
              animation:
                "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards",
              ...spongeTexture,
            }}
          ></div>
        </div>

        <div
          className="w-85 h-12 bg-slate-100 rounded-[100%] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15),0_10px_10px_-5px_rgba(0,0,0,0.04)] border-b-[6px] border-slate-300 relative z-0 -mt-6"
          style={{
            opacity: 0,
            animation:
              "dropBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards",
          }}
        />
      </div>

      <div className="absolute bottom-6 md:bottom-12 w-full flex justify-center">
        {showNext && (
          <button
            onClick={onNext}
            className="px-8 py-3 rounded-full bg-rose-500 text-white font-bold text-base md:text-lg hover:bg-rose-600 shadow-xl shadow-rose-200/50 transition-all hover:scale-105 active:scale-95 animate-in"
          >
            Open your presents 🎁
          </button>
        )}
      </div>
    </div>
  );
};

const ConfettiCelebration = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-4 rounded-full"
        style={{
          backgroundColor: [
            "#f43f5e",
            "#38bdf8",
            "#fbbf24",
            "#34d399",
            "#a78bfa",
          ][Math.floor(Math.random() * 5)],
          left: `${Math.random() * 100}%`,
          top: `-5%`,
          animation: `confettiDrop ${Math.random() * 3 + 2}s linear forwards ${Math.random() * 2}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      />
    ))}
  </div>
);

export default function App() {
  const [stage, setStage] = useState("idle");
  const [page, setPage] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const handleReveal = () => {
    setStage("expanding");
    setTimeout(() => setStage("revealed"), 1000);
  };

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center font-sans overflow-hidden selection:bg-rose-100">
      <div
        className={`fixed inset-0 transition-all duration-1500 ease-in-out z-0 ${
          stage !== "idle"
            ? "opacity-100 bg-linear-to-br from-pink-200 via-rose-100 to-pink-100"
            : "opacity-0 bg-white"
        }`}
      />

      {stage === "idle" && (
        <div
          className="relative z-10 flex flex-col items-center cursor-pointer group px-6 w-full h-screen justify-center"
          onClick={handleReveal}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="text-center mb-16 space-y-8 z-10 max-w-lg px-4 pointer-events-none">
            <Heart
              className="w-12 h-12 text-rose-300 mx-auto animate-pulse"
              fill="currentColor"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-rose-50 leading-tight drop-shadow-md">
              Today is <br />
              <span className="italic text-rose-400 font-light underline decoration-rose-400/30 underline-offset-8">
                all about you.✨
              </span>
            </h1>
            <p className="text-lg md:text-xl text-rose-200/80 font-handwritten leading-relaxed mt-6">
              I couldn't wait to start celebrating the most amazing person in my
              life, the girl who means everything to me & the most beautiful
              soul I know...
            </p>
          </div>

          <div className="relative flex items-center justify-center mt-8">
            <div className="absolute w-12 h-12 bg-rose-300/20 rounded-full animate-ping" />
            <div className="w-4 h-4 bg-rose-200 rounded-full shadow-[0_0_30px_10px_rgba(254,205,211,0.5)] group-hover:scale-150 transition-transform duration-700 z-10" />
          </div>
          <p className="text-rose-200/50 text-[10px] mt-12 tracking-[0.5em] uppercase animate-pulse">
            Touch the light
          </p>
        </div>
      )}

      {stage === "revealed" && (
        <div className="relative z-10 w-full max-w-5xl px-4 py-4 md:py-8 flex flex-col items-center h-svh overflow-hidden">
          {page === 1 && (
            <div className="w-full h-full max-w-4xl mx-auto">
              <InteractiveCake onNext={() => setPage(2)} />
            </div>
          )}

          {page === 2 && <GiftHub onComplete={() => setPage(3)} />}

          {page === 3 && (
            <FinalProposal
              onYes={() => setPage(4)}
              handleNoHover={handleNoHover}
              noButtonPos={noButtonPos}
            />
          )}

          {page === 4 && (
            <div className="text-center space-y-10 relative animate-in w-full h-full flex flex-col justify-center items-center">
              <ConfettiCelebration />

              <div className="relative z-10">
                <div className="absolute inset-0 bg-yellow-200 blur-3xl opacity-30 animate-pulse" />
                <div className="text-8xl md:text-9xl animate-bounce mb-8 drop-shadow-xl relative z-10">
                  <img src={dance} alt="love gif" className="bject-contain" />
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white shadow-2xl z-10 max-w-xl mx-4">
                <h1 className="text-5xl md:text-7xl font-serif text-rose-500 font-bold mb-6 drop-shadow-sm">
                  I love you!
                </h1>
                <p className="text-3xl font-handwritten text-slate-700 leading-relaxed">
                  Happy birthday, my beautiful girl. Let’s make this your best
                  year yet.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                  <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
                  <Sparkles
                    className="w-8 h-8 text-amber-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <Heart
                    className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>

              <div className="pt-6 opacity-60 text-sm uppercase tracking-[0.3em] text-slate-500 font-bold z-10">
                Forever & Always Yours
              </div>
            </div>
          )}
        </div>
      )}

      {}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Caveat:wght@400;700&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-handwritten { font-family: 'Caveat', cursive; }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) scale(1); }
          25% { transform: translateX(-6px) rotate(-5deg) scale(1.05); }
          50% { transform: translateX(6px) rotate(5deg) scale(1.05); }
          75% { transform: translateX(-6px) rotate(-5deg) scale(1.05); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes dropBounce {
          0% { opacity: 0; transform: translateY(-80px) scale(0.95); }
          60% { opacity: 1; transform: translateY(5px) scale(1.02); }
          80% { transform: translateY(-2px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @keyframes floatSlow2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-20px) rotate(-1deg); }
        }

        @keyframes floatUpHeart {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-200px) scale(0.5); opacity: 0; }
        }

        @keyframes flicker {
          0%, 100% { transform: scale(1) rotate(-1deg); opacity: 0.9; }
          50% { transform: scale(1.05) rotate(1deg); opacity: 1; }
        }

        @keyframes floatSmoke {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-60px) scale(3); opacity: 0; }
        }

        @keyframes confettiDrop {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.08); }
          40% { transform: scale(1.02); }
          60% { transform: scale(1.1); }
          80% { transform: scale(1); }
        }

        .animate-heartbeat {
          animation: heartbeat 1.8s ease-in-out infinite;
        }

        .flame-flicker {
          animation: flicker 0.1s infinite;
          transform-origin: bottom center;
        }

        .smoke-anim {
          animation: floatSmoke 1.5s ease-out forwards;
        }

        .animate-in {
          animation: fadeUp 1s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: floatSlow 3s ease-in-out infinite;
        }

        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }

        ::-webkit-scrollbar { width: 0px; background: transparent; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
}
