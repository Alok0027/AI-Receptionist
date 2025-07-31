import React from 'react';
import { RefreshCcw } from 'lucide-react';

const CustomerSourcesChart = ({ data }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-medium text-stone-900">Customer Sources</h3>
      <RefreshCcw className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900" />
    </div>
    


    <div className="space-y-3">
      {data.map((source, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              ['bg-stone-900', 'bg-stone-700', 'bg-stone-500', 'bg-stone-400', 'bg-stone-300'][index]
            }`}></div>
            <div>
              <span className="font-medium text-stone-900">{source.source}</span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-stone-500">{source.count} leads</span>
                <span className={`text-xs ${
                  source.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {source.growth}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="font-medium text-stone-900">{source.percentage}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CustomerSourcesChart;
