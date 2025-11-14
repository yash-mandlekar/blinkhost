import React from 'react';
import { Shield, Database, Clock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Incredible Security",
      description: "Get advanced security with DDoS Protection, offering attack detection and mitigation to block harmful traffic from accessing your website."
    },
    {
      icon: Database,
      title: "Multiple Data Centers",
      description: "Targeting a global audience? Blinkhost lets you select a ",
      linkText: "data center",
      descriptionEnd: " location to enhance your website's local search visibility."
    },
    {
      icon: Clock,
      title: "99.99% Uptime",
      description: "Ensure your website is available 24/7 to the visitors of your website. Get 99.99% committed Uptime and enjoy uninterrupted services at Blinkhost."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Blinkhost{' '}
            <span style={{ color: '#6366f1' }}>Awesome?</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            At Blinkhost, get everything for your online business, from static websites to e-commerce stores or CRMs. Enjoy lightning-fast performance, unmatched security, scalable plans, and 24/7 customer support.
          </p>
        </div>

        {/* Features Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ border: '2px solid #e5e7eb' }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#e0e7ff' }}
                >
                  <feature.icon className="w-10 h-10" style={{ color: '#6366f1' }} strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
                {feature.linkText && (
                  <>
                    <a href="#" className="text-blue-500 hover:underline">
                      {feature.linkText}
                    </a>
                    {feature.descriptionEnd}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid - Second Row (Duplicate) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={`duplicate-${index}`}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ border: '2px solid #e5e7eb' }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#e0e7ff' }}
                >
                  <feature.icon className="w-10 h-10" style={{ color: '#6366f1' }} strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
                {feature.linkText && (
                  <>
                    <a href="#" className="text-blue-500 hover:underline">
                      {feature.linkText}
                    </a>
                    {feature.descriptionEnd}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}