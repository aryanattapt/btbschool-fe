import CarouselComponents from "./_components/carousel";
import FooterComponent from "./_components/footer";
import NavBar from "./_components/navbar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:h-screen font-sans text-[#00305E]">
        <NavBar />
        <CarouselComponents />
        <div className="grid grid-cols-2 gap-2 md:my-[50px] md:mx-[76px]">
          <div className="">
            <p className="font-bold md:text-[30px]">Temukan Kelas:</p>
            <p className="font-extrabold md:text-[70px] md:font-[400] md:leading-[64px]">
              Kualitas Terbaik Setiap Tingkat
            </p>
          </div>
          <div className=" place-content-center">
            <p className="font-sans md:leading-[25px] md:text-[20px] md:leading-[25px] text-justify ">
              Di BTB, kami memastikan siswa mendapatkan kualitas terbaik yang
              dibantu dengan menggunakan metode pembelajaran International
              Baccalaureate
            </p>
          </div>
        </div>
        {/* section */}
        <div className="flex flex-nowrap md:my-[50px] md:mx-[76px] gap-4">
          <div>
            <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel1.jpeg"
                alt="edulevel1"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  PAUD - TK
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 2 - 5</p>
              </div>
            </div>
          </div>
          <div>
            <div className="object-cover hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel2.jpeg"
                alt="edulevel2"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  Sekolah Dasar
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 2 - 5</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel3.jpeg"
                alt="edulevel1"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  Sekolah Menengah
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 11 - 15</p>
              </div>
            </div>
          </div>
          <div>
            <div className="hover:bg-[#00305E] hover:opacity-75 rounded-[70px]">
              <img
                src="./edulevel4.jpeg"
                alt="edulevel1"
                className="object-cover rounded-[70px] w-[272px] h-[270px] "
              />
            </div>
            <div className="md:my-[10px]">
              <div className="flex gap-2 justify-center">
                <p className="md:text-[30px] leading-[64px] font-sans text-justify font-semibold	">
                  SMA
                </p>
              </div>
              <div className="flex gap-2 justify-center ">
                <p>Umur 16 - 17</p>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
