"use client";
import React, { useEffect, useState } from "react";
import Banner from "./_components/Banner";
import Pagging from "./_components/Pagging";
import BulletinThumnail from "./_components/Thumbnail";
import { usePageData } from "../../../hooks/usePageData";
import Loader from "../../_components/loader";
import { isObjectEmpty } from "../../../utils/checker";

const BulletinSpotlightPage = () => {
  const { language, getBulletinSpotlightPageData, isLoading } = usePageData();
  const payload = usePageData((state) => state.result.bulletinspotlight);
  const bulletinSpotlightPageData = usePageData(
    (state) => state.result.bulletinSpotlightPageData
  );
  const [display, setDisplay] = useState({});

  useEffect(() => {
    getBulletinSpotlightPageData();
  }, []);

  const groupAndSortData = (data) => {
    const flatData = data.flat(); // Mengubah array dalam array menjadi satu array datar

    return flatData.reduce((acc, item) => {
      const { school, type } = item;

      // Jika sekolah belum ada dalam objek, buat struktur awal
      if (!acc[school]) {
        acc[school] = { Bulletin: [], "Newsletter": [] };
      }

      // Masukkan data ke kategori tipe yang sesuai
      if (acc[school][type]) {
        acc[school][type].push(item);

        // Urutkan dari yang terlama ke terbaru dan ambil hanya 4 data terakhir
        acc[school][type] = acc[school][type]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(-4);
      }

      return acc;
    }, {});
  };

  useEffect(() => {
    if (payload) {
      setDisplay(groupAndSortData(payload));
    }
  }, [payload]);

  if (isLoading) {
    return <Loader />;
  } else if (!isObjectEmpty(display))
    return (
      <>
        <Banner bulletinSpotlightData={bulletinSpotlightPageData} />
        <Pagging
          language={language}
          bulletinSpotlightData={bulletinSpotlightPageData}
        />
        <div className="px-10 py-12">
          {Object.keys(display).map((school, index) => (
            <div>
              {/* Divider */}
              {index > 0 && (
                <div className="h-[2px] mt-6 mb-10 w-full bg-gray-200 " />
              )}
              <h1 className="md:text-[35px] text-[25px] font-semibold text-[#00305E]">
                {school}
              </h1>
              
              {Object.keys(display[school]).filter((val) => {
                return (school == 'BTB SCHOOL PLUIT PUTRI' && val == 'Bulletin') || (school == 'BTB SCHOOL PLUIT TIMUR');
              }).map((type) => (
                <div>
                  <h1 className="md:text-[28px] text-[20px] text-[#275d90]">
                    {type}
                  </h1>
                  <div className="py-6 sm:grid sm:grid-cols-2 sm:gap-y-12 sm:gap-x-6 md:gap-12 lg:grid-cols-4 lg:gap-8">
                    {display[school][type].map((res, idx) => (
                      <div className={`${idx === 1 && "mt-12 sm:mt-0"}`}>
                        <BulletinThumnail data={res} key={idx} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
};

export default BulletinSpotlightPage;
