import React, { useState } from 'react';

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    useCase: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-stone-50 mt-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">Request a Demo</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            See how YourReceptionAI can transform your customer service. Book a personalized demo today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-normal text-stone-900 mb-6">What You'll See</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-normal text-stone-900">Live AI Receptionist</h3>
                  <p className="text-stone-600 text-sm">Watch our AI handle real customer calls with natural conversation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-normal text-stone-900">Dashboard Overview</h3>
                  <p className="text-stone-600 text-sm">Explore call analytics, transcripts, and management tools</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-normal text-stone-900">Custom Integration</h3>
                  <p className="text-stone-600 text-sm">See how we integrate with your existing business tools</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-normal text-stone-900">ROI Calculator</h3>
                  <p className="text-stone-600 text-sm">Calculate potential savings and efficiency gains</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 border border-stone-200">
              <h3 className="font-normal text-stone-900 mb-3">Demo Duration</h3>
              <p className="text-stone-600 text-sm mb-4">30-45 minutes including Q&A</p>
              
              <h3 className="font-normal text-stone-900 mb-3">Available Times</h3>
              <p className="text-stone-600 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  Company Size
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  Primary Use Case
                </label>
                <select
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                >
                  <option value="">Select use case</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="appointment-booking">Appointment Booking</option>
                  <option value="lead-qualification">Lead Qualification</option>
                  <option value="order-taking">Order Taking</option>
                  <option value="general-inquiries">General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
