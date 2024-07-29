"use client";

import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`transition-all duration-300 ${isScrolled ? 'bg-[#00305E] bg-opacity-100 text-white' : 'backdrop-filter backdrop-blur-lg bg-opacity-30 text-[#00305E]'} flex fixed top-0 z-20 start-0 w-full p-4`}>
      <Navbar.Brand href="/" className="flex-auto md:w-64">
        <div className="md:w-60 md:h-100 ml-28">
          <img src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/LogoFooter.png" alt="logo btb" />
        </div>
      </Navbar.Brand>
      <Navbar.Collapse className="flex-auto md:w-64">
        <div className="relative group transition-all hover:duration-300 hover:border-b-2 hover:border-[#EF802B]">
          <Navbar.Link href="/about-us" className="text-white">
            Tentang Kami
          </Navbar.Link>
          <ul className="absolute w-40 hidden group-hover:block group-hover:group-hover:block bg-[#00305E] text-white shadow-lg">
            <li>
              <a href="/btb-belajar" className="block text-center py-4 hover:bg-gray-700 border-b border-white">
                Belajar di BTB
              </a>
            </li>
            <li>
              <a href="/btb-peduli" className="block text-center py-4 hover:bg-gray-700">
                BTB Peduli
              </a>
            </li>
          </ul>
        </div>
        <div className="relative group hover:border-b-2 hover:border-b hover:border-[#EF802B] px-2">
          <Navbar.Link href="/onlineregistration" className="text-white">
            Daftar
          </Navbar.Link>
        </div>
        <Navbar.Link href="/career" className="text-white">
          Karir
        </Navbar.Link>
        <Navbar.Link href="./alumni" className="text-white">
          Alumni
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-white">
          Kontak
        </Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="w-64 mr-28">
        <label className="relative inline-flex cursor-pointer items-center">
          {/* <input type="checkbox" checked className="peer sr-only" /> */}
          <div>
            <div>
              <label>ID</label>
              <input
                className="md:mx-2 md:mt-[0.3rem] md:h-3.5 md:w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label>EN</label>
            </div>
          </div>
        </label>
        <button className="text-white font-sans bg-[#EF802B] hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-[100px]">
          Login
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
