import React from 'react';
import { XCircle, Phone, Mail } from 'lucide-react';

const CalendarModal = ({ showCalendarModal, setShowCalendarModal, appointments }) => {
  if (!showCalendarModal) return null;
  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Adjust for Monday start
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  // Static appointment days to prevent animation
  const appointmentDays = [5, 12, 18, 23, 28]; // Fixed days with appointments
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-stone-900">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button 
            onClick={() => setShowCalendarModal(false)}
            className="p-2 hover:bg-stone-100 rounded-lg"
          >
            <XCircle className="w-6 h-6 text-stone-600" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map(day => (
            <div key={day} className="text-center text-sm font-medium text-stone-600 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: startingDayOfWeek }, (_, i) => (
            <div key={`empty-${i}`} className="h-12"></div>
          ))}
          
          {/* Days of the month */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isToday = day === today.getDate();
            const hasAppointment = appointmentDays.includes(day);
            
            return (
              <div 
                key={day} 
                className={`h-12 flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                  isToday ? 'bg-stone-900 text-white' :
                  hasAppointment ? 'bg-blue-100 text-blue-800 font-medium' :
                  'hover:bg-stone-100 text-stone-700'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t border-stone-200">
          <h3 className="font-medium text-stone-900 mb-3">Upcoming Appointments</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {appointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-stone-50 rounded-lg">
                <div>
                  <span className="font-medium text-stone-800">{appointment.client}</span>
                  <p className="text-sm text-stone-600">{appointment.type}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-stone-600">{appointment.time}</span>
                  <div className="flex space-x-1 mt-1">
                    <button className="p-1 hover:bg-stone-200 rounded">
                      <Phone className="w-3 h-3 text-stone-600" />
                    </button>
                    <button className="p-1 hover:bg-stone-200 rounded">
                      <Mail className="w-3 h-3 text-stone-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
