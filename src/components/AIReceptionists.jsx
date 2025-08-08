import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const AIReceptionists = () => {
  const receptionists = [
    {
      name: 'Stanley',
      description: 'Answer customer FAQs for banks',
      avatar: '👨‍💼',
      color: 'bg-stone-100',
      featured: false
    },
    {
      name: 'Kirsten',
      description: 'Schedule appointments for clinics',
      avatar: '👩‍⚕️',
      color: 'bg-stone-100',
      featured: false
    },
    {
      name: 'Naomi',
      description: 'Text quote form link for insurance',
      avatar: '👩‍💼',
      color: 'bg-stone-100',
      featured: false
    },
    {
      name: 'Natalie',
      description: 'Route incoming calls for legal teams',
      avatar: '👩‍⚖️',
      color: 'bg-stone-100',
      featured: true
    },
    {
      name: 'Charlotte',
      description: 'Route call by location for construction',
      avatar: '👷‍♀️',
      color: 'bg-stone-100',
      featured: false
    },
    {
      name: 'Jonah',
      description: 'Share property details for real estate',
      avatar: '👨‍💻',
      color: 'bg-stone-100',
      featured: false
    }
  ];

  return (
    <div className="bg-stone-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-4">
            Meet Your AI Receptionists
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
            Choose from our specialized AI receptionists, each trained for different industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {receptionists.map((receptionist, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300 cursor-pointer group ${
                receptionist.featured ? 'ring-2 ring-stone-500 md:scale-105' : ''
              }`}
            >
              {receptionist.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 ${receptionist.color} rounded-full flex items-center justify-center text-2xl`}>
                  {receptionist.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-stone-900 mb-1">
                    {receptionist.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {receptionist.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Play className="w-4 h-4" />
                  <span className="text-sm">Preview Voice</span>
                </button>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-stone-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-stone-800 transition-colors font-medium">
            Customize Your AI Receptionist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIReceptionists;
