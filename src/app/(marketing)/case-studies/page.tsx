import type { Metadata } from 'next';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies - Applied Innovations Corporation',
  description: 'Real-world success stories and case studies of AI transformation projects delivered by Applied Innovations Corporation.',
};

const caseStudies = [
  {
    id: 1,
    title: 'Healthcare AI: Transforming Patient Care at MedCenter',
    industry: 'Healthcare',
    company: 'MedCenter Regional Hospital',
    challenge: 'Reduce patient wait times and improve diagnostic accuracy',
    solution: 'AI-powered patient triage and diagnostic assistance system',
    results: [
      '40% reduction in patient wait times',
      '25% improvement in diagnostic accuracy',
      '60% increase in patient satisfaction',
      '$2.3M annual cost savings',
    ],
    timeline: '6 months',
    image: '/case-studies/medcenter.jpg',
    tags: ['Healthcare', 'Diagnostics', 'Patient Care'],
    featured: true,
  },
  {
    id: 2,
    title: 'Financial Services: Fraud Detection at SecureBank',
    industry: 'Financial Services',
    company: 'SecureBank International',
    challenge: 'Detect and prevent fraudulent transactions in real-time',
    solution: 'Machine learning-based fraud detection and prevention system',
    results: [
      '95% fraud detection accuracy',
      '80% reduction in false positives',
      '50% faster transaction processing',
      '$15M prevented fraud losses annually',
    ],
    timeline: '4 months',
    image: '/case-studies/securebank.jpg',
    tags: ['Financial Services', 'Fraud Detection', 'Security'],
    featured: true,
  },
  {
    id: 3,
    title: 'Manufacturing: Predictive Maintenance at TechManufacturing',
    industry: 'Manufacturing',
    company: 'TechManufacturing Corp',
    challenge: 'Reduce equipment downtime and maintenance costs',
    solution: 'IoT sensors and AI-powered predictive maintenance platform',
    results: [
      '70% reduction in unplanned downtime',
      '35% decrease in maintenance costs',
      '90% prediction accuracy for equipment failures',
      '$5.8M annual savings',
    ],
    timeline: '8 months',
    image: '/case-studies/techmanufacturing.jpg',
    tags: ['Manufacturing', 'Predictive Maintenance', 'IoT'],
    featured: false,
  },
  {
    id: 4,
    title: 'Retail: Personalization Engine for ShopSmart',
    industry: 'Retail',
    company: 'ShopSmart E-commerce',
    challenge: 'Increase customer engagement and conversion rates',
    solution: 'AI-driven personalization and recommendation engine',
    results: [
      '45% increase in conversion rates',
      '30% higher average order value',
      '65% improvement in customer retention',
      '200% ROI within first year',
    ],
    timeline: '5 months',
    image: '/case-studies/shopsmart.jpg',
    tags: ['Retail', 'Personalization', 'E-commerce'],
    featured: false,
  },
  {
    id: 5,
    title: 'Technology: Code Quality at DevCorp',
    industry: 'Technology',
    company: 'DevCorp Software Solutions',
    challenge: 'Improve code quality and reduce development time',
    solution: 'AI-powered code review and automated testing platform',
    results: [
      '50% reduction in bugs in production',
      '30% faster development cycles',
      '85% automated code review coverage',
      '40% improvement in developer productivity',
    ],
    timeline: '3 months',
    image: '/case-studies/devcorp.jpg',
    tags: ['Technology', 'Software Development', 'Quality Assurance'],
    featured: false,
  },
  {
    id: 6,
    title: 'Logistics: Route Optimization at LogiFlow',
    industry: 'Logistics',
    company: 'LogiFlow Transportation',
    challenge: 'Optimize delivery routes and reduce fuel costs',
    solution: 'AI-powered route optimization and fleet management system',
    results: [
      '25% reduction in fuel costs',
      '35% improvement in delivery times',
      '90% customer satisfaction rate',
      '$3.2M annual cost savings',
    ],
    timeline: '6 months',
    image: '/case-studies/logiflow.jpg',
    tags: ['Logistics', 'Route Optimization', 'Fleet Management'],
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const featuredCases = caseStudies.filter(cs => cs.featured);
  const otherCases = caseStudies.filter(cs => !cs.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Real Results, Real Impact
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Discover how Applied Innovations Corporation has helped businesses across industries 
              transform their operations with AI, delivering measurable results and lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Featured Success Stories</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Highlighting our most impactful AI transformation projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-2xl border border-secondary-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-secondary-600">{caseStudy.company}</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {caseStudy.industry}
                    </span>
                    <span className="text-sm text-secondary-600">•</span>
                    <span className="text-sm text-secondary-600">{caseStudy.timeline}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4">
                    <strong>Challenge:</strong> {caseStudy.challenge}
                  </p>
                  
                  <p className="text-secondary-600 mb-6">
                    <strong>Solution:</strong> {caseStudy.solution}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-secondary-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {caseStudy.tags.map((tag) => (
                        <span key={tag} className="text-xs text-secondary-600 bg-secondary-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">More Success Stories</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Additional examples of our AI transformation expertise across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-lg border border-secondary-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {caseStudy.industry}
                  </span>
                  <span className="text-xs text-secondary-600">{caseStudy.timeline}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {caseStudy.title}
                </h3>
                
                <p className="text-sm text-secondary-600 mb-4">
                  {caseStudy.company}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-secondary-900 mb-2 uppercase tracking-wide">
                    Key Results
                  </h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center text-xs text-secondary-700">
                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Learn More
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">500+</div>
              <div className="text-secondary-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">340%</div>
              <div className="text-secondary-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">4.2</div>
              <div className="text-secondary-600">Months Avg. Implementation</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">$50M+</div>
              <div className="text-secondary-600">Client Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have transformed their operations with our AI expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/consultation" className="btn-primary text-lg px-8 py-4">
              Start Your Transformation
            </a>
            <a href="/contact" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-secondary-900">
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
