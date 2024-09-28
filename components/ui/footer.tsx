import { FC } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils'; // Adjust the path as needed

const Footer: FC = () => {
  return (
    <footer
      className={cn(
        "bg-white text-black py-8 border-t",
        "flex flex-col md:flex-row items-center justify-between px-4 md:px-12"
      )}
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm md:text-base text-black">
          &copy; {new Date().getFullYear()} CS. All rights reserved.
        </p>
        <p className="text-sm md:text-base text-black">Developed by Cyber Saviours</p>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0 items-center">
        <Link
          href="/contact-us"
          className="text-sm md:text-base text-black hover:text-blue-600"
        >
          Contact Us
        </Link>
        <Link
          href="/"
          className="text-sm md:text-base text-black hover:text-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
