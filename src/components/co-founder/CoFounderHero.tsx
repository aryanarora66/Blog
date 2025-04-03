'use client';

import Link from "next/link";
import { FaSearch, FaUserFriends, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function CoFounderHero() {
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
              <span className="block">Find Your Perfect</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Co-Founder Match
              </span>
            </h1>
            
            <p className="text-lg text-gray-600">
              Connect with like-minded entrepreneurs who complement your skills and share your vision. 
              Our AI-powered matching system helps you build your dream startup team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Find Your Match Now
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md text-center"
              >
                How It Works
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center">
                <FaUserFriends className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-700">10,000+ Founders</span>
              </div>
              <div className="flex items-center">
                <FaHandshake className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm text-gray-700">1,200+ Successful Matches</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <FeatureCard 
              icon={<FaSearch className="h-6 w-6 text-blue-600" />}
              title="Smart Matching"
              description="Our algorithm analyzes skills, experience, and personality"
            />
            <FeatureCard 
              icon={<FaLightbulb className="h-6 w-6 text-indigo-600" />}
              title="Complementary Skills"
              description="Find partners who fill your knowledge gaps"
            />
            <FeatureCard 
              icon={<FaUserFriends className="h-6 w-6 text-blue-600" />}
              title="Verified Profiles"
              description="All members undergo strict verification"
            />
            <FeatureCard 
              icon={<FaHandshake className="h-6 w-6 text-indigo-600" />}
              title="Shared Vision"
              description="Match with aligned goals and values"
            />
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