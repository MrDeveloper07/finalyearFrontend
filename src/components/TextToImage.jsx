import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import logo1 from "../assets/downloadLogo.svg";
export default function TextToImage() {
  return (
    <div className="w-full h-  flex flex-col mt-12 items-center bg-slate-600">
      <div className="flex  w-full justify-center text-3xl font-lato bg-slate-600 text-white">
        Image Generation
      </div>
      <div className=" flex   bg-slate-600">
        <div className="h-10 rounded-l-xl bg-slate-600 overflow-hidden flex justify-center items-center w-[500px]  border-2 mt-8">
          {" "}
          <input
            type="text"
            placeholder="Enter Prompt"
            className="w-full border-none outline-none h-full pl-4"
          />
        </div>
        <div className="h-10 w-28 rounded-r-xl text-white font-semibold mt-8 flex justify-center items-center bg-violet-600">
          Generate
        </div>
      </div>
      <div className="mt-8 mb-8 text-white text-xl font-semibold">
  &lt;--- Discover Images---&gt;
</div>

      <div className="flex flex-wrap  mt-2 px-28     bg-slate-600  justify-between px-28">
        <div className="relative holographic-card">
          <img src={img1} alt="" className="w-72 h-48 rounded-xl m-2" />
          <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
            <img src={logo1} alt="" className="h-3" />
          </div>
        </div>

        <div className="relative holographic-card">
          <img src={img2} alt="" className="w-72 h-48 rounded-xl m-2" />
          <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
            <img src={logo1} alt="" className="h-3" />
          </div>
        </div>
        <div className="relative holographic-card">
          <img src={img3} alt="" className="w-full h-48 rounded-xl m-2" />
          <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
            <img src={logo1} alt="" className="h-3" />
          </div>
        </div>
        <div className="relative holographic-card my-4">
          <img src={img4} alt="" className="w-full h-48 rounded-xl m-2" />
          <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
            <img src={logo1} alt="" className="h-3" />
          </div>
        </div>
        <div className="relative holographic-card my-4">
          <img src={img5} alt="" className="w-full h-48 rounded-xl m-2" />
          <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
            <img src={logo1} alt="" className="h-3" />
          </div>
        </div>
        <div className="relative holographic-card my-4">
          <img src={img1} alt="" className="w-full h-48 rounded-xl m-2" />
          <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
            <img src={logo1} alt="" className="h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
