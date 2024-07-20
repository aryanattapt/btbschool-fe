'use client'
import FooterComponent from "@/app/_components/footer";
import NavBar from "@/app/_components/navbar";
import CareerApplyForm from "../_components/form";

const CareerApplyPage = () => {
    return <>
        <NavBar/>
        <div className="flex-col p-12">
            <CareerApplyForm/>
        </div>
        <FooterComponent/>
    </>
};

export default CareerApplyPage;