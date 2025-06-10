import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FaHeart } from "react-icons/fa";
// import { IoIosStarOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

// import React from "react";

const Navbar = () => {
  const user = {
    name: "Mooa",
    age: 22,
    live: "Online",
    hobby: "Spends weekends building mobile games 💻",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  };
  const user2 = {
    name: "Mikasa",
    age: 19,
    live: "DND",
    hobby: "Meditates every morning to stay calm 🧘‍♂️",
  };
  const user3 = {
    name: "Yeager",
    age: 19,
    live: "Offline",
    hobby: "Loves skateboarding at the city park 🛹 ",
  };
  const user4 = {
    name: "Dogesh Bhai",
    age: 7,
    live: "Online",
    hobby: "Enjoys playing guitar under the stars 🎸",
  };

  return (
    <div className="page flex flex-col items-center">
      <div className="h-[10vh] w-full flex flex-col justify-center gap-[2px] text-white">
        {/* about */}
        <div className="flex items-center ml-[20px] gap-[8px]">
          <h1 className="text-[30px]">{user.name},</h1>
          <p className="text-[30px]">{user.age}</p>
        </div>
        {/* Online or Offline */}
        <div>
          <span className="flex ml-[20px]">
            <MapPin /> {user.live}
          </span>
        </div>
        {/* menu */}
      </div>
      <div className="h-[75vh] w-[97%] flex items-center justify-center bg-red-70">
        <img
          className="h-[97%] w-[97%] object-cover rounded-[22px]"
          src={user.image}
          alt=""
        />
        <span className="absolute text-white bottom-[22vh] left-[5.7vw] text-[21px]">
          {user.hobby}
        </span>
      </div>
      <div className="h-[15vh] w-ful flex items-center justify-center gap-[20px]">
        <div className="cross  h-[90px] w-[90px] rounded-full bg-[#E74748] flex items-center justify-center">
          <ImCross className="text-black-500 text-[38px]" />
        </div>
        <div className="heart h-[90px] w-[90px] rounded-full bg-[#01AB3F] flex items-center justify-center">
          <FaHeart className="text-red-500 text-[38px]" />
        </div>
        <div className="star  h-[90px] w-[90px] rounded-full bg-[#1D8CF2] flex items-center justify-center">
          <FaStar className="startBoy text-yellow-300 text-[41px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
