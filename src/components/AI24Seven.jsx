import React from 'react';
import { Clock, Zap, Users, TrendingUp } from 'lucide-react';

const AI24Seven = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Easy to set up",
      description: "Start in minutes — no IT support needed. Quickly train AI Receptionist using your website, FAQs, or uploaded documents."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Offer conversational support", 
      description: "Deliver natural, human-like interactions that keep customers engaged every step of the way."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent routing",
      description: "Route calls seamlessly by names, locations, and context — eliminating frustrating phone menus and wrong transfers."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Handle routine questions",
      description: "Automate FAQs, block spam, send texts, and handle peak-time or after-hours calls with ease."
    }
  ];

  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-4">
          Answer calls 24/7 with AI
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 mb-12 max-w-3xl mx-auto">
          Transform your customer service with intelligent AI that never sleeps, ensuring every call is answered professionally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-stone-800">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-normal text-stone-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-stone-100 rounded-2xl p-6 md:p-8 text-stone-900">
          <h3 className="text-2xl font-medium mb-4">
            The ROI of YourReceptionAI Receptionist
          </h3>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            See how much you can save and improve your customer satisfaction with our AI-powered receptionist solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 space-y-6 md:space-y-0">
            <div className="text-center">
              <div className="text-3xl font-medium text-stone-900 mb-2">85%</div>
              <p className="text-stone-600 text-sm">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-stone-900 mb-2">24/7</div>
              <p className="text-stone-600 text-sm">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-stone-900 mb-2">98%</div>
              <p className="text-stone-600 text-sm">Customer Satisfaction</p>
            </div>
          </div>
          <button className="bg-stone-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-black transition-colors font-medium">
            Calculate Your ROI
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI24Seven;
