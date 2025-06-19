
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar } from "lucide-react";

const LarkbergetFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-larkberget-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-3">
              <img 
                src="/lovable-uploads/f4ad72e7-a2d8-4678-882c-f86cc39ed938.png" 
                alt="Lärkberget AB" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-larkberget-200 mb-4 max-w-md text-sm">
              Bolaget är publikt och noterat på den svenska marknadsplatsen Nasdaq First North Growth Market. Bolagets Certified Adviser är Bergs Securities AB.
            </p>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-larkberget-300 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@larkberget.se</span>
              </div>
              <div className="flex items-center space-x-2 text-larkberget-300 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3 text-larkberget-100">Navigation</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Hem</Link></li>
              <li><Link to="/om-larkberget" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Om Lärkberget</Link></li>
              <li><Link to="/investerare" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Investerare</Link></li>
              <li><Link to="/pressmeddelanden" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Pressmeddelanden</Link></li>
              <li><Link to="/kontakt" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Kontakt</Link></li>
            </ul>
          </div>

          {/* Investor info */}
          <div>
            <h4 className="font-semibold mb-3 text-larkberget-100">Investerarinformation</h4>
            <ul className="space-y-1">
              <li><Link to="/pressmeddelanden" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Pressmeddelanden</Link></li>
              <li><Link to="/investerare/kalendarium" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Kalendarium</Link></li>
              <li><Link to="/investerare/finansiella-rapporter" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Finansiella rapporter</Link></li>
              <li><Link to="/investerare/aktieagare" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Bolags- & aktieinformation</Link></li>
              <li><Link to="/investerare/radgivare" className="text-larkberget-300 hover:text-larkberget-500 transition-colors text-sm">Certifierad rådgivare</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-trust-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-larkberget-300 text-sm">
            © {currentYear} Lärkberget AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LarkbergetFooter;
