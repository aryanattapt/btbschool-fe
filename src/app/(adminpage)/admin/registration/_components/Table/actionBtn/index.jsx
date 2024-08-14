import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import useExportExcel from "../../../../../../../hooks/useExportExcel";
import { admRegisManagerExportObjectBuilder } from "../../../../../../../utils/admin/registration/export";
import ARDExportPdf from "../../ExportPDF";

const RegistrationTableActionBtn = (data) => {
	const pathname = usePathname();
	const onExportExcel = useExportExcel();

	const [exportPdf, setExportPdf] = useState(false);
	const pdfRef = useRef();

	const onClickExport = () => {
		onExportExcel(
			{ Sheet1: admRegisManagerExportObjectBuilder([data]) },
			`${data?.firstname} ${data?.middlename} ${data?.lastname}`
		);
	};

	const onClickExportPdf = () => {
		if (!exportPdf) {
			setExportPdf(true);
		} else {
			pdfRef.current.click();
		}
	};

	useEffect(() => {
		if (exportPdf) {
			setTimeout(() => {
				pdfRef.current.click();
			}, 2000);
		}
	}, [exportPdf]);

	return (
		<div className="flex gap-2">
			{exportPdf && (
				<BlobProvider document={<ARDExportPdf data={data} />}>
					{({ blob, url, loading, error }) => {
						return <a ref={pdfRef} href={url} download={"document.pdf"} />;
					}}
				</BlobProvider>
			)}
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
				onClick={onClickExportPdf}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>PDF</p>
			</Button>
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
				onClick={onClickExport}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>Excel</p>
			</Button>
			{pathname.includes("/outstanding") && (
				<Button size={"xs"} color="warning">
					<FaCheck className="mr-2 h-4 w-4" />
					<p>Approve</p>
				</Button>
			)}
			<Link href={`./detail/${data["_id"]}`}>
				<Button size={"xs"} color="dark">
					Detail
				</Button>
			</Link>
		</div>
	);
};

export default RegistrationTableActionBtn;
