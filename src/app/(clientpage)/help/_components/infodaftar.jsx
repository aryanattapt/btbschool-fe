const { Button } = require("flowbite-react")
import { HiMail, HiPhone } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const convertPhoneNumber = (input) => {
  try {
    const cleaned = input.replace(/[\s()]+/g, '').replace('+', '');
    const formatted = `+${cleaned.slice(0, 2)}${cleaned.slice(2)}`; 
    return formatted;
  } catch (error) {return "";}
}

const InformasiPendaftaran = ({helpData, contactUsData, payload, language}) => {
    return <div className="p-4">
        <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
            {helpData[language].secondTitle}
        </h1>
        <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-[#00305E]">{helpData[language].subtitle1}</h2>
            <p className="mb-4 text-[#00305E]">{helpData[language].subtitle2}</p>
            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="mailto:admission@btbschool.org" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">ADMISSION@BTBSCHOOL.ORG</a>
                <a href="tel:0216698888" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">0216698888</a>
            </div> */}
            <div
            id="box"
            className="flex-1 bg-[#00305E] rounded-3xl py-4 md:py-6 lg:py-8 flex flex-col justify-between"
          >
            <div className="text-white">
              {/* {contactUsData[language].schoolList.map((val, idx) => (
                <div className="px-4 md:px-6 lg:px-8" key={idx}>
                  <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl pt-4 md:pt-6 lg:pt-8">
                    {val.title}
                  </h1>
                  <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[18px] ">
                    {val.subtitle}
                  </h3>
                  <div className="mt-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg leading-relaxed">
                    {val.address}
                  </div>
                  <div className="flex items-center mt-2">
                    <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                      {val.phoneNumber}
                    </p>
                  </div>
                  {val.waList.map((val1, idx1) => (
                    <div className="flex items-center mt-2" key={idx1}>
                      <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <a
                        href={val1.hrefwa}
                        className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                      >
                        {val1.waNumber}
                      </a>
                    </div>
                  ))}
                </div>
              ))} */}

            {
                payload?.map((val, idx) => {
                  return <div className="px-4 md:px-6 lg:px-8" key={idx}>
                    <h1 className="font-bold text-base sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl pt-4 md:pt-6 lg:pt-8">
                      {val?.buildingName}
                    </h1>
                    <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[18px] ">
                      {val?.grade}
                    </h3>
                    <div className="mt-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg leading-relaxed">
                      {val?.address}
                    </div>
                    <div className="flex items-center mt-2">
                      <HiPhone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      <p className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg">
                        {val?.phoneNo}
                      </p>
                    </div>
                      <div className="flex items-center mt-2">
                        <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                        <a
                          href={`https://wa.me/${convertPhoneNumber(val?.whatsAppNo1)}`}
                          className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                        >
                          {val?.whatsAppNo1}
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        <AiOutlineWhatsApp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                        <a
                          href={`https://wa.me/${convertPhoneNumber(val?.whatsAppNo2)}`}
                          className="ml-2 text-sm sm:text-sm md:text-[11px] lg:text-base xl:text-lg"
                        >
                          {val?.whatsAppNo2}
                        </a>
                      </div>
                  </div>
                })
              }

              <div className="mx-4 my-3 flex items-center text-sm text-gray-800 border-t border-gray-200 dark:text-white dark:border-neutral-600"></div>
              <div className="px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 my-2">
                <div className="flex items-center mt-2">
                  <HiMail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  <p
                    className="ml-2 text-sm md:text-base lg:text-base xl:text-lg"
                    onClick={() =>
                      (window.location.href =
                        "mailto:" + contactUsData[language]?.email)
                    }
                  >
                    {contactUsData[language].email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-[#00305E]">{helpData[language].subtitle3}</h2>
            <div className="relative">
                <img
                    src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/banneraboutus.jpg"
                    alt="banneraboutus"
                    className="w-full object-cover"
                />
            </div>
        </div>
        <div className="flex justify-center">
            <Button onClick={() => {window.location.href='/onlineregistration'}}>
                Click here to Register
            </Button>
        </div>
    </div>
}

export default InformasiPendaftaran;