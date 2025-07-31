import React from 'react';
import { Activity, TrendingUp, Target, Clock } from 'lucide-react';

const AIInsightsWidget = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-stone-900">AI Insights</h3>
      <Activity className="w-6 h-6 text-stone-600" />
    </div>
    
    <div className="space-y-4">
      <div className="p-4 bg-stone-50 rounded-lg border-l-4 border-stone-900">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
          <div>
            <p className="font-normal text-stone-900">Revenue Opportunity</p>
            <p className="text-sm text-stone-600 mt-1">Your conversion rate increased 15% this week. Consider scaling successful campaigns</p>
            <div className="flex items-center mt-2">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">92% Confidence</span>
              <button className="ml-2 text-xs text-stone-600 hover:text-stone-900">View Details →</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-stone-50 rounded-lg border-l-4 border-blue-500">
        <div className="flex items-start space-x-3">
          <Target className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <p className="font-normal text-stone-900">Customer Retention</p>
            <p className="text-sm text-stone-600 mt-1">3 high-value customers show churn risk. Recommend immediate outreach</p>
            <div className="flex items-center mt-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">85% Confidence</span>
              <button className="ml-2 text-xs text-stone-600 hover:text-stone-900">Contact Now →</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-stone-50 rounded-lg border-l-4 border-orange-500">
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-orange-600 mt-1" />
          <div>
            <p className="font-normal text-stone-900">Peak Hours</p>
            <p className="text-sm text-stone-600 mt-1">Most calls between 10 AM - 2 PM. Consider additional staffing</p>
            <div className="flex items-center mt-2">
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">78% Confidence</span>
              <button className="ml-2 text-xs text-stone-600 hover:text-stone-900">Schedule Staff →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AIInsightsWidget;
