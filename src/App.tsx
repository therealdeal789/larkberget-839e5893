
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LarkbergetHome from "./pages/LarkbergetHome";
import AboutLarkberget from "./pages/AboutLarkberget";
import KalendariumPage from "./pages/KalendariumPage";
import FinancialReports from "./pages/FinancialReports";
import ShareholdersPage from "./pages/ShareholdersPage";
import ProspektPage from "./pages/ProspektPage";
import PressReleasesPage from "./pages/PressReleasesPage";
import ContactPage from "./pages/ContactPage";
import CertifiedAdviserPage from "./pages/CertifiedAdviserPage";
import BolagsstammorPage from "./pages/BolagsstammorPage";
import BolagsordningPage from "./pages/BolagsordningPage";
import BolagsbeskrivningPage from "./pages/BolagsbeskrivningPage";
import NavPage from "./pages/NavPage";
import NotFound from "./pages/NotFound";

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LarkbergetHome />} />
        <Route path="/om-larkberget" element={<AboutLarkberget />} />
        <Route path="/investerare" element={<KalendariumPage />} />
        <Route path="/investerare/kalendarium" element={<KalendariumPage />} />
        <Route path="/investerare/finansiella-rapporter" element={<FinancialReports />} />
        <Route path="/investerare/aktieagare" element={<ShareholdersPage />} />
        <Route path="/investerare/nav" element={<NavPage />} />
        <Route path="/investerare/prospekt-im" element={<ProspektPage />} />
        <Route path="/investerare/bolagsstyrning/bolagsstammor" element={<BolagsstammorPage />} />
        <Route path="/investerare/bolagsstyrning/bolagsordning" element={<BolagsordningPage />} />
        <Route path="/investerare/bolagsstyrning/bolagsbeskrivning" element={<BolagsbeskrivningPage />} />
        <Route path="/investerare/radgivare" element={<CertifiedAdviserPage />} />
        <Route path="/pressmeddelanden" element={<PressReleasesPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
