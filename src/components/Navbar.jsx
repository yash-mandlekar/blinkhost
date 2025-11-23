"use client";
import React, { useState } from "react";
import { 
  ChevronDown, 
  Server, 
  Globe, 
  Database, 
  Cloud, 
  ShoppingCart,
  Shield,
  Lock,
  Save,
  Mail,
  Briefcase,
  BookOpen,
  Info,
  MessageCircle,
  Search,
  RefreshCw,
  FileCheck,
  Layers,
  HardDrive,
  MonitorCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      label: "Wordpress",
      items: [
        { name: "Shared Wordpress Hosting", icon: Server, description: "Affordable hosting optimized for WordPress websites" },
        { name: "Wordpress Cloud Hosting", icon: Cloud, description: "High-performance cloud infrastructure for WordPress" },
        { name: "WooCommerce Hosting", icon: ShoppingCart, description: "Specialized hosting for online stores and shops" },
      ],
    },
    {
      label: "Domains & Hostings",
      hasColumns: true,
      columns: {
        left: {
          title: "Hosting",
          items: [
            { name: "Web Hosting", icon: Globe, description: "Reliable hosting for websites and applications" },
            { name: "Linux Hosting", icon: Server, description: "Robust Linux-based hosting solutions" },
            { name: "Windows Hosting", icon: MonitorCheck, description: "Windows server hosting with ASP.NET support" },
            { name: "Reseller Hosting", icon: Layers, description: "Start your own hosting business with ease" },
            { name: "Windows Reseller Hosting", icon: Database, description: "Resell Windows hosting packages" },
          ],
        },
        right: {
          title: "Domains",
          items: [
            { name: "Domain Search", icon: Search, description: "Find your perfect domain name instantly" },
            { name: "Domain Transfer", icon: RefreshCw, description: "Move your domains to us seamlessly" },
            { name: "Domain Registration", icon: FileCheck, description: "Register new domains at competitive prices" },
            { name: "Bulk Domain Search", icon: Layers, description: "Search multiple domains at once" },
          ],
        },
      },
    },
    {
      label: "VPS & Dedicated",
      hasColumns: true,
      columns: {
        left: {
          title: "VPS Hosting",
          items: [
            { name: "VPS Hosting", icon: Server, description: "Scalable virtual private servers for flexibility" },
            { name: "Manage VPS Hosting", icon: MonitorCheck, description: "Fully managed VPS with expert support" },
            { name: "Windows VPS Hosting", icon: Database, description: "Windows-based VPS for your applications" },
            { name: "Manage Windows VPS Hosting", icon: HardDrive, description: "Managed Windows VPS solutions" },
          ],
        },
        right: {
          title: "Dedicated Servers",
          items: [
            { name: "Dedicated Server", icon: Server, description: "Complete server resources for your business" },
            { name: "Windows Dedicated Server", icon: Database, description: "Powerful Windows dedicated hosting" },
            { name: "Manage Dedicated Server", icon: MonitorCheck, description: "Fully managed dedicated server hosting" },
          ],
        },
      },
    },
    {
      label: "Security and Email",
      hasColumns: true,
      columns: {
        left: {
          title: "Security",
          items: [
            { name: "Sectigo SSL Certificate", icon: Lock, description: "Secure your website with trusted SSL certificates" },
            { name: "Sitelock Web Security", icon: Shield, description: "Comprehensive website security and protection" },
            { name: "CodeGuard Website Backup", icon: Save, description: "Automated daily backups for your website" },
          ],
        },
        right: {
          title: "Email Services",
          items: [
            { name: "Enterprise Email", icon: Briefcase, description: "Professional email for large organizations" },
            { name: "Business Email", icon: Mail, description: "Custom email addresses for your business" },
            { name: "Google Workspace", icon: Mail, description: "Gmail with productivity tools for teams" },
            { name: "Titan Email", icon: Mail, description: "Smart email solution for professionals" },
          ],
        },
      },
    },
    {
      label: "Support",
      items: [
        { name: "Knowledge Base", icon: BookOpen, description: "Browse helpful articles and guides" },
        { name: "About us", icon: Info, description: "Learn more about our company" },
        { name: "Contact", icon: MessageCircle, description: "Get in touch with our team" },
      ],
    },
  ];

  return (
    <>
      <header className="bg-white fixed w-full top-0 z-50 shadow-sm border-b border-gray-100">
        <nav className="mx-auto flex justify-between items-center px-28 py-4">
          <div className="text-2xl font-bold text-orange-500">
            <img src="logo.png" alt="Logo" className="inline w-24 mr-2" />
          </div>
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="font-medium hover:text-orange-500 transition-colors duration-300 flex items-center gap-1 py-2"
                >
                  {menu.label}
                  <motion.div
                    animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {activeDropdown !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[73px] left-0 w-full bg-white shadow-lg border-t border-gray-100 z-40"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-28 py-8">
              {menuItems[activeDropdown].hasColumns ? (
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                      {menuItems[activeDropdown].columns.left.title}
                    </h3>
                    <div className="space-y-1">
                      {menuItems[activeDropdown].columns.left.items.map(
                        (item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={itemIndex}
                              href="#"
                              className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 rounded-md transition-all duration-200 group"
                            >
                              <Icon className="w-5 h-5 text-orange-400 group-hover:text-orange-500 transition-colors flex-shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-900 group-hover:text-orange-500">{item.name}</span>
                                <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                              </div>
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                      {menuItems[activeDropdown].columns.right.title}
                    </h3>
                    <div className="space-y-1">
                      {menuItems[activeDropdown].columns.right.items.map(
                        (item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={itemIndex}
                              href="#"
                              className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 rounded-md transition-all duration-200 group"
                            >
                              <Icon className="w-5 h-5 text-orange-400 group-hover:text-orange-500 transition-colors flex-shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-900 group-hover:text-orange-500">{item.name}</span>
                                <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                              </div>
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-8">
                  {menuItems[activeDropdown].items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={itemIndex}
                        href="#"
                        className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 rounded-md transition-all duration-200 group"
                      >
                        <Icon className="w-5 h-5 text-orange-400 group-hover:text-orange-500 transition-colors flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 group-hover:text-orange-500">{item.name}</span>
                          <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;