import Sidebar from "../_components/sidebar";

const NavbarSidebarLayout = ({ children }) => {
	return (
		<>
			<div className="h-screen flex items-start">
				<Sidebar />
				<MainContent>{children}</MainContent>
			</div>
		</>
	);
};

const MainContent = ({ children }) => {
	return (
		<>
			<main className="relative h-full w-full overflow-y-auto bg-gray-100 dark:bg-gray-900 lg:p-4 md:p-2">
				{children}
			</main>
		</>
	);
};

export default NavbarSidebarLayout;
