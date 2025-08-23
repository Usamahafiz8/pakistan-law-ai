'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  DocumentTextIcon,
  CalendarIcon,
  ShieldCheckIcon,
  ScaleIcon,
  BuildingLibraryIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

import { actsDetailedData } from '@/data/acts';

export default function ActPage() {
  const params = useParams();
  const actId = parseInt(params.id as string);
  const act = actsDetailedData[actId as keyof typeof actsDetailedData];

  if (!act) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Act Not Found</h1>
          <p className="text-gray-600 mb-6">The requested act could not be found.</p>
          <Link href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last Updated: {act.updated}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {/* Act Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-6">
                  <act.icon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{act.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      Enacted: {act.year}
                    </span>
                    <span className="flex items-center">
                      <DocumentTextIcon className="w-4 h-4 mr-1" />
                      {act.sections} Sections
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {act.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{act.longDescription}</p>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {act.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Sections */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Important Sections</h2>
            <div className="space-y-6">
              {act.importantSections.map((section, index) => (
                <div
                  key={index}
                  className="border-l-4 border-green-600 pl-6 hover:bg-gray-50 p-4 rounded-r-lg transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Section {section.number}: {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Text */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Full Text</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-sans">
                  {act.fullText}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
