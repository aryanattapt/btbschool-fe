import Banner from "./components/banner";
import Pagging from "./components/pagging";

const AboutUsPage = () => {
  return (
    <>
      <Banner />
      <Pagging />
      <div className="relative" id="pengenalan">
        <div className="mt-10 mb-5">
          <h1 className="text-[35px] font-bold pl-32 text-[#00305E]">
            PENGENALAN
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="h-[350px]">
            <img
              src="../slider2.jpeg"
              alt="PAUD"
              className="h-[350px] w-full object-cover"
            />
          </div>
          <div className="content-center bg-[#EF802B]">
            <div className="p-5 text-left text-[20px] text-[#000000] text-pretty">
              BTB memberikan edukasi yang dilengkapi dengan segala aspek penting
              untuk membentuk individu terbaik. Lulusan sekolah kami merupakan
              generasi muda yang bukan hanya mengerti pentingnya menjadi warga
              global, tapi juga generasi muda yang dapat menggunakan ilmunya di
              dunia.
            </div>
          </div>
        </div>
      </div>

      <div className="text-[30px] font-medium mb-8 text-center text-[#243F6D] border-b">
        <ul className="flex flex-nowrap place-content-center">
          <li className="w-[600px]">
            <a
              href="about-us#visi-misi"
              className="inline-block py-8 border-b-8 border-[#EF802B] active rounded-t-lg hover:border-[#EF802B]"
            >
              VISI MISI
            </a>
          </li>
          <li className="w-[600px]">
            <a
              href="about-us#jenjang-pendidikan"
              className="inline-block  py-8 border-b-8 border-transparant rounded-t-lg hover:border-[#EF802B] dark:text-blue-500 dark:border-blue-500"
              //   aria-current="page"
            >
              JENJANG PENDIDIKAN
            </a>
          </li>
        </ul>
      </div>

      <div id="visi-misi" className="grid grid-cols-2 text-black m-[30px] leading-loose">
        <div className="pl-[50px]">
          <h2 className="text-[25px] mb-[10px] font-semibold">Visi</h2>
          <p className="leading-[35px]">
            Untuk memberikan pendidikan holistik dan membina siswa untuk menjadi
            pemimpin yang dinamis dalam masyarakat global.
          </p>
          <h2 className="text-[25px] mb-[10px] font-semibold mt-3">Misi</h2>
          <p className="leading-[35px]">
            Menyelenggarakan pendidikan internasional berkualitas yang akan
            mengembangkan kebutuhan individu siswa secara akademis, emosional,
            fisik dan sosial dengan: 
          </p>
          <ul className="list-disc">
            <li>Menanamkan nilai moral dan budi pekerti
            yang baik kepada siswa agar bertanggung jawab atas tindakannya.</li>
            <li>Mengembangkan Profil Pelajar BTB dengan menerapkan praktik
            pendidikan terbaik dan mempromosikan literasi digital.</li>
            <li>Menyediakan
            lingkungan belajar yang aman dan nyaman di mana rasa hormat,
            kejujuran, dan penghargaan terhadap perbedaan individu dipupuk.</li>
          </ul>
        </div>
        <div className="pl-[50px]">
        <img
            src="./bannercontact.jpeg"
            alt="aboutus2"
            className="md:h-[500px] md:w-[546px] object-cover"
          />
        </div>
      </div>
      <div className="my-10 bg-[#243F6D]">
        <div className="flex text-center items-center py-10 mx-40 text-white leading-loose text-[15px] font-semibold">
          Pengajar BTB mendorong para murid untuk dapat menemukan tempatnya di dunia yang memiliki tantangan 
          dan peluang tidak terbatas ini. Mereka membimbing para murid untuk berpikir, bertindak, dan menerima 
          rekannya dan diri mereka sendiri.
        </div>
      </div>
      <div
        id="jenjang-pendidikan"
        className="flex flex-wrap m-[20px] place-content-center"
      >
        <div className="md:m-[20px]">
          <div className="bg-[url('./aboutus3.jpg')] md:h-[346px] md:w-[552px] bg-cover bg-center">
            <div className="h-full hover:bg-[#243F6D] hover:opacity-80">
              <div className="flex items-end justify-start pl-10 pb-10 hover:pb-20 h-full text-white group">
                <div>
                <p className="md:text-[35px] text-justify font-bold text-[#FFFFFF]">
                  PAUD - TK
                </p>
                <a href="/btb-belajar/TK" target="_blank" className="opacity-0 font-semibold group-hover:opacity-100 underline transition-opacity duration-300">
                  Lihat Kurikulum
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:m-[20px]">
          <div className="bg-[url('./aboutus4.jpg')] md:h-[346px] md:w-[552px] bg-cover bg-center">
            <div className="h-full bg-black bg-opacity-50 hover:bg-[#243F6D] hover:opacity-80">
              <div className="flex items-end justify-start pl-10 pb-10 hover:pb-20 h-full text-white group">
                <div>
                <p className="md:text-[35px] text-justify font-bold text-[#FFFFFF]">
                  Sekolah Dasar
                </p>
                <a href="/btb-belajar/SD" target="_blank" className="opacity-0 font-semibold group-hover:opacity-100 underline transition-opacity duration-300">
                  Lihat Kurikulum
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:m-[20px]">
          <div className="bg-[url('./aboutus5.jpg')] md:h-[346px] md:w-[552px] bg-cover bg-center">
            <div className="h-full bg-black bg-opacity-50 hover:bg-[#243F6D] hover:opacity-80">
              <div className="flex items-end justify-start pl-10 pb-10 hover:pb-20 h-full text-white group">
                <div>
                <p className="md:text-[35px] text-justify font-bold text-[#FFFFFF]">
                  Sekolah Menengah
                </p>
                <a href="/btb-belajar/SMP" target="_blank" className="opacity-0 font-semibold group-hover:opacity-100 underline transition-opacity duration-300">
                  Lihat Kurikulum
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:m-[20px]">
          <div className="bg-[url('./aboutus6.jpg')] md:h-[346px] md:w-[552px] bg-cover bg-center">
            <div className="h-full hover:bg-[#243F6D] hover:opacity-80">
              <div className="flex items-end justify-start pl-10 pb-10 hover:pb-20 h-full text-white group">
                <div>
                  <p className="md:text-[35px] text-justify font-bold text-white">
                    Sekolah Menengah Atas
                  </p>
                  <a href="/btb-belajar/SMA" target="_blank" className="opacity-0 group-hover:opacity-100 font-semibold underline transition-opacity duration-300">
                    Lihat Kurikulum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
