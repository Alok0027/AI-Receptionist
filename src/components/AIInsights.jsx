import React from 'react';
import { Brain, TrendingUp, Clock, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const AIInsights = ({ insights }) => {
  const getInsightIcon = (iconType) => {
    switch(iconType) {
      case 'trending-up': return TrendingUp;
      case 'clock': return Clock;
      case 'check-circle': return CheckCircle;
      case 'alert': return AlertTriangle;
      case 'lightbulb': return Lightbulb;
      default: return Brain;
    }
  };

  const getInsightColor = (type) => {
    switch(type) {
      case 'improvement': return 'bg-green-50 border-green-200 text-green-700';
      case 'learning': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'alert': return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      default: return 'bg-stone-50 border-stone-200 text-stone-700';
    }
  };

  const getImpactColor = (type) => {
    switch(type) {
      case 'improvement': return 'bg-green-100 text-green-800';
      case 'learning': return 'bg-blue-100 text-blue-800';
      case 'alert': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-stone-100 text-stone-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-black">AI Performance Insights</h3>
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-stone-600" />
          <span className="text-sm text-stone-600">Auto-generated</span>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const IconComponent = getInsightIcon(insight.icon);
          
          return (
            <div
              key={index}
              className={`border rounded-lg p-4 transition-colors hover:shadow-sm ${getInsightColor(insight.type)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black text-sm">{insight.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(insight.type)}`}>
                      {insight.impact}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-stone-700 ml-11">
                {insight.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* AI Learning Status */}
      <div className="mt-6 pt-4 border-t border-stone-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600">AI Learning Active</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-stone-500">Last updated: 2 min ago</p>
            <p className="text-xs text-stone-500">Next analysis: 15 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
