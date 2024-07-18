"use client";

import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar className="bg-[#00305E] text-white flex">
      <Navbar.Brand href="/" className="flex-auto w-64">
        <div className="w-60 md:h-100">
          <img src="./LogoFooter.png" alt="logo btb" className="" />
        </div>
      </Navbar.Brand>
      <Navbar.Collapse className="flex-auto w-64">
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
        <button className="text-white font-sans bg-[#EF802B] hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-[100px]">
          Login
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
