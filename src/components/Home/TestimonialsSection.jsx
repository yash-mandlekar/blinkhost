import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-lg mb-6 text-gray-600">
              "BlinkHost.in has been incredible for our e-commerce site. The
              speed and reliability have significantly improved our customer
              experience."
            </p>
            <p className="font-semibold text-primary-blue">
              Priya Sharma, E-commerce Owner
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-lg mb-6 text-gray-600">
              "Migrating to BlinkHost.in was the best decision for our blog. The
              support team helped us every step of the way."
            </p>
            <p className="font-semibold text-primary-blue">Rahul Kumar, Blogger</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <p className="text-lg mb-6 text-gray-600">
              "As a web developer, I need reliable hosting for my clients.
              BlinkHost.in delivers consistently excellent performance."
            </p>
            <p className="font-semibold text-primary-blue">
              Sneha Patel, Web Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
