import React from 'react';

export default function N8nHeroSection() {
  return (
    <section className="w-full min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-800 mb-3 sm:mb-4">
            What is n8n?
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 font-light">
            Your Swiss Army Knife for Multi-Step Automations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Illustration */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Database Icon - Top Left */}
            <div className="absolute top-0 left-12 sm:left-16">
              <div className="w-16 h-12 border-2 border-blue-400 rounded-lg relative bg-white">
                <div className="absolute inset-x-2 top-2 h-1 bg-blue-400 rounded"></div>
                <div className="absolute inset-x-2 top-5 h-1 bg-blue-400 rounded"></div>
                <div className="absolute inset-x-2 top-8 h-1 bg-blue-400 rounded"></div>
              </div>
              {/* Dashed line */}
              <svg className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-24" style={{overflow: 'visible'}}>
                <line x1="1" y1="0" x2="40" y2="80" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* Spreadsheet Icon - Top Center Left */}
            <div className="absolute top-4 left-1/3">
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-4 h-4 bg-white"></div>
                  <div className="w-4 h-4 bg-white"></div>
                  <div className="w-4 h-4 bg-white"></div>
                  <div className="w-4 h-4 bg-white"></div>
                </div>
              </div>
              {/* Dashed line */}
              <svg className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-32" style={{overflow: 'visible'}}>
                <line x1="1" y1="0" x2="1" y2="100" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* Slack-like Icon - Middle Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8">
              <div className="w-12 h-12 rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-5 h-5 bg-blue-400 rounded-sm"></div>
                  <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                  <div className="w-5 h-5 bg-green-400 rounded-sm"></div>
                  <div className="w-5 h-5 bg-red-400 rounded-sm"></div>
                </div>
              </div>
              {/* Dashed line */}
              <svg className="absolute top-1/2 -translate-y-1/2 left-full w-24 h-2" style={{overflow: 'visible'}}>
                <line x1="0" y1="1" x2="80" y2="1" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* Plus Icon - Bottom Left */}
            <div className="absolute bottom-8 left-16 sm:left-20">
              <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-white">
                <div className="text-4xl text-gray-300 font-light">+</div>
              </div>
              {/* Dashed line */}
              <svg className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-24" style={{overflow: 'visible'}}>
                <line x1="1" y1="80" x2="1" y2="0" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* Central n8n node */}
            <div className="relative z-10 bg-white border-2 border-gray-200 rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="#ea4e4e"/>
                  <circle cx="12" cy="16" r="2.5" fill="white"/>
                  <circle cx="20" cy="16" r="2.5" fill="white"/>
                  <circle cx="28" cy="16" r="2.5" fill="white"/>
                  <circle cx="16" cy="24" r="2.5" fill="white"/>
                  <circle cx="24" cy="24" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="text-3xl font-semibold text-gray-800">n8n</span>
            </div>

            {/* Code Icon - Top Right */}
            <div className="absolute top-8 right-16 sm:right-20">
              <div className="w-16 h-12 border-2 border-blue-300 rounded-lg flex items-center justify-center bg-white">
                <span className="text-blue-400 text-xl font-mono">&lt;/&gt;</span>
              </div>
              {/* Dashed line */}
              <svg className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-32" style={{overflow: 'visible'}}>
                <line x1="1" y1="0" x2="-40" y2="100" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* Wrench Icon - Bottom Right */}
            <div className="absolute bottom-4 right-4 sm:right-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              {/* Dashed line */}
              <svg className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-24" style={{overflow: 'visible'}}>
                <line x1="1" y1="80" x2="-30" y2="0" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            {/* AI Icon - Right Side */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4">
              <div className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                AI
              </div>
              {/* Dashed line */}
              <svg className="absolute top-1/2 -translate-y-1/2 right-full w-24 h-2" style={{overflow: 'visible'}}>
                <line x1="80" y1="1" x2="0" y2="1" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Think of <strong className="font-semibold text-gray-900">n8n</strong> as a powerful toolkit that connects different apps and 
              services to handle repetitive tasks for you. It uses a simple, visual 
              drag-and-drop editor where you link together <strong className="font-semibold text-gray-900">nodes</strong> to create a{' '}
              <strong className="font-semibold text-gray-900">workflow</strong>. Each node is a step in your process.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              n8n is an <strong className="font-semibold text-gray-900">open-source workflow automation tool</strong> that's built for 
              flexibility. You can write your own custom code, connect to internal 
              databases, integrate AI agents, or use an HTTP node to talk to 
              virtually any service with an API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}