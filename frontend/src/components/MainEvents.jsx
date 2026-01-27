import { motion } from "framer-motion";

export default function InviteEvent() {
  const prizes = [
    { icon: "🥇", title: "Top Inviter", desc: "Highest invites wins big" },
    { icon: "💰", title: "Owo Cash", desc: "Earn in-server currency" },
    { icon: "🎉", title: "Bonus Rewards", desc: "Surprise perks & roles" },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
                      bg-pink-500/20 blur-3xl rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* LIVE badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full
                        bg-pink-500/10 border border-pink-500/30
                        text-pink-400 text-sm animate-pulse"
        >
          🔴 Invite Event Live
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Invite Friends. Win Rewards.
        </h2>

        <p className="text-pink-200/80 mb-14 max-w-2xl mx-auto">
          Invite people to Lovelink, climb the leaderboard, and grab exciting
          prizes. The more friends you bring, the better the rewards.
        </p>

        {/* Prize cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {prizes.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-[#111] rounded-2xl p-8
                         border border-pink-500/20 cursor-pointer"
            >
              {/* Glow layer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 
                              group-hover:opacity-100 transition
                              bg-pink-500/20 blur-xl"
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl text-pink-400 mb-2">{item.title}</h3>
                <p className="text-pink-200/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer hint */}
        <p className="mt-14 text-sm text-pink-300/70">
          Rewards are based on invite count • Fair play only • No fake invites
        </p>
      </motion.div>
    </section>
  );
}
