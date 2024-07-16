import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";
import OnlineRegistrationForm from "./_layouts/form";

const OnlineRegistrationPage = () => {
    return <>
        <NavBar/>
        <div className="flex-col p-12">
            <OnlineRegistrationForm/>
        </div>
        <FooterComponent/>
    </>
}

export default OnlineRegistrationPage;