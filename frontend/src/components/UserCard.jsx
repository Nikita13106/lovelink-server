import { motion } from "framer-motion";
import React from "react";
function UserCard({ userId, username, pfp, banner, onClick }) {
  const redirectToLookup = () => {
    window.open(`https://id.rappytv.com/${userId}`, "_blank");
  };

  return (
    <motion.button
      onClick={redirectToLookup}
      initial={false}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 160 }}
      className="relative w-full max-w-[260px] mx-auto rounded-3xl overflow-hidden
        bg-white shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
    >
      {/* Banner */}
      <div className="relative w-full aspect-[21/10] rounded-2xl overflow-hidden mb-[-3rem]">
        {banner?.endsWith(".mp4") ? (
          <video
            src={banner}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            width={600}
            height={112}
            preload="auto"
          />
        ) : (
          <img
            src={banner}
            alt={`${username} banner`}
            className="w-full h-full object-cover"
            width={600}
            height={112}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Profile Pic */}
      <div className="relative -mt-12 flex justify-center h-24 sm:h-28">
        <motion.img
          src={pfp}
          alt={username}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-lg"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 180 }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="pt-4 pb-6 text-center">
        <p
          className="text-base sm:text-sm font-semibold text-gray-800
          group-hover:text-pink-500 transition-colors truncate"
        >
          @{username}
        </p>
        <p className="text-xs text-gray-500">LoveLINK</p>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
        bg-black/5 pointer-events-none"
      />
    </motion.button>
  );
}

// Memoize to avoid unnecessary re-renders
export default React.memo(UserCard);
