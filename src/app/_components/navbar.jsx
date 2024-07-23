"use client";

import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar className="bg-[#00305E] text-white flex">
      <Navbar.Brand href="/" className="flex-auto md:w-64">
        <div className="md:w-60 md:h-100 ml-28">
          <img src="/LogoFooter.png" alt="logo btb" className="" />
        </div>
      </Navbar.Brand>
      <Navbar.Collapse className="flex-auto md:w-64">
        <Navbar.Link
          href="#"
          className="text-white font-sans"
          //active
        >
          Tentang Kami
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white font-sans">
          Daftar
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white font-sans ">
          Karir
        </Navbar.Link>
        <Navbar.Link href="./alumni" className="text-white font-sans">
          Alumni
        </Navbar.Link>
        <Navbar.Link href="./contact" className="text-white font-sans">
          Kontak
        </Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="flex-auto w-64">
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
