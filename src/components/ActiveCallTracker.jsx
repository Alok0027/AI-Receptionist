import React from 'react';
import { Phone, Clock, Smile, Frown, Meh, User } from 'lucide-react';

const ActiveCallTracker = ({ activeCalls }) => {
  const getMoodIcon = (mood) => {
    switch(mood) {
      case 'calm': return <Smile className="w-4 h-4 text-stone-500" />;
      case 'angry': return <Frown className="w-4 h-4 text-red-500" />;
      case 'confused': return <Meh className="w-4 h-4 text-yellow-500" />;
      default: return <Smile className="w-4 h-4 text-stone-500" />;
    }
  };

  const getMoodColor = (mood) => {
    switch(mood) {
      case 'calm': return 'bg-stone-50 text-stone-700';
      case 'angry': return 'bg-red-50 text-red-700';
      case 'confused': return 'bg-yellow-50 text-yellow-700';
      default: return 'bg-stone-50 text-stone-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-black">Active Calls</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-stone-600">{activeCalls.length} active</span>
        </div>
      </div>

      <div className="space-y-4">
        {activeCalls.length === 0 ? (
          <div className="text-center py-8">
            <Phone className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500">No active calls</p>
          </div>
        ) : (
          activeCalls.map((call) => (
            <div key={call.id} className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-stone-700">{call.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-black">{call.name}</h4>
                    <p className="text-sm text-stone-600">{call.intent}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(call.mood)}`}>
                    <div className="flex items-center space-x-1">
                      {getMoodIcon(call.mood)}
                      <span className="capitalize">{call.mood}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-stone-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{call.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-50 rounded-lg p-3">
                <p className="text-sm text-stone-700">
                  <span className="font-medium">AI Action:</span> {call.aiAction}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActiveCallTracker;
