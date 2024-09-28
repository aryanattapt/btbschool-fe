'use client'
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../_components/header';
import {
    FetchAlumni,
} from '../../../../../services/alumni.service'
import TableAlumniList from './_components/table';
import { Button } from 'flowbite-react';
import useExportExcel from "../../../../hooks/useExportExcel";
import { FaFile } from 'react-icons/fa';
import moment from 'moment';

const AlumniExcelPayload = (datas = []) => {
	if (datas?.length > 0) {
		const result = datas.map((data, index) => {
			return [
				{
					"No": index + 1,
					"Alumni ID": data?.alumniid,
                    "Nama Lengkap": `${data?.firstname} ${data?.lastname}`,
                    "Tahun Terakhir di BTB": data?.laststudentyear,
                    "Tanggal Lahir": moment(data?.birthdate).format("DD MMMM YYYY"),
                    "Pendidikan": data?.edukasiOptions?.join(", "),
                    "Nama Universitas (Sarjana)": data?.undergraduateuniversityname,
                    "Nama Universitas (Pasca Sarjana)": data?.postgraduateuniversityname, 
                    "Status Kerja": data?.statusKerjaOptions,
                    "Nama Profesi": data?.professionname,
                    "Lokasi": data?.currentlocation,
                    "Email": data?.email,
                    "Nomor Telepon": data?.phoneno,
                    "Foto": data?.attachment?.map((val) => val?.fileURL)?.join(",")
				},
			];
		});
		return result;
	} else {
		return Swal.fire("Error", "Data to export is empty", "error");
	}
};

const AlumniPage = () => {
    const onExportExcel = useExportExcel();
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        fetchAllAlumni()
    }, [])

    const fetchAllAlumni = () => {
        FetchAlumni({})
        .then(res => {setPayload(res); console.log(res);})
        .catch((err) => {
            setPayload([])
            console.log(err);
        })
    }

    const onExportAllAsExcelHandler = () => {
		if (payload.length > 0) {
			onExportExcel(
				{
                    Sheet1: AlumniExcelPayload(payload)
                },
				"Data Alumni"
			);
		} else {
			Swal.fire("Error!", "Data not found, can't export to Excel", "error");
		}
	};

    return <>
        <NavbarSidebarLayout >
            <div className="mt-4">
                <AdminHeader title="Alumni List"/>
                <div className="mt-4">
                    <div className="bg-white p-4 border border-gray-300 border-t-0">
                        <Button className="px-2" onClick={onExportAllAsExcelHandler} size="xs" style={{background: "#95b65d", "&:hover": { color: "black", background: "white" } }}>
                            <FaFile className="mr-2 h-4 w-4" />
                            Export All
                        </Button>
                    </div>
                </div>
                <div className="p-4 border border-gray-300 border-t-0">
                    <TableAlumniList payload={payload}/>  
                </div>
            </div>
        </NavbarSidebarLayout>
    </>
}

export default AlumniPage;