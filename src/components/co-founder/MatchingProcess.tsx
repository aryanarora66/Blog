'use client';

import { FaUserEdit, FaSearch, FaComments, FaRocket, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';

export default function MatchingProcess() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              How We Engineer Perfect Founder Matches
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our 4-step matching system has facilitated 1,200+ successful partnerships with a 92% satisfaction rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            icon={<FaUserEdit className="h-6 w-6" />}
            step="1"
            title="Strategic Profile"
            description="23 compatibility factors analyzed including values and work style"
            stats="+40% match accuracy"
            bgColor="from-blue-500 to-blue-600"
          />
          <ProcessStep
            icon={<FaSearch className="h-6 w-6" />}
            step="2"
            title="AI Matching"
            description="100+ data points evaluate ideal matches weekly"
            stats="50+ hours saved"
            bgColor="from-indigo-500 to-indigo-600"
          />
          <ProcessStep
            icon={<FaComments className="h-6 w-6" />}
            step="3"
            title="Structured Connection"
            description="Guided compatibility exercises and milestones"
            stats="3x faster bonding"
            bgColor="from-blue-500 to-blue-600"
          />
          <ProcessStep
            icon={<FaRocket className="h-6 w-6" />}
            step="4"
            title="Launch Support"
            description="Founder agreements and onboarding resources"
            stats="30-day support"
            bgColor="from-indigo-500 to-indigo-600"
          />
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why 73% of Matches Become Long-Term Partners
              </h3>
              
              <div className="space-y-6">
                <BenefitItem 
                  icon={<FaChartLine className="h-5 w-5 text-blue-600" />}
                  title="Data-Driven Compatibility"
                  description="Our algorithm analyzes founder fit beyond surface-level skills"
                />
                <BenefitItem 
                  icon={<FaHandshake className="h-5 w-5 text-indigo-600" />}
                  title="Conflict Prevention"
                  description="Structured frameworks to align expectations early"
                />
                <BenefitItem 
                  icon={<FaLightbulb className="h-5 w-5 text-blue-600" />}
                  title="Vision Alignment"
                  description="Tools to ensure shared goals and company direction"
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/matching-process-details"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm"
                >
                  See Detailed Process
                </Link>
                <Link
                  href="/success-stories"
                  className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md text-center text-sm"
                >
                  Founder Stories
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 flex items-center justify-center">
              <div className="w-full h-full min-h-[300px] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center p-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <FaHandshake className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  "Found my perfect match in 3 weeks"
                </h4>
                <p className="text-gray-600 text-center mb-4">
                  "Networty's matching system connected me with a co-founder who complemented my skills perfectly. We secured funding within 2 months."
                </p>
                <p className="text-sm font-medium text-gray-900">
                  - Sarah K., Founder at TechSprint
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  stats: string;
  bgColor: string;
}

function ProcessStep({ icon, step, title, description, stats, bgColor }: ProcessStepProps) {
  return (
    <div className="group h-full flex flex-col">
      <div className={`bg-gradient-to-r ${bgColor} rounded-t-xl p-5 flex items-center justify-between`}>
        <div className="p-2 bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-white text-xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
          {step}
        </span>
      </div>
      <div className="bg-white p-6 rounded-b-xl shadow-md flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="bg-gray-50 px-3 py-2 rounded-md">
          <p className="text-xs font-medium text-blue-600">{stats}</p>
        </div>
      </div>
    </div>
  );
}

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1 mr-4">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-50">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}