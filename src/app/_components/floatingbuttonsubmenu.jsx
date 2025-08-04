/* import { FaCalendar, FaBook, FaQuestion } from 'react-icons/fa';
import { MdAppRegistration } from "react-icons/md"; */

const renderFloatingButtonSubMenu = ({payload}) => {
    return payload?.filter((val) => val.isactive).map((val, idx) => {
        return <div className="relative group flex items-center" key={idx}>
            <a href={val?.link}>
            <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
                {val?.logo && <img src={val?.logo} alt="icon" className="w-10 h-10 object-cover -rotate-45"/>}
            </button>
            </a>
            <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val?.name}</span>
        </div>
    })

}

export default renderFloatingButtonSubMenu;

{/* <div className="relative group flex items-center">
      <a href="/calendar-academic">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <FaCalendar className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Calendar</span>
    </div>
    <div className="relative group flex items-center">
        <a href="/bulletinspotlight">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <FaBook className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bulletin</span>
    </div>
    <div className="relative group flex items-center">
      <a href="/onlineregistration">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <MdAppRegistration className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Registration</span>
    </div>
    <div className="relative group flex items-center">
      <a href="/help">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <FaQuestion className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">FAQ</span>
    </div> */}

    {/* <div className="relative group flex items-center">
      <a href="/calendar-academic">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <FaCalendar className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Calendar</span>
    </div>
    <div className="relative group flex items-center">
        <a href="/bulletinspotlight">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <FaBook className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bulletin</span>
    </div>
    <div className="relative group flex items-center">
      <a href="/onlineregistration">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <MdAppRegistration className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Registration</span>
    </div>
    <div className="relative group flex items-center">
      <a href="/help">
        <button className="w-[54.21px] h-[54.21px] bg-[#EF802B] flex justify-center items-center transform rotate-45 mb-4 transition-transform duration-300 group-hover:scale-110">
          <FaQuestion className="text-white text-xl -rotate-45" />
        </button>
      </a>
      <span className="absolute right-full mr-4 text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">FAQ</span>
    </div> */}