"use client";

import { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const popupHidden = localStorage.getItem('popupHidden');
    if (popupHidden !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const dontShowAgain = () => {
    localStorage.setItem('popupHidden', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed text-white inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 text-center text-[14px] md:text-[20px] lg:text-[25px] xl:text-[16px]">
      {/* <div className="flex flex-col"> */}
      <div className="relative flex flex-col bg-[#00305e] p-6 rounded-lg shadow-lg max-w-lg">
        <button
          className="absolute top-0 right-3 text-white font-bold text-2xl hover:text-red-400"
          onClick={closePopup}
        >
          &times;
        </button>
        <div className='mt-2'>
            <p>Please complete your application before</p>
            <p className='mb-5 text-[#EF802B] font-semibold'>October 6, 2024, 23.59</p>
            <a 
            className="my-10 font-bold group focus:outline-none text-white bg-[#EF802B] rounded-lg px-5 py-2.5 md:py-2.5 lg:py-5 xl:py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            href="/onlineregistration"
            >
                Register Now!
            </a>
            <hr className="mt-5 mb-2"></hr>
            <p className="pt-2"><a href='/contact' className='text-[#EF802B] underline'>Click Here</a> to Redirect to Contact Page</p>
            <button onClick={dontShowAgain} className='underline text-[12px] md:text-[18px] lg:text-[18px] xl:text-[12px]'>
              Don't Show Again
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;