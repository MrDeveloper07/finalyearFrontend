

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import TextToImage from './components/TextToImage';
import VideoGeneration from './components/VideoGeneration';
import MusicGeneration from './components/MusicGeneration';
import PptGeneration from './components/PptGeneration';
import Subscription from './components/SubcriptionPages/Subscription';
import ProfiePage from './components/ProfiePage';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import profileimg from './assets/profile.jpg';

function App() {
  const location = useLocation();
  const userProfileImg = localStorage.getItem('profileImg');
  console.log(userProfileImg) // Correctly use the hook to get the current location

  return (
    <div className="h-screen flex bg-red-500">
      {/* Sidebar - Only show if not on login or signup */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <div className="w-1/4 bg-blue-500">
          <PrivateRoute element={<Homepage />} />
        </div>
      )}

      {/* Main Content Area */}
      <div
        className={`${
          location.pathname === '/login' || location.pathname === '/signup' ? 'w-full' : 'w-3/4'
        } relative bg-zinc-800`}
      >
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/image" element={<PrivateRoute element={<TextToImage />} />} />
          <Route path="/videoGeneration" element={<PrivateRoute element={<VideoGeneration />} />} />
          <Route path="/musicGeneration" element={<PrivateRoute element={<MusicGeneration />} />} />
          <Route path="/pptgeneration" element={<PrivateRoute element={<PptGeneration />} />} />
          <Route path="/manageMembership" element={<PrivateRoute element={<Subscription />} />} />
          <Route path="/profilePage" element={<PrivateRoute element={<ProfiePage />} />} />
        </Routes>

        {/* Profile Link - Show only if logged in */}
        {localStorage.getItem('token') && location.pathname !== '/login' && location.pathname !== '/profilePage' && location.pathname !== '/signup' && (
  <Link
    to="/profilePage"
    className="absolute right-0 top-2 border-[3px] border-white rounded-full h-12 w-12 border-1 border-white bg-gray-500 m-4 overflow-hidden"
  >
    <img src={userProfileImg} alt="Profile" className="h-full w-full" />
  </Link>
)}

      </div>
    </div>
  );
}

export default App;
