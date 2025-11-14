import React from "react";

const PricingSection = () => {
  return (
    <section className="py-20 px-8 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Scalable hosting solutions for every need and budget
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Starter
              </h3>
              <div className="text-4xl font-bold text-accent-orange mb-6">
                ₹99<span className="text-lg text-gray-600 font-normal">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>1
                  Website
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>10GB
                  SSD Storage
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>100GB
                  Bandwidth
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>Free
                  SSL Certificate
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>Email
                  Support
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>99.9%
                  Uptime
                </li>
              </ul>
            </div>
            <button className="w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
              Choose Starter
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl border-2 border-accent-orange relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4 mt-2">
                Professional
              </h3>
              <div className="text-4xl font-bold text-accent-orange mb-6">
                ₹199
                <span className="text-lg text-gray-600 font-normal">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>5
                  Websites
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>50GB
                  SSD Storage
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>
                  Unlimited Bandwidth
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>Free
                  SSL Certificate
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>24/7
                  Live Chat Support
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>Free
                  Daily Backups
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>99.9%
                  Uptime
                </li>
              </ul>
            </div>
            <button className="w-full gradient-orange text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Choose Professional
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Business
              </h3>
              <div className="text-4xl font-bold text-accent-orange mb-6">
                ₹399
                <span className="text-lg text-gray-600 font-normal">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>
                  Unlimited Websites
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>200GB
                  SSD Storage
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>
                  Unlimited Bandwidth
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>Free
                  SSL Certificate
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>
                  Priority 24/7 Support
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>Free
                  Daily Backups
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>CDN
                  Integration
                </li>
                <li className="flex items-center">
                  <span className="text-accent-orange font-bold mr-3">✓</span>99.9%
                  Uptime
                </li>
              </ul>
            </div>
            <button className="w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
              Choose Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
