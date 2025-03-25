import { FaInstagram } from "react-icons/fa";

const InstagramFeed = ({ payload, title, url }) => {
    return (
      <>
        <hr className="h-px mt-10 md:mt-32 md:mb-20 mb-10 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="text-[25px] md:text-[60px] md:text-start text-center font-semibold">
          <h1>{title}</h1>
        </div>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 mt-4">
            {payload.map((val, idx) => {
            return (
                <div key={idx} className="flex justify-center">
                <img
                    /* className="cursor-pointer md-h-[400px] md:w-[300px] md:h-[500px] lg:w-[300px] lg:h-[400px] xl:w-[300px] xl:h-[400px] object-cover" */
                    className="object-contain h-[auto] w-[60%]"
                    src={`${val.thumbnail_url || val.media_url}`}
                    alt={`${val.caption}`}
                    onClick={() => window.open(val.permalink)}
                />
                </div>
            );
            })}
        </div>
        <div className="m-10 flex justify-center">
          <button
            className="bg-[#00305E] flex items-center text-white hover:bg-blue-700 font-medium md:rounded-full rounded text-sm md:text-md md:px-10 px-5 py-2.5 text-center"
            onClick={() =>
              window.location.href = `${url}`
            }
          >
            <FaInstagram className="text-white mr-2" />
            View More On Instagram
          </button>
        </div>
      </>
    );
};
  
export default InstagramFeed;

{/* <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 mt-4">
  {payload.map((val, idx) => {
    return (
      <div key={idx} className="relative w-full">
        <img
          className="cursor-pointer w-full h-auto object-contain"
          src={`${val.thumbnail_url || val.media_url}`}
          alt={`${val.caption}`}
          onClick={() => window.open(val.permalink)}
        />
      </div>
    );
  })}
</div> */}