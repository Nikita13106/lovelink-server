import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BASE_URL from "../config/api";

const stickyColors = [
  "bg-[#FFF1C1]",
  "bg-[#FFE0EC]",
  "bg-[#E8F8F5]",
  "bg-[#EDE7FF]",
  "bg-[#FFF5E5]",
];

export default function Vouches() {
  const [vouches, setVouches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/vouches`)
      .then((res) => res.json())
      .then((data) => {
        setVouches(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const highlightUsernames = (text) => {
    const parts = text.split(/(@[a-zA-Z0-9._]+)/g);
    return parts.map((part, i) =>
      part.startsWith("@") ? (
        <span key={i} className="font-semibold text-pink-600">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[url('/paper-texture.png')] bg-repeat">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold mb-4">
              Community <span className="text-pink-500">Vouches</span>
            </h1>
            <p className="text-gray-600">
              Little notes left behind by real people ✨
            </p>
          </motion.div>

          {loading ? (
            <p className="text-center text-gray-500">Loading vouches...</p>
          ) : (
            <div className="flex flex-wrap gap-12 justify-center">
              {vouches.map((vouch, index) => {
                const color = stickyColors[index % stickyColors.length];
                const rotation = (index % 2 === 0 ? -1 : 1) * (2 + (index % 3));

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.07,
                      rotate: 0,
                      y: -8,
                    }}
                    transition={{ type: "spring", stiffness: 140 }}
                    className={`
        ${color}
        w-72 min-h-[180px]
        p-4 pt-10
        rounded-2xl
        shadow-xl
        relative
        font-handwritten
        group
      `}
                    style={{ rotate: `${rotation}deg` }}
                  >
                    {/* ✨ Shine overlay */}
                    <div
                      className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-br
          from-white/40
          via-white/10
          to-transparent
          pointer-events-none
        "
                    />

                    {/* 📌 PFP Sticker */}
                    <div className="absolute -top-6 left-5 z-10">
                      <motion.img
                        src={vouch.avatar}
                        alt={vouch.author}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://cdn.discordapp.com/embed/avatars/0.png";
                        }}
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="
            w-14 h-14
            rounded-full
            border-4 border-white
            shadow-lg
            bg-white
          "
                      />
                    </div>

                    {/* 💬 Content */}
                    <p className="text-gray-800 leading-relaxed mb-8 relative z-10">
                      {highlightUsernames(vouch.content)}
                    </p>

                    {/* ✍️ Signature */}
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-sm text-gray-600">
                      <span>— {vouch.author}</span>
                      <span className="text-xs opacity-70">
                        {new Date(vouch.createdAt).toDateString()}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
