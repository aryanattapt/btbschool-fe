'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Modal } from 'flowbite-react';
import PDFReaderFlipBook from '../../_components/pdfreaderflipbook';
import PDFThumbnail from './_components/pdfpreview';
import Banner from './_components/Banner';
import Pagging from './_components/Pagging';
import { GetConfig } from '../../../../services/config.service';
import Swal from 'sweetalert2';

const BulletinSpotlightPage = () => {
    const [payload, setPayload] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(""); // Added state to store the PDF URL

    const openModal = useCallback((url) => {
        setPdfUrl(url); // Set the PDF URL when opening the modal
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => setIsModalOpen(false), []);

    const FlipbookModal = ({ url, isOpen, setIsOpen }) => {
        const modalStyle = useMemo(() => ({ height: "570px", width: "800px" }), []);
        return (
            <Modal show={isOpen} dismissible size="4xl" onClose={() => setIsOpen(false)}>
                <Modal.Body>
                    <div style={modalStyle} className='overflow-hidden'>
                        <PDFReaderFlipBook url={url} width={400} height={700} />
                    </div>
                </Modal.Body>
            </Modal>
        );
    };

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
            <div className="mt-10 mb-5 px-10 md:pl-32 text-[#00305E]">
                <FlipbookModal
                    url={pdfUrl} // Pass the URL to FlipbookModal
                    isOpen={isModalOpen}
                    setIsOpen={closeModal}
                />
                {
                    payload.map((val, idx) => {
                        return <div key={idx}>
                            <div className="text-[30px]">
                                {val.bulletintitle}
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <PDFThumbnail
                                    file={val.attachment[0].fileURL}
                                    onClick={() => openModal(val.attachment[0].fileURL)} // Pass the URL to openModal
                                />
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default BulletinSpotlightPage;