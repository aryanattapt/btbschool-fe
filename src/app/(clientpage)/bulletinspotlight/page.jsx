"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Modal } from "flowbite-react";
import PDFReaderFlipBook from "../../_components/pdfreaderflipbook";
import PDFThumbnail from "./_components/pdfpreview";
import Banner from "./_components/Banner";
import Pagging from "./_components/Pagging";
import { GetConfig } from "../../../../services/config.service";
import Swal from "sweetalert2";
import BulletinThumnail from "./_components/Thumbnail";

const BulletinSpotlightPage = () => {
	const [payload, setPayload] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [pdfUrl, setPdfUrl] = useState(""); // Added state to store the PDF URL

	const openModal = useCallback((url) => {
		setPdfUrl(url); // Set the PDF URL when opening the modal
		setIsModalOpen(true);
	}, []);

	const closeModal = useCallback(() => setIsModalOpen(false), []);

	const FlipbookModal = ({ url, isOpen, setIsOpen }) => {
		return (
			<Modal
				show={isOpen}
				dismissible
				size="4xl"
				onClose={() => setIsOpen(false)}
				className="modal-custom mx-auto"
			>
				<Modal.Body>
					<div className="relative w-full h-full overflow-hidden">
						<PDFReaderFlipBook url={url} width={550} height={733} />
					</div>
				</Modal.Body>
			</Modal>
		);
	};

	useEffect(() => {
		// setPayload(tempDatas);
		GetConfig("bulletinspotlight", {})
			.then((res) => {
				setPayload(res);
			})
			.catch((err) => {
				Swal.fire({
					allowOutsideClick: false,
					title: "Error Notification!",
					text: err,
					icon: "error",
				});
			});
	}, []);

	return (
		<>
			<Banner />
			<Pagging />
			<div className="px-10 py-12 sm:grid sm:grid-cols-2 sm:gap-y-12 sm:gap-x-6 md:gap-12 lg:py-20 lg:px-16 lg:grid-cols-4 lg:gap-8">
				{payload.map((res, idx) => (
					<div className={`${idx === 1 && "mt-12 sm:mt-0"}`}>
						<BulletinThumnail data={res} key={idx} />
					</div>
				))}
			</div>
		</>
	);
};

export default BulletinSpotlightPage;
