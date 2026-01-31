import { motion } from "framer-motion";
import { ScrollText, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IMAGES, cloudImage } from "../config/images";
const rules = [
  {
    no: "01",
    title: "Respect Everyone",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: ["Be kind and fair to all.", "No harassment or hate speech."],
  },
  {
    no: "02",
    title: "No Toxicity",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: [
      "Avoid bullying, raiding, or harassment.",
      "Toxic behavior is not tolerated.",
    ],
  },
  {
    no: "03",
    title: "No Ads",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: ["No self-promotion without approval."],
  },
  {
    no: "04",
    title: "Respect Staff",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: [
      "Follow decisions from authority.",
      "Question politely if needed.",
    ],
  },
  {
    no: "05",
    title: "Privacy First",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: ["Do not share personal info or DMs."],
  },
  {
    no: "06",
    title: "Voice Chat Etiquette",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: ["Speak respectfully and avoid noise."],
  },
  {
    no: "07",
    title: "Safe & Friendly",
    img: cloudImage(IMAGES.rules.cat, { width: 300 }),
    points: ["No NSFW, spam, or illegal activity."],
  },
];

export default function Rules() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100/40 to-pink-50">
      <Navbar />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-pink-200/70 border border-pink-300/60 mb-6">
              <ScrollText className="w-5 h-5 text-pink-600" />
              <span className="font-semibold tracking-wide">
                LoveLink Community Rules
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-4">
              Read Before You{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500">
                Speak
              </span>
            </h1>

            <p className="text-gray-700 max-w-xl mx-auto">
              These rules exist to protect the vibe, the people, and the
              community we’re building together.
            </p>
          </motion.div>

          {/* Rules */}
          <div className="space-y-10">
            {rules.map((rule, idx) => (
              <motion.div
                key={rule.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative"
              >
                <motion.div
                  className="relative rounded-3xl bg-white/80 backdrop-blur-xl
                  border border-pink-200/60
                  px-8 py-7 shadow-lg overflow-hidden group"
                  initial="rest"
                  whileHover="hovered"
                >
                  <div className="flex items-center gap-6 relative z-10">
                    {/* LEFT CONTENT */}
                    <div className="flex items-start gap-6 max-w-[65%]">
                      <div className="text-3xl font-bold text-pink-400 select-none">
                        {rule.no}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {rule.title}
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          {rule.points.map((p, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-pink-400">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="ml-auto w-[35%] flex-shrink-0">
                      <motion.img
                        src={rule.img}
                        alt={rule.title}
                        loading="lazy"
                        className="w-full h-auto rounded-xl object-contain"
                        variants={{
                          rest: { opacity: 0, scale: 0.95 },
                          hovered: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-20 flex gap-4 items-start rounded-2xl bg-pink-200/60 border border-pink-300/60 p-6"
          >
            <AlertTriangle className="w-6 h-6 text-pink-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              Breaking rules may result in warnings, mutes, kicks, or permanent
              bans depending on severity. Staff decisions are final.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
