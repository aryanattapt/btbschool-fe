"use client";

import { useState } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed text-white inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 text-center">
      <div className="flex flex-col">
        <div className="bg-[#00305e] p-6 rounded-lg shadow-lg max-w-lg">
            <p>Please complete your application before</p>
            <p className='mb-5 text-[#EF802B] font-semibold'>October 6, 2024, 23.59</p>
            <a 
            className="my-10 font-bold group focus:outline-none text-white bg-[#EF802B] rounded-lg px-5 py-2.5 md:py-2.5 lg:py-5 xl:py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            href="/onlineregistration"
            >
                Register Now!
            </a>
            <hr className="mt-5 mb-2"></hr>
            <p className="py-2"><a href='/contact' className='text-[#EF802B] underline'>Click Here</a> to Redirect to Contact Page</p>
            
        </div>
        <div className='mt-2'>
            <button
            className="backdrop-blur-lg bg-white/30 text-black font-semibold px-4 py-2 rounded hover:bg-blue-700"
            onClick={closePopup}
            >
            Close X
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;