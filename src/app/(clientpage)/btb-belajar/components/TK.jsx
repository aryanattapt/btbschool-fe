"use client";

const TK = () => {
  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5">
            <h1 className="text-[35px] font-bold pl-32 text-[#00305E]">PAUD - TK</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="h-[350px]">
            <img src="./paud1.jpg"
            alt="PAUD"
            className="h-[350px] w-full object-cover" />
          </div>
          <div className="content-center bg-[#EF802B]">
            <div className="p-5 text-left text-[20px] text-[#000000] text-pretty">
            Kami berkomitmen untuk menyediakan lingkungan yang aman, menyenangkan, 
            dan penuh kasih sayang di mana anak-anak dapat berkembang secara holistik. 
            Dengan pendekatan pembelajaran yang interaktif dan kreatif, 
            kami membantu anak-anak mengembangkan keterampilan sosial, emosional, dan akademik sejak dini.
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 pl-32">
          <div className="border-b-8 border-[#EF802B] w-[180px]">
            <h1 className="text-[30px] font-semibold text-[#00305E]">KURIKULUM</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 px-32 mt-5 gap-12">
          <div className="text-[#000000]">
            <h1 className="text-balance text-[30px]">Fokus:</h1>
            <div className="ml-5">
              <ul className="list-disc">
                <li>Bahasa Inggris</li>
                <li>Matematika</li>
                <li>Pelajaran Terintegrasi</li>
              </ul>
            </div>
            <div className="mt-2 text-justify text-pretty">Pada beberapa subjek pelajaran yang saling berkaitan, 
              akan ada penekanan khusus untuk dapat mengintegrasikannya, terutama pada tahun awal pendidikan. 
              Pengajar bahasa asing khusus juga bekerja sama dengan pengajar di kelas untuk mengintegrasikan 
              program pembelajaran dengan efektif.
            </div>
          </div>
          <div className="text-[#000000]">
            <h1 className="text-balance text-[30px]">Subyek Spesial:</h1>
            <div className="ml-5">
              <ul className="list-disc">
                <li>Kesenian</li>
                <li>Perpustakaan</li>
                <li>Bahasa Mandarin</li>
                <li>Musik</li>
                <li>Pendidikan Jasmani</li>
                <li>Komputer</li>
              </ul>
            </div>
            <div className="mt-2 text-justify text-pretty">Para pengajar menggabungkan nilai - nilai 
              dari BTB terhadap perencanaan untuk mencapai cara mengajar yang kritis.
            </div>
          </div>
        </div>
        <div className="mt-20 pl-32">
          <div className="border-b-8 border-[#EF802B] w-[180px]">
            <h1 className="text-[30px] font-semibold text-[#00305E]">AKTIVITAS</h1>
          </div>
        </div>
        <div className="h-[305px] pl-32">
            <div className="flex flex-wrap">
              <div className="py-10 pr-10 text-justify text-pretty text-[#000000] w-[545px]">
              Di Bina Tunas Bangsa, kami percaya bahwa kesehatan dan kesejahteraan anak adalah fondasi penting untuk belajar yang optimal. 
              Oleh karena itu, kami menyediakan berbagai kegiatan ekstrakurikuler yang mendukung gaya hidup sehat dan aktif bagi siswa. 
              Program-program ini dirancang untuk mengembangkan kebugaran fisik, keterampilan sosial, dan kebiasaan hidup sehat sejak dini.
              </div>
              <div className="h-[305px] w-[518px]">
                <img src="/paud 3.jpg"
                alt="PAUD"
                className="h-[255px] w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="h-[305px] pl-32 mt-5">
            <div className="flex flex-wrap">
              <div className="h-[325px] w-[518px]">
                <img src="/paud 5.jpg"
                alt="PAUD"
                className="h-[305px] w-full object-cover" />
              </div>
              <div className="pb-10 pl-10">
                <h1 className="text-[20px] font-semibold text-[#000000]">PROGRAM KAMI</h1>
                <div className="pl-3 text-[#000000] w-[545px]">
                  <ul className="list-disc">
                    <li>Klub Mandarin</li>
                    <li>Klub Menari</li>
                    <li>Klub Kesenian</li>
                    <li>Klub Bercerita</li>
                    <li>Klub Menari Balet</li>
                  </ul>
                  <div className="pt-1">
                  Program dan kegiatan setelah sekolah, 
                  yang dapat berubah setiap tahun pelajaran, 
                  berfokus untuk mendorong pemikiran dan mengembangkan kemampuan memecahkan masalah oleh anak - anak.
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </>
);
};

export default TK;
