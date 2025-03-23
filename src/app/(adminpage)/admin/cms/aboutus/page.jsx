"use client";
import { Button, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useCmsAboutUsStore } from "../../../../../../store/admin/cms/aboutUsStore";
import { isObjectEmpty } from "../../../../../utils/checker";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import ImageAttachment from "../_components/ImageAttachment";
import LanguageChanger from "../_components/LanguageChanger";
import { FaMinusCircle } from "react-icons/fa";
import Loader from "../../../../_components/loader";
import { checkPermission } from "../../../../../../services/auth.service";
import Swal from "sweetalert2";
import LoadingModal from "../../../../../components/LoadingModal";
import CMSSubTitle from "../_components/CMSSubtitle";

const CMSAboutUs = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(null);

  const rawData = useCmsAboutUsStore((state) => state.rawData);
  const setState = useCmsAboutUsStore((state) => state.setState);
  const language = useCmsAboutUsStore((state) => state.language);
  const getInitialData = useCmsAboutUsStore((state) => state.getInitialData);
  const setDescription = useCmsAboutUsStore((state) => state.setDescription);
  const setVisiMisi = useCmsAboutUsStore((state) => state.setVisiMisi);
  const deleteVisiMisi = useCmsAboutUsStore((state) => state.deleteVisiMisi);
  const addVisiMisi = useCmsAboutUsStore((state) => state.addVisiMisi);
  const setSmallParagraph = useCmsAboutUsStore(
    (state) => state.setSmallParagraph
  );
  const setPagingHeader = useCmsAboutUsStore((state) => state.setPagingHeader);
  const setPagingNavigation = useCmsAboutUsStore(
    (state) => state.setPagingNavigation
  );
  const setMotto = useCmsAboutUsStore((state) => state.setMotto);
  const data = useCmsAboutUsStore((state) => state.data);
  const submitData = useCmsAboutUsStore((state) => state.submitData);
  const loading = useCmsAboutUsStore((state) => state.loading);
  // const onChangeAttachment = useCmsAboutUsStore(
  // 	(state) => state.onChangeAttachment
  // );

  const [attachment, setAttachment] = useState({});

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

  const onChangeAttachment = (file, prop) => {
    if (file.length > 0) {
      attachment[prop] = file[0];
    } else {
      // setState("", prop);
      attachment[prop] = rawData[prop];
    }
    setAttachment({ ...attachment });
  };

  useEffect(() => {
    if (!isObjectEmpty(rawData)) {
      setAttachment({
        image1: rawData["image1"],
        image2: rawData["image2"],
        image3: rawData["image3"],
        image4: rawData["image4"],
        image5: rawData["image5"],
        image6: rawData["image6"],
      });
    }
  }, [rawData]);

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

  if (isLoadingPage) {
    return <Loader />;
  } else
    return (
      <NavbarSidebarLayout>
        {isAuthorized ? (
          <>
            {!isObjectEmpty(data) && (
              <div>
                <AdminHeader title="About Us Content Settings Form" />
                <FieldTitle>Gambar Banner</FieldTitle>
                <ImageAttachment
                  resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px"
                  id="image1"
                  onChange={(e) =>
                    onChangeAttachment(e.target.files, "bannerimage")
                  }
                />

                {/* Pengenanlan */}
                <FieldTitle>Gambar Pengenalan</FieldTitle>
                <ImageAttachment
                  resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px"
                  id="image1"
                  onChange={(e) => onChangeAttachment(e.target.files, "image1")}
                />
                <FieldTitle>Gambar Visi Misi</FieldTitle>
                <ImageAttachment
                  resolution="dengan menggunakan aspect ratio wide Misal 1920x1080px"
                  id="image2"
                  onChange={(e) => onChangeAttachment(e.target.files, "image2")}
                />
                <div className="mt-6">
                  <LanguageChanger
                    onChange={(val) => setState(val, "language")}
                    value={language}
                  />
                  {/* Paging Section */}
                  <CMSSubTitle>Paging Content</CMSSubTitle>
                  <FieldTitle>Judul Navigasi Utama</FieldTitle>
                  <TextInput
                    value={data[language]["pagingHeader"]["title"]}
                    onChange={(e) => {
                      setPagingHeader(e.target.value);
                    }}
                  />
                  <FieldTitle>List Judul Navigasi</FieldTitle>
                  <div className="flex flex-col gap-y-2">
                    {data[language]["pagingHeader"]["url"].map((res, idx) => (
                      <TextInput
                        key={idx}
                        value={res?.title}
                        onChange={(e) =>
                          setPagingNavigation(e.target.value, idx)
                        }
                      />
                    ))}
                  </div>
                  <FieldTitle>Pengenalan</FieldTitle>
                  <Textarea
                    rows={4}
                    value={data[language]["desc"]}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />

                  <FieldTitle>Deskripsi Visi</FieldTitle>
                  <TextInput
                    value={data[language]["visimisi"]["descvisi"]}
                    onChange={(e) => {
                      setVisiMisi(e.target.value, "descvisi");
                    }}
                  />
                  <FieldTitle>Deskripsi Misi</FieldTitle>
                  <TextInput
                    value={data[language]["visimisi"]["descmisi"]}
                    onChange={(e) => {
                      setVisiMisi(e.target.value, "descmisi");
                    }}
                  />
                  <FieldTitle>List Misi</FieldTitle>
                  <div className="flex flex-col gap-2">
                    {data[language]["visimisi"]["misilist"].map(
                      (res, index) => (
                        <div className="flex w-full items-center">
                          <div
                            onClick={() => deleteVisiMisi(index)}
                            className="mr-4 cursor-pointer text-xl text-red-600 hover:text-red-700"
                          >
                            <FaMinusCircle />
                          </div>
                          <div className="w-full">
                            <TextInput
                              value={res}
                              onChange={(e) => {
                                setVisiMisi(e.target.value, "misilist", index);
                              }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <Button
                    className="mt-2 ml-9"
                    onClick={addVisiMisi}
                    size={"sm"}
                  >
                    Add
                  </Button>
                  <FieldTitle>Motto</FieldTitle>
                  <TextInput
                    value={data[language]?.["motto"]}
                    onChange={(e) => {
                      setMotto(e.target.value);
                    }}
                  />
                  <FieldTitle>Catatan Kaki</FieldTitle>
                  <Textarea
                    rows={4}
                    value={data[language]["smallparagraph"]}
                    onChange={(e) => {
                      setSmallParagraph(e.target.value, "smallparagraph");
                    }}
                  />
                  {/* <FieldTitle>List Jenjang Pendidikan</FieldTitle>
									<Textarea
										rows={4}
										value={data[language]["smallparagraph"]}
										onChange={(e) => {
											setVisiMisi(e.target.value, "smallparagraph");
										}}
									/> */}
                  <Button
                    id="btnSaveAndSend"
                    name="btnSaveAndSend"
                    className="w-full md:w-auto mt-3"
                    onClick={onSubmitData}
                  >
                    Save
                  </Button>
                </div>
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

export default CMSAboutUs;
