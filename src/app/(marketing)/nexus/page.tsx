import type { Metadata } from 'next';
import { Cpu, Zap, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nexus Platform - Applied Innovations Corporation',
  description: 'Discover the Nexus AI platform - our proprietary solution that accelerates AI implementation with pre-built components and automated workflows.',
};

export default function NexusPlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-6">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              The Nexus Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Our proprietary AI platform that accelerates implementation with pre-built components, 
              automated workflows, and comprehensive management tools. Deploy AI solutions 10x faster.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/consultation" className="btn-primary text-lg px-8 py-4">
                Request Demo
              </a>
              <a href="#features" className="btn-secondary text-lg px-8 py-4">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                AI Implementation, Simplified
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                The Nexus platform eliminates the complexity of AI implementation by providing 
                a comprehensive suite of tools, pre-built components, and automated workflows 
                that accelerate your AI transformation journey.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Deploy AI solutions 10x faster than traditional methods',
                  'Pre-built components for common AI use cases',
                  'Enterprise-grade security and compliance built-in',
                  'Scalable architecture that grows with your business',
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/consultation" className="btn-primary">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="bg-secondary-900 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-secondary-400 text-sm font-mono">nexus-platform</div>
              </div>
              <div className="text-left font-mono text-sm">
                <div className="text-green-400">$ nexus deploy --ai-solution</div>
                <div className="text-secondary-400 mt-2">✓ Initializing AI components...</div>
                <div className="text-secondary-400">✓ Configuring data pipelines...</div>
                <div className="text-secondary-400">✓ Setting up security policies...</div>
                <div className="text-secondary-400">✓ Deploying to production...</div>
                <div className="text-green-400 mt-2">🚀 AI solution deployed successfully!</div>
                <div className="text-secondary-400 mt-2">Performance: 99.9% uptime</div>
                <div className="text-secondary-400">Security: Enterprise-grade</div>
                <div className="text-secondary-400">Scalability: Auto-scaling enabled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Platform Features</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Everything you need to implement, manage, and scale AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Rapid Deployment',
                description: 'Deploy AI solutions 10x faster with pre-built components and automated workflows',
                color: 'bg-yellow-100 text-yellow-600',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Built-in compliance and governance with SOC 2, GDPR, and HIPAA support',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: TrendingUp,
                title: 'Scalable Architecture',
                description: 'Auto-scaling infrastructure that grows with your business needs',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Users,
                title: 'User-Friendly Interface',
                description: 'Intuitive dashboard and tools designed for both technical and business users',
                color: 'bg-purple-100 text-purple-600',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-xl mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Platform Performance</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Trusted by hundreds of organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-secondary-600">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10x</div>
              <div className="text-secondary-600">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-600">Active Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-secondary-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Power of Nexus
          </h2>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl mx-auto">
            See how the Nexus platform can accelerate your AI transformation. 
            Schedule a personalized demo with our experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/consultation" className="btn-primary text-lg px-8 py-4">
              Request Demo
            </a>
            <a href="/contact" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-secondary-900">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
