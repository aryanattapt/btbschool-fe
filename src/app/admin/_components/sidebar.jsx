"use client";
import { 
    Sidebar, 
    TextInput 
} from "flowbite-react";
import { 
    useEffect, 
    useState 
} from "react";
import {
    HiChartPie,
    HiOutlineLogout,
    HiSearch,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";
import { useRouter } from "next/navigation";
import { isLogin, logout } from "../../../../services/auth.service";

const SideBar = () => {
    const [isLoading, setIsLoading] = useState(null);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        setCurrentPage(window.location.pathname);
        console.log(window.location.pathname);
    }, [setCurrentPage]);

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
        return <>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <div className="flex h-dvh flex-col justify-between py-2">
                    <div>
                    <form className="pb-3 md:hidden">
                        <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32}/>
                    </form>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="/" icon={HiChartPie} className={"/admin" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag} className={ "/e-commerce/products" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item href="/users/list" icon={HiUsers} className={ "/users/list" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""}>
                                Users list
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiOutlineLogout} onClick={logoutHandler}>
                                Logout
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                    </div>
                </div>
            </Sidebar>
        </>
    }
}

export default SideBar;