"use client";
import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { checkPermission } from "../../../../../../services/auth.service";
import { useCmsBtbBelajarStore } from "../../../../../../store/admin/cms/btbBelajarStore";
import LoadingModal from "../../../../../components/LoadingModal";
import { isObjectEmpty } from "../../../../../utils/checker";
import Loader from "../../../../_components/loader";
import AdminHeader from "../../_components/header";
import NavbarSidebarLayout from "../../_layouts/navigation";
import FieldTitle from "../_components/FieldTitle";
import LanguageChanger from "../_components/LanguageChanger";
import CmsSD from "./CmsSD";
import CmsSMA from "./CmsSMA";
import CmsSMP from "./CmsSMP";
import CmsTK from "./CmsTK";

const CMSBtbBelajar = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [isDeclaredAtt, setIsDeclaredAtt] = useState(false);
  const {
    data,
    language,
    setState,
    setContentState,
    setTkCurriculumContent,
    getInitialData,
    deleteListContent,
    deleteTkProgramList,
    addTkCurriculumContent,
    deleteTkCurriculum,
    setProgramContent,
    addProgramContent,
    setSdContentList,
    addSdContentList,
    setSmpContentList,
    addSmpContentList,
    deleteSmpCurriculumList,
    deleteSmpProgramList,
    setSmaContentList,
    addSmaContentList,
    deleteSmaCurriculumList,
    deleteSmaProgramList,
    submitData,
    loading,
    setPagingNavigation,
  } = useCmsBtbBelajarStore((state) => ({
    data: state.data,
    language: state.language,
    setState: state.setState,
    setContentState: state.setContentState,
    setTkCurriculumContent: state.setTkCurriculumContent,
    getInitialData: state.getInitialData,
    deleteListContent: state.deleteListContent,
    deleteTkProgramList: state.deleteTkProgramList,
    addTkCurriculumContent: state.addTkCurriculumContent,
    deleteTkCurriculum: state.deleteTkCurriculum,
    setProgramContent: state.setProgramContent,
    addProgramContent: state.addProgramContent,
    setSdContentList: state.setSdContentList,
    addSdContentList: state.addSdContentList,
    setSmpContentList: state.setSmpContentList,
    addSmpContentList: state.addSmpContentList,
    deleteSmpCurriculumList: state.deleteSmpCurriculumList,
    deleteSmpProgramList: state.deleteSmpProgramList,
    setSmaContentList: state.setSmaContentList,
    addSmaContentList: state.addSmaContentList,
    deleteSmaCurriculumList: state.deleteSmaCurriculumList,
    deleteSmaProgramList: state.deleteSmaProgramList,
    submitData: state.submitData,
    loading: state.loading,
    setPagingNavigation: state.setPagingNavigation,
  }));

  const [attachments, setAttachments] = useState({
    tk: [],
    sd: [],
    smp: [],
    sma: [],
  });
  const [images, setImages] = useState({});

  useEffect(() => {
    fetchData(getInitialData);
  }, []);

  useEffect(() => {
    if (!isObjectEmpty(data) && !isDeclaredAtt) {
      Object.keys(attachments).forEach((grade) => {
        attachments[grade] = [...data["ID"][grade]["bannerImages"]];
      });
      setAttachments(JSON.parse(JSON.stringify(attachments)));
      setImages({
        image1: data["image1"],
        image2: data["image2"],
        image3: data["image3"],
        image4: data["image4"],
        image5: data["image5"],
        image6: data["image6"],
        image7: data["image7"],
        image8: data["image8"],
        image9: data["image9"],
        image10: data["image10"],
        image11: data["image11"],
        image12: data["image12"],
        image13: data["image13"],
        image14: data["image14"],
        image15: data["image15"],
        image16: data["image16"],
      });
      if (!isDeclaredAtt) setIsDeclaredAtt(true);
    }
  }, [data]);

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

  const onChangeAttachment = (file, grade, index) => {
    attachments[grade][index] = file;
    setAttachments({ ...attachments });
  };

  const deleteAttachment = (grade, index) => {
    setAttachments((prev) => ({
      ...prev,
      [grade]: prev[grade].filter((_, idx) => idx !== index),
    }));
  };

  const addAttachment = (grade) => {
    setAttachments((prev) => ({ ...prev, [grade]: [...prev[grade], {}] }));
  };

  const onChangeImage = (file, prop) => {
    if (file.length > 0) {
      images[prop] = file[0];
    }
    setImages({ ...images });
  };

  const onSubmit = async () => {
    Swal.fire(
      "Are you sure?",
      "Once submitted, you can't undo it",
      "warning"
    ).then((res) => {
      if (res.isConfirmed) {
        setState(true, "loading");
        // setIsLoadingPage(true)
        submitData(attachments, images);
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
                <AdminHeader title="Belajar BTB Content Settings Form" />
                <LanguageChanger
                  onChange={(val) => setState(val, "language")}
                  value={language}
                />
                <FieldTitle>List Judul Navigasi</FieldTitle>
                <div className="flex flex-col gap-y-2">
                  {data[language]["paging"]["url"].map((res, idx) => (
                    <TextInput
                      key={idx}
                      value={res?.title}
                      onChange={(e) => setPagingNavigation(e.target.value, idx)}
                    />
                  ))}
                </div>
                <CmsTK
                  data={data}
                  language={language}
                  attachments={attachments}
                  deleteTkCurriculum={deleteTkCurriculum}
                  deleteTkProgramList={deleteTkProgramList}
                  deleteAttachment={deleteAttachment}
                  onChangeAttachment={onChangeAttachment}
                  addAttachment={addAttachment}
                  setContentState={setContentState}
                  setTkCurriculumContent={setTkCurriculumContent}
                  addTkCurriculumContent={addTkCurriculumContent}
                  setProgramContent={setProgramContent}
                  addProgramContent={addProgramContent}
                  onChangeImage={onChangeImage}
                />
                {/* CONTENT GRADE SD */}
                <CmsSD
                  data={data}
                  language={language}
                  deleteListContent={deleteListContent}
                  attachments={attachments}
                  deleteAttachment={deleteAttachment}
                  onChangeAttachment={onChangeAttachment}
                  addAttachment={addAttachment}
                  setContentState={setContentState}
                  setSdContentList={setSdContentList}
                  addSdContentList={addSdContentList}
                  onChangeImage={onChangeImage}
                />
                {/* CONTENT GRADE SMP */}
                <CmsSMP
                  data={data}
                  language={language}
                  attachments={attachments}
                  deleteSmpCurriculumList={deleteSmpCurriculumList}
                  deleteAttachment={deleteAttachment}
                  onChangeAttachment={onChangeAttachment}
                  addAttachment={addAttachment}
                  setContentState={setContentState}
                  setSmpContentList={setSmpContentList}
                  addSmpContentList={addSmpContentList}
                  deleteSmpProgramList={deleteSmpProgramList}
                  onChangeImage={onChangeImage}
                />

                {/* CONTENT GRADE SMA */}
                <CmsSMA
                  data={data}
                  language={language}
                  attachments={attachments}
                  deleteSmaCurriculumList={deleteSmaCurriculumList}
                  deleteSmaProgramList={deleteSmaProgramList}
                  deleteAttachment={deleteAttachment}
                  onChangeAttachment={onChangeAttachment}
                  addAttachment={addAttachment}
                  setContentState={setContentState}
                  setSmaContentList={setSmaContentList}
                  addSmaContentList={addSmaContentList}
                  onChangeImage={onChangeImage}
                />
                <Button className="mt-4" onClick={onSubmit}>
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

export default CMSBtbBelajar;
