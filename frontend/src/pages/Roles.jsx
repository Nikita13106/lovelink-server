import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserProfileModal from "../components/UserProfileModal";
import UserCard from "../components/UserCard";

import { IMAGES, cloudImage } from "../config/images";
import BASE_URL from "../config/api";

/* ---------------- ROLE STYLES ---------------- */

const roleStyles = {
  "1465408066093711371": {
    gradient: "from-yellow-200 via-pink-200 to-purple-200",
    iconImg: IMAGES.roles.founder,
  },
  "1456189845280915651": {
    gradient: "from-pink-200 via-rose-200 to-orange-200",
    iconImg: IMAGES.roles.owners,
  },
  "1457028953402511460": {
    gradient: "from-rose-200 via-pink-200 to-fuchsia-200",
    iconImg: IMAGES.roles.girlOwners,
  },
  "1456189846292009021": {
    gradient: "from-lavender-200 via-indigo-200 to-sky-200",
    iconImg: IMAGES.roles.coOwners,
  },
};

/* ---------------- MANUAL IMAGES ---------------- */

const manualImages = {
  "1465408066093711371": [
    { pfp: IMAGES.pfps.devdas, banner: IMAGES.banners.banner1 },
  ],
  "1456189845280915651": [
    { pfp: IMAGES.pfps.reaper, banner: IMAGES.banners.banner2 },
    { pfp: IMAGES.pfps.manseerat, banner: IMAGES.banners.banner3 },
    { pfp: IMAGES.pfps.sloke, banner: IMAGES.banners.banner4 },
  ],
  "1457028953402511460": [
    { pfp: IMAGES.pfps.kittu, banner: IMAGES.banners.banner5 },
  ],
  "1456189846292009021": [
    { pfp: IMAGES.pfps.shadow, banner: IMAGES.banners.banner6 },
    { pfp: IMAGES.pfps.grace, banner: IMAGES.banners.banner7 },
    { pfp: IMAGES.pfps.tanishq, banner: IMAGES.banners.banner8 },
  ],
};

export default function Roles() {
  const [rawRoles, setRawRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState(null);

  /* ---------------- FETCH ---------------- */

  useEffect(() => {
    fetch(`${BASE_URL}/api/roles`)
      .then((res) => res.json())
      .then(setRawRoles)
      .catch((err) => {
        console.error("Error fetching roles:", err);
        setRawRoles([]);
      })
      .finally(() => setLoading(false));
  }, []);

  /* ---------------- MAP DATA (MEMOIZED) ---------------- */

  const roles = useMemo(() => {
    return rawRoles.map((role) => {
      const imagesForRole = manualImages[role.id] || [];
      return {
        ...role,
        members: role.members.map((member, idx) => ({
          ...member,
          pfp: imagesForRole[idx]?.pfp ?? null,
          banner: imagesForRole[idx]?.banner ?? null,
        })),
      };
    });
  }, [rawRoles]);

  const openUser = useCallback((user) => {
    setActiveUser(user);
  }, []);

  /* ---------------- RENDER ---------------- */

  return (
    <div className="min-h-screen bg-pink-50 transition-colors pb-[160px]">
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/60 border border-pink-200 mb-5">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">
                LoveLINK Leadership
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
                Team
              </span>
            </h1>

            <p className="text-pink-600 max-w-xl mx-auto text-sm sm:text-base">
              The people who shape, protect, and grow the LoveLINK community.
            </p>
          </motion.div>

          {loading && (
            <p className="text-center text-pink-500">
              Loading leadership team…
            </p>
          )}

          {/* ROLES */}
          <div className="space-y-16 sm:space-y-20">
            {roles.map((role, idx) => {
              const style = roleStyles[role.id];
              if (!style) return null;

              return (
                <motion.section
                  key={role.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  {/* ROLE HEADER */}
                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 mb-8 sm:mb-10">
                    <motion.div
                      className={`absolute -left-6 top-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${style.gradient}`}
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.35, 0.55, 0.35],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.img
                      src={cloudImage(style.iconImg, { width: 96 })}
                      alt={role.title}
                      className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      loading="lazy"
                      initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
                      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 160 }}
                    />

                    <div className="relative z-10">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        {role.title}
                      </h2>
                      <motion.div
                        className={`mt-2 h-[4px] w-16 sm:w-20 rounded-full bg-gradient-to-r ${style.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* MEMBERS */}
                  <div className="relative pl-4 sm:pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-300/60 via-pink-400/30 to-transparent rounded-full" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
                      {role.members.map((member) => (
                        <UserCard
                          key={member.id}
                          userId={member.id}
                          username={member.username}
                          pfp={cloudImage(member.pfp, {
                            width: 128,
                            height: 128,
                          })}
                          banner={cloudImage(member.banner, { width: 600 })}
                          onClick={() => openUser(member)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <UserProfileModal user={activeUser} onClose={() => setActiveUser(null)} />
    </div>
  );
}
