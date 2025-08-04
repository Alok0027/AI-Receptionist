import React from 'react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build and optimize AI models for our receptionist platform"
    },
    {
      title: "Frontend Developer",
      department: "Engineering", 
      location: "Remote / New York",
      type: "Full-time",
      description: "Create beautiful, responsive user interfaces for our dashboard"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time", 
      description: "Help our clients maximize value from our AI receptionist solutions"
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Drive go-to-market strategy and product positioning"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Help us revolutionize customer service with AI. Build the future of business communication.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200 mb-12">
          <h2 className="text-2xl font-normal text-stone-900 mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-medium">🚀</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Innovation</h3>
              <p className="text-stone-600 text-sm">Work on cutting-edge AI technology</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-medium">🌍</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Remote First</h3>
              <p className="text-stone-600 text-sm">Work from anywhere in the world</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-medium">📈</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Growth</h3>
              <p className="text-stone-600 text-sm">Rapid career advancement opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stone-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-medium">💡</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Impact</h3>
              <p className="text-stone-600 text-sm">Shape the future of customer service</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-normal text-stone-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-normal text-stone-900 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-stone-600">
                      <span className="bg-stone-100 px-2 py-1 rounded">{job.department}</span>
                      <span className="bg-stone-100 px-2 py-1 rounded">{job.location}</span>
                      <span className="bg-stone-100 px-2 py-1 rounded">{job.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-stone-900 text-white px-6 py-2 rounded-lg hover:bg-stone-800 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-stone-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200 text-center">
          <h2 className="text-2xl font-normal text-stone-900 mb-4">Don't See Your Role?</h2>
          <p className="text-stone-600 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
          </p>
          <button className="bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors">
            Send Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
