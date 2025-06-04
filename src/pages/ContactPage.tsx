import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kontakt
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-trust-600" />
                    <span>E-post</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    För allmänna frågor och investerarinformation:
                  </p>
                  <a 
                    href="mailto:info@larkberget.se"
                    className="text-trust-600 hover:text-trust-700 font-medium"
                  >
                    info@larkberget.se
                  </a>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-trust-600" />
                    <span>Adress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Lärkberget AB</p>
                  <p className="text-gray-600 mb-2">Stockholm</p>
                  <p className="text-gray-600">Sverige</p>
                </CardContent>
              </Card>

            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-trust-50 to-larkberget-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Investerarinformation</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Som börsnoterat företag följer vi strikta regler för informationsgivning. 
                  All viktig information publiceras samtidigt till alla aktieägare och marknaden.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <Clock className="w-8 h-8 text-trust-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-3">Rapportdatum</h4>
                    <p className="text-gray-600 text-sm">
                      Finansiella rapporter publiceras enligt fastställda datum.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <Mail className="w-8 h-8 text-trust-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-3">Pressmeddelanden</h4>
                    <p className="text-gray-600 text-sm">
                      Prenumerera på våra pressmeddelanden för att få aktuell information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default ContactPage;
