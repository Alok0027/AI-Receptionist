import React from 'react';
import { BarChart3, TrendingUp, Clock, Users } from 'lucide-react';

const AIAnalytics = () => {
  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Know what's working */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-4">
              Know what's working
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 mb-8">
              Easily see how your AI Receptionist is performing, spot gaps, and improve responses in one click.
            </p>

            {/* Analytics Dashboard Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-normal text-stone-900 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-stone-600" />
                  AIR Analytics
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Resolved vs unresolved calls */}
                <div>
                  <p className="text-sm text-stone-600 mb-2">Resolved vs unresolved calls</p>
                  <div className="relative">
                    <div className="flex items-center justify-center w-24 h-24 mx-auto">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#44403c"
                          strokeWidth="2"
                          strokeDasharray="75, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-medium text-stone-900">1,856</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resolved by knowledge base */}
                <div>
                  <p className="text-sm text-stone-600 mb-2">Resolved by knowledge base</p>
                  <div className="relative">
                    <div className="flex items-center justify-center w-24 h-24 mx-auto">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#44403c"
                          strokeWidth="2"
                          strokeDasharray="60, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-medium text-stone-900">216</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total number of calls handled by AIR */}
              <div className="border-t border-stone-200 pt-4">
                <p className="text-sm text-stone-600 mb-2">Total number of calls handled by AIR</p>
                <p className="text-3xl font-medium text-stone-900 mb-1">2,450</p>
                <p className="text-sm text-stone-500">+5.2% vs last month</p>
              </div>

              {/* Chart Area */}
              <div className="mt-6 h-32 bg-stone-50 rounded-lg flex items-end justify-center p-4">
                <div className="flex items-end space-x-2 h-full">
                  {[40, 65, 45, 80, 35, 70, 55, 90, 60, 75].map((height, index) => (
                    <div
                      key={index}
                      className="bg-stone-400 rounded-t"
                      style={{ height: `${height}%`, width: '12px' }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-xs text-stone-500">
                <span>Total calls</span>
                <span>Resolved</span>
                <span>Unresolved</span>
              </div>
            </div>
          </div>

          {/* Right Side - Schedule appointments */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-4">
              Schedule appointments
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 mb-8">
              Effortlessly handle bookings, reschedule appointments, send texts, and share relevant links right after calls — no manual follow-up needed.
            </p>

            {/* Appointment Scheduling Cards */}
            <div className="space-y-4">
              {/* Message Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-stone-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">M</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-stone-600">MESSAGES</p>
                    <p className="text-xs text-stone-500">Now</p>
                  </div>
                </div>
                <p className="text-stone-900 text-sm">
                  Hi Roger, your dental appointment at Care Dental has been confirmed! 🦷
                </p>
              </div>

              {/* Calendar Card */}
              <div className="bg-gradient-to-br from-stone-50 to-neutral-100 rounded-2xl p-6 border border-stone-200">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-stone-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs">📅</span>
                      </div>
                      <span className="font-medium text-stone-900">Google calendar</span>
                    </div>
                    <div className="text-stone-500">
                      <span className="text-xs">10:34 PM</span>
                      <div className="flex space-x-1 mt-1">
                        <div className="w-1 h-1 bg-stone-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-stone-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-stone-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-medium text-stone-800">31</div>
                      <div className="text-xs text-stone-600">Wed</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-stone-900 font-medium">Dental appointment 🦷</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
