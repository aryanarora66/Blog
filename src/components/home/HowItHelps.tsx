'use client';

import { FaUserFriends, FaHandHoldingUsd, FaChartBar } from 'react-icons/fa';

export default function HowItHelps() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              🚀 How Networty.com Helps You
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to accelerate your startup journey from conception to growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<FaUserFriends className="h-8 w-8 text-blue-600" />}
            title="Find the Right Co-Founder"
            description="Match with talented entrepreneurs who complement your skills and share your vision through our AI-powered matching system."
            gradient="from-blue-100 to-blue-50"
          />
          <BenefitCard
            icon={<FaHandHoldingUsd className="h-8 w-8 text-indigo-600" />}
            title="Secure Startup Funding"
            description="Get access to angel investors, venture capitalists, and funding opportunities tailored specifically for your startup stage and industry."
            gradient="from-indigo-100 to-indigo-50"
          />
          <BenefitCard
            icon={<FaChartBar className="h-8 w-8 text-purple-600" />}
            title="Explore Startup Insights"
            description="Stay updated with the latest trends, market research, and funding news to make data-driven decisions for your business."
            gradient="from-purple-100 to-purple-50"
          />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function BenefitCard({ icon, title, description, gradient }: BenefitCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg`}>
      <div className="flex flex-col h-full">
        <div className="p-3 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-6">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
}