
'use client';
import Image from 'next/image';
import { useState } from 'react';

interface MenuItem {
  text: string;
  href: string;
  icon: string;
}

interface MenuProps {
  role: 'therapist' | 'supervisor' | 'user' | 'guest';
}

export default function Menu({ role }: MenuProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const menuOptions: { [key: string]: MenuItem[] } = {
    therapist: [
      { text: 'Dashboard', href: '#dashboard', icon: 'dashboard-icon.png' },
      { text: 'Patient Records', href: '#patients', icon: 'patients-icon.png' },
      { text: 'Settings', href: '#settings', icon: 'settings-icon.png' }
    ],
    supervisor: [
      { text: 'Overview', href: '#overview', icon: 'overview-icon.png' },
      { text: 'Reports', href: '#reports', icon: 'reports-icon.png' },
      { text: 'Manage Therapists', href: '#manage-therapists', icon: 'manage-icon.png' }
    ],
    user: [
      { text: 'My Sessions', href: '#sessions', icon: 'sessions-icon.png' },
      { text: 'Profile', href: '#profile', icon: 'profile-icon.png' },
      { text: 'Help', href: '#help', icon: 'help-icon.png' }
    ],
    guest: [] // If the role is guest or something else, show an empty menu or custom content.
  };

  return (
    <div>
      <button onClick={toggleMenu} className="menu-toggle-button">
        Toggle Menu
      </button>
      {isVisible && (
        <div id="menuContent" className="menu-content">
          {menuOptions[role].map(option => (
            <a href={option.href} key={option.text} className="menu-item">
              <Image src={`../../assets/${option.icon}`} alt={`${option.text} Icon`} className="menu-item-icon" />
              {option.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
