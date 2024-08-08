'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Modal } from 'flowbite-react';
import PDFReaderFlipBook from '../../_components/pdfreaderflipbook';
import PDFThumbnail from './_components/pdfpreview';
import Banner from './_components/Banner';
import Pagging from './_components/Pagging';
import {BulletinSpotlightPayload} from '../../../../data';
import {useLanguageStore} from '../../../../store/language.store';
import { GetConfig } from '../../../../services/config.service';
import Swal from 'sweetalert2';


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
                                url={val.attachment[0].fileURL}
                            />
                            <PDFThumbnail 
                                file={val.attachment[0].fileURL} 
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
