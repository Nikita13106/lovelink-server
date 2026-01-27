import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function SafeSpace() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 text-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full blur-3xl bg-pink-300/20" />
      <div className="absolute -bottom-20 -right-24 w-96 h-96 rounded-full blur-3xl bg-rose-300/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Floating icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pink-500/20 shadow-lg"
        >
          <ShieldCheck className="w-8 h-8 text-pink-500" />
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-pink-500 mb-4">
          A Safe Place for Everyone
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg">
          No bullying, no harassment, no toxicity. LoveLINK is strictly
          moderated to keep it fun, friendly, and safe for everyone.
        </p>
      </motion.div>
    </section>
  );
}
