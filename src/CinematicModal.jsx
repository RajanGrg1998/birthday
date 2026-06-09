import { useState, useRef, useEffect } from "react";

const CinematicModal = ({ isOpen, videoUrl, onClose }) => {
  const [phase, setPhase] = useState("darken");
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("darken");
      const textTimer = setTimeout(() => setPhase("text"), 800);
      const videoTimer = setTimeout(() => setPhase("video"), 3500);
      return () => {
        clearTimeout(textTimer);
        clearTimeout(videoTimer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (phase === "video" && videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.log("Auto-play blocked:", err));
    }
  }, [phase]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-200 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/40 hover:text-white/80 transition-colors z-50 p-2 text-sm bg-white/10 hover:bg-white/20 rounded-full px-4"
      >
        Skip Video ✕
      </button>

      <div
        className={`absolute text-center px-6 transition-all duration-1500 ease-out ${phase === "text" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white font-medium italic tracking-wide leading-relaxed">
          “This one… is for you 🤍”
        </h2>
        <div className="w-16 h-px bg-rose-400/50 mx-auto mt-6 animate-pulse" />
      </div>

      <div
        className={`w-full h-full flex items-center justify-center transition-opacity duration-2000 ease-in-out ${phase === "video" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {phase === "video" && (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full max-h-screen object-cover md:object-contain"
            autoPlay
            playsInline
            controls
            onEnded={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default CinematicModal;
