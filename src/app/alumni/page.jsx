import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";
import AlumniForm from "./_layouts/form";

const AlumniPage = () => {
    return <>
        <NavBar/>
        <div className="flex-col p-12">
            <AlumniForm/>
        </div>
        <FooterComponent/>
    </>;
};

export default AlumniPage;