
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LarkbergetHome from "./pages/LarkbergetHome";
import AboutLarkberget from "./pages/AboutLarkberget";
import InvestorsOverview from "./pages/InvestorsOverview";
import FinancialReports from "./pages/FinancialReports";
import ShareholdersPage from "./pages/ShareholdersPage";
import ProspektPage from "./pages/ProspektPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LarkbergetHome />} />
          <Route path="/om-larkberget" element={<AboutLarkberget />} />
          <Route path="/investerare" element={<InvestorsOverview />} />
          <Route path="/investerare/finansiella-rapporter" element={<FinancialReports />} />
          <Route path="/investerare/aktieagare" element={<ShareholdersPage />} />
          <Route path="/investerare/prospekt-im" element={<ProspektPage />} />
          <Route path="/pressmeddelanden" element={<NewsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
