import { Heart } from "lucide-react";
import { useState } from "react";

const PromisesAndPerks = ({ promises, coupons }) => {
  const [redeemed, setRedeemed] = useState([]);

  const handleRedeem = (index) => {
    if (!redeemed.includes(index)) {
      setRedeemed([...redeemed, index]);
    }
  };

  return (
    <div className="w-full relative z-10 flex flex-col gap-6 px-1">
      {/* Top Section: Promises Grid */}
      <div className="w-full">
        <div className="flex items-center space-x-3 mb-4 justify-center opacity-80">
          <div className="w-10 h-px bg-rose-300" />
          <span className="font-serif text-rose-500 text-xs tracking-widest uppercase font-bold">
            My Promises
          </span>
          <div className="w-10 h-px bg-rose-300" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-3 px-2">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-rose-50 to-pink-50 rounded-xl p-3 border border-rose-100 flex items-center justify-center text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
            >
              <Heart
                className="absolute -right-2 -bottom-2 w-8 h-8 text-rose-200/40 -rotate-12 group-hover:scale-110 transition-transform"
                fill="currentColor"
              />
              <p className="font-handwritten text-rose-700 text-sm md:text-base leading-tight relative z-10 font-bold">
                "{promise}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Redeemable Coupons */}
      <div className="w-full">
        <div className="flex items-center space-x-3 mb-4 justify-center opacity-80">
          <div className="w-10 h-px bg-rose-300" />
          <span className="font-serif text-rose-500 text-xs tracking-widest uppercase font-bold">
            Your Perks
          </span>
          <div className="w-10 h-px bg-rose-300" />
        </div>

        <div className="w-full space-y-3 max-h-[35vh] overflow-y-auto scrollbar-hide pb-2 px-2">
          {coupons.map((coupon, index) => {
            const isRedeemed = redeemed.includes(index);
            return (
              <div
                key={index}
                className={`relative flex overflow-hidden rounded-xl border-2 border-dashed transition-all duration-500 shadow-sm ${
                  isRedeemed
                    ? "border-slate-200 bg-slate-50 opacity-70"
                    : "border-rose-300 bg-rose-50"
                }`}
              >
                {/* Ticket Stub Side */}
                <div
                  className={`p-3 md:p-4 border-r-2 border-dashed flex-1 flex flex-col justify-center text-left transition-colors duration-500 ${isRedeemed ? "border-slate-200" : "border-rose-200"}`}
                >
                  <h4
                    className={`font-serif font-bold text-sm md:text-base ${isRedeemed ? "text-slate-500 line-through" : "text-rose-600"}`}
                  >
                    {coupon.title}
                  </h4>
                  <p
                    className={`font-handwritten text-sm md:text-base mt-1 leading-tight ${isRedeemed ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {coupon.desc}
                  </p>
                </div>

                {/* Redeem Button Side */}
                <div className="w-20 md:w-24 bg-white/60 backdrop-blur-sm flex items-center justify-center p-2 relative shrink-0">
                  <button
                    onClick={() => handleRedeem(index)}
                    disabled={isRedeemed}
                    className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-1.5 md:px-3 md:py-2 rounded-full transition-all ${
                      isRedeemed
                        ? "bg-slate-200 text-slate-500 scale-95"
                        : "bg-linear-to-r from-rose-400 to-pink-500 text-white hover:scale-105 shadow-md shadow-rose-200"
                    }`}
                  >
                    {isRedeemed ? "Claimed" : "Redeem"}
                  </button>
                </div>

                {/* Ticket Cutout Holes */}
                <div
                  className={`absolute top-1/2 -left-2.5 -translate-y-1/2 w-5 h-5 bg-[#fffcf9] rounded-full border-r-2 border-dashed transition-colors duration-500 ${isRedeemed ? "border-slate-200" : "border-rose-300"}`}
                />
                <div
                  className={`absolute top-1/2 -right-2.5 -translate-y-1/2 w-5 h-5 bg-[#fffcf9] rounded-full border-l-2 border-dashed transition-colors duration-500 ${isRedeemed ? "border-slate-200" : "border-rose-300"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PromisesAndPerks;
