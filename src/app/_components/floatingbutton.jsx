'use client';
import { useEffect, useState } from 'react';
import { FaCalendar, FaBook, FaQuestion } from 'react-icons/fa';
import { MdAppRegistration } from "react-icons/md";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isScrollable = documentHeight > windowHeight;

      // Buttons are visible if the footer is in view and the page is scrollable
      setIsVisible(footerTop >= windowHeight && isScrollable);
    } else {
      setIsVisible(false); // Hide if there's no footer
    }
  };

  useEffect(() => {
    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-5 right-10 flex flex-col items-center space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="relative group flex items-center">
        <a href="/calendar-academic">
          <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
            <FaCalendar className="text-white text-xl -rotate-45" />
          </button>
        </a>
        <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Calendar</span>
      </div>
      <div className="relative group flex items-center">
          <a href="/bulletinspotlight">
          <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
            <FaBook className="text-white text-xl -rotate-45" />
          </button>
        </a>
        <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bulletin</span>
      </div>
      <div className="relative group flex items-center">
        <a href="/onlineregistration">
          <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
            <MdAppRegistration className="text-white text-xl -rotate-45" />
          </button>
        </a>
        <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Registration</span>
      </div>
      <div className="relative group flex items-center">
        <a href="/help">
          <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
            <FaQuestion className="text-white text-xl -rotate-45" />
          </button>
        </a>
        <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">FAQ</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
