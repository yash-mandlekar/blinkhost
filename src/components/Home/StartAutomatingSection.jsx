import React from 'react';
import { User, Laptop, MousePointer } from 'lucide-react';

export default function StartAutomatingSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 sm:mb-6">
            Start Automating In Minutes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wondering how to self-host n8n? Forget complicated command-line installations that take hours.
            <br className="hidden sm:block" />
            With Blinkhost, you get n8n already installed on a VPS of your choice.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Step 1: Choose Your Plan
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Pick the n8n plan with the right resources for your automation needs 
                (see our recommendations above or choose your own server).
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Step 2: Start Automating
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Once we've set up your server including n8n, it's over to you! Start 
                connecting nodes and create your first workflow.
              </p>
            </div>
          </div>

          {/* Right Side - Visual Flow */}
          <div className="relative flex items-center justify-center gap-4 sm:gap-8 py-8">
            {/* Step 1 Badge */}


            {/* User Icon */}
            <div className="relative z-10">
              <div className="w-24 h-24 sm:w-32 sm:h-36 border-3 border-cyan-400 rounded-2xl flex flex-col items-center justify-center bg-white shadow-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 stroke-[1.5]" />
                </div>
                <div className="w-16 h-3 sm:w-20 sm:h-4 border-2 border-cyan-400 rounded-lg bg-white"></div>
              </div>
              
              {/* Dashed Arrow from User to Laptop */}
              <svg 
                className="absolute top-1/2 left-full -translate-y-1/2 w-12 sm:w-16 h-2" 
                style={{overflow: 'visible'}}
              >
                <defs>
                  <marker
                    id="arrowhead1"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
                  </marker>
                </defs>
                <line 
                  x1="0" 
                  y1="1" 
                  x2="48" 
                  y2="1" 
                  stroke="#06b6d4" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                  markerEnd="url(#arrowhead1)"
                />
              </svg>
            </div>

            {/* Laptop/Server Icon */}
            <div className="relative z-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 border-3 border-cyan-400 rounded-xl flex items-center justify-center bg-white shadow-lg">
                <Laptop className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-500 stroke-[1.5]" />
              </div>
              
              {/* Dashed Arrow from Laptop to n8n */}
              <svg 
                className="absolute top-1/2 left-full -translate-y-1/2 w-12 sm:w-16 h-2" 
                style={{overflow: 'visible'}}
              >
                <defs>
                  <marker
                    id="arrowhead2"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
                  </marker>
                </defs>
                <line 
                  x1="0" 
                  y1="1" 
                  x2="48" 
                  y2="1" 
                  stroke="#06b6d4" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                  markerEnd="url(#arrowhead2)"
                />
              </svg>
            </div>

            {/* n8n Interface */}
            <div className="relative z-10">
              <div className="w-32 h-28 sm:w-40 sm:h-32 border-3 border-cyan-400 rounded-2xl bg-white shadow-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="flex shrink-0">
                    <circle cx="12" cy="12" r="10" fill="#ea4e4e"/>
                    <circle cx="8" cy="10" r="1.5" fill="white"/>
                    <circle cx="12" cy="10" r="1.5" fill="white"/>
                    <circle cx="16" cy="10" r="1.5" fill="white"/>
                    <circle cx="10" cy="14" r="1.5" fill="white"/>
                    <circle cx="14" cy="14" r="1.5" fill="white"/>
                  </svg>
                  <span className="text-lg sm:text-xl font-semibold text-gray-800">n8n</span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <MousePointer className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 stroke-[1.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}