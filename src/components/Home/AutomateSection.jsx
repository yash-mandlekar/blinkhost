import React from 'react';
import { Code, Store, Target, Monitor } from 'lucide-react';

export default function AutomateSection() {
  const features = [
    {
      icon: Code,
      title: 'Developers',
      description: 'Connect to private APIs and databases, run custom code, and automate your CI/CD pipeline.',
      color: 'text-cyan-500'
    },
    {
      icon: Store,
      title: 'Small & Medium Businesses',
      description: 'Automate lead management, sync sales and inventory data, and trigger personalized onboarding flows.',
      color: 'text-cyan-500'
    },
    {
      icon: Target,
      title: 'Marketers & Agencies',
      description: 'Schedule and publish content, build powerful lead nurturing flows, and consolidate client reports.',
      color: 'text-cyan-500'
    },
    {
      icon: Monitor,
      title: 'IT & Operations Teams',
      description: 'Monitor system and website health, automate account creation, and assign helpdesk tickets automatically.',
      color: 'text-cyan-500'
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mb-4">
            What Will You Automate?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Self-hosting open-source n8n opens up a world of possibilities. Because you have full control 
            and unlimited executions, you can automate simple tasks and complex systems alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-cyan-400 rounded-lg flex items-center justify-center bg-white">
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.color} stroke-[1.5]`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}