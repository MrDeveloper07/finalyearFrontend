import React, { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import basic from "../assets/basic.png";
import lite from "../assets/lite.png";
import pro from "../assets/pro.png";
import Advanced from "../assets/advaned.png";
import { FaCrown } from "react-icons/fa";
import axios from "axios";
export default function Homepage() {
  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(response.data);
        setSubscription(response.data.subscription);
        // Set the profile image URL
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const sub = subscription;

  const manage = () => {
    let imagetype; // Declare variables outside of the condition
    let typename;

    if (sub === "basic") {
      imagetype = basic;
      typename = "Basic";
    } else if (sub === "lite") {
      imagetype = lite;
      typename = "Lite";
    } else if (sub === "pro") {
      imagetype = pro;
      typename = "Pro";
    } else {
      imagetype = Advanced;
      typename = "Advanced";
    }

    return { imagetype, typename }; // Return both variables
  };
  const data = manage();
  console.log(data.typename);
  // fetchUser();

  return (
    <div className="flex  h-full  items-center justify-between w-full  flex-col bg-slate-800">
      <div className="h-24  w-full p-8 flex  items-center">
        <img src={logo} alt="" className="h-16" />
      </div>
      <div className="h-[400px] flex items-center flex-col">
        <Link
          to="/image"
          className="h-14 m-3 w-72 border-solid border-2 border-white  bg-orange-500 items-center justify-center flex rounded-xl"
        >
          <span className="text-white font-semibold font-lato">
            Image Generation
          </span>
        </Link>
        <Link
          to="/videoGeneration"
          className="h-14 m-3 w-72  border-solid border-2 border-white    bg-orange-500 items-center justify-center font-lato flex rounded-xl "
        >
          <span className="text-white font-semibold">Video Generation</span>
        </Link>
        <Link
          to="/pptGeneration"
          className="h-14 m-3 w-72 bg-orange-500 border-solid border-2 border-white  items-center justify-center font-lato flex rounded-xl "
        >
          <span className="text-white font-semibold">PPT Generation</span>
        </Link>
        <Link
          to="/musicGeneration"
          className="h-14 m-3 w-72 bg-orange-500 border-solid border-2 border-white  items-center justify-center font-lato flex rounded-xl "
        >
          <span className="text-white font-semibold">Music Generation</span>
        </Link>
        <div className="relative">
          <Link
            to="/Intereview Preparation"
            className={`h-14  m-3 w-72 z-10 bg-red-600  ${
              sub != "advanced" ? "blur-sm" : ""
            } border-solid border-2 border-white  items-center justify-center font-lato flex rounded-xl `}
          >
            <span className="text-white font-semibold">
              Interview Preparation
            </span>
          </Link>
          {sub != "advanced" ? (
            <div className="absolute top-3 left-3 rounded-xl h-14 w-72 border-2  bg-gray-500  bg-opacity-60 flex items-center justify-center gap-4">
              <FaCrown size={28} color="#ffb83d" />{" "}
              <span className="text-lg font-bold  text-white">
                {" "}
                Advanced Membership
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="h-44 flex p-4 px-6 justify-center items-center  w-full ">
        <div className="h-36 w-72 mx-4   flex border-white rounded-xl justify-center items-center overflow-hidden relative">
          <div className="h-full w-full bg-gradient-to-tr rounded-xl from-indigo-500 via-purple-500 via-blue-500 via-yellow-700 to-pink-500"></div>
          <div
            className={`absolute h-[135px] w-[280px]  top-1 ${
              sub == "basic"
                ? "bg-gray-600"
                : sub == "lite"
                ? "bg-green-600"
                : sub == "pro"
                ? "bg-violet-700"
                : ""
            }  rounded-xl px-2 flex`}
          >
            <div className="w-48   flex justify-center items-center ">
              <img src={data.imagetype} alt="" className="h-24 w-full" />
            </div>
            <div className="flex w-full justify-between py-6 flex-col gap-3 items-center">
              <div className="text-white text-3xl font-premium capitalize">
                {data.typename}
              </div>
              <Link
                to="/manageMembership"
                className="h-12 text-center border-2 px-4 w-36 text-white font-base justify-center rounded-xl flex items-center font-imprima "
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
