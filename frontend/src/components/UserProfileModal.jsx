import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function UserProfileModal({ user, onClose }) {
  if (!user) return null; // 🚨 REQUIRED

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-pink-500/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-50 w-[90%] max-w-md rounded-3xl bg-white p-6 shadow-xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{user}</h2>
          <p className="text-gray-500">
            Discord profile preview coming soon ✨
          </p>
        </div>
      </motion.div>
    </div>
  );
}

