"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import BulletinFlipBook from "../FlipBook";
import { Modal } from "flowbite-react";

const BulletinThumnail = ({ data }) => {
	// const [isHover, setIsHover] = useState(false);
	const [totalPage, setTotalPage] = useState(0);
	const [width, setWidth] = useState(0);
	const thumbRef = useRef();
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [pdfUrl, setPdfUrl] = useState(""); // Added state to store the PDF URL

	const openModal = useCallback((url) => {
		if (!isModalOpened) setIsModalOpened(true);
		setPdfUrl(url); // Set the PDF URL when opening the modal
		setIsModalOpen(true);
	}, []);

	const closeModal = useCallback(() => setIsModalOpen(false), []);

	// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	// 	"pdfjs-dist/build/pdf.worker.min.js",
	// 	import.meta.url
	// ).toString();

	const onDocumentLoadSuccess = ({ numPages }) => {
		const numberPages = parseInt(numPages);
		setTotalPage(numberPages);
	};

	useEffect(() => {
		if (thumbRef) {
			setWidth(thumbRef.current.clientWidth);
		}
	}, []);

	return (
		<div ref={thumbRef}>
			<p className="text-xl font-semibold">{data?.bulletintitle}</p>
			<div className="cursor-pointer overflow-hidden" onClick={openModal}>
				<div className="hover:scale-105 ease-in-out duration-300">
					<Document
						file={data?.attachment?.[0]?.fileURL} // ini isinya file url
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={1} width={width} renderMode="canvas" />
					</Document>
				</div>
			</div>

			<Modal
				show={isModalOpen}
				dismissible
				size="4xl"
				className="p-0 modal-custom mx-auto"
				onClose={closeModal}
				unFo
			>
				<Modal.Body>
					<div className="p-0 relative w-full h-full overflow-hidden">
						{isModalOpened && (
							<BulletinFlipBook url={data?.attachment?.[0]?.fileURL} />
						)}
					</div>
				</Modal.Body>
			</Modal>
			{/* <div className="absolute top-0 left-0 bg-red-200">asd</div> */}
		</div>
	);
};

export default BulletinThumnail;
