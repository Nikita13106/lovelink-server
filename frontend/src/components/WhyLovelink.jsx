import { motion } from "framer-motion";
import bannerImg from "../assets/banner.jpg";
import {
  Mic,
  MessageSquare,
  UserPlus,
  Music,
  Shield,
  Gift,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Active Voice Channels",
    description:
      "Jump into lively voice chats any time of day. Our community is always buzzing.",
    color: "bg-pink-400/20 text-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Engaging Text Chats",
    description:
      "From deep conversations to fun banter, our text channels never sleep.",
    color: "bg-rose-400/20 text-rose-500",
  },
  {
    icon: UserPlus,
    title: "Make New Friends",
    description:
      "Connect with amazing people from around the world who share your vibe.",
    color: "bg-fuchsia-400/20 text-fuchsia-500",
  },
  {
    icon: Music,
    title: "Music VC Sessions",
    description:
      "Vibe together with music, discover new songs, and chill together.",
    color: "bg-pink-300/30 text-pink-500",
  },
  {
    icon: Shield,
    title: "Safe & Friendly Space",
    description:
      "Active moderation ensures a respectful, welcoming environment for all.",
    color: "bg-emerald-400/20 text-emerald-500",
  },
  {
    icon: Gift,
    title: "Giveaways & Rewards",
    description:
      "Win Discord Nitro, roles, and fun rewards just by being active!",
    color: "bg-yellow-400/20 text-yellow-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-pink-50 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-pink-200/60 text-pink-700">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Why LoveLINK</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why You’ll <span className="text-pink-500">Love</span> It
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600">
            Discover what makes LoveLINK a cozy, fun, and unforgettable place to
            connect.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-3xl bg-white/70 backdrop-blur border border-white/30 shadow-sm hover:shadow-md transition"
            >
              <motion.div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <feature.icon className="w-7 h-7" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Giveaway Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative rounded-3xl bg-white/80 backdrop-blur shadow-lg overflow-hidden"
          >
            {/* Banner Image */}
            <motion.div
              className="h-28 w-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-pink-400/5" />
            </motion.div>

            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center shadow-xl border-4 border-white"
            >
              <Gift className="w-12 h-12 text-white" />
            </motion.div>

            {/* Content */}
            <div className="pt-16 md:pt-14 px-6 md:px-14 pb-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Daily & Weekly Giveaways
              </h3>

              <p className="text-gray-600 mb-2">
                Nitro, exclusive roles, and fun perks, stay active and win big!
              </p>

              <span className="text-sm text-pink-500 opacity-80">
                Active members get rewarded ✨
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
