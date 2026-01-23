
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const navData = [
  { date: "2025-11-30", nav: 2.94, label: "30 nov 2025" },
  { date: "2026-01-15", nav: 3.08, label: "15 jan 2026" },
];

const NavHighlight = () => {
  const latestNav = navData[navData.length - 1].nav;
  const previousNav = navData[0].nav;
  const change = latestNav - previousNav;
  const changePercent = ((change / previousNav) * 100).toFixed(2);

  return (
    <section className="py-16 bg-gradient-to-br from-larkberget-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-larkberget-900 mb-4">
              Substansvärde (NAV)
            </h2>
            <p className="text-lg text-trust-600 max-w-2xl mx-auto">
              Substansvärde per aktie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Current NAV info */}
            <div className="bg-white rounded-2xl shadow-lg border border-earth-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-larkberget-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-larkberget-600" />
                </div>
                <div>
                  <p className="text-sm text-trust-500">Senaste substansvärde</p>
                  <p className="text-sm text-trust-400">{navData[navData.length - 1].label}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-5xl font-bold text-larkberget-700">{latestNav.toFixed(2)} <span className="text-2xl">SEK</span></p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-lg font-medium ${change >= 0 ? 'text-larkberget-600' : 'text-red-600'}`}>
                    {change >= 0 ? '+' : ''}{change.toFixed(2)} SEK
                  </span>
                  <span className={`text-sm px-2 py-1 rounded-full ${change >= 0 ? 'bg-larkberget-100 text-larkberget-700' : 'bg-red-100 text-red-700'}`}>
                    {change >= 0 ? '+' : ''}{changePercent}%
                  </span>
                </div>
              </div>

              {/* Mini table */}
              <div className="border-t border-earth-200 pt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-trust-500">
                      <th className="text-left py-2 font-medium">Datum</th>
                      <th className="text-right py-2 font-medium">NAV/aktie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...navData].reverse().map((item) => (
                      <tr key={item.date} className="border-t border-earth-100">
                        <td className="py-2 text-trust-700">{item.label}</td>
                        <td className="py-2 text-right font-medium text-larkberget-800">{item.nav.toFixed(2)} SEK</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Link 
                to="/investerare/nav"
                className="mt-6 inline-flex items-center gap-2 text-larkberget-600 hover:text-larkberget-800 font-medium transition-colors group"
              >
                Visa fullständig NAV-historik
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Chart */}
            <div className="bg-white rounded-2xl shadow-lg border border-earth-200 p-6">
              <h3 className="text-lg font-semibold text-larkberget-900 mb-4">NAV-utveckling</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={navData}
                    margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                  >
                    <XAxis 
                      dataKey="label" 
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                    />
                    <YAxis 
                      domain={[2.5, 3.5]}
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      axisLine={{ stroke: '#e5e7eb' }}
                      tickLine={false}
                      tickFormatter={(value) => `${value.toFixed(2)}`}
                      width={40}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`${value.toFixed(2)} SEK`, 'NAV']}
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        fontSize: '13px'
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
        </div>
      </div>
    </section>
  );
};

export default NavHighlight;
