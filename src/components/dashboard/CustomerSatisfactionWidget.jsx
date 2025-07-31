import React from 'react';
import { Star } from 'lucide-react';

const CustomerSatisfactionWidget = ({ data }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-stone-900">Customer Satisfaction</h3>
      <Star className="w-6 h-6 text-yellow-500" />
    </div>
    
    <div className="text-center mb-6">
      <div className="text-4xl font-medium text-stone-900 mb-2">{data.average}</div>
      <div className="flex justify-center mb-2">
        {[1,2,3,4,5].map((star) => (
          <Star 
            key={star} 
            className={`w-6 h-6 ${star <= Math.floor(data.average) ? 'text-yellow-500 fill-current' : 'text-stone-300'}`}
          />
        ))}
      </div>
      <p className="text-sm text-stone-600">Based on {data.total} reviews</p>
    </div>

    <div className="space-y-3">
      {data.recent.map((review, index) => (
        <div key={index} className="p-3 bg-stone-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-stone-900">{review.customer}</span>
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-3 h-3 ${star <= review.rating ? 'text-yellow-500 fill-current' : 'text-stone-300'}`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-stone-600 mb-1">{review.comment}</p>
          <p className="text-xs text-stone-500">{review.date}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CustomerSatisfactionWidget;
