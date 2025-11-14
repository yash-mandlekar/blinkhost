import React from 'react';
import { Globe, Cloud, Plane, Rocket } from 'lucide-react';

export default function GlobalLocationsSection() {
  const locations = [
    { name: "US (West)", top: "33%", left: "18%" },
    { name: "US (Central)", top: "38%", left: "23%" },
    { name: "US (East)", top: "35%", left: "30%" },
    { name: "United Kingdom", top: "28%", left: "47%" },
    { name: "EU", top: "30%", left: "52%" },
    { name: "Asia (India)", top: "48%", left: "62%" },
    { name: "Asia (Japan)", top: "33%", left: "78%" },
    { name: "Asia (Singapore)", top: "58%", left: "73%" },
    { name: "Australia (Sydney)", top: "70%", left: "78%" }
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            9 Regions, 11 Locations, Global Availability
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Host your n8n system at a Contabo Data Center near you to ensure low-latency performant 
            access, redundancy, as well as compliance and data residency.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-linear-to-br from-blue-50 to-gray-100 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 text-gray-400 opacity-50">
            <Rocket className="w-12 h-12 transform rotate-45" />
          </div>
          <div className="absolute top-8 right-8 text-gray-400 opacity-50">
            <Cloud className="w-16 h-16" />
          </div>
          <div className="absolute bottom-16 left-1/4 text-gray-400 opacity-40">
            <Cloud className="w-12 h-12" />
          </div>
          
          {/* World Map SVG Background */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Simplified World Map Shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-5xl">
                {/* Map background with subtle gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/80 to-blue-100/60 rounded-full blur-3xl transform scale-90"></div>
                
                {/* SVG World Map Illustration */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified continents */}
                  <path d="M 150 150 Q 200 120 280 140 L 320 180 Q 300 200 280 220 L 240 240 Q 200 230 180 200 Z" fill="#94a3b8" />
                  <path d="M 350 140 Q 400 130 450 150 L 480 180 Q 470 220 440 240 L 400 250 Q 370 240 360 210 Z" fill="#94a3b8" />
                  <path d="M 500 160 Q 580 150 640 170 L 680 210 Q 670 260 640 280 L 580 290 Q 540 270 520 240 Z" fill="#94a3b8" />
                  <path d="M 700 180 Q 760 170 810 190 L 840 230 Q 830 270 800 290 L 760 295 Q 720 280 710 250 Z" fill="#94a3b8" />
                  <path d="M 200 280 Q 250 270 300 290 L 320 340 Q 300 380 270 400 L 220 405 Q 190 390 180 350 Z" fill="#94a3b8" />
                  <path d="M 750 320 Q 800 310 850 330 L 870 380 Q 850 420 820 430 L 780 430 Q 750 410 745 370 Z" fill="#94a3b8" />
                </svg>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Curved connection lines */}
                  <path d="M 18 33 Q 35 25 47 28" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                  <path d="M 30 35 Q 45 30 52 30" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                  <path d="M 52 30 Q 65 35 78 33" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                  <path d="M 52 30 Q 60 40 62 48" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                  <path d="M 62 48 Q 70 45 78 33" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                  <path d="M 73 58 Q 76 50 78 33" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                  <path d="M 78 70 Q 76 60 73 58" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" strokeDasharray="2,2" />
                </svg>

                {/* Location Markers */}
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ top: location.top, left: location.left }}
                  >
                    {/* Location Badge */}
                    <div className="relative">
                      <div className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-cyan-600">
                        <span>{location.name}</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Ping Animation */}
                      <div className="absolute top-1/2 right-3 -translate-y-1/2 w-2 h-2">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Person Illustration at bottom center */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="mt-2 w-20 h-8 bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Location List (visible on small screens) */}
          <div className="mt-8 lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              {locations.map((location, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center shadow-sm">
                  <span className="text-sm font-semibold text-gray-700">{location.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            <Globe className="w-4 h-4 inline mr-2" />
            Global network ensuring optimal performance and reliability
          </p>
        </div>
      </div>
    </section>
  );
}