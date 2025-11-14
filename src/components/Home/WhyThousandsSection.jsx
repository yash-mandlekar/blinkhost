import React from "react";

const WhyThousandsSection = () => {
  return (
    <section className="bg-white py-20 px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Why Thousands Trust BlinkHost.in
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              99.9% Uptime Guarantee
            </h4>
            <p className="text-gray-600">
              Your website stays online when it matters most with our robust
              infrastructure.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              Indian Data Centers
            </h4>
            <p className="text-gray-600">
              Servers located in India provide faster loading times for your
              local audience.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              One-Click Installations
            </h4>
            <p className="text-gray-600">
              Install WordPress, Joomla, and 100+ applications instantly with
              our control panel.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary-blue mb-3">
              30-Day Money Back
            </h4>
            <p className="text-gray-600">
              Try our hosting risk-free. Get your money back within 30 days if
              not satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThousandsSection;
