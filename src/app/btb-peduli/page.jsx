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
      <h1 className="md:mx-[76px] font-sans text-[#00305E] md:text-[60px] font-semibold">
        BTB CARE
      </h1>
      <div className="flex flex-nowrap md:ml-[76px] font-sans">
        <div>
          <img
            src="./btb-peduli1.png"
            alt="btb-peduli1"
            className="md:w-[519px]"
          />
        </div>
        <div className="bg-[#EF802B] md:w-[640px] md:h-[363px] content-center	">
          <p className="text-center	md:text-[20px] md:leading-[38px]">
            BTB Peduli adalah program komunitas dari sekolah BTB yang bertujuan
            menyatukan semua orang, menginspirasi perubahan, dan memberikan
            dampak positif bagi hidup orang banyak, hal ini merupakan cara BTB
            untuk memberikan kembali kepada masyarakat.
          </p>
        </div>
      </div>
      <div className="content-center md:mx-[76px] ">
        <p className="md:text-[20px] md:leading-[38px]">
          BTB Peduli berharap untuk menanamkan kepedulian sosial lingkungan yang
          kuat dan bertanggung jawab dalam pribadi setiap murid, mulai dari
          kelompok bermain hingga sekolah menengah atas.  Program ini termasuk
          BTB Peduli Lingkungan, Sukarelawan BTB, dan Tangan Penolong BTB
          ditambah lagi tim khusus bencana alam.
        </p>
      </div>
      <div className="content-center md:mx-[76px] md:my-[70px]">
        <p className="md:text-[30px] md:leading-[38px] text-[#00305E] italic ">
          “Tujuan BTB Peduli adalah mengembangkan individual muda yang inovatif
          dan peduli sehingga bisa tumbuh menjadi orang yang bertanggung jawab
          ditengah masyarakat global.”
        </p>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div className="md:mx-[76px] font-sans">
        <h2 className="text-[#00305E] md:text-[50px] md:my-[35px]">
          BTB PEDULI LINGKUNGAN
        </h2>
        <img
          src="./btb-peduli2.png"
          alt="btb-peduli2"
          className="md:w-[1124px] md:mb-[25px]"
        />
        <p className="text-[#00305E] text-[30px] md:mb-[25px]">
          Bumi kita merupakan warisan yang akan terus diturunkan dari generasi
          ke generasi.
        </p>
        <p className="md:text-[20px] md:mb-[25px]">
          BTB Peduli berharap untuk menanamkan kepedulian sosial lingkungan yang
          kuat dan bertanggung jawab dalam pribadi setiap murid, mulai dari
          kelompok bermain hingga sekolah menengah atas. Program ini termasuk
          BTB Peduli Lingkungan, Sukarelawan BTB, dan Tangan Penolong BTB
          ditambah lagi tim khusus bencana alam.
        </p>
      </div>
      <div className="flex flex-nowrap md:mx-[76px] gap-5 md:my-[100px]">
        <div>
          <h2 className="text-[#00305E] md:text-[30px] md:my-[35px]">
            Melibatkan Semua
          </h2>
          <p className="md:leading-[38px] md:mr-[25px]">
            Kegiatan BTB Green Hands melibatkan setiap murid untuk menanam pohon
            sebagai bagian dari inisiatif global untuk mengurangi efek perubahan
            iklim dan pemanasan global.
          </p>
        </div>
        <div>
          <img
            src="./btb-peduli3.jpeg"
            alt="btb-peduli3"
            className="md:w-[1124px] md:mb-[25px]"
          />
        </div>
      </div>

      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:mx-6 dark:text-white dark:after:border-neutral-600"></div>

      <div className=" font-sans">
        <h2 className="text-[#00305E] md:text-[50px] md:my-[35px] md:mx-[76px]">
          SUKARELAWAN BTB
        </h2>
        <div className="flex flex-wrap md:mb-[25px]">
          <div>
            <img
              src="./btb-peduli4.png"
              alt="btb-peduli2"
              className="md:w-[449px] md:h-[290px]"
            />
          </div>
          <div>
            <img
              src="./btb-peduli5.jpeg"
              alt="btb-peduli2"
              className="md:w-[449px] md:h-[290px]"
            />
          </div>
          <div>
            <img
              src="./btb-peduli6.jpeg"
              alt="btb-peduli2"
              className="md:w-[449px] md:h-[290px]"
            />
          </div>
        </div>

        <p className="text-[#00305E] md:text-[30px] md:mb-[25px] font-semibold md:mx-[76px]">
          KOMITMEN UNTUK MELAYANI
        </p>
        <p className="md:text-[20px] md:mb-[25px] md:mx-[76px]">
          Setiap murid BTB diajak untuk berpartisipasi dengan menjadi
          sukarelawan dalam program yang disesuaikan dengan kelompok umur
          mereka. Sebagai contoh para murid Kelompok Bermain dan Sekolah Dasar
          dapat berkontribusi dengan menyiapkan dan membungkus kado, serta
          mengunjungi panti asuhan. Murid Sekolah Menengah dapat menjadi
          sukarelawan untuk mengajar anak-anak yang kurang beruntung sedangkan
          murid Sekolah Menengah Atas dapat mengunjungi panti jompo.
        </p>
        <img
          src="./btb-peduli7.jpeg"
          alt="btb-peduli7"
          className="md:w-[1460.8px] md:h-[308px]"
        />
      </div>
      <FooterComponent />
    </>
  );
};

export default BTBPeduliPage;
