

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import axios from "axios";
import logo from "../assets/logo.png";
import basic from "../assets/basic.png";
import lite from "../assets/lite.png";
import pro from "../assets/pro.png";
import advanced from "../assets/advaned.png";

const subscriptionTypes = {
  basic: { image: basic, name: "Basic", color: "bg-gray-600" },
  lite: { image: lite, name: "Lite", color: "bg-green-600" },
  pro: { image: pro, name: "Pro", color: "bg-violet-700" },
  advanced: { image: advanced, name: "Advanced", color: "bg-gradient-to-tr from-indigo-500 via-purple-500 via-blue-500 via-yellow-700 to-pink-500 " },
};

export default function Homepage() {
  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        
        const { data } = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubscription(data.subscription || "basic");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const { image, name, color } = subscriptionTypes[subscription] || subscriptionTypes.basic;

  const menuItems = [
    { to: "/image", label: "Image Generation" },
    { to: "/videoGeneration", label: "Video Generation" },
    { to: "/pptGeneration", label: "PPT Generation" },
    { to: "/musicGeneration", label: "Music Generation" },
  ];

  return (
    <div className="flex flex-col items-center justify-around h-full w-full bg-slate-800">
      <div className="h-24 w-full p-8 flex items-center">
        <img src={logo} alt="Logo" className="h-16" />
      </div>
      
      <div className=" flex flex-col items-center">
        {menuItems.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="h-12 m-3 w-64 border-1 border border-white bg-orange-500 flex items-center justify-center rounded-xl text-white font-semibold"
          >
            {label}
          </Link>
        ))}

        {/* Interview Preparation Section */}
        <div className="relative">
          <Link
            to="/InterviewPreparation"
            className={`h-12 m-3 w-64 bg-red-600 border-1 border border-gray-200 flex items-center text-base justify-center rounded-xl text-white font-semibold ${
              subscription !== "advanced" ? "blur-sm" : ""
            }`}
          >
            Interview Preparation
          </Link>
          {subscription !== "advanced" && (
            <div className="absolute top-3 left-3 h-12 w-64 flex items-center justify-center bg-gray-500 bg-opacity-60 rounded-xl border-2">
              <FaCrown size={28} color="#ffb83d" />
              <span className="text-lg font-bold text-white">Advanced Membership</span>
            </div>
          )}
        </div>
      </div>

      {/* Membership Card */}
      <div className="h-36 flex  px-6  justify-center items-center w-full">
        <div className="h-28 w-72 mx-4 flex border-white rounded-xl justify-center items-center overflow-hidden relative">
          <div className={`h-full w-full rounded-xl ${color} `}></div>
          <div className={`absolute rounded-xl  gap-2 flex justify-center`}>
            <div className="flex justify-center items-center">
              <img src={image} alt={name} className="w-24 h-20 " />
            </div>
            <div className="flex flex-col gap-2 items-center justify-around">
              <div className="text-white text-xl font-premium capitalize">{name}</div>
              <Link
                to="/manageMembership"
                className="h-10 text-center border-1 border px-4 w-24 text-xs text-white font-base justify-center rounded-xl flex items-center font-imprima"
              >
                Manage Membership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
