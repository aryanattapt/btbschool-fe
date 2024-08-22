'use client'
import CareerApplyForm from "../_components/form";
import { useParams } from 'next/navigation';

const CareerApplyPage = () => {
    const params = useParams();

    return <>
        <div className="flex-col p-12 mt-[30px] md:mt-[75px] lg:mt-36">
            <CareerApplyForm params={params}/>
        </div>
    </>
};

export default CareerApplyPage;