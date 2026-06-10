import { Key, Music } from "lucide-react";

import amvVideo from "./assets/amv.mp4";

import huggyGif from "./assets/huggy-cute.gif";
import loveYouGif from "./assets/love-you.gif";
import loveloveloveGif from "./assets/lovelovelove.gif";
import squishCatGif from "./assets/squish-cat.gif";

export const GIFT_CONTENT = {
  1: {
    title: "Reasons I Love You",
    icon: <img src={huggyGif} alt="love gif" className="bject-contain" />,
    type: "reasons_grid",
    reasons: [
      "How you're cute without even trying",
      "The way you turn ordinary moments into my favorite memories",
      "How effortlessly you make me smile",
      "The way you look at me and make everything else disappear",
      "Your laugh that never fails to make me laugh too",
      "How you make me feel so special, loved, and understood",
    ],
  },
  2: {
    title: "Promises & Perks",
    icon: <img src={loveYouGif} alt="love gif" className="bject-contain" />,
    type: "promises_and_coupons",
    promises: [
      "To always listen to you, even when words are hard to find",
      "To remind you how amazing you are whenever you forget",
      "To hold your hand through every challenge and celebrate every victory",
      "To be your safe place, your comfort, and your biggest supporter",
      "To choose you, love you, and appreciate you every single day",
      "To keep giving you reasons to smile for the rest of our lives",
    ],
    coupons: [
      {
        title: "Unlimited Hugs and Kisses",
        desc: "Redeemable for as many hugs and kisses as you want, whenever you want",
      },
      {
        title: "Dream Date Voucher",
        desc: "Redeem for any date idea you've been wanting to do together",
      },
      {
        title: "Recovery Massage",
        desc: "Redeemable for a relaxing massage when you need it most",
      },
      {
        title: "Sweet Treat",
        desc: "Redeem for a surprise dessert date, just because you deserve it",
      },
    ],
  },
  3: {
    title: "Music Dedicated to You",
    icon: <Music className="w-8 h-8 text-rose-500" />,
    type: "music_player",
    songTitle: "Love You For a Thousand Years",
    artist: "John Michael Howell",
    coverUrl: loveloveloveGif,
    // "https://images.unsplash.com/photo-1564045288780-5c11658fefa3?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: amvVideo, // Replace with your actual video URL
  },

  4: {
    title: "Future Gifts",
    icon: <img src={squishCatGif} alt="love gif" className="bject-contain" />,
    type: "dream_cards",
    intro: "The best gifts are all the memories we haven't even made yet...",
    dreams: [
      {
        text: "Wearing Our Couple Rings",
        icon: "💍",
        rotation: "-rotate-2",
        delay: "1s",
        float: "animate-[floatSlow_6s_ease-in-out_infinite]",
      },
      {
        text: "Sky Lanterns Together",
        icon: "🏮",
        rotation: "-rotate-3",
        delay: "0s",
        float: "animate-[floatSlow_4s_ease-in-out_infinite]",
      },
      {
        text: "Road trips with No Destinations, Just Us",
        icon: "🗺️",
        rotation: "rotate-2",
        delay: "0.5s",
        float: "animate-[floatSlow2_5s_ease-in-out_infinite]",
      },
      {
        text: "Watching Every Sunset and Sunrise Together",
        icon: "🌅",
        rotation: "-rotate-2",
        delay: "1s",
        float: "animate-[floatSlow_6s_ease-in-out_infinite]",
      },
      {
        text: "Taking Silly Photos Everywhere We Go",
        icon: "📸",
        rotation: "rotate-3",
        delay: "1.5s",
        float: "animate-[floatSlow2_4.5s_ease-in-out_infinite]",
      },

      {
        text: "Rainy Days and Cozy Blankets with You in My Arms",
        icon: "☔",
        rotation: "rotate-3",
        delay: "5.5s",
        float: "animate-[floatSlow2_6s_ease-in-out_infinite]",
      },
      {
        text: "Growing Old but Never Stopping Our Dance",
        icon: "💫",
        rotation: "-rotate-3",
        delay: "7s",
        float: "animate-[floatSlow_7s_ease-in-out_infinite]",
      },
    ],
  },
  5: {
    title: "Secret Message",
    icon: <Key className="w-8 h-8 text-rose-500" />,
    type: "secret_message",
    text: "You are the absolute best thing that has ever happened to me. I look at you and don’t just see my partner, I see my safest place and my greatest blessing all wrapped up into one perfect person.",
  },
};
