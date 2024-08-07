'use client'
import { useEffect, useState } from "react";
import Banner from "./components/banner";
import Pagging from "./components/pagging";

const CalendarAcademicPage = () => {
  const [payload, setPayload] = useState([])
    useEffect(() => {
      GetConfig('calenderacademic', {}).then(res => setPayload(res)).catch((err) => {
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
    </>
};

export default CalendarAcademicPage;