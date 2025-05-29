
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar } from "lucide-react";

const LarkbergetFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-larkberget-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/2656c953-5589-4467-af02-c14392971b3d.png" 
                alt="Lärkberget AB" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-larkberget-300 mb-6 max-w-md">
              Lärkberget fokuserar på långsiktiga investeringar med målet att skapa hållbar värdetillväxt för våra aktieägare.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-larkberget-300">
                <Mail className="w-4 h-4" />
                <span>info@larkberget.se</span>
              </div>
              <div className="flex items-center space-x-2 text-larkberget-300">
                <MapPin className="w-4 h-4" />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-larkberget-300 hover:text-white transition-colors">Hem</Link></li>
              <li><Link to="/om-larkberget" className="text-larkberget-300 hover:text-white transition-colors">Om Lärkberget</Link></li>
              <li><Link to="/investerare" className="text-larkberget-300 hover:text-white transition-colors">Investerare</Link></li>
              <li><Link to="/pressmeddelanden" className="text-larkberget-300 hover:text-white transition-colors">Pressmeddelanden</Link></li>
              <li><Link to="/kontakt" className="text-larkberget-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Investor info */}
          <div>
            <h4 className="font-semibold mb-4">Investerarinformation</h4>
            <ul className="space-y-2">
              <li><Link to="/investerare/finansiella-rapporter" className="text-larkberget-300 hover:text-white transition-colors">Finansiella rapporter</Link></li>
              <li><Link to="/investerare/substansvarde" className="text-larkberget-300 hover:text-white transition-colors">Substansvärde</Link></li>
              <li><Link to="/investerare/aktieagare" className="text-larkberget-300 hover:text-white transition-colors">Ägarstruktur</Link></li>
              <li><Link to="/investerare/radgivare" className="text-larkberget-300 hover:text-white transition-colors">Certifierad rådgivare</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-larkberget-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-larkberget-300 text-sm">
            © {currentYear} Lärkberget AB. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/investerare" className="text-larkberget-300 hover:text-white text-sm transition-colors">
              Integritetspolicy
            </Link>
            <Link to="/investerare" className="text-larkberget-300 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LarkbergetFooter;
