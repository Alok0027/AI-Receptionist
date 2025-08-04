import React from 'react';
import { CheckCircle, Clock, Users, Zap, Phone } from 'lucide-react';

const AlwaysOnService = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "No more putting customers on hold",
      description: "Let your AI receptionist use human-level reasoning and a natural conversational tone to help customers get answers fast."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Handle calls with consistent, friendly service", 
      description: "Answer questions instantly, including inquiries in Spanish, and route complex requests requiring a human touch directly to your team."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scale without extra staff",
      description: "Automate routine calls, handle multiple customers at once, and easily add more AI Receptionists as your business grows."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Built right into RingCentral",
      description: "No extra apps or setup needed — your existing phone settings sync automatically, letting you manage everything effortlessly in one familiar system."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-stone-100 to-neutral-200 rounded-2xl p-8 relative overflow-hidden">
              {/* Person on phone illustration */}
              <div className="relative z-10">
                <div className="w-full h-80 bg-gradient-to-b from-stone-200 to-stone-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Phone className="w-12 h-12 text-stone-800" />
                    </div>
                    <p className="text-stone-700 font-medium">AI Receptionist Active</p>
                  </div>
                </div>
              </div>
              
              {/* Chat bubbles */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                <p className="text-sm text-stone-700 mb-2">
                  "Hi, I know it's late, but can I schedule an appointment for tomorrow morning, 11AM?"
                </p>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-stone-800 text-white rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <span className="text-xs">AI</span>
                  </div>
                  <span className="text-xs text-stone-300">AI Receptionist</span>
                </div>
                <p className="text-sm">
                  "Of course! I've just texted the appointment details to your phone number."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-4">
              Your always-on, reliable front desk
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Never miss another call with AI that works around the clock to provide exceptional customer service.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-stone-800">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-normal text-stone-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwaysOnService;
