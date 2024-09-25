'use client'; // Next.js client-side component
import Link from 'next/link';
import ScrollButton from './ui/scrollButton'; // Import the Client Component
import { useEffect, useState } from 'react';

export default function Navbar() {
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
    <header className="sticky top-0 z-50 app-bar flex justify-between items-center p-5 bg-white shadow-md border-b border-gray-200">
      {/* Logo */}
      <div className="logo text-2xl font-bold text-blue-600">
        Therapy<span className="text-blue-500">Pro</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links flex justify-center">
        <div className="nav-item mx-2">
          <ScrollButton href="/">Home</ScrollButton>
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
          <ScrollButton href="/contact-us">Contact</ScrollButton>
        </div>
      </nav>

      {/* Login & Register Buttons */}
      <div className="auth-buttons flex space-x-4 items-center">
        <Link href="/patient-sign-in">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            Login
          </button>
        </Link>
        <Link href="/patient-sign-up">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
