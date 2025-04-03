'use client';

import Link from "next/link";
import { FaUserFriends, FaHandHoldingUsd, FaLightbulb, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function JoinToday() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              🚀 Join Networty.com Today
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start building your dream startup with the right co-founder and funding support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Your Startup Success Journey Starts Here
              </h3>
              <p className="text-gray-600">
                Networty.com provides everything you need to launch and grow your startup successfully.
              </p>
              
              <ul className="space-y-4">
                <BenefitItem 
                  icon={<FaUserFriends className="h-5 w-5 text-blue-600" />}
                  text="Find compatible co-founders with complementary skills"
                />
                <BenefitItem 
                  icon={<FaHandHoldingUsd className="h-5 w-5 text-indigo-600" />}
                  text="Connect with investors actively funding startups"
                />
                <BenefitItem 
                  icon={<FaLightbulb className="h-5 w-5 text-blue-600" />}
                  text="Access exclusive startup resources and tools"
                />
                <BenefitItem 
                  icon={<FaChartLine className="h-5 w-5 text-indigo-600" />}
                  text="Track your startup growth with our analytics dashboard"
                />
                <BenefitItem 
                  icon={<FaShieldAlt className="h-5 w-5 text-blue-600" />}
                  text="Secure your venture with our legal template library"
                />
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/co-founder" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Find Your Co-Founder →
              </Link>
              <Link 
                href="/startup-funding" 
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md text-center"
              >
                Apply for Funding →
              </Link>
            </div>
          </div>
          
          {/* Right Column - Stats/Testimonials */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Trusted By Thousands of Founders
                </h3>
                <p className="text-gray-500">
                  Join our growing community of successful startups
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <StatCard 
                  number="1,200+"
                  label="Successful Matches"
                />
                <StatCard 
                  number="$50M+"
                  label="Funding Raised"
                />
                <StatCard 
                  number="500+"
                  label="Active Investors"
                />
                <StatCard 
                  number="10K+"
                  label="Startups"
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 italic">
                  "Networty connected me with my perfect co-founder. We secured funding within 3 months and are now growing 20% MoM."
                </p>
                <p className="text-sm font-medium text-gray-900 mt-2">
                  - Sarah K., Founder of TechSprint
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 mt-1 mr-3">{icon}</span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
      <p className="text-2xl font-bold text-blue-600">{number}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}