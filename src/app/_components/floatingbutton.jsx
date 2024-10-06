'use client';
import { useEffect, useState } from 'react';
import { FaPlus, FaTimes } from "react-icons/fa";
import FloatingButtonSubMenu from './floatingbuttonsubmenu'

const FloatingButtons = ({payload}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`fixed bottom-5 right-10 flex flex-col items-center space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {/* Main toggle button */}
      <div className="md:hidden">
        <button 
          onClick={toggleExpand} 
          className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110"
        >
          {isExpanded ? (
            <FaTimes className="text-white text-xl -rotate-45" />
          ) : (
            <FaPlus className="text-white text-xl -rotate-45" />
          )}
        </button>
      </div>
      {isExpanded && (
      <div className="flex flex-col items-center space-y-4">
        <FloatingButtonSubMenu payload={payload}/>
      </div>
    )}
    
      <div className="hidden md:flex flex-col items-center space-y-4">
        <FloatingButtonSubMenu payload={payload}/>
      </div>
    </div>
  );
};

export default FloatingButtons;
