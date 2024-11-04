'use client'
import { useEffect } from 'react';
import Banner from "./components/banner";
import Pagging from "./components/pagging";
import Content from "./components/content";
import { usePageData } from '../../../hooks/usePageData';
import Loader from "../../_components/loader";

const CalendarAcademicPage = () => {
  const {language, getCalenderAcademicPageData, isLoading} = usePageData();
  const payload = usePageData((state) => state.result.calenderacademic);
  const calendarAcademicData = usePageData((state) => state.result.CalendarAcademicPageData);

  useEffect(() => {
    getCalenderAcademicPageData();
  }, []);

  if(isLoading) {
    return <Loader/>;
  }
  else if(payload)
    return <>
      <Banner />
      <Pagging calendarAcademicData={calendarAcademicData} language={language}/>
      <Content payload={payload} content={calendarAcademicData[language]} language={language}/>
    </>
};

export default CalendarAcademicPage;