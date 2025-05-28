
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetHero from "@/components/LarkbergetHero";
import LarkbergetAboutOverview from "@/components/LarkbergetAboutOverview";
import LarkbergetInvestorHighlights from "@/components/LarkbergetInvestorHighlights";
import LarkbergetFooter from "@/components/LarkbergetFooter";

const LarkbergetHome = () => {
  return (
    <div className="min-h-screen">
      <LarkbergetNavbar />
      <main>
        <LarkbergetHero />
        <LarkbergetAboutOverview />
        <LarkbergetInvestorHighlights />
      </main>
      <LarkbergetFooter />
    </div>
  );
};

export default LarkbergetHome;
