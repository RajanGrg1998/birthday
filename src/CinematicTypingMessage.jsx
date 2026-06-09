import { useState, useEffect } from "react";

const CinematicTypingMessage = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "This isn't a secret...\n\nIt's just everything I never say enough.\n\n" +
    text;

  useEffect(() => {
    let currentText = "";
    let i = 0;
    let timeout;

    const typeWriter = () => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setDisplayedText(currentText);

        let delay = 30 + Math.random() * 50;
        if ([".", "\n", "!"].includes(fullText.charAt(i))) {
          delay = 600 + Math.random() * 400;
        }

        i++;
        timeout = setTimeout(typeWriter, delay);
      }
    };

    timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, [fullText]);

  return (
    <div className="w-full relative z-10 flex flex-col items-center px-2 py-4">
      <audio
        autoPlay
        loop
        src="https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3"
      />

      <div className="w-full max-w-sm text-left bg-linear-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-rose-100/50 min-h-75">
        <p className="text-slate-700 leading-relaxed font-handwritten text-2xl md:text-3xl whitespace-pre-wrap">
          {displayedText}
          <span className="animate-pulse text-rose-400 font-sans">|</span>
        </p>
      </div>
    </div>
  );
};

export default CinematicTypingMessage;
