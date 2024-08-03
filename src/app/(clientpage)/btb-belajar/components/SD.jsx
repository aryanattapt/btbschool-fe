"use client";
import {useLanguageStore} from '../../../../../store/language.store';
import {BTBBelajarPayload} from '../../../../../data';
import { useState } from 'react';

const SD = () => {
  const [btbBelajarData, setBtbBelajarData] = useState(BTBBelajarPayload);
  const { language } = useLanguageStore();

  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
            <h1 className="text-[35px] font-bold pl-32 text-[#00305E]">{btbBelajarData[language]["sd"].title}</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="h-[350px]">
            <img 
            // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/sd 1.jpg"
            src = {`${btbBelajarData.image1}`}
            alt="PAUD"
            className="h-[350px] w-full object-cover" />
          </div>
          <div className="content-center bg-[#EF802B]">
            <h1 className="pl-5 text-[20px] w-[545px] font-semibold text-[#000000]">
              {/* Fundamental yang Menyenangkan */}
              {btbBelajarData[language]["sd"].text1}
            </h1>
            <div className="p-5 text-left text-[20px] text-[#000000] text-pretty">
              {/* Anak anda akan melanjutkan perjalanan edukatifnya melalui fase pembelajaran yang memotivasi 
              mereka untuk menemukan dan menyadari hal terbaik yang ada pada dirinya dan orang lain. */}
              {btbBelajarData[language]["sd"].text2}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 pl-32">
          <div className="border-b-8 border-[#EF802B] w-[180px]">
            <h1 className="text-[30px] font-semibold text-[#00305E]">
              {/* KURIKULUM */}
              {btbBelajarData[language]["sd"].text3}
            </h1>
          </div>
          <h1 className="text-balance text-[30px] text-[#000000] mt-5">Fokus:</h1>
        </div>
          <div className="text-[#000000]">
            <div className="grid grid-cols-2 px-32 gap-12">
              <div className="ml-5">
                <ul className="list-disc">
                  {btbBelajarData[language]["sd"].kurikulumlist1.map((val) => {
                    return <li><strong>{val.title}</strong>
                      {val.content}
                    </li>
                  })}

                  {/* <li><strong>Bahasa Inggris</strong>- 
                    Mengembangkan kemampuan berbahasa secara kreatif meliputi 
                    mempelajari berbagai literasi dan membina kebiasaan belajar.
                  </li>
                  <li><strong>Bahasa Mandarin</strong>- 
                    Memberikan kesempatan para murid untuk menguasai bahasa asing.
                  </li>
                  <li><strong>Matematika</strong>- Berperan penting dalam teknologi baru 
                    dan mengembangkan kemampuan baca tulis para murid. 
                    Kemampuan ini membantu mereka untuk lebih mengerti dunia.
                  </li>
                  <li>
                    <strong>Pelajaran Terintegrasi</strong> - Mengembangkan berbagai kemampuan termasuk berpikir kritis, 
                    kepercayaan diri, kemandirian, dan kerjasama untuk mendorong mereka untuk tetap mau belajar seumur hidup.
                  </li> */}
                </ul>
              </div>
              <div className="ml-5">
                <ul className="list-disc">
                  {btbBelajarData[language]["sd"].kurikulumlist2.map((val) => {
                    return <li><strong>{val.title}</strong>
                      {val.content}
                    </li>
                  })}
                  {/* <li>
                    <strong>Sains</strong> - Keberagaman, kesinambungan, dan konservasi adalah elemen penting pada mata pelajaran ini.
                  </li>
                  <li>
                    <strong>TIK (Teknologi Informasi dan Komputer)</strong> - Mengenalkan para murid pada bidang teknologi terbaru.
                  </li>
                  <li>
                    <strong>Pendidikan Jasmani</strong> - Memberikan para murid trik dan strategi untuk 
                    menghadapi stress, konflik, dan berbagai masalah kesehatan dan gaya hidup.
                  </li>
                  <li>
                    <strong>Musik, Kemampuan berdialog Bahasa Inggris, Agama, dan Kewarganegaraan</strong> juga merupakan mata pelajaran yang menjadi bagian dalam kurikulum.
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        <div className="activity">
          <div className="mt-20 flex justify-center items-center">
            <div className="border-b-8 border-[#EF802B] w-[160px]"> 
              <h1 className="text-[30px] font-semibold text-[#00305E]">
                {/* AKTIVITAS */}
                {btbBelajarData[language]["sd"].text5}
              </h1>
            </div>
          </div>
          <div className="h-[305px] pl-32 mt-5">
              <div className="flex flex-wrap">
                <div className="py-10 pr-10 text-justify text-pretty text-[#000000] w-[545px] leading-loose">
                {/* Berbagai aktivitas kokurikuler tersedia untuk diikuti oleh anak anda, 
                kegiatan ini bertujuan untuk mengembangkan minat dan kemampuan mereka di luar ruang kelas.
                Program dan kegiatan setelah sekolah, yang dapat berubah setiap tahun pelajaran, 
                berfokus untuk mendorong pemikiran dan mengembangkan kemampuan memecahkan masalah oleh anak - anak. */}
                {btbBelajarData[language]["sd"].text6}
                </div>
                <div className="h-[305px] w-[518px]">
                  <img 
                  // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/sd 2.jpg"
                  src = {`${btbBelajarData.image2}`}
                  alt="SD"
                  className="h-[255px] w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="h-[305px] pl-32 mt-5">
              <div className="flex flex-wrap">
                <div className="h-[325px] w-[518px]">
                  <img 
                  // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/sd 4.jpg"
                  src = {`${btbBelajarData.image3}`}
                  alt="PAUD"
                  className="h-[305px] w-full object-cover" />
                </div>
                <div className="pb-10 pl-10">
                  <h1 className="text-[20px] font-semibold text-[#000000]">{btbBelajarData[language]["sd"].text7}</h1>
                  <div className="grid grid-cols-2 gap-12">
                    <div className="pl-3 text-[#000000]">
                      <ul className="list-disc">
                      {btbBelajarData[language]["sd"].programlist1.map((val) => {
                        return <li>{val}</li>
                      })}
                        {/* <li>Bola Basket</li>
                        <li>Futsal</li>
                        <li>Sepak Bola</li>
                        <li>Klub HSK (Mandarin)</li>
                        <li>Kelas Vokal</li>
                        <li>Pentas Seni</li>
                        <li>Penulisan Kreatif</li>
                        <li>Seni Multimedia</li>
                        <li>Literasi Membaca</li>
                        <li>Manga</li>
                        <li>Engineering For Kids</li>
                        <li>Wushu</li> */}
                      </ul>
                    </div>
                    <div className="pl-3 text-[#000000]">
                      <ul className="list-disc">
                        {/* <li>Pengkodean</li>
                        <li>Taekwondo</li>
                        <li>STEM</li>
                        <li>Math Monkey</li>
                        <li>Eksperimen Sains</li>
                        <li>Kewirausahaan Anak</li>
                        <li>Robotika</li>
                        <li>Content Creator</li>
                        <li>Board Games</li>
                        <li>Art & Craft</li>
                        <li>Make X</li>
                        <li>Video Editing</li> */}
                         {btbBelajarData[language]["sd"].programlist2.map((val) => {
                        return <li>{val}</li>
                      })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="diLuarKelas mb-10">
          <div className="mt-20 flex justify-end items-center pr-32">
            <div className="border-b-8 border-[#EF802B] w-[250x]"> 
              <h1 className="text-[30px] font-semibold text-[#00305E]">{btbBelajarData[language]["sd"].text8}</h1>
            </div>
          </div>
          <div className="h-[305px] pl-32 mt-5 pb-10">
              <div className="flex flex-wrap">
                <div className="h-[305px] w-[518px]">
                  <img 
                  // src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/sd 3.jpg"
                  src = {`${btbBelajarData.image4}`}
                  alt="PAUD"
                  className="h-[305px] w-full object-cover" />
                </div>
                <div className="pb-10 pl-10">
                  <h1 className="text-[20px] w-[545px] font-semibold text-[#000000]">
                  {/* Menyesuaikan usia dan tahapan perkembangan anak dengan pengalaman yang 
                  sesuai untuk menantang para murid untuk berkembang. */}
                  {btbBelajarData[language]["sd"].text9}
                  </h1>
                  <div className="text-[#000000] w-[545px] leading-loose">
                  {/* Mengembangkan karakter dan kemampuan dari murid. 
                  Tantangan, inisiatif, kemandirian, kepemimpinan, kerjasama, tanggung jawab, pengambilan resiko, 
                  hidup berdampingan, dan peduli lingkungan semua didukung dalam karyawisata dari tingkat 1 hingga tingkat 5.
                  Kegiatan ini mengajak para murid untuk bertualang dari area sekolahan menuju area luar sekolah yang 
                  sudah dipilih secara khusus untuk menciptakan pengalaman edukatif yang berkesan bersama dengan teman 
                  sekelas. */}
                  {btbBelajarData[language]["sd"].text10}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center items-center">
              <button type="button" className="w-[250px] focus:outline-none text-white bg-[#00305E] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                <a href="/contact-us">Contact Us</a> 
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default SD;
