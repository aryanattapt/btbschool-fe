"use client";
import React, { useEffect, useState } from "react";
import NavbarSidebarLayout from "../../_layouts/navigation";
import { useCmsBtbBelajarStore } from "../../../../../../store/admin/cms/btbBelajarStore";
import LanguageChanger from "../_components/LanguageChanger";
import AdminHeader from "../../_components/header";
import { isObjectEmpty } from "../../../../../utils/checker";
import FieldTitle from "../_components/FieldTitle";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Loader from "../../../../_components/loader";
import { checkPermission } from "../../../../../../services/auth.service";
import BannerAttachment from "./_components/BannerAttachment/BannerAttachment";
import Swal from "sweetalert2";
import LoadingModal from "../../../../../components/LoadingModal";
import CMSSubTitle from "../_components/CMSSubtitle";
import CmsTK from "./CmsTK";
import CmsSD from "./CmsSD";
import CmsSMP from "./CmsSMP";
import CmsSMA from "./CmsSMA";

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
  }));

  const [attachments, setAttachments] = useState({
    tk: [],
    sd: [],
    smp: [],
    sma: [],
  });

  useEffect(() => {
    fetchData(getInitialData);
  }, []);

  useEffect(() => {
    if (!isObjectEmpty(data) && !isDeclaredAtt) {
      Object.keys(attachments).forEach((grade) => {
        attachments[grade] = [...data["ID"][grade]["bannerImages"]];
      });
      setAttachments(JSON.parse(JSON.stringify(attachments)));
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

  const onSubmit = async () => {
    Swal.fire(
      "Are you sure?",
      "Once submitted, you can't undo it",
      "warning"
    ).then((res) => {
      if (res.isConfirmed) {
        setState(true, "loading");
        // setIsLoadingPage(true)
        submitData(attachments);
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
