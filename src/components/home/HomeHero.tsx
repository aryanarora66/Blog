'use client';

import Link from "next/link";
import { FaSearch, FaChartLine, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function HomeHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 to-indigo-50 w-full px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '100px', paddingBottom: '80px' }} // Added 100px top padding
    >
      <div className="w-full mx-auto"> {/* Full width container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"> {/* Centered content with max-width */}
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Find Your Co-Founder</span>
              <span className="block">Secure Funding</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Grow Faster
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Startups thrive with the right people and resources. At Networty.com, we help entrepreneurs 
              find the perfect co-founder, connect with investors, and access startup opportunities—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/co-founder" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Find a Co-Founder
              </Link>
              <Link 
                href="/startup-funding" 
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md text-center"
              >
                Explore Funding
              </Link>
            </div>
          </div>
          
          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<FaSearch className="h-6 w-6 text-blue-600" />}
              title="Smart Matching"
              description="AI-powered algorithm connects you with compatible co-founders"
            />
            <FeatureCard 
              icon={<FaChartLine className="h-6 w-6 text-indigo-600" />}
              title="Investor Network"
              description="Access to 500+ active investors looking for opportunities"
            />
            <FeatureCard 
              icon={<FaLightbulb className="h-6 w-6 text-blue-600" />}
              title="Resources Hub"
              description="Curated tools and templates to accelerate your startup"
            />
            <FeatureCard 
              icon={<FaHandshake className="h-6 w-6 text-indigo-600" />}
              title="Partnerships"
              description="Strategic alliances with tech partners and service providers"
            />
          </div>
        </div>
      </div>
      
      {/* Trust indicators - now full width with constrained content */}
      <div className="w-full border-t border-gray-200 mt-16 pt-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 mb-6">Trusted by startups at</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 items-center px-4">
            <TrustLogo text="YCombinator" />
            <TrustLogo text="Techstars" />
            <TrustLogo text="500 Startups" />
            <TrustLogo text="Founders Fund" />
            <TrustLogo text="Sequoia" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
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

function TrustLogo({ text }: { text: string }) {
  return (
    <div className="text-gray-700 font-medium opacity-80 hover:opacity-100 transition-opacity text-sm md:text-base">
      {text}
    </div>
  );
}