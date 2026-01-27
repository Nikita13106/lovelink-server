import { motion } from "framer-motion";
import logo from "../assets/Logo.gif";
import { FaDiscord } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative min-h-[90vh] flex items-center justify-center px-6 pt-16 overflow-hidden
        transition-colors duration-300
        bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-200
        text-gray-800
      "
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl bg-pink-300/40" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl bg-rose-300/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mx-auto mb-5 w-28 h-28 rounded-full border border-pink-300 bg-white flex items-center justify-center shadow-lg"
        >
          <img
            src={logo}
            alt="LoveLINK Logo"
            className="w-24 h-24 rounded-full object-cover"
          />
        </motion.div>

        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full text-sm font-medium bg-pink-200/60 text-pink-700">
          ✨ A Safe Space to Connect
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to <span className="text-pink-500">LoveLINK</span>
        </h1>

        <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-700">
          Join our friendly Discord community where you can make genuine
          connections, vibe to music, and create lasting friendships in a safe,
          welcoming environment.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="https://discord.gg/Zuf4VMbDva"
          target="_blank"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg shadow-md transition bg-pink-500 hover:bg-pink-600 text-white"
        >
          <FaDiscord size={20} /> Join LoveLINK
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
