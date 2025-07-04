import AssessmentForm from '@/components/assessment/AssessmentForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Applied Innovations Corporation',
  description: 'Evaluate your organization\'s AI readiness with our comprehensive assessment. Get a personalized report with recommendations and implementation roadmap.',
  keywords: 'AI readiness, AI assessment, artificial intelligence, digital transformation, AI strategy',
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              AI Readiness Assessment
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Discover your organization's AI readiness level and get a personalized roadmap 
              for successful AI implementation. Complete our comprehensive assessment and receive 
              a detailed report with actionable recommendations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                15-20 minutes to complete
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Personalized PDF report
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Expert recommendations
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Form */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AssessmentForm source="assessment-page" />
      </div>

      {/* What You'll Get Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your comprehensive AI readiness report will be delivered to your inbox within minutes of completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Scoring</h3>
              <p className="text-gray-600">
                Comprehensive analysis across 8 key AI readiness dimensions with detailed breakdowns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Recommendations</h3>
              <p className="text-gray-600">
                Personalized recommendations tailored to your organization's specific needs and gaps.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Benchmarks</h3>
              <p className="text-gray-600">
                See how your organization compares to industry peers and top performers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Roadmap</h3>
              <p className="text-gray-600">
                Step-by-step implementation plan with priorities, timelines, and success metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Categories */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Assessment Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive assessment evaluates your organization across eight critical dimensions of AI readiness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Strategy', description: 'AI vision, goals, and strategic alignment', icon: '🎯' },
              { name: 'Data', description: 'Data quality, governance, and accessibility', icon: '📊' },
              { name: 'Technology', description: 'Infrastructure and technical capabilities', icon: '⚙️' },
              { name: 'Talent', description: 'Skills, expertise, and human resources', icon: '👥' },
              { name: 'Governance', description: 'Ethics, compliance, and risk management', icon: '🛡️' },
              { name: 'Culture', description: 'Change readiness and data-driven mindset', icon: '🌟' },
              { name: 'Processes', description: 'Operational readiness and workflow integration', icon: '🔄' },
              { name: 'Infrastructure', description: 'Technical foundation and scalability', icon: '🏗️' }
            ].map((category) => (
              <div key={category.name} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Discover Your AI Readiness?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations who have used our assessment to accelerate their AI journey.
            </p>
            <a 
              href="#assessment-form" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
