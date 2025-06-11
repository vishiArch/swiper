import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const users = [
  {
    name: "Mooa",
    age: 22,
    live: "Online",
    hobby: "Spends weekends building mobile games 💻",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mikasa",
    age: 19,
    live: "DND",
    hobby: "Meditates every morning to stay calm 🧘‍♂️",
    image:
      "https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Yeager",
    age: 19,
    live: "Offline",
    hobby: "Loves skateboarding at the city park 🛹 ",
    image:
      "https://images.unsplash.com/photo-1624223237138-21a37e61dec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Dogesh Bhai",
    age: 7,
    live: "Online",
    hobby: "Enjoys playing guitar under the stars 🎸",
    image:
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwbWVtZXxlbnwwfDF8MHx8fDA%3D",
  },
];

const Navbar = () => {
  const [userIndex, setUserIndex] = useState(0);

  const handleHeartClick = () => {
    setUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };
  const user = users[userIndex];

  const handleLeft = () => {
    setUserIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  return (
    <div className="page min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black-900 px-2 sm:px-4">
      {/* Header */}
      <div className="w-full h-[10vh] w-full flex flex-col justify-center gap-1 text-white pt-4">
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

      {/* Main Image/Card */}
      <div className="relative flex items-center justify-center w-full max-w-md mt-4 mb-4">
        <img
          className="w-full h-[75vh] sm:h-[60vh] object-cover rounded-2xl shadow-lg"
          src={user.image}
          alt={user.name}
        />
        <span className="absolute text-white left-4 bottom-4 text-base sm:text-lg bg-black bg-opacity-40 px-3 py-1 rounded-lg">
          {user.hobby}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mt-2 mb-6 h-[7vh] w-full">
        <div className="cross h-20 w-20 sm:h-20 sm:w-20 rounded-full bg-[#E74748] flex items-center justify-center shadow-lg">
          <ImCross onClick={handleLeft} className="text-black-500 text-[32px] sm:text-3xl" />
        </div>
        <div className="heart h-20 w-20 sm:h-20 sm:w-20 rounded-full bg-[#01AB3F] flex items-center justify-center shadow-lg">
          <FaHeart
            onClick={handleHeartClick}
            className="text-red-500 text-[36px] sm:text-3xl cursor-pointer"
          />
        </div>
        <div className="star h-20 w-20 sm:h-20 sm:w-20 rounded-full bg-[#1D8CF2] flex items-center justify-center shadow-lg">
          <FaStar className="text-yellow-300 text-[36px] sm:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
