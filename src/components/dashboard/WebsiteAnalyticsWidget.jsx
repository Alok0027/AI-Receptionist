import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const WebsiteAnalyticsWidget = ({ data }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-stone-900">Website & Social</h3>
      <Globe className="w-6 h-6 text-stone-600" />
    </div>
    
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center p-3 bg-stone-50 rounded-lg">
        <p className="text-2xl font-medium text-stone-900">{data.visitors}</p>
        <p className="text-sm text-stone-500">Visitors</p>
      </div>
      <div className="text-center p-3 bg-stone-50 rounded-lg">
        <p className="text-2xl font-medium text-stone-900">{data.bounceRate}</p>
        <p className="text-sm text-stone-500">Bounce Rate</p>
      </div>
      <div className="text-center p-3 bg-stone-50 rounded-lg">
        <p className="text-2xl font-medium text-stone-900">{data.sessionDuration}</p>
        <p className="text-sm text-stone-500">Avg. Session</p>
      </div>
    </div>

    <div className="space-y-3">
      <h4 className="font-medium text-sm text-stone-600">Social Media</h4>
      {data.social.map((s, index) => (
        <div key={index} className="flex items-center justify-between p-2 bg-stone-50 rounded-lg">
          <div className="flex items-center">
            {s.platform === 'Facebook' && <Facebook className="w-5 h-5 mr-3 text-blue-600" />}
            {s.platform === 'Twitter' && <Twitter className="w-5 h-5 mr-3 text-blue-400" />}
            {s.platform === 'Instagram' && <Instagram className="w-5 h-5 mr-3 text-pink-500" />}
            <span className="font-medium text-stone-800">{s.platform}</span>
          </div>
          <div className="text-right">
            <p className="font-medium text-stone-900">{s.followers.toLocaleString()}</p>
            <p className={`text-xs ${s.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {s.growth > 0 ? '+' : ''}{s.growth}%
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WebsiteAnalyticsWidget;
