// /components/ui/scrollButton.tsx

'use client'; // Add this to indicate this component is a Client Component
interface ScrollButtonProps {
  href: string;
  children: React.ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
};

export default ScrollButton;


//corrected code below :- DON"T REMOVE IT WE WILL CHECK IT LATER

// 'use client'; // Ensure the component runs on the client-side

// interface ScrollButtonProps {
//   href: string;
//   children: React.ReactNode;
// }

// const ScrollButton: React.FC<ScrollButtonProps> = ({ href, children }) => {
//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();

//     // Ensure href is a valid CSS selector
//     if (!href.startsWith('#')) {
//       console.error(`Invalid href: ${href}. Use an ID selector starting with '#'.`);
//       return;
//     }

//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <a href={href} onClick={handleClick} className="text-blue-500 hover:underline">
//       {children}
//     </a>
//   );
// };

// export default ScrollButton;
