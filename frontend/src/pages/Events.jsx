import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Music, UserPlus, Mic, Film, Heart, Gift } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    title: "Music Night 🎵",
    description:
      "Join us for an epic music session! Share your favorite songs and discover new tunes with friends.",
    icon: Music,
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Invite Event 🏆",
    description:
      "Invite friends to the server and earn exciting rewards for every successful join!",
    icon: UserPlus,
    gradient: "from-pink-400 to-pink-600",
  },
  {
    title: "Karaoke Sessions 🎤",
    description:
      "Sing your heart out! No judgment, just vibes. Perfect for unleashing your inner star.",
    icon: Mic,
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Weekly Giveaways 🎁",
    description:
      "Every week we give back! Nitro, game codes, and exclusive perks for active members.",
    icon: Gift,
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Community Hangout 💕",
    description:
      "Casual voice chat sessions where we talk about anything and everything. No agenda, just friends!",
    icon: Heart,
    gradient: "from-red-400 to-red-600",
  },
  {
    title: "Movie Night 🎬",
    description:
      "Grab snacks, hop into VC, and enjoy movie nights together with fun chats and reactions!",
    icon: Film,
    gradient: "from-orange-400 to-orange-600",
  },
];

export default function Events() {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Tag */}
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-200/40 to-pink-200/40 border border-purple-300">
              <span className="text-sm font-medium text-purple-700">
                What's Happening
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4 leading-tight">
              Upcoming{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Events
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-700 max-w-xl mx-auto text-lg md:text-xl">
              LoveLINK is always buzzing with fun! Join us for exciting events,
              celebrations, and community gatherings.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-3xl bg-white/90 border border-gray-200 transition-all duration-500 overflow-hidden"
                  style={{
                    boxShadow: isHovered
                      ? "0 20px 60px -15px rgba(6, 182, 212, 0.3)"
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Top accent */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${event.gradient} shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl mb-4 text-[#0a1628]">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Bottom blur */}
                  <motion.div
                    className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${event.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
