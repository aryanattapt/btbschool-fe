import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbarapt";
import FloatingButtons from "../_components/floatingbutton";
import 'core-js/full/promise/with-resolvers'
import { LanguageProvider } from "../../context/language.context";

export const metadata = {
  title: "Bina Tunas Bangsa School",
  description: "Bina Tunas Bangsa School Landing Page",
};

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen sm:w-100%">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <FooterComponent />
        <FloatingButtons/>
      </div>
    </LanguageProvider>
  );
}
