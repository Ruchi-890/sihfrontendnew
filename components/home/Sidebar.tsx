import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white">
      <nav className="p-6">
        <ul>
          <li>
            <Link href="#overview">Overview</Link>
          </li>
          <li>
            <Link href="#therapists">Therapists</Link>
          </li>
          <li>
            <Link href="#sessions">Sessions</Link>
          </li>
          <li>
            <Link href="#feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}