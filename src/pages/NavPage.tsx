
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const navData = [
  { date: "2025-11-30", nav: 2.94, label: "30 nov 2025" },
  { date: "2026-01-15", nav: 3.08, label: "15 jan 2026" },
  { date: "2026-02-16", nav: 3.00, label: "16 feb 2026" },
];

const NavPage = () => {
  // Calculate change
  const latestNav = navData[navData.length - 1].nav;
  const previousNav = navData[0].nav;
  const change = latestNav - previousNav;
  const changePercent = ((change / previousNav) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-larkberget-50">
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Substansvärde (NAV)
            </h1>
            <p className="text-xl text-white/80">
              Substansvärde per aktie
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Current NAV Highlight */}
            <div className="mb-12 grid md:grid-cols-3 gap-6">
              <div className="bg-larkberget-50 rounded-xl p-6 text-center border border-larkberget-200">
                <p className="text-sm text-trust-600 mb-2">Senaste NAV</p>
                <p className="text-4xl font-bold text-larkberget-700">{latestNav.toFixed(2)} SEK</p>
                <p className="text-sm text-trust-500 mt-2">{navData[navData.length - 1].label}</p>
              </div>
              <div className="bg-earth-50 rounded-xl p-6 text-center border border-earth-200">
                <p className="text-sm text-trust-600 mb-2">Förändring</p>
                <p className={`text-4xl font-bold ${change >= 0 ? 'text-larkberget-600' : 'text-red-600'}`}>
                  {change >= 0 ? '+' : ''}{change.toFixed(2)} SEK
                </p>
                <p className="text-sm text-trust-500 mt-2">
                  {change >= 0 ? '+' : ''}{changePercent}%
                </p>
              </div>
              <div className="bg-trust-50 rounded-xl p-6 text-center border border-trust-200">
                <p className="text-sm text-trust-600 mb-2">Startdatum NAV</p>
                <p className="text-4xl font-bold text-trust-700">{previousNav.toFixed(2)} SEK</p>
                <p className="text-sm text-trust-500 mt-2">{navData[0].label}</p>
              </div>
            </div>

            {/* NAV Chart */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-larkberget-900 mb-8 text-center">
                NAV-utveckling
              </h2>
              <div className="w-full bg-white rounded-xl shadow-sm border border-earth-300 p-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={navData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="label" 
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                        axisLine={{ stroke: '#d1d5db' }}
                      />
                      <YAxis 
                        domain={[2.5, 3.5]}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                        axisLine={{ stroke: '#d1d5db' }}
                        tickFormatter={(value) => `${value.toFixed(2)} SEK`}
                      />
                      <Tooltip 
                        formatter={(value: number) => [`${value.toFixed(2)} SEK`, 'NAV']}
                        labelStyle={{ color: '#1f2937' }}
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="nav" 
                        stroke="#2d5a3d" 
                        strokeWidth={3}
                        dot={{ fill: '#2d5a3d', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, fill: '#3d7a5d' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* NAV Table */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-larkberget-900 mb-8 text-center">
                Historiskt substansvärde
              </h2>
              <div className="w-full bg-white rounded-xl shadow-sm border border-earth-300 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-larkberget-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-larkberget-900 border-b border-earth-300">
                          Datum
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-larkberget-900 border-b border-earth-300">
                          NAV per aktie
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-larkberget-900 border-b border-earth-300">
                          Förändring
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...navData].reverse().map((item, index, arr) => {
                        const prevItem = arr[index + 1];
                        const itemChange = prevItem ? item.nav - prevItem.nav : null;
                        const itemChangePercent = prevItem ? ((itemChange! / prevItem.nav) * 100).toFixed(2) : null;
                        
                        return (
                          <tr key={item.date} className="hover:bg-larkberget-50/50 transition-colors">
                            <td className="py-4 px-6 text-trust-700 border-b border-earth-100">
                              {item.label}
                            </td>
                            <td className="py-4 px-6 text-right font-medium text-larkberget-800 border-b border-earth-100">
                              {item.nav.toFixed(2)} SEK
                            </td>
                            <td className={`py-4 px-6 text-right border-b border-earth-100 font-medium ${
                              itemChange === null 
                                ? 'text-trust-500' 
                                : itemChange >= 0 
                                  ? 'text-larkberget-600' 
                                  : 'text-red-600'
                            }`}>
                              {itemChange === null 
                                ? '–' 
                                : `${itemChange >= 0 ? '+' : ''}${itemChange.toFixed(2)} SEK (${itemChange >= 0 ? '+' : ''}${itemChangePercent}%)`
                              }
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-trust-50 rounded-xl p-8 border border-trust-200">
              <h3 className="text-xl font-semibold text-larkberget-900 mb-4">
                Om substansvärde (NAV)
              </h3>
              <p className="text-trust-700 leading-relaxed">
                Substansvärdet (Net Asset Value, NAV) representerar det verkliga värdet per aktie baserat på 
                bolagets tillgångar minus skulder. NAV uppdateras regelbundet och ger investerare en indikation 
                på aktiens underliggande värde.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default NavPage;
