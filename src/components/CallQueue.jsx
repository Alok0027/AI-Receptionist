import React, { useState } from 'react';
import { PhoneMissed, PhoneCall, Clock, AlertCircle, CheckCircle, User } from 'lucide-react';

const CallQueue = ({ callQueue }) => {
  const [activeTab, setActiveTab] = useState('missed');

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-stone-50 text-stone-700 border-stone-200';
      default: return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  const tabs = [
    { id: 'missed', label: 'Missed Calls', count: callQueue.missedCalls.length, icon: PhoneMissed },
    { id: 'followups', label: 'Follow-ups', count: callQueue.followUps.length, icon: CheckCircle },
    { id: 'waiting', label: 'Waiting', count: callQueue.waitingCalls.length, icon: Clock }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-black">Call Queue</h3>
        <div className="flex items-center space-x-1">
          <AlertCircle className="w-4 h-4 text-stone-500" />
          <span className="text-sm text-stone-600">Real-time</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-stone-100 rounded-lg p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-sm'
                  : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-stone-100 text-stone-600' : 'bg-stone-200 text-stone-500'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {activeTab === 'missed' && (
          <>
            {callQueue.missedCalls.length === 0 ? (
              <div className="text-center py-6">
                <PhoneMissed className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500 text-sm">No missed calls</p>
              </div>
            ) : (
              callQueue.missedCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-stone-600" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm">{call.name}</p>
                      <p className="text-xs text-stone-500">{call.reason}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(call.priority)}`}>
                      {call.priority}
                    </span>
                    <span className="text-xs text-stone-500">{call.time}</span>
                  </div>
                </div>
              ))
            )}
          </>
        )}

        {activeTab === 'followups' && (
          <>
            {callQueue.followUps.length === 0 ? (
              <div className="text-center py-6">
                <CheckCircle className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500 text-sm">No follow-ups needed</p>
              </div>
            ) : (
              callQueue.followUps.map((followUp, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-stone-600" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm">{followUp.name}</p>
                      <p className="text-xs text-stone-600">{followUp.task}</p>
                    </div>
                  </div>
                  <span className="text-xs text-orange-600 font-medium">{followUp.due}</span>
                </div>
              ))
            )}
          </>
        )}

        {activeTab === 'waiting' && (
          <>
            {callQueue.waitingCalls.length === 0 ? (
              <div className="text-center py-6">
                <Clock className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500 text-sm">No waiting calls</p>
              </div>
            ) : (
              callQueue.waitingCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm">{call.name}</p>
                      <p className="text-xs text-stone-600">{call.reason}</p>
                    </div>
                  </div>
                  <span className="text-xs text-stone-500">{call.time}</span>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CallQueue;
