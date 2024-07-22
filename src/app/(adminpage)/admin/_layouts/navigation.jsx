import Sidebar from "../_components/sidebar";

const NavbarSidebarLayout = ({ children })  => {
    return <>
        <div className="flex items-start">
            <Sidebar />
            <MainContent>{children}</MainContent>
        </div>
    </>
};

const MainContent = ({ children }) => {
    return <>    
        <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-8 md:ml-2">
            {children}
        </main>
    </>
};

export default NavbarSidebarLayout;