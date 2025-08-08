import React, { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  Video, 
  Book, 
  FileText, 
  HelpCircle, 
  Zap, 
  Settings, 
  Users, 
  Shield, 
  Database, 
  Globe, 
  Clock, 
  Star, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  Play, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Lightbulb, 
  ArrowRight, 
  Calendar, 
  Headphones, 
  MessageSquare, 
  BookOpen, 
  Rocket, 
  Target, 
  Sparkles,
  Coffee,
  Award,
  TrendingUp,
  Layers,
  Activity
} from 'lucide-react';

const SupportHelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const quickActions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true,
      color: 'bg-green-500'
    },
    {
      title: 'Schedule a Call',
      description: 'Book a personalized demo or consultation',
      icon: Calendar,
      action: 'Book Now',
      available: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      available: true,
      color: 'bg-purple-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      action: 'Join Forum',
      available: true,
      color: 'bg-orange-500'
    }
  ];

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'Learn the basics and set up your account',
      articles: 24,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Layers,
      description: 'Connect your favorite tools and apps',
      articles: 18,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'automation',
      title: 'Automation',
      icon: Zap,
      description: 'Automate your workflows and processes',
      articles: 15,
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reports',
      icon: TrendingUp,
      description: 'Track performance and generate insights',
      articles: 12,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: Settings,
      description: 'Manage your account and subscription',
      articles: 20,
      color: 'bg-stone-50 text-stone-600'
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      description: 'Keep your data safe and secure',
      articles: 8,
      color: 'bg-red-50 text-red-600'
    }
  ];

  const featuredArticles = [
    {
      title: 'Complete Setup Guide: From Zero to Hero',
      description: 'Everything you need to know to get started with our platform',
      readTime: '10 min read',
      views: '12.5k',
      category: 'Getting Started',
      popular: true,
      thumbnail: '🚀'
    },
    {
      title: 'Advanced Automation Workflows',
      description: 'Create powerful automations that save hours of manual work',
      readTime: '15 min read',
      views: '8.2k',
      category: 'Automation',
      popular: true,
      thumbnail: '⚡'
    },
    {
      title: 'Security Best Practices',
      description: 'Protect your account and data with these essential tips',
      readTime: '8 min read',
      views: '6.8k',
      category: 'Security',
      popular: false,
      thumbnail: '🔒'
    },
    {
      title: 'Integration Masterclass',
      description: 'Connect all your tools for a seamless workflow',
      readTime: '12 min read',
      views: '9.4k',
      category: 'Integrations',
      popular: true,
      thumbnail: '🔗'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with the platform?',
      answer: 'Getting started is easy! First, create your account and complete the onboarding process. Then, connect your first integration and set up your preferences. Our setup wizard will guide you through each step.',
      category: 'getting-started'
    },
    {
      question: 'What integrations are available?',
      answer: 'We support over 1000+ integrations including popular CRM systems like HubSpot and Salesforce, communication tools like Slack and WhatsApp, scheduling platforms like Calendly, and many more. Check our integrations page for the complete list.',
      category: 'integrations'
    },
    {
      question: 'How secure is my data?',
      answer: 'Your data security is our top priority. We use enterprise-grade encryption, comply with SOC 2 Type II standards, and never store your login credentials. All data is encrypted both in transit and at rest.',
      category: 'security'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access to your account until the end of your current billing period.',
      category: 'billing'
    },
    {
      question: 'How do I set up automated workflows?',
      answer: 'Navigate to the Automation section in your dashboard, click "Create New Workflow," and use our visual workflow builder. You can set triggers, conditions, and actions without any coding required.',
      category: 'automation'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes! Our mobile app is available for both iOS and Android. You can download it from the App Store or Google Play Store. The mobile app includes most desktop features and real-time notifications.',
      category: 'mobile'
    }
  ];

  const tutorials = [
    {
      title: 'Platform Overview',
      duration: '5:32',
      views: '15.2k',
      thumbnail: '🎥'
    },
    {
      title: 'Setting Up Your First Integration',
      duration: '8:15',
      views: '12.8k',
      thumbnail: '🔧'
    },
    {
      title: 'Creating Custom Reports',
      duration: '6:45',
      views: '9.4k',
      thumbnail: '📊'
    },
    {
      title: 'Advanced Automation Tips',
      duration: '12:20',
      views: '7.6k',
      thumbnail: '⚙️'
    }
  ];

  const systemStatus = {
    overall: 'operational',
    services: [
      { name: 'API Services', status: 'operational' },
      { name: 'Web Application', status: 'operational' },
      { name: 'Mobile App', status: 'operational' },
      { name: 'Email Delivery', status: 'operational' },
      { name: 'Integrations', status: 'operational' }
    ]
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 mt-10">
      {/* Hero Section */}
      <div className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-stone-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Find answers, get support, and learn how to make the most of our platform
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-stone-500 focus:ring-opacity-20 focus:outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {action.available && (
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  )}
                </div>
                <h3 className="font-normal text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                <button className="w-full bg-stone-900 text-white py-2 px-4 rounded-lg hover:bg-stone-800 transition-colors font-medium">
                  {action.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Help Categories */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium text-gray-900">Browse by Category</h2>
                <button className="text-stone-600 hover:text-stone-900 flex items-center space-x-1">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {helpCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        selectedCategory === category.id ? 'bg-stone-50 border border-stone-300 text-stone-900' : 'bg-white hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          selectedCategory === category.id ? 'bg-stone-200' : category.color
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            selectedCategory === category.id ? 'text-stone-900' : ''
                          }`} />
                        </div>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          selectedCategory === category.id 
                            ? 'bg-stone-100 text-stone-900' 
                            : 'bg-stone-100 text-stone-600'
                        }`}>
                          {category.articles} articles
                        </span>
                      </div>
                      <h3 className={`font-normal mb-2 ${
                        selectedCategory === category.id ? 'text-stone-900' : 'text-gray-900'
                      }`}>
                        {category.title}
                      </h3>
                      <p className={`text-sm ${
                        selectedCategory === category.id ? 'text-stone-600' : 'text-gray-600'
                      }`}>
                        {category.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Featured Articles */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium text-gray-900">Featured Articles</h2>
                <button className="text-stone-600 hover:text-stone-900 flex items-center space-x-1">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-6">
                {featuredArticles.map((article, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-stone-900 group-hover:text-white transition-colors">
                        {article.thumbnail}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-full">
                            {article.category}
                          </span>
                          {article.popular && (
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>Popular</span>
                            </span>
                          )}
                        </div>
                        <h3 className="font-normal text-gray-900 mb-2 group-hover:text-stone-900">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{article.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-stone-900 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-normal text-gray-900 pr-4">{faq.question}</h3>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* System Status */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-normal text-gray-900">System Status</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Overall Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 capitalize">{systemStatus.overall}</span>
                  </div>
                </div>
                
                {systemStatus.services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">{service.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Operational</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 text-sm text-stone-600 hover:text-stone-900 flex items-center justify-center space-x-1">
                <span>View Status Page</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Video Tutorials */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Video className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-normal text-gray-900">Video Tutorials</h3>
              </div>
              
              <div className="space-y-4">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer group">
                    <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-lg group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      {tutorial.thumbnail}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{tutorial.title}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{tutorial.duration}</span>
                        <span>•</span>
                        <span>{tutorial.views} views</span>
                      </div>
                    </div>
                    <Play className="w-4 h-4 text-gray-400 group-hover:text-stone-900" />
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 text-sm text-stone-600 hover:text-stone-900 flex items-center justify-center space-x-1">
                <span>View All Tutorials</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Contact Support */}
            <div className="bg-stone-50 rounded-2xl p-6 text-stone-900 border border-stone-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-stone-700" />
                </div>
                <h3 className="font-normal mb-2 text-stone-900">Need Personal Help?</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Our support team is here to help you succeed
                </p>
                <button className="w-full bg-stone-900 text-white py-3 px-4 rounded-lg hover:bg-stone-800 transition-colors font-medium">
                  Contact Support
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-normal text-gray-900 mb-4">Additional Resources</h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between py-2 text-gray-600 hover:text-stone-900 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Book className="w-4 h-4" />
                    <span className="text-sm">Documentation</span>
                  </div>
                  <ExternalLink className="w-3 h-3" />
                </a>
                
                <a href="#" className="flex items-center justify-between py-2 text-gray-600 hover:text-stone-900 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">API Reference</span>
                  </div>
                  <ExternalLink className="w-3 h-3" />
                </a>
                
                <a href="#" className="flex items-center justify-between py-2 text-gray-600 hover:text-stone-900 transition-colors">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Community Forum</span>
                  </div>
                  <ExternalLink className="w-3 h-3" />
                </a>
                
                <a href="#" className="flex items-center justify-between py-2 text-gray-600 hover:text-stone-900 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-sm">Feature Requests</span>
                  </div>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHelpPage;