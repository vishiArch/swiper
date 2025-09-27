import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const users = [
  {
    name: "Luna Olive",
    age: 22,
    live: "Online",
    hobby: "Spends weekends chasing cockroaches ☠",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Yeager doe",
    age: 19,
    live: "Offline",
    hobby: "Loves skateboarding at the city park 🛹",
    image:
      "https://images.unsplash.com/photo-1624223237138-21a37e61dec0?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Lucas Nom",
    age: 23,
    live: "Offline",
    hobby: "Loves playing guitar and singing 🎸",
    image:
      "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww",
  },
  {
    name: "Kanae Oscorp",
    age: 19,
    live: "DND",
    hobby: "Meditates every morning to stay calm 🧘‍♂️",
    image:
      "https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Alice Corps",
    age: 26,
    live: "Online",
    hobby: "Loves hiking and outdoor adventures 🏞",
    image:
      "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Carnon Hopes",
    age: "1500+",
    live: "Online",
    hobby: "loves to ride bicycle 🚴‍♀️",
    image:
      "https://images.unsplash.com/photo-1557977275-d261356f567f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    name: "Demontro Quala",
    age: 41,
    live: "Online",
    hobby: "Speak more than 13 languages 🗣",
    image:
      "https://images.unsplash.com/photo-1679217125041-6f81624038d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGUlMjBtb2RlbHxlbnwwfDF8MHx8fDA%3D",
  },
  {
    name: "Emma Johanson",
    age: 37,
    live: "Online",
    hobby: "Loves doing creative stuff 🖍",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlbWFsZSUyMG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
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
      <div className="flex items-center justify-center gap-6 sm:gap-10 h-[7vh] w-full">
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
