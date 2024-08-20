"use client";
import { useEffect, useState } from "react";
import { Button, Tabs } from "flowbite-react";
import BannerHelpCenter from "./_components/banner";
import InformasiPendaftaran from "./_components/infodaftar";
import FAQ from "./_components/faq";
import { GetConfig } from "../../../../services/config.service";
import {useLanguageStore} from '../../../../store/language.store';
import {HelpPayload} from '../../../../data';

const HelpCenterPage = () => {
  const [payload, setPayload] = useState([]);
  const [helpData, setHelpData] = useState(HelpPayload);
  const { language } = useLanguageStore();

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
          <Tabs.Item title={helpData[language].banner.title}>
            <div className="p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
                {helpData[language].mainTitle}
              </h1>
              <FAQ payload={payload} />
            </div>
          </Tabs.Item>
          <Tabs.Item title={helpData[language].banner.title2}>
            <InformasiPendaftaran />
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default HelpCenterPage;
