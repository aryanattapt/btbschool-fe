'use client';
import { useEffect, useState } from 'react';
import { FaCalendar, FaPhoneAlt, FaQuestion } from 'react-icons/fa';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(footerTop >= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
        className={`fixed bottom-10 left-10 flex flex-col items-center space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
        <div className="relative group flex items-center">
            <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
                <FaCalendar className="text-white text-xl -rotate-45" />
            </button>
            <span className="absolute left-full ml-2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Calendar</span>
        </div>

      <div className="relative group flex items-center">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
            <FaQuestion className="text-white text-xl -rotate-45" />
        </button>
        <span className="absolute left-full ml-2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Help</span>
      </div>

      <div className="relative group flex items-center">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
            <FaPhoneAlt className="text-white text-xl -rotate-45" />
        </button>
        <span className="absolute left-full ml-2 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Call</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
