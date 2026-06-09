import {
  Heart,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
} from "lucide-react";
import { useState } from "react";

const SpotifyMusicPlayer = ({ gift, onPlayTrigger }) => {
  const [progress] = useState(33);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);

  return (
    <div className="w-full relative z-10 flex flex-col items-center px-2 md:px-4">
      <div className="w-full max-w-[320px] bg-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-800 flex flex-col space-y-4">
        <div className="relative group overflow-hidden rounded-xl aspect-square shadow-lg">
          <img
            src={gift.coverUrl}
            alt="Album Cover"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <Heart className="absolute bottom-3 right-3 text-rose-500 fill-rose-500 w-6 h-6 animate-pulse" />
        </div>

        <div className="flex flex-col text-left space-y-1">
          <h3 className="text-white font-serif font-bold text-lg leading-tight truncate">
            {gift.songTitle}
          </h3>
          <p className="text-rose-400 font-handwritten text-lg font-semibold flex items-center gap-1.5">
            {gift.artist}
          </p>
        </div>

        <div className="flex flex-col space-y-1.5 w-full">
          <div className="relative h-1.5 w-full bg-slate-850 rounded-full overflow-hidden cursor-pointer">
            <div
              className="absolute left-0 top-0 h-full bg-linear-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>1:14</span>
            <span>3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-2">
          <button
            onClick={() => setIsShuffled(!isShuffled)}
            className={`transition-colors ${isShuffled ? "text-rose-500" : "text-slate-400 hover:text-white"}`}
          >
            <Shuffle size={18} />
          </button>

          <button className="text-slate-400 hover:text-white transition-colors">
            <SkipBack size={20} fill="currentColor" />
          </button>

          <button
            onClick={onPlayTrigger}
            className="w-14 h-14 bg-linear-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_15px_rgba(244,63,94,0.4)] hover:scale-110 active:scale-95 transition-all animate-pulse"
          >
            <Play size={26} className="ml-1" fill="currentColor" />
          </button>

          <button className="text-slate-400 hover:text-white transition-colors">
            <SkipForward size={20} fill="currentColor" />
          </button>

          <button
            onClick={() => setIsRepeated(!isRepeated)}
            className={`transition-colors ${isRepeated ? "text-rose-500" : "text-slate-400 hover:text-white"}`}
          >
            <Repeat size={18} />
          </button>
        </div>

        <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 pt-1">
          {/* <Heart size={13} /> */}
          <span>
            More than words ever could, it captures everything I feel when I
            think of you...❤️🎶
          </span>
        </div>
      </div>

      <p className="text-rose-400 font-serif text-sm italic mt-4 animate-pulse opacity-80 text-center">
        Tap the play button to unlock the song...
      </p>
    </div>
  );
};

export default SpotifyMusicPlayer;
