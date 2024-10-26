const Sukarelawan = ({ data, language }) => {
  return (
    <div id="sukarelawan">
      <div className="flex flex-col items-start">
        <h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5 md:mx-32 md:my-[35px] mb-5">
          {data[language]?.sukarelawantitle}
        </h2>
        <div className="md:mx-32 lg:mx-32 xl:mx-0 grid justify-items-center grid-cols-1 xl:grid-cols-3 md:grid-cols-1 gap-2 md:gap-4">
          {
            data?.sukarelawanbtbimage1 && <img
              src={`${data?.sukarelawanbtbimage1}`}
              alt="btb-peduli2"
              className="w-full xl:h-[290px] md:h-auto object-cover mb-4"
            />
          }
          {
            data?.sukarelawanbtbimage2 && <img
              src={`${data?.sukarelawanbtbimage2}`}
              alt="btb-peduli2"
              className="w-full xl:h-[290px] md:h-auto object-cover mb-4"
            />
          }
          {
            data?.sukarelawanbtbimage3 && <img
              src={`${data?.sukarelawanbtbimage3}`}
              alt="btb-peduli2"
              className="w-full xl:h-[290px] md:h-auto object-cover mb-4"
            />
          }
        </div>
        <div className="mx-10 md:mx-32 mt-5 md:mt-20 mb-5">
          <p className="text-[#00305E] text-[14px] sm:text-center md:text-[30px] font-semibold md:mb-[25px] mb-[5px]">
            {data[language]?.text8}
          </p>
          <p className="text-black text-[14px] md:text-[20px] mb-[5px] md:mb-[25px]">
            {data[language]?.text9}
          </p>
        </div>
        {
          data?.sukarelawanbtbimage4 && <img
            src={`${data?.sukarelawanbtbimage4}`}
            alt="btb-peduli7"
            className="w-full xl:w-[1460.8px] xl:h-[308px] object-cover mb-5"
          />
        }
      </div>
    </div>
  );
};

export default Sukarelawan;