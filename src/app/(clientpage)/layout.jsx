import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";
import FloatingButtons from "../_components/floatingbutton";
import 'core-js/full/promise/with-resolvers'

export const metadata = {
  title: "Bina Tunas Bangsa School",
  description: "Bina Tunas Bangsa School Landing Page",
};

export default function ClientLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen sm:w-100%">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <FooterComponent />
      <FloatingButtons/>
    </div>
  );
}
