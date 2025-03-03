"use client";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { checkPermission } from "../../../../../../services/auth.service";
import { useCmsPendaftaranStore } from "../../../../../../store/admin/cms/btbPendaftaranStore";
import LoadingModal from "../../../../../components/LoadingModal";
import { isObjectEmpty } from "../../../../../utils/checker";
import Loader from "../../../../_components/loader";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import LanguageChanger from "../_components/LanguageChanger";
import { Beasiswa } from "./Beasiswa";
import { Enrollment } from "./Enrollment";
import { Navigation } from "./Navigation";
import { TurSekolah } from "./TurSekolah";

const CMSBtbPendaftaran = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(null);

  const data = useCmsPendaftaranStore((state) => state.data);
  const language = useCmsPendaftaranStore((state) => state.language);
  const getInitialData = useCmsPendaftaranStore(
    (state) => state.getInitialData
  );
  const setState = useCmsPendaftaranStore((state) => state.setState);
  const submitData = useCmsPendaftaranStore((state) => state.submitData);
  const loading = useCmsPendaftaranStore((state) => state.loading);

  const [attachment, setAttachment] = useState({});

  const onChangeAttachment = (file, prop) => {
    if (file.length > 0) {
      attachment[prop] = file[0];
    } else {
      // setState("", prop);
      attachment[prop] = rawData[prop];
    }
    setAttachment({ ...attachment });
  };

  const onSubmitData = () => {
    Swal.fire(
      "Are you sure?",
      "Once submitted, you can't undo it",
      "warning"
    ).then((res) => {
      if (res.isConfirmed) {
        setState(true, "loading");
        const container = {};
        Object.keys(attachment).forEach((key) => {
          if (typeof attachment[key] === "object")
            container[key] = attachment[key];
        });
        submitData(container);
      }
    });
  };

  useEffect(() => {
    fetchData(getInitialData);
  }, []);

  const fetchData = async (callback) => {
    setIsLoadingPage(true);
    try {
      await checkPermission("manage_content");
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

  if (isLoadingPage) {
    return <Loader />;
  } else
    return (
      <NavbarSidebarLayout>
        {isAuthorized ? (
          <>
            {!isObjectEmpty(data) && (
              <div>
                <AdminHeader title="Pendaftaran BTB Content Settings Form" />

                <FieldTitle>Gambar Banner</FieldTitle>
                <ImageAttachment
                  resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px"
                  onChange={(e) =>
                    onChangeAttachment(e.target.files, "bannerimage")
                  }
                />

                <FieldTitle>Gambar Enrollment</FieldTitle>
                <ImageAttachment
                  resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px"
                  onChange={(e) =>
                    onChangeAttachment(e.target.files, "enrollmentimage")
                  }
                />

                <LanguageChanger
                  onChange={(val) => setState(val, "language")}
                  value={language}
                />
                <Navigation />
                <Enrollment />
                <Beasiswa />
                <TurSekolah />
                <Button
                  id="btnSaveAndSend"
                  name="btnSaveAndSend"
                  className="w-full md:w-auto mt-3"
                  onClick={onSubmitData}
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

export default CMSBtbPendaftaran;
