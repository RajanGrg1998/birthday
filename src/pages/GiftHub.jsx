import { Gift, Heart, Sparkles, Lock } from "lucide-react";
import { useState } from "react";
import CinematicModal from "../CinematicModal";
import { GIFT_CONTENT } from "../constants";
import CinematicTypingMessage from "../CinematicTypingMessage";
import SpotifyMusicPlayer from "./SpotifyMusicPlayer";
import PromisesAndPerks from "./gifts/PromisesAndPerks";
import ReasonsGrid from "./gifts/reason";
import FloatingDreamCards from "./gifts/FloatingDreamCards";

const GiftHub = ({ onComplete }) => {
  const [openedGifts, setOpenedGifts] = useState([]);
  const [activeGift, setActiveGift] = useState(null);
  const [mergePhase, setMergePhase] = useState("idle");
  const [isCinematicOpen, setIsCinematicOpen] = useState(false);
  const [shakeId, setShakeId] = useState(null);

  const handleOpenGift = (id) => {
    if (mergePhase !== "idle") return;

    // ENFORCE THE LOCK FOR GIFT #5
    if (id === 5 && openedGifts.length < 4) {
      setShakeId(id);
      setTimeout(() => setShakeId(null), 600); // Remove shake class after animation
      return;
    }

    setActiveGift(id);
    if (!openedGifts.includes(id)) {
      setOpenedGifts((prev) => [...prev, id]);
    }
  };

  const closeGift = () => {
    setActiveGift(null);
    if (openedGifts.length === 5) {
      setTimeout(() => startMergeSequence(), 800);
    }
  };

  const triggerMusicCinematic = () => {
    setIsCinematicOpen(true);
  };

  const handleCinematicEnded = () => {
    setIsCinematicOpen(false);
    closeGift();
  };

  const startMergeSequence = () => {
    setMergePhase("collapsing");
    // Transition to the beautifully darkened merged_ready heartbeat state, awaiting client click
    setTimeout(() => setMergePhase("merged_ready"), 2500);
  };

  const handleFinalGiftTap = () => {
    if (mergePhase !== "merged_ready") return;
    setMergePhase("opening_final");
    setTimeout(() => setMergePhase("final_text1"), 1500);
    setTimeout(() => setMergePhase("final_text2"), 5500);
    setTimeout(() => onComplete(), 10500);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${mergePhase !== "idle" ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 rounded-full blur-3xl" />

        <div className="absolute top-12 left-6 md:top-16 md:left-16 flex flex-col items-center opacity-70">
          <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-rose-400 animate-[floatSlow_4s_ease-in-out_infinite]" />
          <Heart
            className="w-5 h-5 md:w-6 md:h-6 text-rose-300 mt-2 -rotate-12 animate-pulse"
            fill="currentColor"
          />
        </div>
        <div className="absolute top-16 right-6 md:top-20 md:right-20 flex flex-col items-center opacity-70">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-400 rotate-12 animate-[floatSlow2_5s_ease-in-out_infinite]" />
          <Sparkles
            className="w-6 h-6 md:w-7 md:h-7 text-amber-300 mt-3 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      <div
        className={`absolute top-4 md:top-8 flex flex-col items-center justify-center w-full px-6 md:px-12 transition-all duration-1000 ${mergePhase !== "idle" ? "opacity-0 -translate-y-10" : "opacity-100"} z-10`}
      >
        <div className="flex items-center justify-center space-x-4 mb-4 opacity-70">
          <div className="w-12 md:w-20 h-px bg-linear-to-r from-transparent to-rose-400" />
          <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
          <div className="w-12 md:w-20 h-px bg-linear-to-l from-transparent to-rose-400" />
        </div>

        <div
          key={
            openedGifts.length === 0
              ? "start"
              : openedGifts.length === 5
                ? "end"
                : "mid"
          }
          className="animate-in"
        >
          <h2 className="font-serif text-center px-2 max-w-4xl leading-relaxed">
            {openedGifts.length === 0 ? (
              <>
                <span className="block text-xl md:text-2xl text-rose-900/70 font-medium tracking-wide">
                  A gift isn't merely wrapped in ribbon or a bow,
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-rose-600 font-bold italic mt-2 drop-shadow-sm">
                  It's a quiet piece of my soul, waiting for you to know.
                </span>
              </>
            ) : openedGifts.length === 5 ? (
              <>
                <span className="block text-xl md:text-2xl text-rose-900/70 font-medium tracking-wide">
                  Now the boxes lie empty, every tiny secret shared,
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-rose-600 font-bold italic mt-2 drop-shadow-sm">
                  A prelude to the greatest way I'll show you that I've cared.
                </span>
              </>
            ) : (
              <>
                <span className="block text-xl md:text-2xl text-rose-900/70 font-medium tracking-wide">
                  With every box you open, a new memory takes flight,
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-rose-600 font-bold italic mt-2 drop-shadow-sm">
                  A gentle whisper of my love, glowing soft in the night.
                </span>
              </>
            )}
          </h2>
        </div>

        <div className="mt-4 md:mt-6 bg-white/60 backdrop-blur-sm px-6 py-1.5 rounded-full shadow-[0_4px_15px_-3px_rgba(244,63,94,0.1)] border border-white/80">
          <p className="text-rose-500 font-handwritten text-lg md:text-xl font-bold tracking-wide">
            {5 - openedGifts.length} left to open
          </p>
        </div>
      </div>

      {/* Grid structure featuring premium locked box updates */}
      <div className="relative w-full max-w-75 h-75 md:max-w-100 md:h-100 flex items-center justify-center mt-32 md:mt-40">
        <div
          className={`absolute w-full h-full bg-rose-100/30 rounded-full blur-2xl transition-opacity duration-1000 ${mergePhase !== "idle" ? "opacity-0" : "opacity-100"}`}
        />

        {[1, 2, 3, 4, 5].map((id, index) => {
          const isOpened = openedGifts.includes(id);
          const isLocked = id === 5 && openedGifts.length < 4;
          const isMobile = window.innerWidth < 768;
          const gapX = isMobile ? 110 : 160;
          const gapY = isMobile ? 110 : 140;

          let x = 0,
            y = 0;
          if (index === 0) {
            x = -gapX;
            y = -gapY / 2;
          } else if (index === 1) {
            x = 0;
            y = -gapY / 2;
          } else if (index === 2) {
            x = gapX;
            y = -gapY / 2;
          } else if (index === 3) {
            x = -gapX / 2;
            y = gapY / 2;
          } else if (index === 4) {
            x = gapX / 2;
            y = gapY / 2;
          }

          let transformStyle = `translate(${x}px, ${y}px) scale(1)`;
          let opacity = 1;

          if (mergePhase === "collapsing") {
            transformStyle = `translate(0px, 0px) scale(0.6)`;
            opacity = 0.5;
          } else if (mergePhase !== "idle") {
            transformStyle = `translate(0px, 0px) scale(0)`;
            opacity = 0;
          }

          return (
            <div
              key={id}
              onClick={() => handleOpenGift(id)}
              className={`absolute flex flex-col items-center justify-center transition-all duration-2000 ease-in-out cursor-pointer group z-10 ${shakeId === id ? "animate-shake" : ""}`}
              style={{ transform: transformStyle, opacity: opacity }}
            >
              <div
                className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 relative overflow-hidden
                ${
                  isLocked
                    ? "bg-slate-900 border-2 border-slate-700/50 hover:scale-105 shadow-inner"
                    : isOpened
                      ? "bg-rose-100 border-2 border-rose-200 border-dashed shadow-inner scale-95"
                      : "bg-linear-to-br from-rose-400 to-rose-500 hover:scale-110 hover:shadow-rose-300 shadow-xl"
                }`}
              >
                {isLocked ? (
                  <div className="absolute inset-0 bg-slate-950/90 rounded-2xl flex flex-col items-center justify-center p-2.5 text-center transition-all">
                    <Lock className="w-5 h-5 md:w-6 md:h-6 text-rose-400 mb-1.5 animate-pulse" />
                    <p className="text-[8px] md:text-[10px] text-slate-200 font-serif leading-tight font-bold">
                      This gift is locked.
                    </p>
                    <p className="text-[7px] md:text-[8px] text-slate-400 mt-1 leading-tight font-sans">
                      Open all other boxes to view it.
                    </p>
                  </div>
                ) : isOpened ? (
                  <Sparkles className="w-10 h-10 text-rose-300 opacity-50" />
                ) : (
                  <Gift className="w-12 h-12 md:w-14 md:h-14 text-white animate-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`absolute bottom-8 md:bottom-12 w-full text-center px-6 pointer-events-none transition-all duration-1000 ${mergePhase !== "idle" ? "opacity-0 translate-y-10" : "opacity-100"}`}
      >
        <p className="font-handwritten text-xl md:text-2xl text-slate-500/80 tracking-wide">
          "Take your time... every single one is for you."
        </p>
      </div>

      {/* Dark Overlay for Final Gift Heartbeat Phase */}
      <div
        className={`absolute inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-1500 z-20 ${["merged_ready", "opening_final", "final_text1", "final_text2"].includes(mergePhase) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Perfect center dynamic heartbeat final gift box trigger */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 z-30 ${mergePhase === "merged_ready" ? "cursor-pointer" : "pointer-events-none"}`}
        style={{
          opacity: ["merged_ready", "opening_final"].includes(mergePhase)
            ? 1
            : 0,
          transform: ["merged_ready", "opening_final"].includes(mergePhase)
            ? "scale(1)"
            : "scale(0.5)",
        }}
        onClick={handleFinalGiftTap}
      >
        <div
          className={`relative transition-all duration-1500 ease-out ${mergePhase === "merged_ready" ? "animate-heartbeat scale-110" : ""} ${mergePhase === "opening_final" ? "scale-[2.5] opacity-0 blur-xl" : "scale-100 opacity-100 blur-0"}`}
        >
          <div className="absolute inset-0 bg-white rounded-3xl blur-3xl opacity-80 animate-pulse" />
          <div className="w-36 h-36 md:w-48 md:h-48 bg-linear-to-br from-rose-100 to-white rounded-3xl shadow-[0_0_50px_rgba(244,63,94,0.4)] flex items-center justify-center border-4 border-white z-10 relative">
            <Gift className="w-20 h-20 md:w-24 md:h-24 text-rose-400 drop-shadow-md" />
          </div>
          {mergePhase === "merged_ready" && (
            <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-rose-200 font-handwritten text-2xl tracking-wide whitespace-nowrap animate-bounce">
              Tap to open...
            </p>
          )}
        </div>
      </div>

      {/* Centered screen-level text transitions following final box burst */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-40">
        <h3
          className={`text-2xl md:text-4xl font-serif text-white transition-all duration-2000 absolute w-[90%] max-w-2xl leading-relaxed drop-shadow-lg`}
          style={{
            opacity: mergePhase === "final_text1" ? 1 : 0,
            transform:
              mergePhase === "final_text1"
                ? "translateY(0)"
                : "translateY(30px)",
          }}
        >
          Everything before this was just pieces of how I feel about you…
        </h3>

        <h3
          className={`text-2xl md:text-4xl font-serif text-white transition-all duration-2000 absolute w-[90%] max-w-2xl leading-relaxed drop-shadow-lg`}
          style={{
            opacity: mergePhase === "final_text2" ? 1 : 0,
            transform:
              mergePhase === "final_text2"
                ? "translateY(0)"
                : "translateY(30px)",
          }}
        >
          Except the{" "}
          <span className="text-rose-400 font-bold italic">one thing</span>
          <br />I couldn’t put inside any of them.
        </h3>
      </div>

      {activeGift === 3 && (
        <CinematicModal
          isOpen={isCinematicOpen}
          videoUrl={GIFT_CONTENT[3].videoUrl}
          onClose={handleCinematicEnded}
        />
      )}

      {/* Active gift presentation dialogue boxes */}
      <div
        className={`fixed inset-0 bg-white/40 backdrop-blur-md z-100 flex flex-col items-center justify-center px-4 transition-all duration-500 ${activeGift ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {activeGift && (
          <div className="relative bg-[#fffcf9] max-w-md w-full text-center space-y-4 md:space-y-6 animate-in p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(244,63,94,0.2)] border border-rose-100 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 backdrop-blur-sm border border-rose-50 shadow-sm -rotate-2 rounded-sm" />

            {GIFT_CONTENT[activeGift].type !== "music_player" &&
              GIFT_CONTENT[activeGift].type !== "secret_message" && (
                <>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-rose-100 to-pink-50 rounded-full flex items-center justify-center mx-auto shadow-inner border border-white relative z-10 shrink-0">
                    {GIFT_CONTENT[activeGift].icon}
                  </div>

                  <h2 className="text-2xl font-serif text-slate-800 relative z-10">
                    {GIFT_CONTENT[activeGift].title}
                  </h2>
                </>
              )}

            {GIFT_CONTENT[activeGift].type === "reasons_grid" ? (
              <ReasonsGrid reasons={GIFT_CONTENT[activeGift].reasons} />
            ) : GIFT_CONTENT[activeGift].type === "promises_and_coupons" ? (
              <PromisesAndPerks
                promises={GIFT_CONTENT[activeGift].promises}
                coupons={GIFT_CONTENT[activeGift].coupons}
              />
            ) : GIFT_CONTENT[activeGift].type === "music_player" ? (
              <SpotifyMusicPlayer
                gift={GIFT_CONTENT[activeGift]}
                onPlayTrigger={triggerMusicCinematic}
              />
            ) : GIFT_CONTENT[activeGift].type === "secret_message" ? (
              <CinematicTypingMessage text={GIFT_CONTENT[activeGift].text} />
            ) : GIFT_CONTENT[activeGift].type === "dream_cards" ? (
              <FloatingDreamCards
                intro={GIFT_CONTENT[activeGift].intro}
                dreams={GIFT_CONTENT[activeGift].dreams}
              />
            ) : (
              <div className="relative z-10">
                <p className="text-slate-600 leading-relaxed font-handwritten text-xl md:text-2xl px-2">
                  "{GIFT_CONTENT[activeGift].text}"
                </p>
                <Heart className="absolute -bottom-4 -right-2 w-8 h-8 text-rose-200/50 fill-rose-200/50 -rotate-12 pointer-events-none" />
                <Sparkles className="absolute -top-4 -left-2 w-6 h-6 text-amber-200/50 pointer-events-none" />
              </div>
            )}

            {GIFT_CONTENT[activeGift].type !== "music_player" && (
              <div className="pt-6 flex flex-col items-center space-y-4 relative z-10">
                {GIFT_CONTENT[activeGift].type === "secret_message" ? (
                  <p className="text-rose-400 font-serif text-sm italic animate-pulse opacity-80">
                    "You have unlocked everything..."
                  </p>
                ) : (
                  <p className="text-rose-400 font-serif text-sm italic animate-pulse opacity-80">
                    "One more piece of your surprise remains..."
                  </p>
                )}
                <button
                  onClick={closeGift}
                  className="px-8 py-3 bg-linear-to-r from-rose-400 to-pink-500 text-white rounded-full font-bold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-lg shadow-rose-200"
                >
                  {GIFT_CONTENT[activeGift].type === "secret_message"
                    ? "Keep Going"
                    : "Close Gift"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftHub;
