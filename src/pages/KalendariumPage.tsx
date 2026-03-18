
import React, { useMemo } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";

interface CalendarEvent {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  displayDate: string;
}

const allEvents: CalendarEvent[] = [
  {
    title: "Bokslutskommuniké 2025",
    description: "Årsbokslut och kommuniké för 2025",
    date: "2026-02-12",
    displayDate: "12 februari 2026",
  },
  {
    title: "Årsredovisning 2025",
    description: "Fullständig årsredovisning för 2025",
    date: "2026-04-02",
    displayDate: "2 april 2026",
  },
  {
    title: "Årsstämma 2026",
    description: "Ordinarie bolagsstämma för 2026",
    date: "2026-05-07",
    displayDate: "7 maj 2026",
  },
  {
    title: "Halvårsrapport jan–jun 2026",
    description: "Halvårsrapport för första halvåret 2026",
    date: "2026-08-20",
    displayDate: "20 augusti 2026",
  },
  {
    title: "Bokslutskommuniké 2026",
    description: "Årsbokslut och kommuniké för 2026",
    date: "2027-02-11",
    displayDate: "11 februari 2027",
  },
];

const KalendariumPage = () => {
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      // Remove the event the day after its date
      const removalDate = new Date(eventDate);
      removalDate.setDate(removalDate.getDate() + 1);
      return today < removalDate;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kalendarium
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalendarium</h2>
              <p className="text-lg text-gray-600">
                Här hittar du viktiga datum för Lärkbergets finansiella rapportering och bolagsstämmor.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kommande händelser</h3>
                {upcomingEvents.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={event.date}
                        className={`flex justify-between items-center py-3 ${index < upcomingEvents.length - 1 ? "border-b border-gray-100" : ""}`}
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </div>
                        <span className="text-sm font-medium text-larkberget-600 whitespace-nowrap ml-4">
                          {event.displayDate}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Inga kommande händelser just nu.</p>
                )}
              </div>

              <div className="bg-larkberget-50 rounded-lg p-6 border border-larkberget-200">
                <h3 className="text-xl font-semibold text-larkberget-900 mb-4">Information</h3>
                <p className="text-larkberget-700">
                  Alla rapporter publiceras på denna webbplats samt via Nasdaq First North Growth Market. 
                  Exakta datum för publicering kommer att meddelas i god tid innan respektive rapport släpps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default KalendariumPage;

