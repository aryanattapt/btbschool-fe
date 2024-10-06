"use client";
import FooterComponent from "../_components/footer";
import NavBar from "../_components/navbarapt";
import Popup from "../_components/popup";
import FloatingButtons from "../_components/floatingbutton";
import GoToTop from "../_components/goToTop";
import "core-js/full/promise/with-resolvers";
import { LanguageProvider } from "../../context/language.context";
import { useEffect, useState } from "react";
import {GetConfig} from '../../../services/config.service'

export default function ClientLayout({ children }) {
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await GetConfig('general', {"type": "generalsetting"});
        console.log(result[0]);
        setPayload(result[0]);
      } catch (error) {
        setError(error);
      } finally{
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen sm:w-100%">
        <NavBar payload={payload?.quicklink || []}/>
        <Popup payload={payload}/>
        <main className="flex-grow">
          {children}
        </main>
        <FooterComponent payload={payload}/>
        <FloatingButtons payload={payload?.floatingbuttons || []}/>
        <GoToTop />
      </div>
    </LanguageProvider>
  );
}
