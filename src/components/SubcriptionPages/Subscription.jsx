import React from "react";
import { useState, useEffect } from "react";
import { FaShieldVirus } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiVisaFill } from "react-icons/ri";
import { CgPaypal } from "react-icons/cg";
import { MdOutlinePayments } from "react-icons/md";
import axios from "axios";
export default function Subscription() {
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
  console.log(sub);
  return (
    <div className="h-full w-full bg-slate-750 flex flex-col items-center pt-12">
      <div className=" text-2xl font-semibold text-white">Our Pricing</div>
      <div className="text-ms text-gray-300 mt-2 font-semibold">
        Team Active offers you the most friendly packages to start your design
        career
      </div>
      <div className="h-[360px] w-full px-8 gap-2 mt-10 flex justify-between">
        <div
          className={`${
            sub == "basic"
              ? " border-4 border-green-400 "
              : "border-2 border-white"
          }   from-slate-100 bg-gradient-to-b w-64 my-4 rounded-[35px] flex flex-col items-center`}
        >
          <div className="mt-6 text-black font-bold text-2xl">Free</div>
          <div className="w-full text-center flex justify-center text-sm font-semibold mt-4 ">
            A suitable Way to start design career for student
          </div>
          <div className="h-36 flex items-center text-xl font-semibold">
            <div className="flex items-">
              0.00
              <div className="h-10  justify-none  text-[10x]"> Rs</div>
            </div>
          </div>
          <div className="text-[10px] font-medium">
            Hover to see more features
          </div>
        </div>
        <div className="relative">
          <div
            className={`${
              sub == "lite"
                ? " border-4 border-green-400 "
                : "border-2 border-white"
            } h-[328px]  from-blue-600 bg-gradient-to-t to-slate-200 w-64 my-4 rounded-[35px] flex flex-col items-center`}
          >
            <div className="mt-6 text-black font-bold text-2xl">Lite</div>
            <div className="w-full text-center flex justify-center text-sm font-semibold mt-4 ">
              A suitable Way to start design career for student
            </div>
            <div className="h-36 flex items-center text-xl font-semibold">
              <div className="flex items-">
                50.00
                <div className="h-10  justify-none  text-[10x]"> Rs</div>
              </div>
            </div>
            <div className="text-[10px] font-medium">
              Hover to see more features
            </div>
          </div>
          <div className="absolute bottom-0 h-8  w-full">
            <div className="w-full justify-center h-full flex  items-center">
              <div
                className={` ${
                  sub == "lite" ? "bg-red-500 text-white" : " bg-gray-300 "
                } w-36 rounded-3xl h-full border-2 border-whitetext-center cursor-pointer flex items-center justify-center font-semibold`}
              >
                {sub === "lite" ? (
                  <span>Subscribed</span>
                ) : (
                  <span>Subscribe</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className={`${
              sub == "pro"
                ? " border-4 border-green-400 "
                : "border-2 border-white"
            } h-[328px]  from-blue-600 bg-gradient-to-t to-slate-200 w-64 my-4 rounded-[35px] flex flex-col items-center`}
          >
            <div className="mt-6 text-black font-bold text-2xl">Pro</div>
            <div className="w-full text-center flex justify-center text-sm font-semibold mt-4 ">
              A suitable Way to start design career for student
            </div>
            <div className="h-36 flex items-center text-xl font-semibold">
              <div className="flex items-">
                150.00
                <div className="h-10  justify-none  text-[10x]"> Rs</div>
              </div>
            </div>
            <div className="text-[10px] font-medium">
              Hover to see more features
            </div>
          </div>
          <div className="absolute bottom-0 h-8  w-full">
            <div className="w-full justify-center h-full flex  items-center">
              <div
                className={` ${
                  sub == "pro" ? "bg-red-500 text-white" : " bg-gray-300 "
                } w-36 rounded-3xl h-full border-2 border-whitetext-center cursor-pointer flex items-center justify-center font-semibold`}
              >
                {sub === "pro" ? (
                  <span>Subscribed</span>
                ) : (
                  <span>Subscribe</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className={`${
              sub == "advanced"
                ? " border-4 border-green-400 "
                : "border-2 border-white"
            } h-[328px]  from-blue-600 bg-gradient-to-t to-slate-200 w-64 my-4 rounded-[35px] flex flex-col items-center`}
          >
            <div className="mt-6 text-black font-bold text-2xl">Advanced</div>
            <div className="w-full text-center flex justify-center text-sm font-semibold mt-4 ">
              A suitable Way to start design career for student
            </div>
            <div className="h-36 flex items-center text-xl font-semibold">
              <div className="flex items-">
                250.00
                <div className="h-10  justify-none  text-[10x]"> Rs</div>
              </div>
            </div>
            <div className="text-[10px] font-medium">
              Hover to see more features
            </div>
          </div>
          <div className="absolute bottom-0 h-8  w-full">
            <div className="w-full justify-center h-full flex  items-center">
              <div
                className={` ${
                  sub == "advanced" ? "bg-red-500 text-white" : " bg-gray-300 "
                } w-36 rounded-3xl h-full border-2 border-whitetext-center cursor-pointer flex items-center justify-center font-semibold`}
              >
                {sub === "advanced" ? (
                  <span>Subscribed</span>
                ) : (
                  <span>Subscribe</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-48 justify-around flex items-center">
        <div className="w-72 h-24 flex flex-col justify-center  items-center px-4">
          <div className="text-white font-bold text-[13px] mb-1">
            ACCEPTED PAYMENT METHODS
          </div>
          <div className="w-full gap-2 ml-14 flex">
            <RiVisaFill size={28} color="white" />
            <CgPaypal size={28} color="white" />
            <MdOutlinePayments size={28} color="white" />
          </div>
        </div>
        <div className="w-72 h-24  flex items-center px-4">
          <RiCustomerService2Line color="white" size={48} />
          <div className=" ml-4 font-semibold text-white text-[12px]">
            It you are not satisfied with our services then contact with our
            Team Leader
          </div>
        </div>
        <div className="w-72 h-24 flex items-center px-4">
          <FaShieldVirus color="white" size={38} />
          <div className=" ml-4 font-semibold text-white text-[12px]">
            Your Information is Protected By Our Team
          </div>
        </div>
      </div>
    </div>
  );
}
