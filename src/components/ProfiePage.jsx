// // import React, { useState, useEffect } from "react";
// // import profile from "../assets/profile.jpg";
// // import { MdOutlineModeEdit } from "react-icons/md";
// // import { useNavigate } from "react-router-dom";
// // import axios from "../axios";
// // import { GiCancel } from "react-icons/gi";

// // export default function ProfilePage() {
// //   const navigate = useNavigate();

// //   const [edited, setEdit] = useState(false);
// //   const [updateField, setUpdateField] = useState(""); // To track what is being updated
// //   const [newFieldValue, setNewFieldValue] = useState("");

// //   const [userName, setUserName] = useState("Loading...");
// //   const [profession, setProfession] = useState("Loading...");

// //   // Sample history data (Leave empty to test "No history available")
// //   const historyData = [
// //     {
// //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui a eveniet provident tempora modi nisi dignissimos, voluptate odit molestias. Eaque optio nulla eligendi!",
// //       time: "9:00 am",
// //     },
// //     {
// //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui a eveniet provident tempora modi nisi dignissimos, voluptate odit molestias. Eaque optio nulla eligendi!",
// //       time: "9:30 am",
// //     },
// //   ];

// //   const handleFieldUpdate = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         navigate("/login");
// //         return;
// //       }

// //       // Determine which field to update
// //       const updateData = {};
// //       if (updateField === "name") {
// //         updateData.name = newFieldValue;
// //       } else if (updateField === "profession") {
// //         updateData.profession = newFieldValue;
// //       }

// //       // Update the user's data in the database
// //       const response = await axios.put(
// //         "http://localhost:5000/api/auth/update",
// //         updateData,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       // Update the respective field in the UI
// //       if (updateField === "name") {
// //         setUserName(response.data.user.name);
// //       } else if (updateField === "profession") {
// //         setProfession(response.data.user.profession);
// //       }

// //       setEdit(false); // Close the edit modal
// //       setNewFieldValue(""); // Reset the input field
// //     } catch (error) {
// //       console.error(`Error updating ${updateField}:`, error);
// //     }
// //   };

// //   const handleEditClick = (field) => {
// //     setUpdateField(field); // Set the field to update
// //     setEdit(true); // Show the popup
// //   };

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const response = await axios.get("http://localhost:5000/api/auth/me", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         setUserName(response.data.name);
// //         setProfession(response.data.profession);
// //       } catch (error) {
// //         console.error("Error fetching user data:", error);
// //         navigate("/login");
// //       }
// //     };

// //     fetchUser();
// //   }, [navigate]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <div>
// //       <div className="flex relative">
// //         <div className="w-1/2 h-full flex justify-center items-center flex-col">
// //           <div className="h-[650px] my-10 w-96 border-2 flex py-6 flex-col items-center rounded-xl">
// //             <div className="w-80 text-base text-white font-medium mb-4">
// //               Edit Profile
// //             </div>
// //             <div className="w-44 w-48 border-2 border-blue-500 rounded-full overflow-hidden">
// //               <img src={profile} alt="Profile" className="w-full" />
// //             </div>

// //             <div className="mt-4 w-72 text-white flex flex-col">
// //               <label htmlFor="">Name :</label>
// //               <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
// //                 <span className="text-xl font-medium capitalize">{userName}</span>
// //                 <MdOutlineModeEdit size={20} onClick={() => handleEditClick("name")} />
// //               </div>
// //             </div>
// //             <div className="mt-4 w-72 text-white flex flex-col">
// //               <label htmlFor="">Profession :</label>
// //               <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
// //                 <span className="text-xl font-medium capitalize">{profession}</span>
// //                 <MdOutlineModeEdit size={20} onClick={() => handleEditClick("profession")} />
// //               </div>
// //             </div>
// //             <div className="mt-4 w-72 text-white flex flex-col">
// //               <label htmlFor="">Subscription :</label>
// //               <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
// //                 <span className="text-xl font-medium">Premium Membership</span>
// //               </div>
// //             </div>
// //             <div onClick={handleLogout} className="btn cursor-pointer mt-10 border-2 w-48 p-2 flex items-center justify-center rounded-xl bg-violet-700 font-semibold text-xl text-white">
// //               Logout
// //             </div>
// //           </div>
// //         </div>
// //         <div className="w-1/2 pr-4 items-center flex flex-col">
// //           <div className="w-96 border-2 h-12 rounded-3xl mt-10 flex">
// //             <div className="w-56 bg-white rounded-3xl flex justify-center items-center text-xl font-semibold">
// //               History
// //             </div>
// //             <div className="w-56 rounded-3xl flex justify-center items-center text-xl text-white font-semibold">
// //               Analysis
// //             </div>
// //           </div>
// //           <div className="border-2 mt-4 w-full rounded-xl h-[590px] overflow-y-auto scrollable m-4 mx-8 p-2">
// //             {historyData.length > 0 ? (
// //               historyData.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="border-2 mt-2 rounded-xl p-2 relative"
// //                 >
// //                   <span className="text-white">{item.text}</span>
// //                   <div className="absolute right-3 bottom-1 text-gray-700 font-semibold">
// //                     {item.time}
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <div className="flex justify-center items-center h-full text-white font-semibold text-xl">
// //                 No history available.
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       {/* Popup for updating fields */}
// //       <div className={`absolute h-full z-10 w-full bg-gray-500 top-0 bg-opacity-80 items-center justify-center ${edited ? "flex" : "hidden"}`}>
// //         <div className="h-56 flex justify-center flex-col w-96 border-2 items-center z-30 text-black border-white rounded-xl">
// //           <div className="text-white mb-4 text-xl font-semibold">
// //             {`Update Your ${updateField === "name" ? "Name" : "Profession"} Here`}
// //           </div>
// //           <input
// //             type="text"
// //             className="h-8 w-56 rounded-lg px-2"
// //             value={newFieldValue}
// //             onChange={(e) => setNewFieldValue(e.target.value)}
// //           />
// //           <div onClick={handleFieldUpdate} className="h-10 w-24 flex items-center justify-center rounded-xl border-2 bg-white border-black cursor-pointer mt-4 p-2">
// //             Submit
// //           </div>
// //         </div>

// //         <div className="h-full w-full absolute">
// //           <div className="absolute top-12 right-12 h-8 w-8">
// //             <GiCancel onClick={() => setEdit(false)} color="white" size={28} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import axios from "../axios";
// import { GiCancel } from "react-icons/gi";
// import profile from "../assets/profile.jpg";

// import { Link } from "react-router-dom";

// export default function ProfilePage() {
//   const navigate = useNavigate();

//   const [edited, setEdit] = useState(false);
//   const [updateType, setUpdateType] = useState(""); // "name" or "profession"
//   const [newValue, setNewValue] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [userName, setUserName] = useState("Loading...");
//   const [profession, setProfession] = useState("Loading...");

//   const [historyData, setHistoryData] = useState([
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui.",
//       time: "9:00 am",
//     },
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui.",
//       time: "9:30 am",
//     },
//   ]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:5000/api/auth/me", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUserName(response.data.name);
//         setProfession(response.data.profession);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         navigate("/login");
//       }
//     };

//     fetchUser();
//   }, [navigate]);

//   const handleUpdate = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.put(
//         `http://localhost:5000/api/auth/update`,
//         { [updateType]: newValue },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (updateType === "name") {
//         setUserName(response.data.name);
//       } else if (updateType === "profession") {
//         setProfession(response.data.profession);
//       }
//       setEdit(false);
//     } catch (error) {
//       console.error("Error updating user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const editSetting = (type) => {
//     setUpdateType(type);
//     setEdit(true);
//   };

//   return (
//     <div>
//       <div className="flex relative">
//         <div className="w-1/2 h-full flex justify-center items-center flex-col">
//           <div className="h-[650px] my-10 w-96 border-2 flex py-6 flex-col items-center rounded-xl">
//             <div className="w-80 text-base text-white font-medium mb-4">Edit Profile</div>
//             <div className="w-44 w-48 border-2 border-blue-500 rounded-full overflow-hidden">
//               <img src="https://res.cloudinary.com/doxwgfps8/image/upload/v1737006531/profile_images" alt="Profile" className="w-full" />
//             </div>

//             <div className="mt-4 w-72 text-white flex flex-col">
//               <label htmlFor="">Name :</label>
//               <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
//                 <span className="text-xl font-medium capitalize">{userName}</span>
//                 <MdOutlineModeEdit size={20} onClick={() => editSetting("name")} />
//               </div>
//             </div>
//             <div className="mt-4 w-72 text-white flex flex-col">
//               <label htmlFor="">Profession :</label>
//               <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
//                 <span className="text-xl font-medium capitalize">{profession}</span>
//                 <MdOutlineModeEdit size={20} onClick={() => editSetting("profession")} />
//               </div>
//             </div>
//             <div className="mt-4 w-72 text-white flex flex-col">
//               <label htmlFor="">Subscription :</label>
//               <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
//                 <span className="text-xl font-medium capitalize">Premium Membership</span>
//               <Link className="" to="/manageMembership">  <MdOutlineModeEdit size={20}  /></Link>
//               </div>
//             </div>

//             <div
//               onClick={handleLogout}
//               className="btn cursor-pointer mt-10 border-2 w-48 p-2 flex items-center justify-center rounded-xl bg-violet-700 font-semibold text-xl text-white"
//             >
//               Logout
//             </div>
//           </div>
//         </div>

//         {/* History and Analysis section */}
//         <div className="w-1/2 pr-4 items-center flex flex-col">
//           <div className="w-96 border-2 h-12 rounded-3xl mt-10 flex">
//             <div className="w-56 bg-white rounded-3xl flex justify-center items-center text-xl font-semibold">
//               History
//             </div>
//             <div className="w-56 rounded-3xl flex justify-center items-center text-xl text-white font-semibold">
//               Analysis
//             </div>
//           </div>
//           <div className="border-2 mt-4 w-full rounded-xl h-[590px] overflow-y-auto scrollable m-4 mx-8 p-2">
//             {historyData.length > 0 ? (
//               historyData.map((item, index) => (
//                 <div key={index} className="border-2 mt-2 rounded-xl p-2 relative">
//                   <span className="text-white">{item.text}</span>
//                   <div className="absolute right-3 bottom-1 text-gray-700 font-semibold">{item.time}</div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex justify-center items-center h-full text-white font-semibold text-xl">
//                 No history available.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Popup for updating name or profession */}
//       <div
//         className={`absolute h-full z-10 w-full bg-gray-500 top-0 bg-opacity-80 items-center justify-center ${edited ? "flex" : "hidden"}`}
//       >
//         <div className="h-56 flex justify-center flex-col w-96 border-2 items-center z-30 text-black border-white rounded-xl">
//           <div className="text-white mb-4 text-xl font-semibold">
//             {updateType === "name" ? "Update Your Name" : "Update Your Profession"}
//           </div>
//           <input
//             type="text"
//             className="h-8 w-56 rounded-lg px-2"
//             value={newValue}
//             onChange={(e) => setNewValue(e.target.value)}
//           />
//           <div
//             onClick={handleUpdate}
//             className="h-10 w-24 flex items-center justify-center rounded-xl border-2 bg-white border-black cursor-pointer mt-4 p-2"
//           >
//             {loading ? "Updating..." : "Submit"}
//           </div>
//         </div>

//         <div className="h-full w-full absolute">
//           <div className="absolute top-12 right-12 h-8 w-8">
//             <GiCancel onClick={() => setEdit(false)} color="white" size={28} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [edited, setEdit] = useState(false);
  const [updateType, setUpdateType] = useState(""); // "name" or "profession"
  const [newValue, setNewValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState("Loading...");
  const [profession, setProfession] = useState("Loading...");
  const [profileImage, setProfileImage] = useState(""); // New state for profile image

  const [historyData, setHistoryData] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui.",
      time: "9:00 am",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui.",
      time: "9:30 am",
    },
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserName(response.data.name);
        setProfession(response.data.profession);
        setProfileImage(response.data.image);
        localStorage.setItem("profileImg", response.data.image);
        console.log(response.data);
        // Set the profile image URL
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/api/auth/update`,
        { [updateType]: newValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (updateType === "name") {
        setUserName(response.data.name);
      } else if (updateType === "profession") {
        setProfession(response.data.profession);
      }
      setEdit(false);
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const editSetting = (type) => {
    setUpdateType(type);
    setEdit(true);
  };
  console.log(profileImage);

  return (
    <div>
      <div className="flex relative">
        <div className="w-1/2 h-full flex justify-center items-center flex-col">
          <div className="h-[650px] my-10 w-96 border-2 flex py-6 flex-col items-center rounded-xl">
            <div className="w-80 text-base text-white font-medium mb-4">
              Edit Profile
            </div>
            <div className="w-48 h-48 border-4 border-blue-500 rounded-full overflow-hidden">
              {/* Displaying profile image dynamically */}
              <img src={profileImage} alt="Profile" className="h-full w-full" />
            </div>

            <div className="mt-4 w-72 text-white flex flex-col">
              <label htmlFor="">Name :</label>
              <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
                <span className="text-xl font-medium capitalize">
                  {userName}
                </span>
                <MdOutlineModeEdit
                  size={20}
                  onClick={() => editSetting("name")}
                />
              </div>
            </div>
            <div className="mt-4 w-72 text-white flex flex-col">
              <label htmlFor="">Profession :</label>
              <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
                <span className="text-xl font-medium capitalize">
                  {profession}
                </span>
                <MdOutlineModeEdit
                  size={20}
                  onClick={() => editSetting("profession")}
                />
              </div>
            </div>
            <div className="mt-4 w-72 text-white flex flex-col">
              <label htmlFor="">Subscription :</label>
              <div className="border-2 p-2 items-center mt-1 px-4 rounded-xl flex justify-between">
                <span className="text-xl font-medium capitalize">
                  Premium Membership
                </span>
                <Link className="" to="/manageMembership">
                  <MdOutlineModeEdit size={20} />
                </Link>
              </div>
            </div>

            <div
              onClick={handleLogout}
              className="btn cursor-pointer mt-10 border-2 w-48 p-2 flex items-center justify-center rounded-xl bg-violet-700 font-semibold text-xl text-white"
            >
              Logout
            </div>
          </div>
        </div>

        {/* History and Analysis section */}
        <div className="w-1/2 pr-4 items-center flex flex-col">
          <div className="w-96 border-2 h-12 rounded-3xl mt-10 flex">
            <div className="w-56 bg-white rounded-3xl flex justify-center items-center text-xl font-semibold">
              History
            </div>
            <div className="w-56 rounded-3xl flex justify-center items-center text-xl text-white font-semibold">
              Analysis
            </div>
          </div>
          <div className="border-2 mt-4 w-full rounded-xl h-[590px] overflow-y-auto scrollable m-4 mx-8 p-2">
            {historyData.length > 0 ? (
              historyData.map((item, index) => (
                <div
                  key={index}
                  className="border-2 mt-2 rounded-xl p-2 relative"
                >
                  <span className="text-white">{item.text}</span>
                  <div className="absolute right-3 bottom-1 text-gray-700 font-semibold">
                    {item.time}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-full text-white font-semibold text-xl">
                No history available.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup for updating name or profession */}
      <div
        className={`absolute h-full z-10 w-full bg-gray-500 top-0 bg-opacity-80 items-center justify-center ${
          edited ? "flex" : "hidden"
        }`}
      >
        <div className="h-56 flex justify-center flex-col w-96 border-2 items-center z-30 text-black border-white rounded-xl">
          <div className="text-white mb-4 text-xl font-semibold">
            {updateType === "name"
              ? "Update Your Name"
              : "Update Your Profession"}
          </div>
          <input
            type="text"
            className="h-8 w-56 rounded-lg px-2"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <div
            onClick={handleUpdate}
            className="h-10 w-24 flex items-center justify-center rounded-xl border-2 bg-white border-black cursor-pointer mt-4 p-2"
          >
            {loading ? "Updating..." : "Submit"}
          </div>
        </div>

        <div className="h-full w-full absolute">
          <div className="absolute top-12 right-12 h-8 w-8">
            <GiCancel onClick={() => setEdit(false)} color="white" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
