"use client";
import { useEffect } from "react";
import { Tabs } from "flowbite-react";
import BannerHelpCenter from "./_components/banner";
import InformasiPendaftaran from "./_components/infodaftar";
import FAQ from "./_components/faq";
import { usePageData } from '../../../hooks/usePageData';
import Loader from "../../_components/loader";

const HelpCenterPage = () => {
  const {language, getHelpPageData, isLoading} = usePageData();
  const helpData = usePageData((state) => state.result.helpPayload);
  const payload = usePageData((state) => state.result.faq);
  const contactData = usePageData((state) => state.result.contact);
  const contactUs = usePageData((state) => state.result.ContactusPayload);

  useEffect(() => {
    getHelpPageData()
  }, []);

  if(isLoading) {
    return <Loader/>;
  }
  else if(helpData && contactUs)
    return (
      <>
        <BannerHelpCenter />
        <div className="max-w-7xl mx-auto p-4">
          <Tabs aria-label="Tabs with underline" variant="underline">
            <Tabs.Item title={helpData[language].banner.title}>
              <div className="p-4 rounded-lg shadow-md">
                <h1 className="text-[20px] md:text-[25px] font-bold text-[#00305E] text-center mb-6">
                  {helpData[language].mainTitle}
                </h1>
                <FAQ payload={payload} />
              </div>
            </Tabs.Item>
            <Tabs.Item title={helpData[language].banner.title2}>
              <InformasiPendaftaran language={language} contactUsData={contactUs} helpData={helpData} payload={contactData}/>
            </Tabs.Item>
          </Tabs>
        </div>
      </>
    );
};

export default HelpCenterPage;
