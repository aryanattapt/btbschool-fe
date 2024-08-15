"use client";

import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { useLanguageStore } from "../../../store/language.store";
import { NavbarPayload } from "../../../data";

const NavBar = () => {
  const [navBarPayload, setNavBarPayload] = useState(NavbarPayload);
  const { language } = useLanguageStore();
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const languageChangeHandler = (e) => {
    setLanguage(e.target.checked ? "EN" : "ID");
  };

  // const toggleMenuHandler = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  return (
    <Navbar
      className={`transition-all duration-1000 ${
        isScrolled
          ? "bg-[#00305E] bg-opacity-100 text-white"
          : "bg-gradient-to-b from-[#091531] via-[#00305E] via-20% bg-opacity-0 text-[#00305E]"
      } fixed top-0 z-20 w-full p-4 ${
        isVisible ? "translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <div className="flex justify-between w-full p-2">
        <Navbar.Brand href="/" className="hidden block">
          <div className="w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] md:h-[75px] w-[200px] mh-[45px] ml-5 md:ml-0 lg:ml-10 xl:ml-28">
            <img src={`${NavbarPayload[language].logourl}`} alt="logo btb" />
          </div>
        </Navbar.Brand>
        <div className="md:grid items-center md:mr-28">
          <div
            className={`transition-all duration-1000 ${
              isScrolled
                ? "pt-2 inline-flex justify-end mb-2 text-white"
                : "pt-2 inline-flex justify-end mb-2 text-white"
            }`}
          >
            <label className="relative inline-flex cursor-pointer items-center md:px-4 px-1 hidden md:block">
              <div>
                <div>
                  <label className="text-sm md:text-sm">ID</label>
                  <input
                    className="md:mx-2 mx-1 md:mt-[0.3rem] md:h-3.5 md:w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={languageChangeHandler}
                  />
                  <label className="text-sm">EN</label>
                </div>
              </div>
            </label>
            <div className="h-7 md:w-0.5 bg-slate-400 mr-2"></div>
            <button className="text-white font-sans bg-[#EF802B] hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-1.5 text-center w-[70px] login-button-lg hidden md:block">
              Login
            </button>
          </div>
          <Navbar.Collapse className="flex-auto md:w-full large-nav md:block hidden">
            {navBarPayload[language].navbarlink.map((val, idx) => {
              if (val.submenu) {
                return (
                  <div
                    className="relative group transition-all hover:duration-300"
                    key={idx}
                  >
                    <Navbar.Link href={val.url} className="text-white hover:bg-[#EF802B]">
                      {val.content}
                    </Navbar.Link>
                    <ul className="absolute w-56 hidden group-hover:block group-hover:group-hover:block bg-[#EF802B] text-white shadow-lg">
                      {val.submenu.map((val2, idx2) => {
                        return (
                          <li key={idx2}>
                            <a
                              href={val2.url}
                              className="block text-center py-4 hover:bg-orange-400 border-b border-slate-600"
                            >
                              {val2.content}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              } else {
                return (
                  <Navbar.Link href={val.url} key={idx} className="text-white">
                    {val.content}
                  </Navbar.Link>
                );
              }
            })}
          </Navbar.Collapse>

          <Navbar.Toggle />
          <Navbar.Collapse className="md:hidden">
            <label className="relative inline-flex items-center md:px-4 px-1 my-5">
              <div>
                <div>
                  <label className="text-sm md:text-sm text-white">ID</label>
                  <input
                    className="md:mx-2 mx-4 md:mt-[0.3rem] md:h-3.5 md:w-8 w-15 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={languageChangeHandler}
                  />
                  <label className="text-sm text-white">EN</label>
                </div>
              </div>
            </label>
            <button className="text-white font-sans bg-[#EF802B] hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-1.5 text-center w-[70px]">
              Login
            </button>
            {navBarPayload[language].navbarlink.map((val, idx) => {
              if (val.submenu) {
                return (
                  <div
                    className="relative group transition-all hover:duration-300"
                    key={idx}
                  >
                    <Navbar.Link href={val.url} className="text-white">
                      {val.content}
                    </Navbar.Link>
                    {val.submenu.map((val2, idx2) => {
                      return (
                        <Navbar.Link
                          href={val2.url}
                          className="text-white ml-6"
                          key={idx2}
                        >
                          {val2.content}
                        </Navbar.Link>
                      );
                    })}
                  </div>
                );
              } else {
                return (
                  <Navbar.Link href={val.url} key={idx} className="text-white">
                    {val.content}
                  </Navbar.Link>
                );
              }
            })}
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
