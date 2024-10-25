"use client";
import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbarapt";
import Popup from "../_components/popup";
import FloatingButtons from "../_components/floatingbutton";
import GoToTop from "../_components/goToTop";
import "core-js/full/promise/with-resolvers";

export default function ClientLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen sm:w-100%">
      <NavBar/>
      <main className="flex-grow">
        {children}
      </main>
      <Popup/>
      <FooterComponent/>
      <FloatingButtons/>
      <GoToTop />
    </div>
  );
}
