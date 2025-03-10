'use client';

import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import { usePageData } from '../../hooks/usePageData';

const GoToTop = () => {
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
            setIsVisible(footerTop <= windowHeight && isScrollable);
        } else {
        setIsVisible(true); // Hide if there's no footer
        }
    };

    useEffect(() => {
        // Initial check
        checkVisibility();

        // Check on scroll
        window.addEventListener('scroll', checkVisibility);

        return () => window.removeEventListener('scroll', checkVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const {isLoading} = usePageData();

    if(isLoading) {
        return <></>
    }
    else
    return (
        <div 
        className={`fixed bottom-5 right-10 flex flex-col items-center space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <div className="relative group flex items-center">
                <button onClick={scrollToTop} className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <GoMoveToTop className="text-white text-xl -rotate-45" />
                </button>
                {/* <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Back To Top</span> */}
            </div>
        </div>
    );
};

export default GoToTop;