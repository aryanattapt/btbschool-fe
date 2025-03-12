"use client";
import { useState, useEffect, useRef } from "react";
import { NavbarPayload } from "../../../data";
import { IoIosArrowDown } from "react-icons/io";
import { usePageData } from "../../hooks/usePageData";

const NavBar = () => {
  //   const [navBarPayload, _] = useState(NavbarPayload);

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const {
    language,
    changeLanguage,
    isLoading,
    getNavigationLayout,
    navigation,
  } = usePageData();
  const payload = usePageData((state) => state.result.generalPayload);
  useEffect(() => {
    getNavigationLayout();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const languageChangeHandler = (e) => {
    /* setLanguage(e.target.checked ? "EN" : "ID"); */
    changeLanguage(e.target.checked ? "EN" : "ID");
  };

  const getGradientSetup = () => {
    if (isMenuOpen) return "bg-[#00305E]";
    else {
      if (isScrolled) return "bg-[#00305E]";
      else
        return "bg-gradient-to-b from-[#091531] via-[#00305E] text-[#00305E]";
      // if(isScrolled){
      //     if(isMenuOpen) return 'bg-[#00305E]'
      // }
      // return 'bg-gradient-to-b from-[#091531] via-[#00305E] text-[#00305E]'
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) // Tambahkan pengecualian untuk hamburger icon
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  if (isLoading) {
    return <></>;
  } else if (payload)
    return (
      <nav
        className={`transition-transform text-white duration-500 ease-in-out 
      ${getGradientSetup()}
      fixed top-0 w-full p-4 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } 
      
      z-20`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between lg:justify-start px-4">
          {/* Mobile Menu: Logo and Hamburger Button */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <a href="/" className="flex items-center">
              <img
                src={payload[language]?.logo}
                /* src={navBarPayload[language].logourl} */
                alt="logo"
                className="h-12 md:h-16 lg:h-20 object-contain"
              />
            </a>
            <div
              ref={hamburgerRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-300 text-white cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          </div>

          <div
            ref={navRef}
            className={`lg:hidden w-full ${
              isMenuOpen ? "block" : "hidden"
            } bg-[#00305E]`}
          >
            <div className="flex flex-col pt-6">
              {/* Flex container for Language Toggle and Login */}
              <div className="flex items-center mb-2 space-x-4">
                {/* Language Toggle */}
                <div className="flex items-center border-r-2 border-gray-400 pr-4">
                  <label className="relative cursor-pointer inline-flex items-center">
                    <span className="ml-3 text-white text-lg font-semibold">
                      ID
                    </span>
                    <input
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefaultMobile"
                      onChange={languageChangeHandler}
                      className="md:mx-2 mx-1 md:mt-[0.3rem] md:h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                      checked={language == "EN"}
                    />
                    <span className="ml-3 text-white text-lg font-semibold">
                      EN
                    </span>
                  </label>
                </div>

                {/* Login Dropdown */}
                <div className="relative inline-block group">
                  <ul className="list-none text-white font-sans font-medium rounded-full text-lg px-6 py-2 text-center cursor-pointer">
                    <li className="relative group hover:text-[#EF802B]">
                      Quick Link
                      <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-2 min-w-[200px] shadow-lg rounded-lg z-10 flex flex-col">
                        {payload?.quicklink?.map((val, idx) => {
                          return (
                            <li key={idx}>
                              <a href={val?.link || "#"} className="block px-4 py-2 hover:bg-gray-200 text-center" target="_blank">
                                <div className="flex items-center justify-center space-x-2">
                                  {val?.logo && (<img src={val?.logo} alt="icon" className="w-8 h-8" />)}
                                  <span className="flex items-center">{val?.name}</span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navbar Links for Mobile */}
              <ul className="flex flex-col">
                {navigation?.["navbar"][language].navbarlink.map((val, idx) => (
                  <li
                    key={idx}
                    className={`relative group border border-t-0 border-x-0 border-white `}
                  >
                    <>
                      {val.submenu ? (
                        <div className="flex justify-between items-center">
                          <p className="text-white hover:text-[#EF802B] py-2 px-6 block text-md font-medium">
                            {val.content}
                          </p>
                          <IoIosArrowDown />
                        </div>
                      ) : (
                        <a
                          href={val.url}
                          className="text-white hover:text-[#EF802B] py-2 px-6 block text-md font-medium"
                        >
                          {val.content}
                        </a>
                      )}
                    </>
                    {val.submenu && (
                      <ul className="absolute left-0 hidden group-hover:block bg-[#EF802B] text-white mt-2 min-w-[200px] shadow-lg rounded-lg z-50">
                        {val.submenu.map((val2, idx2) => (
                          <li key={idx2}>
                            <a
                              href={val2.url}
                              className="block px-4 py-3 hover:bg-orange-400"
                            >
                              {val2.content}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col container mx-auto lg:flex-row  items-center justify-between w-full p-4">
          {/* Logo */}
          <div className="flex flex-row w-[390px] justify-between items-center">
            <a href="/" className="flex items-center">
              <img
                /* src={navBarPayload[language].logourl} */
                src={payload[language]?.logo}
                alt="logo"
                className="h-10 md:h-12 lg:h-16 object-contain"
              />
            </a>
          </div>

          {/* Desktop View: Language Toggle, Quick Link, Navbar Links */}
          <div className="w-full flex flex-col">
            <div
              className={`transition-all duration-1000 pt-2 justify-end mb-2 text-white hidden lg:inline-flex hidden`}
            >
              <label className="relative cursor-pointer items-center md:px-4 px-1">
                <div>
                  <div>
                    <label className="text-sm md:text-sm">ID</label>
                    <input
                      className="md:mx-2 mx-1 md:mt-[0.3rem] md:h-3.5 md:w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={languageChangeHandler}
                      checked={language == "EN"}
                    />
                    <label className="text-sm">EN</label>
                  </div>
                </div>
              </label>
              <div className="lg:h-7 md:w-0.5 bg-slate-400 mr-2"></div>
              <div className="relative inline-block group">
                <ul className="hidden md:block list-none hover:text-[#EF802B] text-white font-sans font-medium rounded-full text-sm px-5 py-1.5 text-center cursor-pointer">
                  <li className="relative group">
                    Quick Link
                    <ul className="absolute right-0 -left-full hidden group-hover:block bg-[#EF802B] text-white min-w-[200px] shadow-lg rounded-lg z-10 flex flex-col">
                      {payload?.quicklink?.map((val, idx) => {
                        return (
                          <li key={idx}>
                            <a href={val?.link || "#"} className="block px-4 py-2 hover:bg-gray-200 text-center" target="_blank">
                              <div className="flex items-center justify-center space-x-2">
                                {val?.logo && (<img src={val?.logo} alt="icon" className="w-8 h-8" />)}
                                <span className="flex items-center whitespace-nowrap overflow-hidden text-ellipsis">{val?.name}</span>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center justify-end lg:space-x-8">
              {/* Navbar Links */}
              <ul className="flex">
                {navigation?.["navbar"][language].navbarlink.map((val, idx) => (
                  <li key={idx} className="relative group ">
                    <a
                      href={val.url}
                      className="text-white hover:text-[#EF802B] py-2 px-4 block"
                    >
                      {val.content}
                    </a>
                    {val.submenu && (
                      <ul className="text-center absolute hidden group-hover:block bg-[#EF802B] text-white mt-0 min-w-[260px] shadow-lg rounded-lg">
                        {val.submenu.map((val2, idx2) => (
                          <li key={idx2}>
                            <a
                              href={val2.url}
                              className="block px-4 py-2 hover:bg-orange-400"
                            >
                              {val2.content}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;
