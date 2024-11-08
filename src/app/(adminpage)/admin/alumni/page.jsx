'use client'
import NavbarSidebarLayout from '../_layouts/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../_components/header';
import {
    DeleteAlumniSubmissiondata,
    FetchAlumni,
} from '../../../../../services/alumni.service'
import TableAlumniList from './_components/table';
import { Button, Label } from 'flowbite-react';
import useExportExcel from "../../../../hooks/useExportExcel";
import { FaFile } from 'react-icons/fa';
import moment from 'moment';
import { checkPermission } from '../../../../../services/auth.service';
import Loader from '../../../_components/loader';
import Swal from 'sweetalert2';

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
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        fetchData(fetchAllAlumni)
    }, [])

    const fetchData = async (callback) => {
        setIsLoading(true);
        try {
            await checkPermission('manage_alumni');
            setIsAuthorized(true);
            await callback();
        } catch (error) {
            console.log(error);
            if(error.status != '401'){
                try {
                    await callback();
                } catch (error) {console.log(error);}
            }
        } finally {
            setIsLoading(false);
        }
    };

    const fetchAllAlumni = async () => {
        try {
            const res = await FetchAlumni({});
    
            const currentYearFiltered = new Date().getFullYear();
            const startYearFiltered = currentYearFiltered - 3;
            
            const filteredData = res.filter(item => {
                const lastStudentYear = parseInt(item.laststudentyear, 10); // Convert to integer
                return lastStudentYear >= startYearFiltered && lastStudentYear <= currentYearFiltered;
            });
            setPayload(filteredData);
        } catch (err) {
            setPayload([]);
            console.error('Error fetching alumni data:', err);
        }
    };    

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

    const deleteHandler = async (id) => {
        try {
            DeleteAlumniSubmissiondata({"_id": id});

            setTimeout(() => {
                window.location.href = '/admin/alumni/';
            }, 3000);

            Swal.fire({
                allowOutsideClick: false,
                title: "Alumni Delete Notification!",
                text: "Success delete Alumni! Refreshing page in 3 seconds...",
                icon: "info",
            });
        } catch (error) {
            Swal.fire({
                allowOutsideClick: false,
                title: "Alumni Delete Notification!",
                text: error.message,
                icon: "error",
            });
        }
    }

    if(isLoading){
        return <Loader/>
    } else
        return <>
            <NavbarSidebarLayout >
                {
                    isAuthorized ? <div className="mt-4">
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
                            <div className="mb-2 block w-72">
                                <Label value="List all data of alumni"/>
                            </div>
                            <TableAlumniList payload={payload} deleteHandler={deleteHandler}/>  
                        </div>
                    </div> :
                    <div>Unauthorized</div>
                }
                
            </NavbarSidebarLayout>
        </>
}

export default AlumniPage;