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
import Swal from "sweetalert2";

const RegistrationTableActionBtn = (data) => {
	const pathname = usePathname();
	const onExportExcel = useExportExcel();

	const [isReadyToExport, setIsReadyToExport] = useState(false);
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
		console.log({ isReadyToExport });
		if (isReadyToExport) {
			pdfRef.current.click();
		}
	}, [isReadyToExport]);

	return (
		<div className="flex gap-2">
			<div>
				{exportPdf && (
					<BlobProvider document={<ARDExportPdf data={data} />}>
						{({ blob, url, loading, error }) => {
							console.log(data?.middlename);
							console.log({ url });
							console.log({ loading });
							console.log({ error });
							if(error != null) {
								Swal.fire({
									allowOutsideClick: false,
									title: 'Error Notification!',
									text: error.toString(),
									icon: 'error',
								});
							}
							if (!url) return setIsReadyToExport(false) ;
							if (url) setIsReadyToExport(true);
							return (
								<a
									ref={pdfRef}
									href={url}
									download={`Registration-Form - ${data?.firstname} -${data?.registrationcode}.pdf`}
								/>
							);
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
			</div>
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
				onClick={onClickExport}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>Excel</p>
			</Button>
			{/* {pathname.includes("/outstanding") && (
				<Button size={"xs"} color="warning">
					<FaCheck className="mr-2 h-4 w-4" />
					<p>Approve</p>
				</Button>
			)} */}
			<Link href={`/admin/registration/detail/${data["_id"]}`}>
				<Button size={"xs"} color="dark">
					Detail
				</Button>
			</Link>
		</div>
	);
};

export default RegistrationTableActionBtn;
