import React from 'react';
import { Phone, Mail } from 'lucide-react';

const AppointmentCard = ({ appointment }) => (
  <div className="flex items-center p-4 bg-stone-50 rounded-lg mb-3 hover:bg-stone-100 transition-colors border border-stone-200">
    <div
      className={`w-3 h-3 rounded-full mr-4 ${
        appointment.status === 'confirmed'
          ? 'bg-green-500'
          : appointment.status === 'pending'
          ? 'bg-yellow-500'
          : 'bg-red-500'
      }`}
    ></div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h4 className="font-normal text-stone-900">{appointment.client}</h4>
        <span className="text-sm text-stone-500">{appointment.time}</span>
      </div>
      <p className="text-sm text-stone-600">{appointment.type}</p>
      <p className="text-xs text-stone-500 mt-1">{appointment.phone}</p>
    </div>
    <div className="flex space-x-2 ml-4">
      <button className="p-1 hover:bg-stone-200 rounded">
        <Phone className="w-4 h-4 text-stone-600" />
      </button>
      <button className="p-1 hover:bg-stone-200 rounded">
        <Mail className="w-4 h-4 text-stone-600" />
      </button>
    </div>
  </div>
);

export default AppointmentCard;
