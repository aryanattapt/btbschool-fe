import { Modal, Spinner } from "flowbite-react";
import React from "react";

const LoadingModal = ({ label }) => {
	return (
		<Modal show={true} size={"sm"}>
			<Modal.Body className="flex flex-col items-center">
				<Spinner size={"xl"} />
				<p className="mt-8">{label}</p>
			</Modal.Body>
		</Modal>
	);
};

export default LoadingModal;
