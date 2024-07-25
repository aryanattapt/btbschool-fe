import ContactForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";
import { HiPhone } from "react-icons/hi";

const ContactPage = () => {
  return (
    <>
      <Banner />
      <Pagging />
      <h1 className="mt-10 md:mx-[76px] text-[#00305E] md:text-[25px]">
        HUBUNGI KAMI
      </h1>
      <div className="md:mx-[76px] text-[#00305E] flex flex-nowrap mb-10">
        <div className="md:mr-[70px]">
          <p className="md:text-[45px] my-5 font-bold">
            Ambil langkah awal untuk bergabung bersama kami!
          </p>
          <div className="flex-col">
            <ContactForm />
          </div>
        </div>
        <div>
          <div className="md:w-[372px] md:h-[629px] bg-[#EF802B] rounded-3xl">
            <div className="text-white">
              <div className="header px-10">
                <h1 className="font-bold text-[35px] pt-10">BTB SCHOOL PLUIT TIMUR</h1>
                <div className="address mt-2 leading-loose text-[20px]">
                  Jl.   Pluit Timur Blok MM
                </div>
                <div><HiPhone/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
