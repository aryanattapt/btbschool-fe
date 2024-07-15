"use client";

import {
    Navbar 
} from "flowbite-react";

const NavBar = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bina Tunas Bangsa</span>
            </Navbar.Brand>
            <Navbar.Collapse>
            <Navbar.Link href="#" active>
                Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;