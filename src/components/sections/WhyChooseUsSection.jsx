import { Clock9, DollarSign, Shield, Zap } from "lucide-react";
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-20 px-8" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-4">
          Why Choose BlinkHost.in?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Powerful features designed to give your website the performance it
          deserves
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
              <Zap />
            </div>
            <h3 className="text-xl font-semibold text-primary-blue mb-4">
              Lightning Fast Speed
            </h3>
            <p className="text-gray-600">
              SSD storage and advanced caching ensure your website loads in
              under 2 seconds.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
              <Shield />
            </div>
            <h3 className="text-xl font-semibold text-primary-blue mb-4">
              Enterprise Security
            </h3>
            <p className="text-gray-600">
              Free SSL certificates, DDoS protection, malware scanning, and
              daily backups.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
              <Clock9 />
            </div>
            <h3 className="text-xl font-semibold text-primary-blue mb-4">
              24/7 Expert Support
            </h3>
            <p className="text-gray-600">
              Our technical experts are available round the clock via live chat,
              email, and phone.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-orange/20 transition-colors duration-300">
              <DollarSign />
            </div>
            <h3 className="text-xl font-semibold text-primary-blue mb-4">
              Affordable Plans
            </h3>
            <p className="text-gray-600">
              Premium hosting features at competitive prices with a 30-day
              money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
