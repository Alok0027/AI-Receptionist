import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-stone-50 mt-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">About YourReceptionAI</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Revolutionizing customer service with intelligent AI-powered receptionist solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-normal text-stone-900 mb-4">Our Mission</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              We believe every business deserves exceptional customer service, 24/7. Our AI-powered 
              receptionist solutions help businesses of all sizes provide professional, consistent, 
              and intelligent customer interactions without the overhead of traditional staffing.
            </p>
            <p className="text-stone-600 leading-relaxed">
              By combining advanced natural language processing with deep business understanding, 
              we create AI receptionists that don't just answer calls—they understand context, 
              solve problems, and create positive customer experiences.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-normal text-stone-900 mb-4">Our Vision</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              To make professional customer service accessible to every business, from startups 
              to enterprises, through intelligent automation that feels genuinely human.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We envision a world where no customer call goes unanswered, no inquiry is left 
              unresolved, and every interaction contributes to building stronger business relationships.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200 mb-12">
          <h2 className="text-2xl font-normal text-stone-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-xl">R</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Reliability</h3>
              <p className="text-stone-600 text-sm">
                Consistent, dependable service that businesses can trust 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-xl">I</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Innovation</h3>
              <p className="text-stone-600 text-sm">
                Cutting-edge AI technology that evolves with your business needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-xl">E</span>
              </div>
              <h3 className="font-normal text-stone-900 mb-2">Excellence</h3>
              <p className="text-stone-600 text-sm">
                Delivering exceptional experiences in every customer interaction
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-normal text-stone-900 mb-4">Ready to Transform Your Customer Service?</h2>
          <p className="text-stone-600 mb-6">
            Join thousands of businesses already using YourReceptionAI to deliver exceptional customer experiences.
          </p>
          <button className="bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
