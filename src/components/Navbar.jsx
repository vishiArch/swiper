import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [action, setAction] = useState(null);

  // 🔹 Fetch Unsplash images
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?count=8&client_id=YOUR_ACCESS_KEY`
        );
        const data = await res.json();

        // 🔹 Map Unsplash images into user objects
        const mappedUsers = data.map((img, idx) => ({
          name: img.user.name || `User ${idx + 1}`,
          age: Math.floor(Math.random() * 15) + 18, // random age 18-32
          live: idx % 2 === 0 ? "Online" : "Offline",
          hobby: img.alt_description
            ? `Loves ${img.alt_description}`
            : "Enjoys adventures 🌍",
          image: img.urls.regular,
        }));

        setUsers(mappedUsers);
      } catch (err) {
        console.error("Error fetching Unsplash images:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleHeartClick = () => {
    setAction("like");
    setTimeout(() => {
      setUserIndex((prev) => (prev + 1) % users.length);
      setAction(null);
    }, 500);
  };

  const handleCrossClick = () => {
    setAction("dislike");
    setTimeout(() => {
      setUserIndex((prev) => (prev - 1 + users.length) % users.length);
      setAction(null);
    }, 500);
  };

  if (users.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading profiles...
      </div>
    );
  }

  const user = users[userIndex];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black px-2 sm:px-4">
      {/* Header */}
      <div className="w-full h-[10vh] flex flex-col justify-center gap-1 text-white pt-4">
        <div className="flex items-center gap-2 ml-3 sm:ml-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{user.name},</h1>
          <p className="text-2xl sm:text-3xl">{user.age}</p>
        </div>
        <div>
          <span className="flex items-center ml-3 sm:ml-6 text-sm sm:text-base">
            <MapPin className="mr-1" /> {user.live}
          </span>
        </div>
      </div>

      {/* Animated Image Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={userIndex}
          className="relative flex items-center justify-center w-full max-w-md mt-4 mb-4 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, rotate: 0, x: 0 }}
          animate={{
            opacity: 1,
            rotate: action === "like" ? 10 : action === "dislike" ? -10 : 0,
            x: action === "like" ? 200 : action === "dislike" ? -200 : 0,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          style={{ height: "75vh" }}
        >
          <motion.div
            className={`absolute h-[97%] w-[97%] rounded-2xl z-[3] transition-all duration-300
              ${action === "like" ? "bg-green-400/10 backdrop-blur-md" : ""}
              ${action === "dislike" ? "bg-red-400/10 backdrop-blur-md" : ""}`}
          />
          <motion.img
            src={user.image}
            className="h-[97%] w-[97%] object-cover rounded-xl shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="absolute text-white left-4 bottom-4 text-base sm:text-lg bg-black bg-opacity-40 px-3 py-1 rounded-lg">
            {user.hobby}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mt-2 mb-6 h-[7vh] w-full">
        <motion.div
          className="h-20 w-20 rounded-full bg-[#E74748] flex items-center justify-center shadow-lg cursor-pointer"
          whileTap={{ scale: 0.85 }}
          onClick={handleCrossClick}
        >
          <ImCross className="text-black-500 text-[32px] sm:text-3xl" />
        </motion.div>

        <motion.div
          className="h-20 w-20 rounded-full bg-[#01AB3F] flex items-center justify-center shadow-lg cursor-pointer"
          whileTap={{ scale: 0.85 }}
          onClick={handleHeartClick}
        >
          <FaHeart className="text-red-500 text-[36px] sm:text-3xl" />
        </motion.div>

        <motion.div
          className="h-20 w-20 rounded-full bg-[#1D8CF2] flex items-center justify-center shadow-lg"
          whileTap={{ scale: 0.9 }}
        >
          <FaStar className="text-yellow-300 text-[36px] sm:text-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
