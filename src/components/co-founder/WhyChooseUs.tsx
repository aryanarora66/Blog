'use client';

import { FaBrain, FaNetworkWired, FaWallet } from 'react-icons/fa';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Why Founders Choose Networty
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The platform designed by founders, for founders - trusted by 25,000+ entrepreneurs worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AdvantageCard
            icon={<FaBrain className="h-8 w-8 text-blue-600" />}
            title="AI-Powered Precision Matching"
            description="Our algorithm analyzes 20+ compatibility factors including skills, values, and working style"
            stat="95% match satisfaction rate"
          />
          <AdvantageCard
            icon={<FaNetworkWired className="h-8 w-8 text-indigo-600" />}
            title="Elite Founder Ecosystem"
            description="Access our network of vetted entrepreneurs, investors, and industry mentors"
            stat="1M+ monthly connections"
          />
          <AdvantageCard
            icon={<FaWallet className="h-8 w-8 text-blue-600" />}
            title="Risk-Free Exploration"
            description="Start completely free - pay only when you're ready to unlock premium features"
            stat="$0 commitment"
          />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Find Your Missing Piece?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands who've found their ideal co-founder in under 3 weeks
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-3 text-white border border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

function AdvantageCard({ icon, title, description, stat }: AdvantageCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="p-3 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mt-auto">
          <p className="text-sm font-medium text-blue-600">{stat}</p>
        </div>
      </div>
    </div>
  );
}