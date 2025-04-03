'use client';

import Link from 'next/link';
import { FaHandshake, FaChartLine, FaUserTie, FaLightbulb } from 'react-icons/fa';

export default function FundingHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8 pb-20"
      style={{ paddingTop: '100px' }} // Added 100px top padding here
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="block">Secure Funding for</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your Startup
              </span>
            </h1>
            
            <p className="text-lg text-gray-600">
              Connect with 500+ active investors ready to fund innovative startups like yours.
              Our platform has helped founders raise over $50M in seed to Series A funding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/investor-matches" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Meet Your Investors →
              </Link>
              <Link 
                href="/funding-guide" 
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md text-center"
              >
                Funding Playbook
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center">
                <FaHandshake className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-700">500+ Verified Investors</span>
              </div>
              <div className="flex items-center">
                <FaChartLine className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm text-gray-700">$50M+ Raised</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Investor Types */}
          <div className="grid grid-cols-2 gap-6">
            <InvestorType 
              icon={<FaUserTie className="h-6 w-6 text-blue-600" />}
              title="Angel Investors"
              description="Individual investors writing $25K-$250K checks for early-stage startups"
            />
            <InvestorType 
              icon={<FaLightbulb className="h-6 w-6 text-indigo-600" />}
              title="VC Firms"
              description="Top venture capital firms investing $500K-$5M in high-growth startups"
            />
            <InvestorType 
              icon={<FaHandshake className="h-6 w-6 text-blue-600" />}
              title="Syndicates"
              description="Investor groups pooling capital for larger funding rounds"
            />
            <InvestorType 
              icon={<FaChartLine className="h-6 w-6 text-indigo-600" />}
              title="Accelerators"
              description="YC-alumni and top accelerators offering funding + mentorship"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface InvestorTypeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InvestorType({ icon, title, description }: InvestorTypeProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="flex flex-col space-y-3">
        <div className="p-3 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}