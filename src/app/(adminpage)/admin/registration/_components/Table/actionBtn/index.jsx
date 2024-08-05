import { Button } from "flowbite-react";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

const RegistrationTableActionBtn = (data) => {
	const onDetail = () => {
		console.log({ data });
		console.log();
	};

	return (
		<div className="flex gap-2">
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>PDF</p>
			</Button>
			<Button
				size="xs"
				className="text-white"
				style={{ background: "#3fbae5" }}
			>
				<IoMdDownload className="mr-2 h-4 w-4" />
				<p>Excel</p>
			</Button>
			<Button size={"xs"} color="warning">
				Admission
			</Button>
			<Link href={`./detail/${data["_id"]}`} prefetch={false}>
				<Button onClick={onDetail} size={"xs"} color="dark">
					Detail
				</Button>
			</Link>
		</div>
	);
};

export default RegistrationTableActionBtn;
