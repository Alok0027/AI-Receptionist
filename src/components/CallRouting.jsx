import React, { useState } from 'react';
import { ArrowRight, Plus, X, Settings, Users } from 'lucide-react';

const CallRouting = () => {
  const [transferRules, setTransferRules] = useState([
    { keyword: 'Billing', active: true },
    { keyword: 'Finance', active: true },
    { keyword: 'Installments', active: true }
  ]);

  const knowledgeItems = [
    { name: 'Sales and Marketing', resources: 2, active: true },
    { name: 'Help Desk', resources: 4, active: true },
    { name: 'Atlanta', resources: 1, active: false }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Route calls to the right people */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-4">
              Route calls to the right people
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 mb-8">
              Your AI Receptionist is trained to know who handles what, without putting your customers on hold.
            </p>

            {/* Transferring Rule Card */}
            <div className="bg-gradient-to-br from-stone-50 to-neutral-100 rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-normal text-stone-900">Transferring Rule</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-stone-600">Active</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 space-y-6 md:space-y-0">
                <div>
                  <p className="text-sm text-stone-600 mb-3">When customer says:</p>
                  <div className="space-y-2">
                    {transferRules.map((rule, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2">
                        <span className="text-stone-900">{rule.keyword}</span>
                        <X className="w-4 h-4 text-stone-400 hover:text-stone-600 cursor-pointer" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-stone-400 mb-4" />
                  <p className="text-sm text-stone-600 mb-3">Transfer call to:</p>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-4 py-3">
                    <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-stone-600" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Sara Bennett</p>
                      <p className="text-xs text-stone-500">Ext. 1875</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Trained as your company expert */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-4">
              Trained as your company expert
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 mb-8">
              Turn your AI Receptionist into a company expert by customizing it to your business knowledge, policies, processes, and more.
            </p>

            {/* Knowledge Hub Card */}
            <div className="bg-gradient-to-br from-stone-50 to-neutral-100 rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-normal text-stone-900">Knowledge hub</h3>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-stone-600">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Search</span>
                  </div>
                  <button className="flex items-center space-x-1 text-stone-600 hover:text-stone-900">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">Add</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-xs text-stone-500 uppercase tracking-wide border-b border-stone-200 pb-2">
                  <span>Name</span>
                  <span>Number of resources</span>
                  <span>Status</span>
                </div>

                {knowledgeItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
                    <span className="text-stone-900 font-medium">{item.name}</span>
                    <span className="text-stone-600">{item.resources}</span>
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.active ? 'bg-stone-800' : 'bg-stone-300'
                      }`}>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-dashed border-stone-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-stone-600 font-normal">PDF</span>
                  </div>
                  <p className="text-sm text-stone-600 mb-2">Upload asset</p>
                  <p className="text-xs text-stone-500">Locations.pdf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallRouting;
