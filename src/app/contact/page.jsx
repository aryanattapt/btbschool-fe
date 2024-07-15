import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";
import ContactForm from "./_layouts/form";


const ContactPage = () => {
    return <>
        <NavBar/>
        <div className="flex-col p-12">
            <ContactForm/>
        </div>
        <FooterComponent/>
    </>
};

export default ContactPage;