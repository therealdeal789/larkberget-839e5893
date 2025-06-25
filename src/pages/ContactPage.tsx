
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import ContactInfoSection from "@/components/ContactInfoSection";
import LeadershipSection from "@/components/LeadershipSection";
import InvestorInfoSection from "@/components/InvestorInfoSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-larkberget-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with same background as PressReleasesPage */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Kontaktuppgifter till Lärkberget och information om bolagets styrelse och ledning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Cards */}
            <ContactInfoSection />

            {/* Leadership & Board */}
            <LeadershipSection />

            {/* Additional Information */}
            <InvestorInfoSection />

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default ContactPage;
