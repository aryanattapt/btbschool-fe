import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";
import Banner from "./_layouts/banner";
import Pagging from "./_layouts/pagging";

const BTBPeduliPage = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Pagging />
      <h1 className="font-sans text-[#00305E] text-[60px] font-semibold	">
        BTB CARE
      </h1>
      <div className="flex flex-nowrap ml-[76px] font-sans">
        <div>
          <img
            src="./btb-peduli1.png"
            alt="btb-peduli1"
            className="w-[519px]"
          />
        </div>
        <div className="bg-[#EF802B] w-[640px] h-[363px] content-center	">
          <p className="text-center	text-[20px] leading-[38px]">
            BTB Peduli adalah program komunitas dari sekolah BTB yang bertujuan
            menyatukan semua orang, menginspirasi perubahan, dan memberikan
            dampak positif bagi hidup orang banyak, hal ini merupakan cara BTB
            untuk memberikan kembali kepada masyarakat.
          </p>
        </div>
      </div>
      <div className="content-center mx-[76px] ">
        <p className="text-[20px] leading-[38px]">
          BTB Peduli berharap untuk menanamkan kepedulian sosial lingkungan yang
          kuat dan bertanggung jawab dalam pribadi setiap murid, mulai dari
          kelompok bermain hingga sekolah menengah atas.  Program ini termasuk
          BTB Peduli Lingkungan, Sukarelawan BTB, dan Tangan Penolong BTB
          ditambah lagi tim khusus bencana alam.
        </p>
      </div>
      <div className="content-center mx-[76px] my-[70px]">
        <p className="text-[30px] leading-[38px] text-[#00305E] italic ">
          “Tujuan BTB Peduli adalah mengembangkan individual muda yang inovatif
          dan peduli sehingga bisa tumbuh menjadi orang yang bertanggung jawab
          ditengah masyarakat global.”
        </p>
      </div>

      <div class="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <FooterComponent />
    </>
  );
};

export default BTBPeduliPage;
