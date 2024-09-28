'use client'; // Next.js client-side component
import Link from 'next/link';
import ScrollButton from './ui/scrollButton'; // Import the Client Component
import { useEffect, useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import NotificationPanel from './notifications/NotificationPanel';

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // State to manage NotificationPanel visibility

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
      window.location.href = '/dashboard/therapists'; // Redirect to therapist dashboard
    } else if (role === 'patient') {
      window.location.href = '/dashboard/patients'; // Redirect to patient dashboard
    } else {
      alert("User role not found, please log in or sign up.");
    }
  };


  // Toggle Notification Panel
  const toggleNotificationPanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-blue-100 fixed top-0 left-0 w-full z-50 py-2">

        {/* Bell Icon Trigger */}
        <div className="fixed top-4 right-4 z-50 cursor-pointer" onClick={toggleNotificationPanel}>
          <BellIcon className="h-8 w-8 text-black bg-transparent pt-17" />
          <NotificationPanel open={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>

        <header className="app-bar fixed top-4 left-1/2 transform -translate-x-1/2 px-10 py-4 bg-white rounded-full shadow-lg flex justify-between items-center w-[90%] max-w-5xl z-40">
          {/* TherapyPro Title */}
          <div className="text-2xl font-bold text-black">
            TherapyPro
          </div>

          {/* Nav Links */}
          <nav className="nav-links flex justify-center  hover:text-blue-600">
            {['About Us', 'Features', 'Dashboard', 'Pricing', 'Contact'].map((item) => (
              <div className="nav-item mx-2" key={item}>
                {item === 'Dashboard' ? (
                  <button
                    onClick={handleDashboardClick}
                    className="text-black border-none bg-transparent cursor-pointer"
                  >
                    {item}
                  </button>
                ) : item === 'About Us' ? (
                  <Link href="/about-us">
                    <button className="text-black border-none bg-transparent cursor-pointer">
                      {item}
                    </button>
                  </Link>
                ) : item === 'Contact' ? (
                  <Link href="/contact-us">
                    <button className="text-black border-none bg-transparent cursor-pointer">
                      {item}
                    </button>
                  </Link>
                ) : (
                  <ScrollButton href={item === 'Features' ? '#features' : `#${item.toLowerCase()}`}>
                  {item}
                  </ScrollButton>
                )}
              </div>
            ))}
          </nav>

          

          {/* Auth Buttons */}
          <div className="auth-buttons flex items-center">
            <Link href="/book_appointment">
              <button className="px-4 py-2 mx-2 text-black border border-green-600 rounded-md bg-green-300 shadow-lg hover:bg-green-400 text-sm">
                Book an appointment
              </button>
            </Link>
            <Link href="/patient-sign-in">
              <button className="px-4 py-2 mx-2 text-black border border-black rounded-md hover:bg-gray-100 text-sm">
                Login
              </button>
            </Link>
            <Link href="/patient-sign-up">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-sm">
                Register
              </button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
//________________________________________________________

// 'use client'; // Next.js client-side component
// import Link from 'next/link';
// import ScrollButton from './ui/scrollButton'; // Import the Client Component
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'; // Import useRouter
// import { BellIcon } from '@heroicons/react/24/outline';
// import NotificationPanel from './notifications/NotificationPanel';

// export default function Navbar() {
//   const router = useRouter(); // Initialize useRouter
//   const [role, setRole] = useState<string | null>(null);
//   const [isPanelOpen, setIsPanelOpen] = useState(false); // State to manage NotificationPanel visibility

//   // Fetch user role from localStorage when the component mounts
//   useEffect(() => {
//     const userDetails = localStorage.getItem('userDetails');
//     if (userDetails) {
//       const parsedDetails = JSON.parse(userDetails);
//       setRole(parsedDetails.role); // Store role in state (therapist/patient)
//     }
//   }, []);

//   // Redirect to appropriate dashboard based on role
//   const handleDashboardClick = () => {
//     if (role === 'therapist') {
//       window.location.href = '/dashboard/therapists'; // Redirect to therapist dashboard
//     } else if (role === 'patient') {
//       window.location.href = '/dashboard/patients'; // Redirect to patient dashboard
//     } else {
//       alert("User role not found, please log in or sign up.");
//     }
//   };

//   // Toggle Notification Panel
//   const toggleNotificationPanel = () => {
//     setIsPanelOpen((prev) => !prev);
//   };

//   // Check if we are on the home page
//   const isHomePage = router.pathname === '/components/home';

//   return (
//     <>
//       {isHomePage && ( // Conditionally render Navbar
//         <div className="bg-blue-100 fixed top-0 left-0 w-full z-50 py-2">
//           {/* Bell Icon Trigger */}
//           <div className="fixed top-4 right-4 z-50 cursor-pointer" onClick={toggleNotificationPanel}>
//             <BellIcon className="h-8 w-8 text-black bg-transparent pt-17" />
//             <NotificationPanel open={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
//           </div>

//           <header className="app-bar fixed top-4 left-1/2 transform -translate-x-1/2 px-10 py-4 bg-white rounded-full shadow-lg flex justify-between items-center w-[90%] max-w-5xl z-40">
//             {/* TherapyPro Title */}
//             <div className="text-2xl font-bold text-black">
//               TherapyPro
//             </div>

//             {/* Nav Links */}
//             <nav className="nav-links flex justify-center hover:text-blue-600">
//               {['About Us', 'Features', 'Dashboard', 'Pricing', 'Contact'].map((item) => (
//                 <div className="nav-item mx-2" key={item}>
//                   {item === 'Dashboard' ? (
//                     <button
//                       onClick={handleDashboardClick}
//                       className="text-black border-none bg-transparent cursor-pointer"
//                     >
//                       {item}
//                     </button>
//                   ) : item === 'About Us' ? (
//                     <Link href="/about-us">
//                       <button className="text-black border-none bg-transparent cursor-pointer">
//                         {item}
//                       </button>
//                     </Link>
//                   ) : (
//                     <ScrollButton href={item === 'Features' ? '#features' : `#${item.toLowerCase()}`}>
//                       {item}
//                     </ScrollButton>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Auth Buttons */}
//             <div className="auth-buttons flex items-center">
//               <Link href="/book_appointment">
//                 <button className="px-4 py-2 mx-2 text-black border border-green-600 rounded-md bg-green-300 shadow-lg hover:bg-green-400 text-sm">
//                   Book an appointment
//                 </button>
//               </Link>
//               <Link href="/patient-sign-in">
//                 <button className="px-4 py-2 mx-2 text-black border border-black rounded-md hover:bg-gray-100 text-sm">
//                   Login
//                 </button>
//               </Link>
//               <Link href="/patient-sign-up">
//                 <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-sm">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           </header>
//         </div>
//       )}
//     </>
//   );
// }

