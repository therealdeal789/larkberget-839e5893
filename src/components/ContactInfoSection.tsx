
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactInfoSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <Card className="p-8 border-[#136047]">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-3 text-[#136047]">
            <Mail className="w-6 h-6 text-larkberget-600" />
            <span>E-post</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            För allmänna frågor och investerarinformation:
          </p>
          <a 
            href="mailto:info@larkberget.se"
            className="text-larkberget-600 hover:text-larkberget-700 font-medium"
          >
            info@larkberget.se
          </a>
        </CardContent>
      </Card>

      <Card className="p-8 border-[#136047]">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-3 text-[#136047]">
            <MapPin className="w-6 h-6 text-larkberget-600" />
            <span>Adress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-2">Lärkberget AB</p>
          <p className="text-gray-600 mb-2">c/o Aboutvalue</p>
          <p className="text-gray-600 mb-2">Nybrogatan 7</p>
          <p className="text-gray-600 mb-4">SE-114 34 Stockholm</p>
          
          <div className="mt-4 pt-4 border-t border-[#136047]">
            <p className="text-gray-600 text-sm mb-1">
              <strong>Org.nummer:</strong> 556403-3818
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Styrelsens säte:</strong> Stockholm
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfoSection;
