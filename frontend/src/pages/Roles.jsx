import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

/* ---------------- SKELETON PLACEHOLDER ---------------- */
const skeletonRoles = Object.keys(roleStyles).map((roleId) => ({
  id: roleId,
  title: "Loading...",
  members: Array.from({ length: manualImages[roleId]?.length || 4 }).map(
    (_, i) => ({
      id: `skeleton-${i}`,
      username: "",
      pfp: null,
      banner: null,
    }),
  ),
}));
const CACHE_KEY = "roles";
export default function Roles() {
  const [roles, setRoles] = useState(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : skeletonRoles;
  });

  const [activeUser, setActiveUser] = useState(null);

  /* ---------------- FETCH & CACHE UI DATA ---------------- */
  useEffect(() => {
    let isMounted = true;

    // Skip fetch if cache exists
    if (localStorage.getItem(CACHE_KEY)) return;

    const fetchRoles = async () => {
      try {
        const { data: rawRoles } = await axios.get(`${BASE_URL}/api/roles`);

        if (!isMounted) return;

        // PROCESS ONLY UI DATA
        const processed = rawRoles
          .filter((r) => roleStyles[r.roleId])
          .map((role) => {
            const imagesForRole = manualImages[role.roleId] || [];

            return {
              id: role.roleId,
              title: role.name,
              members: role.members.map((member, idx) => ({
                id: member.userId,
                username: member.username,
                pfp: cloudImage(imagesForRole[idx]?.pfp || null, {
                  width: 128,
                  height: 128,
                }),
                banner: cloudImage(imagesForRole[idx]?.banner || null, {
                  width: 600,
                }),
              })),
            };
          });

        // CACHE ONLY UI-READY DATA
        localStorage.setItem(CACHE_KEY, JSON.stringify(processed));

        setRoles(processed);
      } catch (err) {
        console.error("Failed to fetch roles:", err);
        setRoles(skeletonRoles);
      }
    };

    fetchRoles();

    return () => {
      isMounted = false;
    };
  }, []);

  const openUser = useCallback((user) => setActiveUser(user), []);

  return (
    <div className="min-h-screen flex flex-col bg-pink-50 transition-colors">
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
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

          {/* ROLES */}
          <div className="space-y-16 sm:space-y-20">
            {roles.map((role, idx) => {
              const style = roleStyles[String(role.id)];
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
                      loading="eager"
                      initial={{ scale : 0.9, rotate: -6, opacity: 0 }}
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
                      {role.members.map((member) =>
                        member.username === "" ? (
                          <div
                            key={member.id}
                            className="h-48 w-full rounded-3xl bg-pink-200 animate-pulse"
                          />
                        ) : (
                          <UserCard
                            key={member.id}
                            userId={member.id}
                            username={member.username}
                            pfp={member.pfp}
                            banner={member.banner}
                            onClick={() => openUser(member)}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
