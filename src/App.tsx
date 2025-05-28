
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LarkbergetHome from "./pages/LarkbergetHome";
import AboutLarkberget from "./pages/AboutLarkberget";
import InvestorsOverview from "./pages/InvestorsOverview";
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
          {/* Placeholder routes for investor subsections */}
          <Route path="/investerare/finansiella-rapporter" element={<InvestorsOverview />} />
          <Route path="/investerare/substansvarde" element={<InvestorsOverview />} />
          <Route path="/investerare/aktieagare" element={<InvestorsOverview />} />
          <Route path="/investerare/radgivare" element={<InvestorsOverview />} />
          <Route path="/pressmeddelanden" element={<InvestorsOverview />} />
          <Route path="/press" element={<InvestorsOverview />} />
          <Route path="/kontakt" element={<InvestorsOverview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
