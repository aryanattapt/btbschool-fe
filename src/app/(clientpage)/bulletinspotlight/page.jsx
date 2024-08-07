'use client'
// import { useEffect, useState } from 'react';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Modal } from 'flowbite-react';
import PDFReaderFlipBook from '../../_components/pdfreaderflipbook';
import PDFThumbnail from './_components/pdfpreview';
import Banner from './_components/Banner';
import Pagging from './_components/Pagging';
import {BulletinSpotlightPayload} from '../../../../data';
import {useLanguageStore} from '../../../../store/language.store';
import { GetConfig } from '../../../../services/config.service';


const FlipbookModal = ({ url, isOpen, setIsOpen }) => {
    const modalStyle = useMemo(() => ({ height: "450px", width: "800px"}), []);
    return (
        <Modal show={isOpen} dismissible size="4xl" onClose={() => setIsOpen(false)}>
            <Modal.Body>
                <div style={modalStyle} className='overflow-hidden'>
                    <PDFReaderFlipBook url={url} width={400} height={600}/>
                </div>
            </Modal.Body>
        </Modal>
    );
};

const BulletinSpotlightPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('https://w6i8.c1.e2-7.dev/uploads/btbschool/pdf/E-Spotlight Term 4 SY. 2023-2024_2.pdf');
    const memoizedPdfUrl = useMemo(() => pdfUrl, [pdfUrl]);
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    const [bulletinSpotlightData, setBulletinSpotlightData] = useState(BulletinSpotlightPayload);
    const { language } = useLanguageStore();
    const [payload, setPayload] = useState([])

    useEffect(() => {
        GetConfig('bulletinspotlight', {}).then(res => {
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

    return (
        <>
        <Banner />
        <Pagging />
        <div className="mt-10 mb-5 pl-32 text-[#00305E]">
            <h1 className="text-[35px] font-bold">
                {bulletinSpotlightData[language].title}
            </h1>
            <div className="text-[30px]">
                {bulletinSpotlightData[language].desc}
            </div>
            <div className="flex flex-col items-center gap-2">
                {
                    payload.map((val, idx) => (
                        <div key={idx}>
                            <FlipbookModal 
                                isOpen={isModalOpen} 
                                setIsOpen={closeModal} 
                                url={val.attachments}
                            />
                            <PDFThumbnail 
                                file={val.attachments} 
                                onClick={openModal} 
                            />
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default BulletinSpotlightPage;
