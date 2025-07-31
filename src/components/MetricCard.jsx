import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ title, value, subtitle, growth, trend, icon: Icon }) => {
  const isPositive = trend === 'up';
  const growthColor = isPositive ? 'text-stone-600' : 'text-red-600';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-stone-50 rounded-lg">
          <Icon className="w-5 h-5 text-stone-700" />
        </div>
        <div className={`flex items-center space-x-1 ${growthColor}`}>
          <TrendIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{Math.abs(growth)}%</span>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-medium text-black">{value}</h3>
        <p className="text-sm text-stone-600">{title}</p>
        <p className="text-xs text-stone-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default MetricCard;
