import { BlobProvider } from "@react-pdf/renderer";
import { Button } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import ARDExportPdf from "../../ExportPDF";

const ARDHeaderAction = ({ data, onClick, active }) => {
	const [isReadyToExport, setIsReadyToExport] = useState(false);
	const [exportPdf, setExportPdf] = useState(false);
	const pdfRef = useRef();

	const list = [
		"Registration Form",
		"Peraturan dan Persyaratan",
		"Health Form",
		"Recommended",
	];

	const activeStyle = {
		background: "#95b65d",
		color: "#fffeff",
		"&:hover": {
			color: "black",
			background: "white",
		},
	};

	const onClickExportPdf = () => {
		if (!exportPdf) {
			setExportPdf(true);
		} else {
			pdfRef.current.click();
		}
	};

	useEffect(() => {
		if (isReadyToExport) {
			pdfRef.current.click();
		}
	}, [isReadyToExport]);

	return (
		<div>
			<div className="flex gap-2">
				{list.map((res, index) => (
					<div key={res} className="flex gap-2 items-center">
						<Button
							size={"xs"}
							color={"light"}
							onClick={() => onClick(res)}
							className="px-2"
							style={active === res ? activeStyle : {}}
						>
							{res}
						</Button>
						{index + 1 !== list.length && (
							<div className="w-0.5 h-4 bg-gray-300" />
						)}
					</div>
				))}
			</div>
			<div>
				{exportPdf && (
					<BlobProvider
						document={<ARDExportPdf data={data} selected={active} />}
					>
						{({ blob, url, loading, error }) => {
							if (!url) return setIsReadyToExport(false);
							if (url) setIsReadyToExport(true);
							return <a ref={pdfRef} href={url} download={`Only ${active} - ${data?.firstname} - ${data?.registrationcode}.pdf`} />;
						}}
					</BlobProvider>
				)}
				<Button
					className="mt-4"
					size={"xs"}
					color={"warning"}
					onClick={onClickExportPdf}
				>
					Download
				</Button>
			</div>
		</div>
	);
};

export default ARDHeaderAction;
