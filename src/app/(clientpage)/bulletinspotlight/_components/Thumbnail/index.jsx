"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import BulletinFlipBook from "../FlipBook";
import { IoMdDownload } from "react-icons/io";
import BtnPrimary from "../../../../../components/Button/Primary";

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
			<p className="font-bold mb-2 lg:text-[12px] xl:text-[16px] ">
				{data?.bulletintitle}
			</p>
			<div
				className="cursor-pointer overflow-hidden flex justify-center"
				onClick={openModal}
			>
				<div className="hover:scale-105 ease-in-out duration-300">
					<Document
						file={data?.attachment?.[0]?.fileURL} // ini isinya file url
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={1} width={width} renderMode="canvas" />
					</Document>
				</div>
			</div>
			<div className="flex justify-center item mt-2">
				<a href={data?.attachment?.[0]?.fileURL} download={data?.bulletintitle}>
					<BtnPrimary>
						<p>Download</p>
						<IoMdDownload className="ml-2 mt-1" />
					</BtnPrimary>
				</a>
			</div>

			{/* <Modal
				show={isModalOpen}
				// theme={{
				// 	content: {
				// 		base: "relative h-full w-full p-0 md:h-auto",
				// 	},
				// }}
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
			</Modal> */}

			<ModalNew isOpen={isModalOpen} onClose={closeModal}>
				<BulletinFlipBook url={data?.attachment?.[0]?.fileURL} />
			</ModalNew>
			{/* <div className="absolute top-0 left-0 bg-red-200">asd</div> */}
		</div>
	);
};

const ModalNew = ({ isOpen, onClose, children }) => {
	const [modalStyle, setModalStyle] = useState({});
	useEffect(() => {
		const updateModalStyle = () => {
			const width = window.innerWidth;
			let pdfWidth = 0;
			let pdfPage = 1;
			if (width >= 1024) {
				pdfWidth = 400;
				pdfPage = 2;
			} else if (width >= 700 && width < 1024) {
				pdfWidth = 350;
				pdfPage = 2;
			} else if (width >= 500 && width < 700) {
				pdfWidth = 440;
			} else {
				pdfWidth = 300;
			}

			setModalStyle({
				width: pdfWidth * pdfPage + 48,
				height: pdfWidth * 1.412 + 48,
			});

			// if (width >= 1280) {
			// 	setModalStyle({
			// 		minWidth: "56rem", // Minimum width 4xl untuk desktop besar
			// 		maxWidth: "56rem", // Maximum width 4xl
			// 		maxHeight: "80vh", // 80% tinggi viewport
			// 	});
			// // } else if (width > 768 && width < 1200) {
			// // 	setModalStyle({
			// // 		minWidth: "80vw", // Minimum width: 80% dari viewport width
			// // 		maxWidth: "90vw", // Maksimum width: 90% dari viewport width
			// // 		minHeight: "50vh", // Minimum height: 50% dari viewport height
			// // 		maxHeight: "80vh", // Maksimum height: 80% dari viewport height
			// // 	});
			// } else if (width >= 540 && width <= 768) {
			// 	setModalStyle({
			// 		// minWidth: "80vw", // Minimum width: 80% dari viewport width
			// 		// maxWidth: "90vw", // Maksimum width: 90% dari viewport width
			// 		width: "92vw",
			// 		height: ((width * 0.92) / 2) * 1.412 + 16,
			// 		// minHeight: "50vh", // Minimum height: 50% dari viewport height
			// 		// maxHeight: "80vh", // Maksimum height: 80% dari viewport height
			// 	});
			// } else {
			// 	setModalStyle({
			// 		minWidth: "90vw", // Minimum width: 90% dari viewport width
			// 		maxWidth: "95vw", // Maksimum width: 95% dari viewport width
			// 		minHeight: "50vh", // Minimum height: 60% dari viewport height
			// 		maxHeight: "90vh", // Maksimum height: 90% dari viewport height
			// 	});
			// }
		};

		// Update styles pada mount dan resize window
		updateModalStyle();
		window.addEventListener("resize", updateModalStyle);

		return () => {
			window.removeEventListener("resize", updateModalStyle);
		};
	}, []);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
			<div
				className="relative h-fit bg-white p-6 rounded-lg shadow-lg w-full"
				style={modalStyle}
			>
				<button
					className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
					onClick={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default BulletinThumnail;
