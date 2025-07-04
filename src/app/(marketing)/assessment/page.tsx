import type { Metadata } from 'next';
import { Target, CheckCircle, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment - Applied Innovations Corporation',
  description: 'Take our comprehensive AI readiness assessment to understand your organization\'s AI maturity and identify opportunities for transformation.',
};

export default function AssessmentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              AI Readiness Assessment
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Discover your organization's AI maturity level and identify the best opportunities 
              for AI transformation with our comprehensive assessment tool.
            </p>
            <div className="mt-10">
              <a href="#assessment-form" className="btn-primary text-lg px-8 py-4">
                Start Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Benefits */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Why Take the Assessment?</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Understand where you stand and what steps to take next
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Identify Opportunities',
                description: 'Discover high-impact AI use cases specific to your business',
                icon: Target,
                color: 'bg-blue-100 text-blue-600',
              },
              {
                title: 'Assess Readiness',
                description: 'Evaluate your current technology, data, and organizational readiness',
                icon: CheckCircle,
                color: 'bg-green-100 text-green-600',
              },
              {
                title: 'Get Recommendations',
                description: 'Receive personalized recommendations and next steps',
                icon: TrendingUp,
                color: 'bg-purple-100 text-purple-600',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${benefit.color} rounded-xl mb-4`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Details */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Comprehensive AI Evaluation
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Our assessment evaluates five key dimensions of AI readiness to provide 
                you with a complete picture of your organization's AI maturity.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Technology Infrastructure & Data Quality',
                  'Organizational Culture & Change Readiness',
                  'Skills & Talent Assessment',
                  'Business Process Maturity',
                  'Strategic Alignment & Leadership Support',
                ].map((dimension, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{dimension}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Assessment Details</h3>
                <p className="text-secondary-600">What to expect from the assessment</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-secondary-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Duration</p>
                    <p className="text-xs text-secondary-600">15-20 minutes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-secondary-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Questions</p>
                    <p className="text-xs text-secondary-600">25 strategic questions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-secondary-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-secondary-900">Results</p>
                    <p className="text-xs text-secondary-600">Instant personalized report</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment-form" className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Start Your Assessment</h2>
              <p className="text-lg text-secondary-600">
                Answer a few questions to get your personalized AI readiness report
              </p>
            </div>

            <div className="bg-white border border-secondary-200 rounded-lg p-8">
              <form className="space-y-6">
                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select Industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="financial">Financial Services</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select Size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Role *
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select Role</option>
                      <option value="ceo">CEO/President</option>
                      <option value="cto">CTO/Technology Leader</option>
                      <option value="cio">CIO/IT Leader</option>
                      <option value="manager">Manager/Director</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* AI Experience */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Current AI Experience *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="none">No AI experience</option>
                    <option value="exploring">Exploring AI opportunities</option>
                    <option value="pilot">Running AI pilots/experiments</option>
                    <option value="implementing">Implementing AI solutions</option>
                    <option value="mature">Mature AI implementation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Primary AI Interest (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What specific AI use cases or challenges are you most interested in?"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                  />
                  <label className="ml-2 text-sm text-secondary-700">
                    I agree to receive my assessment results and occasional updates about AI trends and insights *
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get My AI Readiness Report
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">What You'll Receive</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Your personalized assessment report includes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Maturity Score',
                description: 'Your overall AI readiness score across five key dimensions',
                icon: '📊',
              },
              {
                title: 'Opportunity Analysis',
                description: 'Specific AI use cases and opportunities for your industry',
                icon: '🎯',
              },
              {
                title: 'Roadmap Recommendations',
                description: 'Prioritized next steps and implementation recommendations',
                icon: '🗺️',
              },
              {
                title: 'Benchmark Comparison',
                description: 'How you compare to similar organizations in your industry',
                icon: '📈',
              },
              {
                title: 'Resource Guide',
                description: 'Curated resources and best practices for your journey',
                icon: '📚',
              },
              {
                title: 'Expert Consultation',
                description: 'Optional follow-up consultation with our AI experts',
                icon: '👥',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
