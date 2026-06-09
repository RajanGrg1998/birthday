import { Heart } from "lucide-react";
import { useState } from "react";

const ReasonsGrid = ({ reasons }) => {
  const [flipped, setFlipped] = useState([]);

  const handleFlip = (index) => {
    if (!flipped.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="w-full relative z-10 flex flex-col items-center px-2 md:px-4">
      <p className="text-rose-400 font-serif text-sm md:text-base italic mb-4 animate-pulse opacity-80">
        Tap the cards to flip them...
      </p>
      <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm mx-auto perspective-1000">
        {reasons.map((reason, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            className="relative w-full h-24 md:h-28 cursor-pointer transform-style-3d transition-transform duration-700"
            style={{
              transform: flipped.includes(index)
                ? "rotateY(180deg)"
                : "rotateY(0deg)",
            }}
          >
            {/* Front side */}
            <div className="absolute inset-0 backface-hidden bg-linear-to-br from-rose-50 to-pink-50 rounded-xl flex flex-col items-center justify-center border-2 border-rose-200 shadow-sm hover:shadow-md transition-shadow">
              <Heart
                className={`w-6 h-6 md:w-8 md:h-8 text-rose-400 ${!flipped.includes(index) ? "animate-pulse" : ""}`}
              />
              <p className="text-[10px] md:text-xs text-rose-300 mt-2 font-bold tracking-wider uppercase">
                Open
              </p>
            </div>
            {/* Back side */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-xl flex items-center justify-center border-2 border-rose-300 shadow-md p-3 md:p-4 rotate-y-180">
              <p className="font-handwritten text-rose-600 text-center leading-tight text-lg md:text-xl font-bold">
                {reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsGrid;
