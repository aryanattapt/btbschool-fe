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
      <Navbar.Collapse className="flex-auto w-64 font-white">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="flex-auto w-64">
        <button className="text-white font-sans font-['Poppins'] bg-[#EF802B] hover:bg-white-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
          Login
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
