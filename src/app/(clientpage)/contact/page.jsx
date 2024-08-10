import ContactForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactPage = () => {
  return (
    <>
      <Banner />
      <Pagging />
      <div id="hubungi-kami" className="md:mx-32 mx-[20px]">
        <h1 className="mt-10 text-[#00305E] md:text-[50px] text-[25px] font-semibold	">
          HUBUNGI KAMI
        </h1>
        <div className="text-[#00305E] grid grid-cols-1 md:grid-cols-3 mb-10">
          <div className="col-span-2">
            <p className="md:text-[30px] text-[16px] my-5 text-black">
              Ambil langkah awal untuk bergabung bersama kami!
            </p>
            <div className="flex-col">
              <ContactForm />
            </div>
          </div>
          <div className="md:mt-0 mt-5">
            <div className="md:h-screen h-auto bg-[#EF802B] rounded-3xl mx-5 py-4 md:py-0 place-content-center">
              <div className="text-white pb-10">
                <div className="header px-5 md:px-15 ">
                  <h1 className="font-bold md:text-[31px] text-[15px] pt-10">
                    BTB SCHOOL PLUIT TIMUR
                  </h1>
                  <div className="address mt-2 leading-loose md:text-[20px] text-[13px]">
                    Jl. Pluit Timur Blok MM
                  </div>
                  <div className="flex flex-nowrap">
                    <div>
                      <HiPhone className="md:size-6" />
                    </div>
                    <div className="ml-4">
                      <p className="md:text-[20px] text-[13px]">021-669-8888</p>
                    </div>
                  </div>
                  <div className="flex flex-nowrap md:mt-2">
                    <div>
                      <AiOutlineWhatsApp className="md:size-6" />
                    </div>
                    <div className="ml-4">
                      <a
                        href="https://wa.me/085695333888"
                        className="md:text-[20px] text-[13px]"
                      >
                        085695333888
                      </a>
                    </div>
                  </div>
                </div>
                <div className="header px-5 md:px-15">
                  <h1 className="font-bold md:text-[31px] pt-10">
                    BTB SCHOOL PLUIT PUTRI
                  </h1>
                  <div className="address mt-2 leading-loose md:text-[20px] text-[13px]">
                    Jl.Pluit Timur Blok MM
                  </div>
                  <div className="flex flex-nowrap">
                    <div>
                      <HiPhone className="md:size-6" />
                    </div>
                    <div className="ml-4">
                      <p className="md:text-[20px] text-[13px]">021-669-8888</p>
                    </div>
                  </div>
                  <div className="flex flex-nowrap md:mt-2">
                    <div>
                      <AiOutlineWhatsApp className="md:size-6" />
                    </div>
                    <div className="ml-4">
                      <a
                        href="https://wa.me/085695333888"
                        className="md:text-[20px] text-[13px]"
                      >
                        085695333888
                      </a>
                    </div>
                  </div>
                </div>

                <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

                <div className="header px-5 md:px-15">
                  <div className="flex flex-nowrap md:mt-2">
                    <div>
                      <HiMail className="md:size-6" />
                    </div>
                    <div className="ml-4">
                      <p className="md:text-[20px] text-[13px]">
                        info@btbschool.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div id="lokasi-kami" className="md:m-[60px] m-[8px]">
        <h1 className="text-[#00305E] md:text-[50px] text-[25px] font-semibold">
          LOKASI KAMI
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            <h3 className="md:text-[35px] text-[18px] text-black font-medium">
              BTB School Pluit Timur
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7934.134621362215!2d106.79109025869137!3d-6.12164295274717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1deb383b5aad%3A0x88c7848de94ced29!2sBTB%20School%20Pluit%20Timur!5e0!3m2!1sid!2sid!4v1722009912125!5m2!1sid!2sid"
              className="w-[248px] h-[248px] md:w-[548px] md:h-[474px] "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="ml-[1px] md:ml-[30px] mt-6 md:mt-0">
            <h3 className="md:text-[35px] text-[18px] text-black font-medium	">
              BTB School Pluit Timur
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.080070999209!2d106.78967467369849!3d-6.119924360009179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d84049afab9%3A0x79d9dbfb470b13dd!2sBTB%20School!5e0!3m2!1sid!2sid!4v1722008582899!5m2!1sid!2sid"
              className="w-[248px] h-[248px] md:w-[548px] md:h-[474px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
