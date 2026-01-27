import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserProfileModal from "../components/UserProfileModal";
import UserCard from "../components/UserCard";
import BASE_URL from "../config/api";

// Manual images for members
import reaper from "../assets/pfps/reaper.jpg";
import manseerat from "../assets/pfps/manseerat.jpg";
import sloke from "../assets/pfps/sloke.png";
import devdas from "../assets/pfps/devdas.jpg";
import kittu from "../assets/pfps/kittu.jpg";
import grace from "../assets/pfps/grace.jpg";
import tanishq from "../assets/pfps/tanishq.jpg";
import shadow from "../assets/pfps/shadow.jpg";

import banner1 from "../assets/banners/banner1.jpg";
import banner2 from "../assets/banners/banner2.jpg";
import banner3 from "../assets/banners/banner3.jpg";
import banner4 from "../assets/banners/banner4.jpg";
import banner5 from "../assets/banners/banner5.mp4";
import banner6 from "../assets/banners/banner6.jpg";
import banner7 from "../assets/banners/banner7.jpg";
import banner8 from "../assets/banners/chuku.webp";

// Role icons
import founderIcon from "../assets/role-icons/Founder.png";
import ownersIcon from "../assets/role-icons/Owners.png";
import girlOwnersIcon from "../assets/role-icons/GirlOwners.png";
import coOwnersIcon from "../assets/role-icons/CoOwners.png";

// Role gradient styles
const roleStyles = {
  "1465408066093711371": {
    iconImg: founderIcon,
    gradient: "from-yellow-200 via-pink-200 to-purple-200",
  },
  "1456189845280915651": {
    iconImg: ownersIcon,
    gradient: "from-pink-200 via-rose-200 to-orange-200",
  },
  "1457028953402511460": {
    iconImg: girlOwnersIcon,
    gradient: "from-rose-200 via-pink-200 to-fuchsia-200",
  },
  "1456189846292009021": {
    iconImg: coOwnersIcon,
    gradient: "from-lavender-200 via-indigo-200 to-sky-200",
  },
};

// Manual images per role
const manualImages = {
  "1465408066093711371": [{ pfp: devdas, banner: banner1 }],
  "1456189845280915651": [
    { pfp: reaper, banner: banner2 },
    { pfp: manseerat, banner: banner3 },
    { pfp: sloke, banner: banner4 },
  ],
  "1457028953402511460": [{ pfp: kittu, banner: banner5 }],
  "1456189846292009021": [
    { pfp: shadow, banner: banner8 },
    { pfp: grace, banner: banner6 },
    { pfp: tanishq, banner: banner7 },
  ],
};

export default function Roles() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/roles`)
      .then((res) => res.json())
      .then((data) => {
        const mappedRoles = data.map((role) => {
          const imagesForRole = manualImages[role.id] || [];
          return {
            ...role,
            members: role.members.map((member, index) => ({
              ...member,
              pfp: imagesForRole[index]?.pfp || null,
              banner: imagesForRole[index]?.banner || null,
            })),
          };
        });

        setRoles(mappedRoles);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching roles:", err);
        setRoles([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 transition-colors">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100/60 border border-pink-200 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">
                LoveLINK Leadership
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">
                Team
              </span>
            </h1>

            <p className="text-pink-600 max-w-xl mx-auto">
              The people who shape, protect, and grow the LoveLINK community.
            </p>
          </motion.div>

          {loading && (
            <p className="text-center text-pink-500">
              Loading leadership team...
            </p>
          )}

          {/* Roles */}
          <div className="space-y-20">
            {roles.map((role, idx) => {
              const style = roleStyles[role.id];
              if (!style) return null;

              return (
                <motion.section
                  key={role.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Role Header */}
                  <div className="relative flex items-center gap-6 mb-10">
                    <motion.div
                      className={`absolute -left-6 w-24 h-24 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${style.gradient}`}
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
                      src={style.iconImg}
                      alt={role.title}
                      className="relative z-10 w-20 h-20 object-contain"
                      initial={{ scale: 0.8, rotate: -6, opacity: 0 }}
                      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 180 }}
                    />
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {role.title}
                      </h2>
                      <motion.div
                        className={`mt-2 h-[4px] w-20 rounded-full bg-gradient-to-r ${style.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>

                  {/* Members */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-300/60 via-pink-400/30 to-transparent rounded-full" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-12">
                      {role.members.map((member) => (
                        <UserCard
                          key={member.id}
                          userId={member.id}
                          username={member.username}
                          pfp={member.pfp}
                          banner={member.banner}
                          onClick={() => setActiveUser(member)}
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
