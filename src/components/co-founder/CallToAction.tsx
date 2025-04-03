'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Your Perfect Co-Founder is Waiting
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't let the lack of a co-founder be the reason your startup never launches. 
            <span className="block mt-2 font-medium text-gray-700">
              Average match time: <span className="font-bold text-blue-600">17 days</span> on Networty
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            href="/signup"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg focus:ring-4 focus:ring-blue-200"
          >
            Find Your Co-Founder Now →
          </Link>
          <Link
            href="/demo"
            className="px-8 py-3.5 bg-white text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow hover:shadow-md text-lg focus:ring-4 focus:ring-gray-200"
          >
            Watch How It Works
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <StatPill count="1.2K+" label="Successful Matches" />
          <StatPill count="92%" label="Satisfaction Rate" />
          <StatPill count="17d" label="Avg. Match Time" />
          <StatPill count="50+" label="Industries" />
        </div>
      </div>
    </section>
  );
}

function StatPill({ count, label }: { count: string; label: string }) {
  return (
    <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <span className="font-bold text-blue-600 mr-2">{count}</span>
      <span className="text-gray-600 text-sm">{label}</span>
    </div>
  );
}