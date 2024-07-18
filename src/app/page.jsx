import CarouselComponents from "./_components/carousel";
import FooterComponent from "./_components/footer";
import NavBar from "./_components/navbar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:h-screen lg:gap-y-3 font-sans	font-['Poppins']">
        <NavBar />
        <CarouselComponents />
        <div className="grid grid-cols-2 gap-2 md:my-[91px]">
          <div className="md:ml-[75px]">
            <p className="font-bold md:text-[30px] text-[#00305E]">
              Temukan Kelas:
            </p>
            <p className="font-extrabold md:text-[70px] text-[#00305E] md:font-[400] md:leading-[64px]">
              Kualitas Terbaik Setiap Tingkat
            </p>
          </div>
          <div className="md:mr-[20px] items-center">
            <p className="font-sans font-['Poppins'] align-justify md:leading-[25px]">
              Di BTB, kami memastikan siswa mendapatkan kualitas terbaik yang
              dibantu dengan menggunakan metode pembelajaran International
              Baccalaureate
            </p>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
