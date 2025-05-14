"use client";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useBtbKnightStore } from "../../../../../../store/admin/cms/btbKnightStore";
import LoadingModal from "../../../../../components/LoadingModal";
import { isObjectEmpty } from "../../../../../utils/checker";
import Loader from "../../../../_components/loader";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import CMSSubTitle from "../_components/CMSSubtitle";
import FieldTitle from "../_components/FieldTitle";
import LanguageChanger from "../_components/LanguageChanger";
import CMSBtbKnightBannerContent from "./BannerContent";
import CMSBtbKnightClosingContent from "./ClosingContent";
import CMSBtbKnightGalleryContent from "./GalleryContent";
import CMSBtbKnightOpeningContent from "./OpeningContent";
import CMSBtbKnightPurposeContent from "./PurposeContent";
import CMSBtbKnightQuoteContent from "./QuoteContent";

const CMSBtbKnight = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(null);
  const setState = useBtbKnightStore((state) => state.setState);
  const getInitialData = useBtbKnightStore((state) => state.getInitialData);
  const data = useBtbKnightStore((state) => state.data);
  const language = useBtbKnightStore((state) => state.language);
  const submitData = useBtbKnightStore((state) => state.submitData);
  const loading = useBtbKnightStore((state) => state.loading);

  const [attachment, setAttachment] = useState({});

  const fetchData = async (callback) => {
    setIsLoadingPage(true);
    try {
      // await checkPermission("manage_content");
      setIsAuthorized(true);
      await callback();
    } catch (error) {
      console.log(error);
      if (error.status != "401") {
        try {
          await callback();
        } catch (error) {
          console.log(error);
        }
      }
    } finally {
      setIsLoadingPage(false);
    }
  };

  useEffect(() => {
    fetchData(getInitialData);
  }, []);

  useEffect(() => {
    if (!isObjectEmpty(data)) {
      setAttachment({
        bannerimage: data.bannerimage,
        openingImage: data.openingImage,
        purposeImage: data.purposeImage,
        closingImage: data.closingImage,
        gallery: data.gallery,
      });
    }
  }, [data]);

  // const onChangeAttachment = (file, prop) => {
  //   if (file.length > 0) {
  //     attachment[prop] = file[0];
  //   } else {
  //     // setState("", prop);
  //     attachment[prop] = rawData[prop];
  //   }
  //   setAttachment({ ...attachment });
  // };

  if (isLoadingPage) {
    return <Loader />;
  } else
    return (
      <NavbarSidebarLayout>
        {isAuthorized ? (
          <>
            {!isObjectEmpty(data) && (
              <div>
                <AdminHeader title="BTB Knight Content Settings Form" />
                <div className="mt-6">
                  <LanguageChanger
                    onChange={(val) => setState(val, "language")}
                    value={language}
                  />
                </div>
                <CMSSubTitle>Carousel Content</CMSSubTitle>
                <FieldTitle>Carousel Content</FieldTitle>
                <CMSBtbKnightBannerContent
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
                <CMSBtbKnightOpeningContent
                  data={data}
                  language={language}
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
                <CMSBtbKnightPurposeContent
                  data={data}
                  language={language}
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
                <CMSBtbKnightClosingContent
                  data={data}
                  language={language}
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
                <CMSBtbKnightGalleryContent
                  attachment={attachment}
                  setAttachment={setAttachment}
                />
                <CMSBtbKnightQuoteContent data={data} language={language} />
                <Button
                  id="btnSaveAndSend"
                  name="btnSaveAndSend"
                  className="w-full md:w-auto mt-6"
                  onClick={() => submitData(attachment)}
                >
                  Save
                </Button>
              </div>
            )}
          </>
        ) : (
          <div>Unauthorized</div>
        )}
        {loading && <LoadingModal label={"Submitting data, please wait..."} />}
      </NavbarSidebarLayout>
    );
};

export default CMSBtbKnight;
