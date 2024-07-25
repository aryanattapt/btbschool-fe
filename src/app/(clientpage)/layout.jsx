import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbar";

export const metadata = {
  title: "Bina Tunas Bangsa School",
  description: "Bina Tunas Bangsa School Landing Page",
};

export default function ClientLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <FooterComponent />
    </div>
  );
}
