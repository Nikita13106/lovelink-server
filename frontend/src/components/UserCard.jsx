import { motion } from "framer-motion";

export default function UserCard({ userId, username, pfp, banner }) {
  const redirectToLookup = () => {
    window.open(`https://id.rappytv.com/${userId}`, "_blank");
  };

  return (
    <motion.button
      onClick={redirectToLookup}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      viewport={{ once: true }}
      className="
        relative w-full max-w-[240px] sm:max-w-[260px] mx-auto
        rounded-3xl overflow-hidden
        bg-white
        shadow-md hover:shadow-2xl
        transition-shadow
        group cursor-pointer
        touch-manipulation
      "
    >
      {/* Banner */}
      <div className="relative w-full h-24 sm:h-28 rounded-2xl overflow-hidden mb-[-3.25rem] sm:mb-[-3.5rem]">
        {banner?.endsWith(".mp4") ? (
          <video
            src={banner}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={banner}
            alt={`${username} banner`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Profile Pic */}
      <div className="relative -mt-10 sm:-mt-12 flex justify-center">
        <motion.img
          src={pfp}
          alt={username}
          loading="lazy"
          className="
            w-20 h-20 sm:w-24 sm:h-24
            rounded-full object-cover
            border-4 border-white
            shadow-lg
          "
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 180 }}
        />
      </div>

      {/* Info */}
      <div className="pt-3 sm:pt-4 pb-5 sm:pb-6 text-center">
        <p
          className="
              text-sm sm:text-base md:text-lg
              font-semibold text-gray-800
              group-hover:text-pink-500
              transition-colors
              truncate px-3
            "
        >
          @{username}
        </p>

        <p className="text-xs text-gray-500">LoveLINK</p>
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity
          bg-black/5
          pointer-events-none
        "
      />
    </motion.button>
  );
}
