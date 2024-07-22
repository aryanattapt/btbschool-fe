'use client'
import CareerApplyForm from "../_components/form";
import { useParams } from 'next/navigation';

const CareerApplyPage = () => {
    const params = useParams();

    return <>
        <div className="flex-col p-12">
            <CareerApplyForm params={params}/>
        </div>
    </>
};

export default CareerApplyPage;