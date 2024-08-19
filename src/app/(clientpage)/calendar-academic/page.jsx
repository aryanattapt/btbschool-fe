'use client'
import { useEffect, useState } from 'react';
import Banner from "./components/banner";
import Pagging from "./components/pagging";
import Content from "./components/content";
import { GetConfig } from '../../../../services/config.service';
import { FaDownload } from "react-icons/fa";
import {CalendarAcademicPayload} from '../../../../data';
import {useLanguageStore} from '../../../../store/language.store';

const CalendarAcademicPage = () => {
  const [payload, setPayload] = useState([])
  const [calendarAcademicData, setCalendarAcademicData] = useState(CalendarAcademicPayload);
  const { language } = useLanguageStore();

  useEffect(() => {
    GetConfig('calenderacademic', {}).then(res => {
      console.log(res);
      setPayload(res);
    }).catch((err) => {
      Swal.fire({
        allowOutsideClick: false,
        title: 'Error Notification!',
        text: err,
        icon: 'error',
      });
    })
  }, [])

  return <>
    <Banner />
    <Pagging />
    <Content payload={payload} content={calendarAcademicData[language]}/>
    <div className='my-10 flex justify-center'>
      <button className='bg-[#EF802B] p-3 rounded text-white flex items-center'>
        <FaDownload className="text-white mr-2"/> 
        {calendarAcademicData[language].buttonAction}
      </button>
    </div>
  </>
};

export default CalendarAcademicPage;