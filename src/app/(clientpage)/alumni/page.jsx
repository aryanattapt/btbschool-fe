import AlumniForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";

const AlumniPage = () => {
  return (
    <>
      <div className="flex-col p-12">
        <Banner />
        <Pagging />
        <div id="hubungi-kami" className="">
          <h1 className="mt-10 text-[#00305E] md:text-[50px] text-[25px] font-semibold">
            INFORMASI ALUMNI
          </h1>
          <p className="md:text-[30px] text-[15px] text-black">
            Sebagai alumni dari sekolah BTB, kami ingin mengenal anda lebih
            jauh. Silahkan isi formulir berikut ini. Kami menunggu respon
            kalian.
          </p>
        </div>
        <AlumniForm />
      </div>
    </>
  );
};

export default AlumniPage;
