
import React from 'react';
import ContactPersonCard from './ContactPersonCard';
import { contactPersons } from '@/data/contactData';

const LeadershipSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-larkberget-900 mb-8 text-center">Ledning & styrelse</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {contactPersons.map((person, index) => (
          <ContactPersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
