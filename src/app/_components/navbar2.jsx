"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar2 = () => {
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
    <nav className={`w-full transition-all duration-300 
    bg-[#00305E] text-white top-0 fixed`}>
      <div className="flex justify-between h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <img 
          src={"https://w6i8.c1.e2-7.dev/assets/btbschool/images/LogoFooter.png"}
          width="400"
          height="75"
          className={`transition-all duration-1000 ${isScrolled ? 'w-[400px] ml-28' : 'w-[450px] ml-20 align-middle'} cursor-pointer p-4`}
          />
        </Link>
        <div className="grid items-center mr-28">
            <div className={`transition-all duration-1000 ${isScrolled ? 'hidden' : 'pt-2 inline-flex justify-end'}`}>
                <label className="relative inline-flex cursor-pointer items-center px-4">
                    <div>
                        <div>
                        <label className="text-sm">ID</label>
                        <input
                            className="md:mx-2 md:mt-[0.3rem] md:h-3.5 md:w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <label className="text-sm">EN</label>
                        </div>
                    </div>
                </label>
                <button className="text-white font-sans bg-[#EF802B] hover:bg-blue-700 font-medium rounded-full text-sm px-3 py-2.5 text-center w-[70px]">
                    Login
                </button>
            </div>
            <ul className={`${isScrolled ? 'gap-10' : 'gap-9'} hidden sm:flex py-4`}>
                <Link href="/btb-belajar">
                <li className="hover:border-b">Belajar di BTB</li>
                </Link>
                <Link href="/about-us">
                <li className="hover:border-b">Tentang Kami</li>
                </Link>
                <Link href="/career">
                <li className="hover:border-b">Karir</li>
                </Link>
                <Link href="/alumni">
                <li className="hover:border-b">Alumni</li>
                </Link>
                <Link href="/contact">
                <li className="hover:border-b">Kontak</li>
                </Link>
                <Link href="/onlineregistration">
                <li className="hover:border-b">Daftar</li>
                </Link>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar2;