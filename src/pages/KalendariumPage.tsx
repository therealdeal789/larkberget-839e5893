
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Calendar, MapPin } from "lucide-react";

const KalendariumPage = () => {
  const events = [
    {
      date: "2025-02-14",
      title: "Bokslutskommuniké 2024",
      location: "Stockholm",
      description: "Publicering av bokslutskommuniké för helåret 2024"
    },
    {
      date: "2025-06-12",
      title: "Årsstämma 2025",
      location: "Stockholm",
      description: "Ordinarie årsstämma för aktieägare"
    },
    {
      date: "2025-08-22",
      title: "Delårsrapport januari-juni 2025",
      location: "Stockholm",
      description: "Publicering av delårsrapport för första halvåret 2025"
    },
    {
      date: "2026-02-13",
      title: "Bokslutskommuniké 2025",
      location: "Stockholm",
      description: "Publicering av bokslutskommuniké för helåret 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kalendarium
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Viktiga datum och händelser för investerare
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2 text-trust-600">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default KalendariumPage;
