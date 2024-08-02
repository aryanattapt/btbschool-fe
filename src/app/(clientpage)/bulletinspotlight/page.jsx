'use client'
import React, { useState, useMemo, useCallback } from 'react';
import { Modal } from 'flowbite-react';
import PDFReaderFlipBook from '../../_components/pdfreaderflipbook';
import PDFThumbnail from './_components/pdfpreview';

const FlipbookModal = ({ url, isOpen, setIsOpen }) => {
    const modalStyle = useMemo(() => ({ height: "550px", width: "800px" }), []);
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

    return (
        <div className="flex flex-col items-center md:my-[200px] gap-2">
            <FlipbookModal 
                isOpen={isModalOpen} 
                setIsOpen={closeModal} 
                url={memoizedPdfUrl}
            />
            <PDFThumbnail 
                file={memoizedPdfUrl} 
                onClick={openModal} 
            />
        </div>
    );
};

export default BulletinSpotlightPage;
