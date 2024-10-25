'use client'
import { useEffect, useState } from 'react';
import Banner from "./components/banner";
import Pagging from "./components/pagging";
import Content from "./components/content";
import {CalendarAcademicPayload} from '../../../../data';
import { usePageData } from '../../../hooks/usePageData';

const CalendarAcademicPage = () => {
  const [calendarAcademicData] = useState(CalendarAcademicPayload);

  const {language, getCalenderAcademicPageData, isLoading} = usePageData();
  const payload = usePageData((state) => state.result.calenderacademic);

  useEffect(() => {
    getCalenderAcademicPageData();
  }, []);

  if(isLoading) {
    return <div>loading...</div>
  }
  else if(payload)
    return <>
      <Banner />
      <Pagging calendarAcademicData={calendarAcademicData} language={language}/>
      <Content payload={payload} content={calendarAcademicData[language]} language={language}/>
    </>
};

export default CalendarAcademicPage;