"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid className="w-full">
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/admin">
              <img alt="" src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/logo.svg" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Bina Tunas Bangsa
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
