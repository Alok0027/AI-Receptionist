import React from 'react';
import { Star, MessageSquare, User } from 'lucide-react';

const SatisfactionSection = ({ satisfaction }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-stone-300'
        }`}
      />
    ));
  };

  const renderMiniStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-stone-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-black">Customer Satisfaction</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {renderStars(satisfaction.rating)}
          </div>
          <span className="text-lg font-medium text-black">{satisfaction.rating}</span>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-stone-50 rounded-lg">
          <p className="text-2xl font-medium text-black">{satisfaction.rating}</p>
          <p className="text-sm text-stone-600">Average Rating</p>
        </div>
        <div className="text-center p-4 bg-stone-50 rounded-lg">
          <p className="text-2xl font-medium text-black">{satisfaction.totalReviews}</p>
          <p className="text-sm text-stone-600">Total Reviews</p>
        </div>
      </div>

      {/* Recent Ratings Trend */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-stone-700 mb-3">Recent Ratings</h4>
        <div className="flex items-center space-x-1">
          {satisfaction.recentRatings.map((rating, index) => (
            <div key={index} className="flex items-center space-x-0.5">
              {renderMiniStars(rating)}
            </div>
          ))}
        </div>
      </div>

      {/* Latest Review */}
      <div className="border border-stone-200 rounded-lg p-4 bg-stone-50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-stone-600" />
            </div>
            <div>
              <p className="font-medium text-black text-sm">{satisfaction.lastReview.customer}</p>
              <div className="flex items-center space-x-1">
                {renderMiniStars(satisfaction.lastReview.rating)}
              </div>
            </div>
          </div>
          <span className="text-xs text-stone-500">{satisfaction.lastReview.time}</span>
        </div>
        
        <div className="flex items-start space-x-2">
          <MessageSquare className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-stone-700 italic">
            "{satisfaction.lastReview.comment}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionSection;
