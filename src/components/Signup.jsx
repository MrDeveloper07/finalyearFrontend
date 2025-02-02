// import React, { useState } from "react";
// import axios from "../axios"; // Assuming axios is correctly configured for your API base URL
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     profession: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   // Update state on form field change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous error messages

//     const { name, email, profession, password } = formData;

//     // Basic client-side validation
//     if (!name || !email || !profession || !password) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/signup", {
//         name,
//         email,
//         profession,
//         password,
//       });
//       alert("User registered successfully");
//       console.log(response.data); // Debugging output (optional)
//     } catch (error) {
//       console.error(error);
//       setError("Error registering user. Please try again.");
//     }
//   };

//   return (
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-50">
//       <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
//         <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
//           Sign Up
//         </h1>
//         {error && <p className="mt-4 text-center text-red-500">{error}</p>}
//         <form className="mt-6" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-semibold text-gray-800"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter name"
//               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-800"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter email address"
//               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="image"
//               className="block text-sm font-semibold text-gray-800"
//             >
//               Image
//             </label>
//             <input
//               type="file"
          
             
//               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="profession"
//               className="block text-sm font-semibold text-gray-800"
//             >
//               Profession
//             </label>
//             <input
//               type="text"
//               name="profession"
//               value={formData.profession}
//               onChange={handleChange}
//               placeholder="Enter profession"
//               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-semibold text-gray-800"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//               className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="relative flex items-center justify-center w-full mt-6 border-t">
//           <div className="absolute px-5 bg-white">Or</div>
//         </div>
//         <div className="flex mt-4 gap-x-2">
//           <button
//             type="button"
//             className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 32 32"
//               className="w-5 h-5 fill-current"
//             >
//               {/* Google SVG */}
//               <path d="..." />
//             </svg>
//           </button>
//           <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 32 32"
//               className="w-5 h-5 fill-current"
//             >
//               {/* GitHub SVG */}
//               <path d="..." />
//             </svg>
//           </button>
//           <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 32 32"
//               className="w-5 h-5 fill-current"
//             >
//               {/* Twitter SVG */}
//               <path d="..." />
//             </svg>
//           </button>
//         </div>
//         <p className="mt-8 text-xs font-light text-center text-gray-700">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="font-medium text-purple-600 hover:underline"
//           >
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "../axios"; // Assuming axios is correctly configured for your API base URL
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    password: "",
    image: null, // Add image field
  });

  const [error, setError] = useState("");

  // Update state on form field change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the name is 'image', handle file upload separately
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: e.target.files[0], // Store the file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    const { name, email, profession, password, image } = formData;

    // Basic client-side validation
    if (!name || !email || !profession || !password || !image) {
      setError("All fields, including an image, are required.");
      return;
    }

    try {
      const data = new FormData(); // Use FormData to handle the file upload
      data.append("name", name);
      data.append("email", email);
      data.append("profession", profession);
      data.append("password", password);
      data.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("User registered successfully");
      console.log(response.data); // Debugging output (optional)
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message || "Error registering user. Please try again."
      );
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-50">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign Up
        </h1>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-800"
            >
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange} // Handle file selection
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profession"
              className="block text-sm font-semibold text-gray-800"
            >
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Enter profession"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Register
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
