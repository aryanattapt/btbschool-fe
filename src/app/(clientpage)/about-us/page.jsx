"use client";
import Banner from "./components/banner";
import Pagging from "./components/pagging";
import { useLanguageStore } from "../../../../store/language.store";
import { AboutUsPayload } from "../../../../data";
import { useState } from "react";

const AboutUsPage = () => {
  const [aboutUsData, setAboutUsData] = useState(AboutUsPayload);
  const { language } = useLanguageStore();
  return (
    <>
      <Banner />
      <Pagging />
      <div className="relative" id="pengenalan">
        <div className="mt-10 mb-5 pl-10 md:pl-32 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[30px] font-semibold">
            {aboutUsData[language].title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src={`${AboutUsPayload.image1}`}
              alt="PAUD"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="content-center bg-[#EF802B]">
            <div className="p-5 text-left text-[14px] md:text-[20px] text-[#000000] text-pretty">
              {aboutUsData[language].desc}
            </div>
          </div>
        </div>
      </div>
      <div className="text-[15px] md:text-[30px] font-medium mb-8 mt-10 text-center text-[#243F6D] px-2 md:px-0 ">
        <ul className="flex flex-nowrap place-content-center">
          {aboutUsData[language].paging.map((val, idx) => {
            return (
              <li className="w-full" key={idx}>
                <a
                  href={`${val.url}`}
                  className="inline-block py-8 border-b-8 border-[#EF802B] active rounded-t-lg hover:border-[#EF802B]"
                >
                  {val.content}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id="visi-misi"
        className="md:mx-32 mx-10 grid md:grid-cols-1 grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 text-black leading-loose"
      >
        <div>
          <h2 className="md:text-[25px] text-[25px] mb-[10px] font-semibold">
            {/* Visi */}
            {aboutUsData[language].visimisi.titlevisi}
          </h2>
          <p className="leading-[35px]">
            {/* Untuk memberikan pendidikan holistik dan membina siswa untuk menjadi
            pemimpin yang dinamis dalam masyarakat global. */}
            {aboutUsData[language].visimisi.descvisi}
          </p>
          <h2 className="text-[25px] mb-[10px] font-semibold mt-3">
            {/* Misi */}
            {aboutUsData[language].visimisi.titlemisi}
          </h2>
          <p className="leading-[35px]">
            {/* Menyelenggarakan pendidikan internasional berkualitas yang akan
            mengembangkan kebutuhan individu siswa secara akademis, emosional,
            fisik dan sosial dengan:  */}
            {aboutUsData[language].visimisi.descmisi}
          </p>
          <ul className="list-disc">
            {aboutUsData[language].visimisi.misilist.map((val, idx) => {
              return <li key={idx}>{val}</li>;
            })}
            {/* <li>Menanamkan nilai moral dan budi pekerti
            yang baik kepada siswa agar bertanggung jawab atas tindakannya.</li>
            <li>Mengembangkan Profil Pelajar BTB dengan menerapkan praktik
            pendidikan terbaik dan mempromosikan literasi digital.</li>
            <li>Menyediakan
            lingkungan belajar yang aman dan nyaman di mana rasa hormat,
            kejujuran, dan penghargaan terhadap perbedaan individu dipupuk.</li> */}
          </ul>
        </div>
        <div className="pl-[0px] md:pl-[50px] py-5 md:py-5 xl:py-0">
          <img
            // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/bannercontact.jpeg"
            src={`${AboutUsPayload.image2}`}
            alt="aboutus2"
            className="md:h-[500px] md:w-[546px] px-4 object-cover"
          />
        </div>
      </div>
      <div id="jenjang-pendidikan" className="my-8 md:my-10 bg-[#243F6D]">
        <div className="flex text-center items-center md:py-10 py-5 md:mx-40 mx-10 text-white leading-loose text-[15px] font-semibold">
          {/* Pengajar BTB mendorong para murid untuk dapat menemukan tempatnya di dunia yang memiliki tantangan 
          dan peluang tidak terbatas ini. Mereka membimbing para murid untuk berpikir, bertindak, dan menerima 
          rekannya dan diri mereka sendiri. */}
          {aboutUsData[language].smallparagraph}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-5">
          {aboutUsData[language].gradelists.map((val, idx) => (
            <div className="m-5" key={idx}>
              <a href={`${val.url}`} target="_blank" rel="noopener noreferrer">
                <div
                  className="xl:h-[346px] xl:w-[552px] md:h-[230px] md:w-[330px] h-[230px] w-[330px] lg:h-[230px] lg:w-[430px] bg-cover bg-center rounded-[50px]"
                  style={{ backgroundImage: `url(${val.image})` }}
                >
                  <div className="h-full bg-black bg-opacity-50 hover:bg-[#243F6D] hover:opacity-80 rounded-[50px]">
                    <div className="flex items-end justify-start pl-10 pb-10 hover:pb-20 h-full text-white group">
                      <div>
                        <p className="md:text-[35px] text-justify font-bold text-[#FFFFFF]">
                          {val.title}
                        </p>
                        <p className="underline">{val.buttoncontent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
