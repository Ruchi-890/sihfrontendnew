'use client';
import Link from 'next/link';
import ScrollButton from './scrollButton'; // Import the Client Component
import { useEffect, useState } from 'react';

export default function AppBar() {

  const [role, setRole] = useState<string | null>(null);

  // Fetch user role from localStorage when the component mounts
  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      const parsedDetails = JSON.parse(userDetails);
      setRole(parsedDetails.role); // Store role in state (therapist/patient)
    }
  }, []);

  // Redirect to appropriate dashboard based on role
  const handleDashboardClick = () => {
    if (role === 'therapist') {
      window.location.href = '/therapistdashboard'; // Redirect to therapist dashboard
    } else if (role === 'patient') {
      window.location.href = '/patientdashboard'; // Redirect to patient dashboard
    } else {
      alert("User role not found, please log in or sign up.");
    }
  };

  return (
    <header className="app-bar flex justify-between items-center p-5 bg-white border-b border-gray-300">
  <div className="logo text-2xl font-bold text-black">TherapyPro</div>

      {/* Navigation Links */}
      <nav className="nav-links flex justify-center">
        <div className="nav-item mx-2">
          <ScrollButton href="#home">Home</ScrollButton>
        </div>
        <div className="nav-item mx-2">
        <ScrollButton href="#Features">Features</ScrollButton> {/* Scrolls down to Features */}
        </div>
        
        
        <div className="nav-item mx-2">
          <button
            onClick={handleDashboardClick} // Handle role-based redirection
            className="text-black border-none bg-transparent cursor-pointer"
          >
            Dashboard
          </button>
        </div>

        <div className="nav-item mx-2">
          <ScrollButton href="#pricing">Pricing</ScrollButton>
        </div>
        <div className="nav-item mx-2">
          <ScrollButton href="#contact">Contact</ScrollButton>
        </div>
      </nav>

      {/* Login & Register Buttons */}
      <div className="auth-buttons flex items-center">
        <Link href="/patientsignin">
          <button className="px-4 py-2 mx-2 text-black border border-black rounded-md hover:bg-gray-100 text-sm">
            Login
          </button>
        </Link>
        <Link href="/patientsignup">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-sm">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
