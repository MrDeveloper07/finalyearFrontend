// import React from "react";
// import img1 from "../assets/img1.jpeg";
// import img2 from "../assets/img2.jpeg";
// import img3 from "../assets/img3.jpeg";
// import img4 from "../assets/img4.jpeg";
// import img5 from "../assets/img5.jpeg";
// import logo1 from "../assets/downloadLogo.svg";
// export default function TextToImage() {
//   return (
//     <div className="w-full  overflow-y-auto hide-scrollbar flex flex-col mt-12 items-center bg-zinc-800">
//       <div className="flex  w-full justify-center text-3xl font-lato  text-white">
//         Image Generation
//       </div>
//       <div className=" flex   ">
//         <div className="h-10 rounded-l-xl  overflow-hidden flex justify-center items-center w-[500px]  border-2 mt-8">
//           {" "}
//           <input
//             type="text"
//             placeholder="Enter Prompt"
//             className="w-full border-none outline-none  h-full pl-4"
//           />
//         </div>
//         <div className="h-10 w-28 rounded-r-xl text-white font-semibold mt-8 flex justify-center items-center bg-violet-600">
//           Generate
//         </div>
//       </div>
//       <div className="mt-8 mb-4 text-white text-xl font-semibold">
//   &lt;--- Discover Images---&gt;
// </div>

//       <div className="flex flex-wrap h-[350px]  p-2 px-8 py-6   justify-between ">
//         <div className="relative holographic-card">
//           <img src={img1} alt="" className="w-72 h-48 rounded-xl m-2" />
//           <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//             <img src={logo1} alt="" className="h-3" />
//           </div>
//         </div>

//         <div className="relative holographic-card">
//           <img src={img2} alt="" className="w-72 h-48 rounded-xl m-2" />
//           <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//             <img src={logo1} alt="" className="h-3" />
//           </div>
//         </div>
//         <div className="relative holographic-card">
//           <img src={img3} alt="" className="w-full h-48 rounded-xl m-2" />
//           <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//             <img src={logo1} alt="" className="h-3" />
//           </div>
//         </div>
//         <div className="relative holographic-card my-4">
//           <img src={img4} alt="" className="w-full h-48 rounded-xl m-2" />
//           <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//             <img src={logo1} alt="" className="h-3" />
//           </div>
//         </div>
//         <div className="relative holographic-card my-4">
//           <img src={img5} alt="" className="w-full h-48 rounded-xl m-2" />
//           <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//             <img src={logo1} alt="" className="h-3" />
//           </div>
//         </div>
//         <div className="relative holographic-card my-4">
//           <img src={img1} alt="" className="w-full h-48 rounded-xl m-2" />
//           <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//             <img src={logo1} alt="" className="h-3" />
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }


// import React, { useState } from "react";
// import logo1 from "../assets/downloadLogo.svg";

// export default function TextToImage() {
//   const [query, setQuery] = useState("");
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const API_URL = "https://api.unsplash.com/search/photos";
//   const API_KEY = "o9A5rEHGg83stGivgbYzy7GxuMSj2wT6FtYpRy3_nBY";

//   const fetchImages = async () => {
//     if (!query) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_URL}?query=${query}&client_id=${API_KEY}`);
//       const data = await response.json();
//       setImages(data.results);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="w-full overflow-y-auto hide-scrollbar flex flex-col mt-12 items-center bg-zinc-800">
//       <div className="flex w-full justify-center text-3xl font-lato text-white">Image Generation</div>
//       <div className="flex mt-8">
//         <input
//           type="text"
//           placeholder="Enter Prompt"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="w-[500px] h-10 pl-4 border-2 rounded-l-xl outline-none"
//         />
//         <button
//           onClick={fetchImages}
//           className="h-10 w-28 rounded-r-xl text-white font-semibold flex justify-center items-center bg-violet-600"
//         >
//           Generate
//         </button>
//       </div>
//       <div className="mt-8 mb-4 text-white text-xl font-semibold">&lt;--- Discover Images ---&gt;</div>
//       {loading && <p className="text-white">Loading...</p>}
//       <div className="flex flex-wrap h-auto p-2 px-8 py-6 justify-between">
//         {images.map((img) => (
//           <div key={img.id} className="relative holographic-card my-4">
//             <img src={img.urls.small} alt={img.alt_description} className="w-72 h-48 rounded-xl m-2" />
//             <div className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md">
//               <img src={logo1} alt="logo" className="h-3" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import logo1 from "../assets/downloadLogo.svg";

export default function TextToImage() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.unsplash.com/search/photos";
  const API_KEY = "o9A5rEHGg83stGivgbYzy7GxuMSj2wT6FtYpRy3_nBY";

  const fetchImages = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?query=${query}&client_id=${API_KEY}`);
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full overflow-y-auto hide-scrollbar flex flex-col mt-12 items-center bg-zinc-800">
      <div className="flex w-full justify-center text-3xl font-lato text-white">Image Generation</div>
      <div className="flex mt-8">
        <input
          type="text"
          placeholder="Enter Prompt"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[500px] h-10 pl-4 border-2 rounded-l-xl outline-none"
        />
        <button
          onClick={fetchImages}
          className="h-10 w-28 rounded-r-xl text-white font-semibold flex justify-center items-center bg-violet-600"
        >
          Generate
        </button>
      </div>
      <div className="mt-8 mb-4 text-white text-xl font-semibold">&lt;--- Discover Images ---&gt;</div>
      {loading && <p className="text-white">Loading...</p>}
      <div className="flex flex-wrap h-auto p-2 px-8 py-6 justify-between">
        {images.map((img) => (
          <div key={img.id} className="relative holographic-card my-4">
            <img src={img.urls.small} alt={img.alt_description} className="w-72 h-48 rounded-xl m-2" />
            <div 
              className="h-6 w-8 rounded-xl bg-violet-500 bg-opacity-80 absolute bottom-4 right-6 flex justify-center items-center backdrop-blur-md cursor-pointer"
              onClick={() => downloadImage(img.urls.full)}
            >
              <img src={logo1} alt="logo" className="h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
