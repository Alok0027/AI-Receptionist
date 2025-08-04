import React, { useState, useEffect } from 'react';
import { User, Phone, Briefcase, Package, Users, Settings, Bell, Shield, Clock, DollarSign, Building, Mail, MapPin, Calendar, TrendingUp, Award, Zap, Target, Globe, Mic, HeadphonesIcon, Brain, BarChart3, Activity, Star, CheckCircle, AlertTriangle, MessageSquare, Volume2, Palette, Sparkles, Crown, Gem, Database, FileText, Slack, Chrome, Smartphone, Cloud, Lock, Headphones } from 'lucide-react';

export default function ReceptionistAIProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [profileData, setProfileData] = useState({
    // Profile Info
    businessName: 'Agrawal Solutions',
    ownerName: 'Alok Agrawal',
    email: 'alok.agrawal@agrawalsolutions.com',
    phone: '+91 98765 43210',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    website: 'www.agrawalsolutions.in',
    
    // Business Settings
    profession: 'Technology',
    expectedCalls: '50-100',
    businessHours: '10:00 AM - 7:00 PM',
    timezone: 'IST',
    businessType: 'enterprise',
    
    // Operational Data
    staffCount: '25',
    inventoryCost: '500000',
    monthlyRevenue: '1000000',
    customerSatisfaction: '98',
    responseTime: '1.5',
    
    // AI Settings
    greeting: 'Namaste! Thank you for calling Agrawal Solutions. How may I assist you today?',
    transferRules: 'urgent',
    voiceType: 'professional',
    language: 'english',
    personalityTrait: 'efficient',
    aiLevel: 'expert',
    
    // Advanced Features
    integrations: ['zoho', 'freshdesk', 'slack'],
    callRecording: true,
    sentiment: true,
    analytics: true,
    multilingual: true
  });

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User, color: 'bg-stone-800' },
    { id: 'business', label: 'Business', icon: Briefcase, color: 'bg-stone-800' },
    { id: 'operations', label: 'Operations', icon: Package, color: 'bg-stone-800' },
    { id: 'ai-settings', label: 'AI Engine', icon: Brain, color: 'bg-stone-800' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'bg-stone-800' },
    { id: 'integrations', label: 'Integrations', icon: Zap, color: 'bg-stone-800' }
  ];

  const professionOptions = [
    { value: 'Healthcare', icon: '🏥', growth: '+15%' },
    { value: 'Legal', icon: '⚖️', growth: '+12%' },
    { value: 'Real Estate', icon: '🏠', growth: '+20%' },
    { value: 'Consulting', icon: '💼', growth: '+18%' },
    { value: 'Technology', icon: '💻', growth: '+25%' },
    { value: 'Finance', icon: '💰', growth: '+14%' },
    { value: 'Retail', icon: '🛍️', growth: '+10%' },
    { value: 'Manufacturing', icon: '🏭', growth: '+8%' },
    { value: 'Education', icon: '📚', growth: '+22%' },
    { value: 'Hospitality', icon: '🏨', growth: '+16%' }
  ];

  const callVolumeOptions = [
    { value: '1-10', level: 'Starter', color: 'text-black', bg: 'bg-gray-100' },
    { value: '10-25', level: 'Growing', color: 'text-black', bg: 'bg-gray-100' },
    { value: '25-50', level: 'Established', color: 'text-black', bg: 'bg-gray-100' },
    { value: '50-100', level: 'Professional', color: 'text-black', bg: 'bg-gray-100' },
    { value: '100-250', level: 'Enterprise', color: 'text-black', bg: 'bg-gray-100' },
    { value: '250-500', level: 'Corporate', color: 'text-black', bg: 'bg-gray-100' },
    { value: '500+', level: 'Fortune 500', color: 'text-black', bg: 'bg-gray-100' }
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const StatCard = ({ icon: Icon, value, label, trend, color, gradient }) => (
    <div className={`relative overflow-hidden bg-white border-2 border-stone-100 rounded-2xl p-6 text-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group`}>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 text-stone-600" />
          {trend && (
            <div className="flex items-center space-x-1 bg-stone-100 rounded-full px-2 py-1">
              <TrendingUp className="w-3 h-3 text-stone-600" />
              <span className="text-xs font-normal text-stone-600">{trend}</span>
            </div>
          )}
        </div>
        <div className={`text-3xl font-medium mb-1 ${animateStats ? 'animate-pulse' : ''}`}>
          {value}
        </div>
        <div className="text-sm text-stone-500">{label}</div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, enabled, premium }) => (
    <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
      enabled 
        ? 'border-stone-200 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
        : 'border-stone-100 bg-stone-50'
    }`}>
      {premium && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-normal">
          <Crown className="w-3 h-3 inline mr-1" />
          PRO
        </div>
      )}
      <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
        enabled ? 'bg-gradient-to-br from-stone-600 to-stone-800' : 'bg-stone-300'
      }`}>
        <Icon className={`w-6 h-6 ${enabled ? 'text-white' : 'text-stone-500'}`} />
      </div>
      <h4 className={`font-normal mb-2 ${enabled ? 'text-stone-800' : 'text-stone-500'}`}>
        {title}
      </h4>
      <p className={`text-sm ${enabled ? 'text-stone-600' : 'text-stone-400'}`}>
        {description}
      </p>
      <div className="mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={enabled} readOnly />
          <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-stone-600 peer-checked:to-stone-800"></div>
        </label>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative bg-stone-50 rounded-3xl p-8 text-black overflow-hidden border-2 border-stone-100">
              <div className="absolute top-4 right-4">
                <div className="bg-stone-200 rounded-full p-2">
                  <Crown className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center border-2 border-stone-100">
                    <User className="w-12 h-12 text-stone-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium mb-2">{profileData.businessName}</h2>
                    <p className="text-stone-600 text-lg">AI-Powered Reception</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-stone-800 fill-current" />
                        <span className="text-sm text-black">4.9 Rating</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span className="text-sm text-stone-600">Verified Business</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl p-4 border-2 border-stone-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-5 h-5 text-black" />
                      <span className="text-sm font-normal text-stone-600">Active Status</span>
                    </div>
                    <div className="text-2xl font-medium text-stone-800">Online</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 border-2 border-stone-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-black" />
                      <span className="text-sm font-normal text-stone-600">AI Performance</span>
                    </div>
                    <div className="text-2xl font-medium text-stone-800">98.5%</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 border-2 border-stone-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className="w-5 h-5 text-black" />
                      <span className="text-sm font-normal text-stone-600">Global Reach</span>
                    </div>
                    <div className="text-2xl font-medium text-stone-800">24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-stone-800">Business Profile</h3>
                  <p className="text-stone-600">Manage your professional identity and contact information</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-stone-700 mb-3">Business Name</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-4 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                      <input
                        type="text"
                        value={profileData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all duration-300 text-lg font-medium hover:border-stone-300"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-stone-700 mb-3">Owner Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                      <input
                        type="text"
                        value={profileData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all duration-300 text-lg font-medium hover:border-stone-300"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-stone-700 mb-3">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all duration-300 text-lg font-medium hover:border-stone-300"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-stone-700 mb-3">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all duration-300 text-lg font-medium hover:border-stone-300"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-stone-700 mb-3">Website</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-4 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                      <input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all duration-300 text-lg font-medium hover:border-stone-300"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-stone-700 mb-3">Business Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                      <textarea
                        value={profileData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        rows={3}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all duration-300 text-lg font-medium hover:border-stone-300 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="space-y-8">
            {/* Business Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                icon={TrendingUp}
                value="127%"
                label="Business Growth"
                trend="+23%"
                gradient="bg-white"
              />
              <StatCard
                icon={Target}
                value="94.2%"
                label="Goal Achievement"
                trend="+8%"
                gradient="bg-white"
              />
              <StatCard
                icon={Award}
                value="Gold"
                label="Service Tier"
                trend="Upgraded"
                gradient="bg-white"
              />
            </div>

            {/* Business Configuration */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-stone-800">Business Configuration</h3>
                    <p className="text-stone-600">Optimize your business settings for maximum efficiency</p>
                  </div>
                </div>
                <div className="bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-normal">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Optimized
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-4">Industry Sector</label>
                    <div className="space-y-3">
                      {professionOptions.map(option => (
                        <label key={option.value} className="flex items-center justify-between p-4 border-2 border-stone-200 rounded-2xl hover:border-stone-300 cursor-pointer transition-all group">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="profession"
                              value={option.value}
                              checked={profileData.profession === option.value}
                              onChange={(e) => handleInputChange('profession', e.target.value)}
                              className="w-5 h-5 text-stone-600"
                            />
                            <span className="text-2xl">{option.icon}</span>
                            <span className="font-medium text-stone-800 group-hover:text-stone-900">{option.value}</span>
                          </div>
                          <div className="bg-gray-50 text-black px-2 py-1 rounded-full text-xs font-normal">
                            {option.growth}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-4">Call Volume Tier</label>
                    <div className="space-y-3">
                      {callVolumeOptions.map(option => (
                        <label key={option.value} className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                          profileData.expectedCalls === option.value 
                            ? 'border-stone-500 bg-stone-50' 
                            : 'border-stone-200 hover:border-stone-300'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="callVolume"
                              value={option.value}
                              checked={profileData.expectedCalls === option.value}
                              onChange={(e) => handleInputChange('expectedCalls', e.target.value)}
                              className="w-5 h-5 text-stone-600"
                            />
                            <div>
                              <div className="font-normal text-stone-800">{option.value} calls/day</div>
                              <div className={`text-sm font-medium ${option.color}`}>{option.level}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-normal ${option.bg} ${option.color}`}>
                            {option.level}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200">
                    <h4 className="font-medium text-stone-800 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Operating Schedule
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-normal text-stone-700 mb-2">Business Hours</label>
                        <input
                          type="text"
                          value={profileData.businessHours}
                          onChange={(e) => handleInputChange('businessHours', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-stone-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-normal text-stone-700 mb-2">Timezone</label>
                        <select
                          value={profileData.timezone}
                          onChange={(e) => handleInputChange('timezone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-stone-500 transition-all"
                        >
                          <option value="IST">Indian Standard Time</option>
                          <option value="EST">Eastern Standard Time</option>
                          <option value="CST">Central Standard Time</option>
                          <option value="MST">Mountain Standard Time</option>
                          <option value="PST">Pacific Standard Time</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'operations':
        return (
          <div className="space-y-8">
            {/* KPI Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Users}
                value={profileData.staffCount}
                label="Team Members"
                trend="+3 this month"
                gradient="bg-white"
              />
              <StatCard
                icon={DollarSign}
                value={`₹${parseInt(profileData.inventoryCost).toLocaleString()}`}
                label="Inventory Value"
                trend="+12%"
                gradient="bg-white"
              />
              <StatCard
                icon={TrendingUp}
                value={`₹${parseInt(profileData.monthlyRevenue).toLocaleString()}`}
                label="Monthly Revenue"
                trend="+18%"
                gradient="bg-white"
              />
              <StatCard
                icon={Star}
                value={`${profileData.customerSatisfaction}%`}
                label="Satisfaction Score"
                trend="+2.1%"
                gradient="bg-white"
              />
            </div>

            {/* Operational Metrics */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-stone-800">Operational Dashboard</h3>
                  <p className="text-stone-600">Monitor and optimize your business performance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <Users className="w-8 h-8 text-black" />
                        <div className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-normal">Active</div>
                      </div>
                      <div className="text-3xl font-medium text-black mb-2">{profileData.staffCount}</div>
                      <div className="text-black font-medium mb-4">Staff Members</div>
                      <input
                        type="number"
                        value={profileData.staffCount}
                        onChange={(e) => handleInputChange('staffCount', e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gray-500 bg-white"
                      />
                    </div>
                    
                    <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <Package className="w-8 h-8 text-black" />
                        <div className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-normal">Growing</div>
                      </div>
                      <div className="text-3xl font-medium text-black mb-2">₹{parseInt(profileData.inventoryCost).toLocaleString()}</div>
                      <div className="text-black font-medium mb-4">Inventory Value</div>
                      <input
                        type="number"
                        value={profileData.inventoryCost}
                        onChange={(e) => handleInputChange('inventoryCost', e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gray-500 bg-white"
                      />
                    </div>
                    
                    <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <DollarSign className="w-8 h-8 text-black" />
                        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-normal">Trending</div>
                      </div>
                      <div className="text-3xl font-medium text-black mb-2">₹{parseInt(profileData.monthlyRevenue).toLocaleString()}</div>
                      <div className="text-black font-medium mb-4">Monthly Revenue</div>
                      <input
                        type="number"
                        value={profileData.monthlyRevenue}
                        onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gray-500 bg-white"
                      />
                    </div>
                    
                    <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <Star className="w-8 h-8 text-black" />
                        <div className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-normal">Excellent</div>
                      </div>
                      <div className="text-3xl font-medium text-black mb-2">{profileData.customerSatisfaction}%</div>
                      <div className="text-black font-medium mb-4">Satisfaction</div>
                      <input
                        type="number"
                        value={profileData.customerSatisfaction}
                        onChange={(e) => handleInputChange('customerSatisfaction', e.target.value)}
                        max="100"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-gray-500 bg-white"
                      />
                    </div>
                  </div>
                  
                  {/* Performance Analytics */}
                  <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200">
                    <h4 className="text-lg font-medium text-stone-800 mb-6 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Performance Analytics
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-medium text-stone-800">₹{Math.round(parseInt(profileData.monthlyRevenue) / parseInt(profileData.staffCount)).toLocaleString()}</div>
                        <div className="text-sm text-stone-600">Revenue per Staff</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-medium text-stone-800">₹{Math.round(parseInt(profileData.inventoryCost) / parseInt(profileData.staffCount)).toLocaleString()}</div>
                        <div className="text-sm text-stone-600">Assets per Staff</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-medium text-stone-800">{profileData.responseTime}s</div>
                        <div className="text-sm text-stone-600">Avg. Response</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-medium text-stone-800">{Math.round((parseInt(profileData.monthlyRevenue) / 30) / parseInt(profileData.expectedCalls.split('-')[1] || profileData.expectedCalls.split('-')[0]))}</div>
                        <div className="text-sm text-stone-600">Revenue per Call</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border-2 border-stone-100">
                    <h4 className="font-medium mb-4 flex items-center text-stone-800">
                      <Zap className="w-5 h-5 mr-2 text-black-500" />
                      Quick Actions
                    </h4>
                    <div className="space-y-3">
                      <button className="w-full bg-stone-100 hover:bg-stone-200 rounded-xl p-3 text-left transition-all border border-stone-200">
                        <div className="font-medium text-stone-800">Export Data</div>
                        <div className="text-sm text-stone-600">Download reports</div>
                      </button>
                      <button className="w-full bg-stone-100 hover:bg-stone-200 rounded-xl p-3 text-left transition-all border border-stone-200">
                        <div className="font-medium text-stone-800">Schedule Review</div>
                        <div className="text-sm text-stone-600">Monthly analysis</div>
                      </button>
                      <button className="w-full bg-stone-100 hover:bg-stone-200 rounded-xl p-3 text-left transition-all border border-stone-200">
                        <div className="font-medium text-stone-800">Team Meeting</div>
                        <div className="text-sm text-stone-600">Discuss metrics</div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-medium text-black mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Goals & Targets
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-black">Revenue Goal</span>
                          <span className="font-normal text-black">85%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div className="bg-black h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-black">Customer Satisfaction</span>
                          <span className="font-normal text-black">96%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div className="bg-black h-2 rounded-full" style={{width: '96%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-black">Efficiency Score</span>
                          <span className="font-normal text-black">92%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div className="bg-black h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-settings':
        return (
          <div className="space-y-8">
            {/* AI Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                icon={Brain}
                value="98.5%"
                label="AI Accuracy"
                trend="+2.1%"
                gradient="bg-white"
              />
              <StatCard
                icon={Mic}
                value="2.3s"
                label="Response Time"
                trend="-0.4s"
                gradient="bg-white"
              />
              <StatCard
                icon={MessageSquare}
                value="94.7%"
                label="Intent Recognition"
                trend="+1.8%"
                gradient="bg-white"
              />
            </div>

            {/* AI Configuration Panel */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-stone-800">AI Engine Configuration</h3>
                    <p className="text-stone-600">Fine-tune your AI receptionist's behavior and personality</p>
                  </div>
                </div>
                <div className="bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-normal">
                  <Brain className="w-4 h-4 inline mr-1" />
                  Advanced AI
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200">
                    <h4 className="font-medium text-stone-800 mb-4 flex items-center">
                      <Volume2 className="w-5 h-5 mr-2" />
                      Voice & Personality
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-normal text-stone-700 mb-3">Voice Type</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: 'professional', label: 'Professional', icon: '👔' },
                            { value: 'friendly', label: 'Friendly', icon: '😊' },
                            { value: 'formal', label: 'Formal', icon: '🎩' },
                            { value: 'casual', label: 'Casual', icon: '👋' }
                          ].map(voice => (
                            <label key={voice.value} className={`flex items-center space-x-3 p-3 border-2 rounded-xl cursor-pointer transition-all ${
                              profileData.voiceType === voice.value ? 'border-gray-500 bg-gray-50' : 'border-stone-200 hover:border-stone-300'
                            }`}>
                              <input
                                type="radio"
                                name="voiceType"
                                value={voice.value}
                                checked={profileData.voiceType === voice.value}
                                onChange={(e) => handleInputChange('voiceType', e.target.value)}
                                className="w-4 h-4 text-gray-600"
                              />
                              <span className="text-lg">{voice.icon}</span>
                              <span className="font-medium text-stone-800">{voice.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-normal text-stone-700 mb-3">Personality Trait</label>
                        <select
                          value={profileData.personalityTrait}
                          onChange={(e) => handleInputChange('personalityTrait', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-stone-500 transition-all"
                        >
                          <option value="warm">Warm & Welcoming</option>
                          <option value="efficient">Efficient & Direct</option>
                          <option value="empathetic">Empathetic & Understanding</option>
                          <option value="energetic">Energetic & Enthusiastic</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-medium text-black mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Language Settings
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-normal text-black mb-2">Primary Language</label>
                        <select
                          value={profileData.language}
                          onChange={(e) => handleInputChange('language', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-500 bg-white"
                        >
                          <option value="english">🇮🇳 English (India)</option>
                          <option value="hindi">🇮🇳 Hindi</option>
                          <option value="english_us">🇺🇸 English (US)</option>
                          <option value="spanish">🇪🇸 Spanish</option>
                          <option value="french">🇫🇷 French</option>
                          <option value="german">🇩🇪 German</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-normal text-black">Multilingual Support</div>
                          <div className="text-sm text-black">Auto-detect and respond in caller's language</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked={profileData.multilingual} readOnly />
                          <div className="w-11 h-6 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Custom Greeting Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-stone-400" />
                      <textarea
                        value={profileData.greeting}
                        onChange={(e) => handleInputChange('greeting', e.target.value)}
                        rows={4}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-200 focus:border-stone-500 focus:ring-4 focus:ring-stone-100 transition-all resize-none text-lg"
                        placeholder="Enter your custom greeting message..."
                      />
                    </div>
                    <div className="mt-2 text-sm text-stone-500">
                      Character count: {profileData.greeting.length}/200
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-medium text-black mb-4 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Advanced Settings
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-normal text-black mb-2">Call Transfer Rules</label>
                        <select
                          value={profileData.transferRules}
                          onChange={(e) => handleInputChange('transferRules', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-500 bg-white"
                        >
                          <option value="urgent">🚨 Urgent calls only</option>
                          <option value="business">🕒 Business hours only</option>
                          <option value="all">📞 All calls</option>
                          <option value="none">🚫 Never transfer</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-normal text-black mb-2">AI Intelligence Level</label>
                        <select
                          value={profileData.aiLevel}
                          onChange={(e) => handleInputChange('aiLevel', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-500 bg-white"
                        >
                          <option value="basic">🟢 Basic - Simple responses</option>
                          <option value="standard">🟡 Standard - Contextual understanding</option>
                          <option value="advanced">🟠 Advanced - Deep learning</option>
                          <option value="expert">🔴 Expert - Neural processing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-8">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Phone}
                value="1,247"
                label="Total Calls"
                trend="+15%"
                gradient="bg-white"
              />
              <StatCard
                icon={Clock}
                value="2.3s"
                label="Avg Response"
                trend="-0.4s"
                gradient="bg-white"
              />
              <StatCard
                icon={Star}
                value="4.9"
                label="Satisfaction"
                trend="+0.2"
                gradient="bg-white"
              />
              <StatCard
                icon={TrendingUp}
                value="97.2%"
                label="Success Rate"
                trend="+1.1%"
                gradient="bg-white"
              />
            </div>

            {/* Detailed Analytics Dashboard */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-stone-800">Performance Analytics</h3>
                    <p className="text-stone-600">Comprehensive insights into your AI receptionist performance</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-xl text-stone-700 font-medium transition-colors">
                    Daily
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-xl font-medium">
                    Weekly
                  </button>
                  <button className="bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-xl text-stone-700 font-medium transition-colors">
                    Monthly
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Call Analytics */}
                  <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-medium text-black mb-6 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Analytics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-medium text-black">847</div>
                        <div className="text-sm text-black">Successful</div>
                        <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                          <div className="bg-black h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-medium text-black">142</div>
                        <div className="text-sm text-black">Transferred</div>
                        <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                          <div className="bg-black h-2 rounded-full" style={{width: '30%'}}></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-medium text-black">23</div>
                        <div className="text-sm text-black">Missed</div>
                        <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                          <div className="bg-black h-2 rounded-full" style={{width: '5%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Satisfaction Metrics */}
                  <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-medium text-black mb-6 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Customer Satisfaction
                    </h4>
                    <div className="grid grid-cols-5 gap-4">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="text-center">
                          <div className="flex justify-center mb-2">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-black fill-current" />
                            ))}
                          </div>
                          <div className="text-2xl font-medium text-black">
                            {rating === 5 ? '68%' : rating === 4 ? '24%' : rating === 3 ? '6%' : rating === 2 ? '1%' : '1%'}
                          </div>
                          <div className="text-sm text-black">{rating} stars</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Performance Insights */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border-2 border-stone-100">
                    <h4 className="font-medium mb-4 flex items-center text-stone-800">
                      <Activity className="w-5 h-5 mr-2 text-emerald-500" />
                      Live Insights
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-600">Current Status</span>
                        <div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-600">Active Calls</span>
                        <span className="font-medium text-stone-800">3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-600">Queue Length</span>
                        <span className="font-medium text-stone-800">0</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-600">Response Time</span>
                        <span className="font-medium text-emerald-500">2.1s</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Alerts & Notifications
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-3 border border-yellow-200">
                        <div className="font-medium text-yellow-800">Peak Hours Alert</div>
                        <div className="text-sm text-yellow-600">High call volume expected 2-4 PM</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-yellow-200">
                        <div className="font-medium text-yellow-800">Performance Update</div>
                        <div className="text-sm text-yellow-600">Satisfaction score improved by 2.1%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-8">
            {/* Integration Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                icon={Zap}
                value="12"
                label="Active Integrations"
                trend="+3 new"
                gradient="bg-white"
              />
              <StatCard
                icon={CheckCircle}
                value="99.9%"
                label="Uptime"
                trend="Excellent"
                gradient="bg-white"
              />
              <StatCard
                icon={Globe}
                value="24/7"
                label="Sync Status"
                trend="Real-time"
                gradient="bg-white"
              />
            </div>

            {/* Integration Dashboard */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-stone-800">Integration Dashboard</h3>
                    <p className="text-stone-600">Manage and monitor your integrations</p>
                  </div>
                </div>
                {/* Optionally add a right-side element here, or remove justify-between */}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200">
                    <h4 className="font-medium text-stone-800 mb-4 flex items-center">
                      <Crown className="w-5 h-5 mr-2" />
                      Premium Integrations
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-normal text-stone-800">Salesforce</div>
                          <div className="text-sm text-stone-600">CRM integration</div>
                        </div>
                        <div className="text-emerald-600 font-medium">Active</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-normal text-stone-800">HubSpot</div>
                          <div className="text-sm text-stone-600">Marketing integration</div>
                        </div>
                        <div className="text-emerald-600 font-medium">Active</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-normal text-stone-800">Slack</div>
                          <div className="text-sm text-stone-600">Communication integration</div>
                        </div>
                        <div className="text-red-600 font-medium">Inactive</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-medium text-black mb-4 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Integration Settings
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-normal text-stone-700 mb-2">Sync Frequency</label>
                        <select
                          value="real-time"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 bg-white"
                        >
                          <option value="real-time">🌐 Real-time</option>
                          <option value="15-minutes">🕒 Every 15 minutes</option>
                          <option value="hourly">📅 Hourly</option>
                          <option value="daily">📆 Daily</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-normal text-stone-700 mb-2">Data Retention</label>
                        <select
                          value="30-days"
                          className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gray-500 bg-white"
                        >
                          <option value="7-days">🗓️ 7 days</option>
                          <option value="30-days">📅 30 days</option>
                          <option value="90-days">📈 90 days</option>
                          <option value="1-year">📆 1 year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex space-x-2 bg-white p-2 rounded-2xl shadow-md border-2 border-stone-100">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 rounded-xl font-normal transition-all flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? `${tab.color} text-white shadow-lg`
                    : 'bg-white text-stone-700 hover:bg-stone-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Tab Content */}
        <div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
