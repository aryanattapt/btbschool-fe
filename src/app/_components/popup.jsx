"use client";

import { useState, useEffect } from 'react';
import { usePageData } from '../../hooks/usePageData';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {language, isLoading} = usePageData();
  const payload = usePageData((state) => state.result.generalPayload);

  useEffect(() => {
    const popupHiddenTimestamp = localStorage.getItem('popupHiddenTimestamp');
    
    // Check if the popup should be shown again after 1 day
    if (popupHiddenTimestamp) {
      const currentTime = new Date().getTime();
      const hiddenTime = new Date(parseInt(popupHiddenTimestamp, 10)).getTime();
      const timeDiff = currentTime - hiddenTime;
      const oneDay = 24 * 60 * 60 * 1000;
      
      if (timeDiff >= oneDay) {
        localStorage.removeItem('popupHiddenTimestamp');
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };
  const dontShowAgain = () => {
    const currentTime = new Date().getTime();
    localStorage.setItem('popupHiddenTimestamp', currentTime.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  if(isLoading) {
    return <></>
  }
  else if(payload?.showpopup && payload?.showpopup == 'false'){
    return <></>
  }
  else if(payload)
    return (
      <div className="fixed text-white inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 text-center text-[14px] md:text-[20px] lg:text-[25px] xl:text-[16px]">
        <div className="relative flex flex-col bg-[#00305e] p-6 rounded-lg shadow-lg max-w-lg">
          <button
            className="absolute top-0 right-3 text-white font-bold text-2xl hover:text-red-400"
            onClick={closePopup}
          >
            &times;
          </button>
          <div className='mt-2'>
            {/* <p>Please complete your application before</p> */}
            <div dangerouslySetInnerHTML={{__html: payload[language]?.popuptitle || ''}}></div>

            {/* <p className='mb-5 text-[#EF802B] font-semibold'>October 6, 2024, 23.59</p> */}
            <div dangerouslySetInnerHTML={{__html: payload[language]?.popupsubtitle || ''}} className='mb-5 text-[#EF802B] font-semibold'></div>
            
            <a 
              className="my-10 font-bold group focus:outline-none text-white bg-[#EF802B] rounded-lg px-5 py-2.5 md:py-2.5 lg:py-5 xl:py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              href={payload?.buttonlink || '#'}
            >
              {payload[language]?.buttontext}
            </a>
            
            <hr className="mt-5 mb-2"></hr>
            
            {/* <p className="pt-2">
              <a href='/contact' >
              Click Here</a> to Redirect to Contact Page
              </p> */}
            <div dangerouslySetInnerHTML={{__html: payload[language]?.popupsubtitle2 || ''}} className='text-[#EF802B] underline' onClick={() => window.location.href = payload?.link || '#'}></div>
            
            <button onClick={dontShowAgain} className='underline text-[12px] md:text-[18px] lg:text-[18px] xl:text-[12px]'>
              Don't Show Again
            </button>
            </div>
        </div>
      </div>
    );
};

export default Popup;