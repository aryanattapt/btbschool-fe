const Pagging = ({ navbardata, activeTab, setActiveTab }) => {

    const onClickPagination = (item) => {
        if (item.clicktype === "url" && item.url) {
            // Redirect to URL
            window.location.href = item.url;
        } else if (item.clicktype === "tab" && item.id) {
            // Set active tab
            setActiveTab(item.id);
        }
    };

  return (
        <header className="flex flex-row items-start justify-between text-[#00305E] border-b">
            <div className="inline-flex sm:gap-5 md:gap-11 lg:gap-14 xl:gap-10">
            {/* Main menu title */}
            <div className="border-r-2">
                <div className="pr-10 pl-10 md:pr-20 md:pl-32">
                <h1 className="text-[25px] md:text-[25px] text-center font-semibold py-8 md:py-10">
                    <div
                    className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                        activeTab === navbardata.id
                        ? "bg-white text-black"
                        : "bg-white"
                    }`}
                    onClick={() => onClickPagination(navbardata)}
                    >
                    {navbardata.content}
                    </div>
                </h1>
                </div>
            </div>

            {/* Submenu items */}
            <div className="inline-flex text-[20px] md:text-[20px] text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px py-8 md:py-10">
                {navbardata.submenu &&
                    navbardata.submenu.filter(x => x && x.isactive).map((item) => (
                    <li key={item.id} className="px-10 sm:px-5 md:px-20 lg:px-4">
                        <div
                        className={`cursor-pointer inline-block border-transparent rounded-t-lg hover:text-blue-600 dark:hover:text-blue-600 ${
                            activeTab === item.id
                            ? "bg-white text-black underline"
                            : "bg-white"
                        }`}
                        onClick={() => onClickPagination(item)}
                        >
                        {item.content}
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            </div>
        </header>
    );
};

export default Pagging;
