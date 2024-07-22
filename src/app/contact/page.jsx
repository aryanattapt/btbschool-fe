import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";
import ContactForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Pagging />
      <h1 className="md:mx-[76px] font-sans text-[#00305E] md:text-[60px] font-semibold">
        HUBUNGI KAMI
      </h1>
      <div className="md:mx-[76px] font-sans text-[#00305E] flex flex-nowrap">
        <div className="md:mr-[90px]">
          <p className="md:text-[35px]">
            Ambil langkah awal untuk bergabung bersama kami!
          </p>
          <div className="flex-col">
            <ContactForm />
          </div>
        </div>
        <div>
          <div className="md:w-[456px] md:h-[629px] bg-[#EF802B] rounded-3xl">
            <h4>BTB SCHOOL PLUIT TIMUR</h4>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default ContactPage;
