"use client";
import { useEffect, useState } from "react";
import { checkPermission } from "../../../../../../services/auth.service";
import LoadingModal from "../../../../../components/LoadingModal";
import { isObjectEmpty } from "../../../../../utils/checker";
import Loader from "../../../../_components/loader";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import LanguageChanger from "../_components/LanguageChanger";
import { useNavigationStore } from "../../../../../../store/admin/cms/navigationStore";
import { NavbarContent } from "./NavbarContent";
import { Button } from "flowbite-react";

const CMSNavbar = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(null);
  const getInitialData = useNavigationStore((state) => state.getInitialData);
  const data = useNavigationStore((state) => state.data);
  const setState = useNavigationStore((state) => state.setState);
  const language = useNavigationStore((state) => state.language);
  const loading = useNavigationStore((state) => state.loading);
  const submitData = useNavigationStore((state) => state.submitData);

  useEffect(() => {
    fetchData(getInitialData);
  }, []);

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

  if (isLoadingPage) {
    return <Loader />;
  } else
    return (
      <NavbarSidebarLayout>
        {isAuthorized ? (
          <>
            {!isObjectEmpty(data) && (
              <div>
                <AdminHeader title="Navigation Content Settings Form" />
                <div className="mt-6">
                  <LanguageChanger
                    onChange={(val) => setState(val, "language")}
                    value={language}
                  />
                  <NavbarContent
                    navItems={data["navbar"][language]?.["navbarlink"]}
                  />
                </div>
                <Button
                  id="btnSaveAndSend"
                  name="btnSaveAndSend"
                  className="w-full md:w-auto mt-3"
                  onClick={submitData}
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

export default CMSNavbar;
