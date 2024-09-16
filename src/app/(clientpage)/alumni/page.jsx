import AlumniForm from "./_layouts/form";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";

const AlumniPage = () => {
  return (
    <>
      <Banner />
      <Pagging />
      <div className="flex-col px-12 pb-12">
        <div id="hubungi-kami" className="">
          <h1 className="mt-10 text-[#00305E] md:text-[35px] text-[28px] font-semibold">
            INFORMASI ALUMNI
          </h1>
          <p className="md:text-[16px] text-[14px] text-black">
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
