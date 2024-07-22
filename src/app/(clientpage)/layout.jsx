import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";

export const metadata = {
  title: "Bina Tunas Bangsa School",
  description: "Bina Tunas Bangsa School Landing Page",
};

export default function ClientLayout({ children }) {
  return (
    <section>
      <NavBar/>
      {children}
      <FooterComponent/>
    </section>
  );
}
