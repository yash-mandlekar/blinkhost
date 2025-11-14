'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I use n8n once it's installed?",
      answer: "Once n8n is installed, you can access it through your web browser. The interface allows you to create workflows by connecting different nodes. Simply drag and drop nodes onto the canvas, configure them, and connect them to automate your tasks."
    },
    {
      question: "What is an n8n AI Agent?",
      answer: "An n8n AI Agent is an automated workflow that leverages artificial intelligence capabilities to perform complex tasks. It can integrate with various AI services and APIs to process data, make decisions, and execute actions based on intelligent analysis."
    },
    {
      question: "How does n8n compare to Zapier and Make?",
      answer: "n8n is open-source and self-hostable, giving you full control over your data and workflows. Unlike Zapier and Make, n8n offers unlimited workflow executions when self-hosted, more flexibility in customization, and lower costs at scale."
    },
    {
      question: "Why should developers use n8n?",
      answer: "Developers choose n8n for its open-source nature, extensive API integrations, ability to write custom code, self-hosting options, and fair pricing. It provides complete control over automation workflows and can be extended with custom nodes."
    },
    {
      question: "How do I sync CRM data with Google Sheets using n8n?",
      answer: "Create a workflow that connects your CRM node with the Google Sheets node. Configure triggers to detect changes in your CRM, then map the data fields to corresponding columns in your Google Sheet. You can schedule regular syncs or trigger them based on specific events."
    },
    {
      question: "What's the difference between n8n Cloud and self-hosted n8n?",
      answer: "n8n Cloud is a fully managed service hosted by n8n, requiring no setup or maintenance. Self-hosted n8n gives you complete control and privacy, runs on your infrastructure, and has no execution limits, but requires you to manage updates and hosting."
    },
    {
      question: "How do I run n8n on Docker?",
      answer: "Pull the n8n Docker image using 'docker pull n8nio/n8n', then run it with 'docker run -it --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n'. Access n8n at localhost:5678. For production, use Docker Compose with proper volume mounting and environment variables."
    },
    {
      question: "How can I install n8n on Windows?",
      answer: "Install Node.js on Windows, then use npm to install n8n globally with 'npm install n8n -g'. Alternatively, you can use Docker Desktop for Windows or WSL2 with Ubuntu to run n8n in a Linux environment."
    },
    {
      question: "How can I install n8n on my existing server?",
      answer: "Install Node.js (version 18 or higher) on your server, then run 'npm install n8n -g'. For production, set up n8n as a system service using PM2 or systemd, configure a reverse proxy with Nginx or Apache, and enable SSL certificates."
    },
    {
      question: "Can I add additional users to my n8n instance?",
      answer: "Yes, n8n supports multiple users. You can add users through the settings panel in n8n Cloud or self-hosted instances. Each user can have different permission levels and access to specific workflows based on your configuration."
    },
    {
      question: "How long will it take to get my n8n server up and running?",
      answer: "With Docker, you can have n8n running in under 5 minutes. Traditional installation via npm takes about 10-15 minutes. Setting up a production-ready instance with SSL, domain configuration, and security measures typically takes 30-60 minutes."
    },
    {
      question: "What support is available for n8n?",
      answer: "n8n offers community support through their forum and Discord channel, extensive documentation, video tutorials, and workflow templates. n8n Cloud subscribers get priority email support, while enterprise customers receive dedicated support channels."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-3 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Frequently Asked Questions about n8n Hosting
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            FAQs | More information on n8n Hosting on Blinkhost
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg transition-colors ${
                openIndex === index ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50 sm:px-6 sm:py-5"
              >
                <span className="pr-4 text-base font-semibold text-gray-800 sm:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex shrink-0 text-gray-600 transition-transform duration-300 sm:h-6 sm:w-6 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-2 text-sm text-gray-700 sm:px-6 sm:pb-6 sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
