"use client";
import { 
    Sidebar, 
} from "flowbite-react";
import { 
    useEffect, 
    useState 
} from "react";
import { useRouter } from "next/navigation";
import { isLogin, logout } from "../../../../../services/auth.service";

const SideBar = () => {
    const [isLoading, setIsLoading] = useState(null);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("");
    const [isOpen, setIsopen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {window.removeEventListener('resize', handleWindowSizeChange);}
    }, []);

    const isMobile = width <= 768;

    useEffect(() => {
        setCurrentPage(window.location.pathname);
    }, [setCurrentPage]);
    
    const ToggleSidebar = () => {
        console.log(`trigger`);
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const logoutHandler = () => {
        setIsLoading(true);
        logout();
        if(!isLogin()) {
            setIsLoading(false);
            router.push("/admin/signin");
        }
    }

    if(isLoading){
        return <>
            <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        </>
    } else{
        if(isMobile){
            return <>
                <button onClick={ToggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                {
                    isOpen ? 
                    <SidebarComp isOpen={isOpen} currentPage={currentPage} logoutHandler={logoutHandler}/> :
                    <></>
                }
            </>
        } else{
            return <SidebarComp isOpen={isOpen} currentPage={currentPage} logoutHandler={logoutHandler}/>
        }
    }
}

const SidebarComp = ({currentPage, logoutHandler}) => {
    return <>
        <Sidebar id="default-sidebar" aria-label="Sidebar with multi-level dropdown example" className='block'>
            <div className="flex h-dvh flex-col justify-between py-2">
                <div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin">
                            <img alt="" src="/Logo BTB 1.1-01.png" className="mr-3 h-6 sm:h-8" />
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin" className={"/admin" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Welcome
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/homepage" className={"/admin/homepage" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Home Page
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/contact" className={"/admin/contact" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Contact
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/alumni" className={"/admin/alumni" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Alumni
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/career" className={"/admin/alumni" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Career
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/bulletin" className={"/admin/alumni" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Bulletin
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/helpcenter" className={"/admin/alumni" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Help Center
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/calendar" className={"/admin/alumni" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            Calender
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/eregistration" className={"/admin/alumni" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                            E-Registration
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" onClick={logoutHandler}>
                            Logout
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
                </div>
            </div>
        </Sidebar>
    </>
}

export default SideBar;