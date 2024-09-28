// import { useState } from 'react';
// import { BellIcon } from '@heroicons/react/24/outline';
// import NotificationPanel from './NotificationPanel';

// export default function NotificationIcon() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button
//         className="relative"
//         onClick={() => setIsOpen(!isOpen)} // Toggle the panel visibility
//         aria-label="Open notifications"
//       >
//         <BellIcon className="w-6 h-6 text-gray-500" />
//         <span className="absolute top-0 right-0 block h-2.5 w-2.5 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"></span>
//       </button>

//       {/* Pass isOpen and onClose to NotificationPanel */}
//       {isOpen && <NotificationPanel open={isOpen} onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// }



import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import NotificationPanel from "./NotificationPanel";

export default function NotificationIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Notification Bell Icon with Badge */}
      <button
        className="relative"
        onClick={() => setIsOpen(!isOpen)} // Toggle the panel visibility
        aria-label="Open notifications"
      >
        <BellIcon className="w-6 h-6 text-gray-500" />
        <span className="absolute top-0 right-0 block h-2.5 w-2.5 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"></span>
      </button>

      {/* Pass isOpen and onClose to NotificationPanel */}
      <NotificationPanel open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
