import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const users = [
  {
    name: "Mooa",
    age: 22,
    live: "Online",
    hobby: "Spends weekends building mobile games 💻",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Mikasa",
    age: 19,
    live: "DND",
    hobby: "Meditates every morning to stay calm 🧘‍♂️",
    image:
      "https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Yeager",
    age: 19,
    live: "Offline",
    hobby: "Loves skateboarding at the city park 🛹",
    image:
      "https://images.unsplash.com/photo-1624223237138-21a37e61dec0?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dogesh Bhai",
    age: 7,
    live: "Online",
    hobby: "Enjoys playing guitar under the stars 🎸",
    image:
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=500&auto=format&fit=crop&q=60",
  },
];

const Navbar = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [action, setAction] = useState(null);

  const user = users[userIndex];

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
