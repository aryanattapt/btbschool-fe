"use client";
import { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { isLogin, logout } from "../../../../../services/auth.service";
import { HiMenu, HiX } from 'react-icons/hi';

const customTheme = {
  "root": {
    "base": "h-full",
    "collapsed": {
      "on": "w-16",
      "off": "w-64"
    },
    "inner": "h-screen overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"
  },

};


const SidebarComp = ({ currentPage, logoutHandler, isOpen, onClose }) => {
    return (
        <Sidebar
        theme={customTheme}
            id="default-sidebar"
            aria-label="Sidebar with multi-level dropdown example"
            className={`fixed top-0 left-0 z-30 text-white md:relative md:w-64 ${isOpen ? 'block' : 'hidden'} md:block`}
        >
            <div className="h-full flex flex-col ">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <img alt="" src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/Logo BTB 1.1-01.png" className="mr-3 h-6 sm:h-8" />
                    <button onClick={onClose} className="md:hidden">
                        <HiX size={24} />
                    </button>
                </div>
                <Sidebar.Items className='h-full flex flex-col justify-between' >
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse label="Career">
                            <Sidebar.Item href="/admin/career" className={"/admin/career" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                Career
                            </Sidebar.Item>
                            <Sidebar.Item href="/admin/career/applicant" className={"/admin/career/applicant" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                Applicant
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Item href="/admin/bulletinspotlight" className={"/admin/bulletinspotlight" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Bulletin
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/helpcenter" className={"/admin/helpcenter" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            FAQ Help Center
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/calenderacademic" className={"/admin/calenderacademic" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Calendar
                        </Sidebar.Item>
                        <Sidebar.Collapse label="Registration">
                            <Sidebar.Item href="/admin/registration/all" className={"/admin/registration/all" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                All
                            </Sidebar.Item>
                            <Sidebar.Item href="/admin/registration/outstanding" className={"/admin/registration/outstanding" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                Outstanding
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" onClick={logoutHandler}>
                            Logout
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </div>
        </Sidebar>
    );
};

const SideBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("");
    const [isOpen, setIsopen] = useState(false);
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    const isMobile = width <= 768;

    useEffect(() => {
        setCurrentPage(window.location.pathname);
    }, [setCurrentPage]);

    const toggleSidebar = () => setIsopen(!isOpen);

    const logoutHandler = () => {
        setIsLoading(true);
        logout();
        if (!isLogin()) {
            setIsLoading(false);
            router.push("/admin/signin");
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
                {/* Assuming Spinner is from Flowbite or your own implementation */}
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        );
    }

    return (
        <>
            {isMobile && (
                <button
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 z-40 p-2 text-gray-500 rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    <HiMenu size={24} className="text-white" />
                </button>
            )}
            <SidebarComp
                currentPage={currentPage}
                logoutHandler={logoutHandler}
                isOpen={isOpen}
                onClose={() => setIsopen(false)}
            />
        </>
    );
};

export default SideBar;