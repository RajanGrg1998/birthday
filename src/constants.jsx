import { Key, Music } from "lucide-react";

export const GIFT_CONTENT = {
  1: {
    title: "Reasons I Love You",
    icon: (
      <img
        src="./public/huggy-cute.gif"
        alt="love gif"
        className="bject-contain"
      />
    ),
    type: "reasons_grid",
    reasons: [
      "How you’re cute without even trying",
      "Everything about you and how you’re just so perfectly you",
      "Your endless cuteness",
      "The way you look at me",
      "Your laugh that makes me laugh",
      "How you make me feel so special and loved",
    ],
  },
  2: {
    title: "Promises & Perks",
    icon: (
      <img
        src="./public/love-you.gif"
        alt="love gif"
        className="bject-contain"
      />
    ),
    type: "promises_and_coupons",
    promises: [
      "To always listen to you",
      "To hype you up in every situation",
      "To hold your hand through every challenge",
      "To always be your safe place and biggest fan",
      "To treat you like the queen you are, every single day",
      "To never be the reason you cry, but to be the reason you smile every day",
    ],
    coupons: [
      {
        title: "Unlimited Hugs and Kisses",
        desc: "Redeemable for as many hugs and kisses as you want, whenever you want.",
      },
      {
        title: "Movie Night Pick",
        desc: "Allows you to pick the movie tonight, no questions asked.",
      },
      {
        title: "After-Shift Recovery Massage",
        desc: "Redeemable for a relaxing massage when you need it most.",
      },
      {
        title: "Sweet Treat",
        desc: "Redeem for a surprise dessert date, just because you deserve it.",
      },
    ],
  },
  3: {
    title: "Music Dedicated to You",
    icon: <Music className="w-8 h-8 text-rose-500" />,
    type: "music_player",
    songTitle: "Love You For a Thousand Years",
    artist: "John Michael Howell",
    coverUrl: "./public/lovelovelove.gif",
    // "https://images.unsplash.com/photo-1564045288780-5c11658fefa3?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "./public/amv.mp4", // Replace with your actual video URL
  },

  4: {
    title: "Future Gifts",
    icon: (
      <img
        src="./public/squish-cat.gif"
        alt="love gif"
        className="bject-contain"
      />
    ),
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
        text: "Road trips with No Destinations",
        icon: "🗺️",
        rotation: "rotate-2",
        delay: "0.5s",
        float: "animate-[floatSlow2_5s_ease-in-out_infinite]",
      },
      // {
      //   text: "Visiting Disneyland Together",
      //   icon: "🏰",
      //   rotation: "-rotate-2",
      //   delay: "1s",
      //   float: "animate-[floatSlow_6s_ease-in-out_infinite]",
      // },
      {
        text: "Taking Silly Photos Everywhere We Go",
        icon: "📸",
        rotation: "rotate-3",
        delay: "1.5s",
        float: "animate-[floatSlow2_4.5s_ease-in-out_infinite]",
      },

      {
        text: "Rainy Days and Cozy Blankets with You",
        icon: "☔",
        rotation: "rotate-3",
        delay: "5.5s",
        float: "animate-[floatSlow2_6s_ease-in-out_infinite]",
      },
      {
        text: "Growing Old but Still Dancing With You",
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
