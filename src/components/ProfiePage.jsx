
import React, { useState, useEffect } from "react";
import { LuPencilLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import img from "../assets/download.jfif";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [userData, setUserData] = useState({
    name: "Loading...",
    profession: "Loading...",
    email: "Loading...",
    subscription: "Loading...",
    profileImage: ""
  });

  const [editedData, setEditedData] = useState({
    name: "",
    profession: "",
    email: ""
  });

  const [historyData, setHistoryData] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui.",
      time: "50 min age",
    },
    {
      text: "Lorem ipsum dolor sit amet, consecsdftetur adipisicing elit. Laborum minima delectus aliquam magni debitis ipsa qui.",
      time: "1 hrs ago",
    },
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData({
          name: response.data.name,
          profession: response.data.profession,
          email: response.data.email,
          subscription: response.data.subscription,
          profileImage: response.data.image
        });

        setEditedData({
          name: response.data.name,
          profession: response.data.profession,
          email: response.data.email
        });

        localStorage.setItem("profileImg", response.data.image);
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
        editedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      setUserData(prev => ({
        ...prev,
        name: response.data.name,
        profession: response.data.profession,
        
      }));
      
      setIsEditing(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-black h-full w-full">
      <div className="text-white p-6 text-xl flex justify-between font-bold">
        <div className="">Edit Profile</div>
        <div onClick={handleLogout} className="px-2 cursor-pointer bg-slate-600 rounded-md font-medium text-[10px]">
          Logout
        </div>
      </div>
      <div className="flex justify-between gap-4 px-6">
        <div className="w-full rounded-3xl bg-zinc-800 h-[500px] overflow-y-auto hide-scrollbar">
          <div className="flex items-center gap-4 p-8">
            <div className="rounded-full h-28 w-28">
              <img src={img} alt="" className="h-full w-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col gap-2">
              <div  className="border-1 cursor-pointer border h-8 w-40 rounded-md font-semibold text-sm flex items-center justify-center text-gray-200">
                Upload Profile Picture
              </div>
              <div className="text-white text-sm text-gray-400 capitalize ml-1">{userData.subscription} Membership</div>
            </div>
          </div>
          <div className="border-0.5 flex flex-col border-gray-500 border rounded-xl gap-2 mx-8">
            <div className="h-16 flex justify-between p-6">
              <div className="font-bold text-white">Personal Information</div>
              <button 
                onClick={() => {
                  if (isEditing) {
                    handleUpdate();
                  } else {
                    setIsEditing(true);
                  }
                }} 
                className="flex items-center justify-center gap-2 w-16 h-7 rounded-md text-white text-sm font-semibold bg-gray-700"
              >
                <LuPencilLine /> {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
            <div className="flex justify-between px-6 pb-6">
              <div className="">
                <div className="text-gray-400 text-sm font-normal">Full Name</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    className="bg-zinc-700 text-gray-200 text-sm font-semibold rounded px-2 py-1"
                  />
                ) : (
                  <div className="text-gray-200 text-sm font-semibold capitalize">{userData.name}</div>
                )}
              </div>
              <div className="">
                <div className="text-gray-400 text-sm font-normal">Email</div>
                
                  <div className="text-gray-200 text-sm font-semibold">{userData.email}</div>
                
              </div>
              <div className="">
                <div className="text-gray-400 text-sm font-normal">Profession</div>
                {isEditing ? (
                  <input
                    type="text"
                    name="profession"
                    value={editedData.profession}
                    onChange={handleInputChange}
                    className="bg-zinc-700 text-gray-200 text-sm font-semibold rounded px-2 py-1"
                  />
                ) : (
                  <div className="text-gray-200 text-sm font-semibold capitalize">{userData.profession}</div>
                )}
              </div>
            </div>
          </div>
          <div className="px-8 py-4 text-white font-semibold">History</div>
          <div className="flex flex-col mb-6 bg-zinc-900 p-2 rounded-xl gap-2 mx-8 h-48">
            {historyData.map((item, index) => (
              <div key={index} className="rounded-lg bg-zinc-800 mt-2 mx-2 p-2 flex flex-col items-between justify-between">
                <div className="text-gray-200 text-sm">{item.text}</div>
                <div className="flex justify-end text-[10px] text-gray-400 font-semibold">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-96 bg-zinc-800 rounded-3xl"></div>
      </div>
    </div>
  );
}