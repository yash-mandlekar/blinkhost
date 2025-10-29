import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-16 px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-semibold text-accent-orange mb-6">
              BlinkHost.in
            </h4>
            <p className="mb-6 opacity-90">
              Empowering websites with fast, secure, and reliable hosting
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Web Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  SSL Certificates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Website Builder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Submit Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Status Page
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-orange transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8 text-center opacity-70">
          <p>&copy; 2025 BlinkHost.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
