import React from 'react';
import { Wallet, Rocket, GitBranch, Cpu, Link2, Fingerprint } from 'lucide-react';

export default function N8nSelfHostSection() {
  const benefits = [
    {
      icon: <Wallet className="w-12 h-12 text-blue-500" />,
      title: "Pay one flat monthly fee",
      description: "for your server - that's it."
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "Unlimited workflows",
      description: "- no extra costs - queue mode included."
    },
    {
      icon: <GitBranch className="w-12 h-12 text-blue-500" />,
      title: "Total flexibility",
      description: "to customize code, nodes, and connections."
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Fast, reliable performance",
      description: "with allocated resources."
    },
    {
      icon: <Link2 className="w-12 h-12 text-blue-500" />,
      title: "Integrate anything",
      description: ": internal databases, APIs, and more."
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-blue-500" />,
      title: "Full data privacy",
      description: "and SSL certificate for solid security."
    }
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Self-Host n8n on the Blinkhost Cloud?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Self-hosting n8n on your own VPS gives you a level of freedom, power, and control that the n8n 
            Cloud or alternative workflow automation platforms like Zapier or Make simply can't offer.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="mb-6 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300">
                  {benefit.icon}
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title.split(' ').map((word, i) => {
                      // Bold the first part before description
                      if (benefit.title.includes(':') || benefit.title.includes('-')) {
                        const parts = benefit.title.split(/(:|-)/);
                        if (i === 0) {
                          return <strong key={i}>{word} </strong>;
                        }
                        return word + ' ';
                      }
                      return word + ' ';
                    })}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}