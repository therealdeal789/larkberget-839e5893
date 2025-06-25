
import React, { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ContactPersonCardProps {
  person: {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: string;
    bio: string;
  };
}

const ContactPersonCard = ({ person }: ContactPersonCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="p-6 border-[#136047]">
        <CardHeader className="pb-4 text-center">
          {person.image && (
            <div className="flex justify-center mb-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={person.image} alt={person.name} />
                <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
          )}
          <CardTitle className="text-lg text-[#136047]">{person.name}</CardTitle>
          <p className="text-larkberget-600 font-medium text-sm">{person.title}</p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-2 mb-4">
            {person.phone && (
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-larkberget-600 text-sm">
                  {person.phone}
                </a>
              </div>
            )}
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <a href={`mailto:${person.email}`} className="text-gray-600 hover:text-larkberget-600 text-sm">
                {person.email}
              </a>
            </div>
          </div>
          
          <button
            onClick={handleOpenDialog}
            className="w-full border border-[#136047] text-[#136047] hover:bg-[#136047] hover:text-white focus:bg-[#136047] focus:text-white active:bg-[#136047] active:text-white transition-all duration-200 ease-in-out bg-transparent px-3 py-2 rounded-md text-sm font-medium inline-flex items-center justify-center"
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              outline: 'none',
              boxShadow: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              WebkitTouchCallout: 'none',
            }}
          >
            <User className="w-4 h-4 mr-2" />
            Bio
          </button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{person.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">
              {person.bio}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactPersonCard;
