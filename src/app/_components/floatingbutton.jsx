'use client';
import { useEffect, useState } from 'react';
import { FaPlus, FaTimes } from "react-icons/fa";
import FloatingButtonSubMenu from './floatingbuttonsubmenu';
import { usePageData } from '../../hooks/usePageData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const checkVisibility = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isScrollable = documentHeight > windowHeight;
      
      setIsVisible(footerTop >= windowHeight && isScrollable);
    } else {
      setIsVisible(false); // Hide if there's no footer
    }
  };

  useEffect(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isLoading = usePageData((state) => state.isLoading);
  const payload = usePageData((state) => state.result?.generalPayload?.floatingbuttons || []);

  if (isLoading) {
    return <></>;
  } else if (payload)
    return (
      <div 
        className={`fixed bottom-5 right-10 flex flex-col items-center space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          pointerEvents: isVisible ? 'auto' : 'none',
          paddingBottom: isExpanded ? 0 : '1rem',
        }}
      >
        {isExpanded && (
          <div className="flex flex-col items-center space-y-4">
            <FloatingButtonSubMenu payload={payload} />
          </div>
        )}
        <button 
          onClick={toggleExpand} 
          className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 transition-transform duration-300 group-hover:scale-110"
        >
          <span
            className="text-white text-xl transform transition-transform duration-300"
            style={{ transform: 'rotate(-45deg)' }}
          >
            {isExpanded ? <FaTimes /> : <FaPlus />}
          </span>
        </button>
      </div>
    );
};

export default FloatingButtons;
