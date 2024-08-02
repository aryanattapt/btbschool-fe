'use client'
import { Button, Modal } from 'flowbite-react';
import PDFReaderFlipBook from '../../_components/pdfreaderflipbook'
import { useState } from 'react';
const FlipbookModal = ({ url, isOpen, setIsOpen }) => {
    return (
        <Modal show={isOpen} dismissible size="4xl" onClose={() => setIsOpen(false)}>
            <Modal.Body>
                <div style={{height: "550px", width: "800px"}} className='overflow-hidden'>
                    <PDFReaderFlipBook url={url} width={400} height={600}/>
                </div>
            </Modal.Body>
        </Modal>
    );
};

const BulletinSpotlightPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return <>
        <div className="flex flex-col items-center md:my-[100px] gap-2">
            <Button onClick={openModal}>Open Flipbook</Button>
            <FlipbookModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} url={'https://w6i8.c1.e2-7.dev/uploads/btbschool/pdf/E-Spotlight Term 4 SY. 2023-2024_2.pdf'}/>
            <iframe src='https://w6i8.c1.e2-7.dev/uploads/btbschool/pdf/E-Spotlight Term 4 SY. 2023-2024_2.pdf' />
        </div>
    </>
}

export default BulletinSpotlightPage;