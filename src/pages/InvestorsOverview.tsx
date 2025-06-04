
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, Users, FileText } from "lucide-react";

const InvestorsOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Investerare
            </h1>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Financial Reports */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <FileText className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Finansiella rapporter</h3>
                <Link 
                  to="/investerare/finansiella-rapporter"
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Visa rapporter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Shareholders */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <Users className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aktieägare</h3>
                <Link 
                  to="/investerare/aktieagare"
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Läs mer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* News */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <FileText className="w-10 h-10 text-trust-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nyheter</h3>
                <Link 
                  to="/pressmeddelanden"
                  className="inline-flex items-center text-trust-600 hover:text-trust-700 font-medium"
                >
                  Visa alla
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default InvestorsOverview;
