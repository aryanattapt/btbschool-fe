"use client";
import { useEffect, useState } from "react";
import { Button, Tabs } from "flowbite-react";
import BannerHelpCenter from "./_components/banner";
import InformasiPendaftaran from "./_components/infodaftar";
import FAQ from "./_components/faq";
import { GetConfig } from "../../../../services/config.service";

const HelpCenterPage = () => {
  const [payload, setPayload] = useState([]);

  useEffect(() => {
    GetConfig("faq", {})
      .then((res) => {
        console.log(res);
        setPayload(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <BannerHelpCenter />

      <div className="max-w-7xl mx-auto p-4">
        <Tabs aria-label="Tabs with underline" variant="underline">
          <Tabs.Item title="F.A.Q">
            <div className="p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
                Soal yang sering ditanyakan
              </h1>
              <FAQ payload={payload} />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Informasi Pendaftaran">
            <InformasiPendaftaran />
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default HelpCenterPage;
