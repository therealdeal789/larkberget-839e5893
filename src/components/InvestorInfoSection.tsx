
import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorInfoSection = () => {
  return (
    <div className="bg-gradient-to-br from-larkberget-50 to-larkberget-100 rounded-2xl p-8 md:p-12 border border-[#136047]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-larkberget-900 mb-6">Investerarinformation</h2>
        <p className="text-lg text-gray-600 mb-8">
          Som börsnoterat företag följer vi strikta regler för informationsgivning. 
          All viktig information publiceras samtidigt till alla aktieägare och marknaden.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-[#136047]">
            <FileText className="w-8 h-8 text-larkberget-600 mx-auto mb-4" />
            <h4 className="font-semibold text-[#136047] mb-3">Finansiella rapporter</h4>
            <Link 
              to="/investerare/finansiella-rapporter"
              className="text-larkberget-600 hover:text-larkberget-700 font-medium text-sm"
            >
              Visa rapporter →
            </Link>
          </div>
          <div className="bg-white rounded-lg p-6 border border-[#136047]">
            <Mail className="w-8 h-8 text-larkberget-600 mx-auto mb-4" />
            <h4 className="font-semibold text-[#136047] mb-3">Pressmeddelanden</h4>
            <Link 
              to="/pressmeddelanden"
              className="text-larkberget-600 hover:text-larkberget-700 font-medium text-sm"
            >
              Läs pressmeddelanden →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorInfoSection;
