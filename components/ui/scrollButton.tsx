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