import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendDirection }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-stone-600 text-sm font-medium mb-2">{title}</p>
        <p className={'text-3xl font-medium text-stone-900 mb-1'}>{value}</p>
        {subtitle && <p className="text-stone-500 text-sm">{subtitle}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            {trendDirection === 'up' ? (
              <ArrowUp className="w-4 h-4 text-stone-600 mr-1" />
            ) : trendDirection === 'down' ? (
              <ArrowDown className="w-4 h-4 text-red-600 mr-1" />
            ) : null}
            <span
              className={`text-sm font-semibold ${
                trendDirection === 'up'
                  ? 'text-stone-600'
                  : trendDirection === 'down'
                  ? 'text-red-600'
                  : 'text-stone-600'
              }`}
            >
              {trend} from last month
            </span>
          </div>
        )}
      </div>
      <div className="p-4 rounded-full bg-stone-100">
        <Icon className="w-8 h-8 text-stone-700" />
      </div>
    </div>
  </div>
);

export default StatCard;
