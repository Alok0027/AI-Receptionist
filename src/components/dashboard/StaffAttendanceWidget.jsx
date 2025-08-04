import React, { useState } from 'react';
import { Users, CheckCircle, Clock, AlertTriangle, MapPin } from 'lucide-react';

const StaffAttendanceWidget = ({ data }) => {
  const [activeView, setActiveView] = useState('live');
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'present': return 'text-green-600 bg-green-50';
      case 'on-break': return 'text-blue-600 bg-blue-50';
      case 'absent': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  
  const getPunctualityIcon = (punctuality) => {
    switch(punctuality) {
      case 'early': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'on-time': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'late': return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-stone-900">Staff Attendance</h3>
        <div className="flex items-center space-x-2">
          <div className="flex bg-stone-100 rounded-lg p-1">
            <button 
              onClick={() => setActiveView('live')}
              className={`px-3 py-1 text-xs rounded ${activeView === 'live' ? 'bg-white shadow-sm' : ''}`}
            >
              Live
            </button>
            <button 
              onClick={() => setActiveView('shifts')}
              className={`px-3 py-1 text-xs rounded ${activeView === 'shifts' ? 'bg-white shadow-sm' : ''}`}
            >
              Shifts
            </button>
          </div>
          <Users className="w-5 h-5 text-stone-600" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        <div className="text-center p-2 bg-green-50 rounded-lg">
          <p className="text-lg font-normal text-green-600">{data.summary.checkedIn}</p>
          <p className="text-xs text-stone-500">Present</p>
        </div>
        <div className="text-center p-2 bg-blue-50 rounded-lg">
          <p className="text-lg font-normal text-blue-600">{data.summary.onBreak}</p>
          <p className="text-xs text-stone-500">On Break</p>
        </div>
        <div className="text-center p-2 bg-red-50 rounded-lg">
          <p className="text-lg font-normal text-red-600">{data.summary.absent}</p>
          <p className="text-xs text-stone-500">Absent</p>
        </div>
        <div className="text-center p-2 bg-orange-50 rounded-lg">
          <p className="text-lg font-normal text-orange-600">{data.summary.late}</p>
          <p className="text-xs text-stone-500">Late</p>
        </div>
      </div>

      {activeView === 'live' && (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          <h4 className="font-medium text-sm text-stone-600 mb-2">Live Status</h4>
          {data.liveStatus.map((staff) => (
            <div key={staff.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-stone-900">{staff.name}</span>
                  <span className="text-xs text-stone-500">({staff.role})</span>
                  {getPunctualityIcon(staff.punctuality)}
                </div>
                <div className="flex items-center space-x-3 mt-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(staff.status)}`}>
                    {staff.status.replace('-', ' ')}
                  </span>
                  {staff.checkIn && (
                    <span className="text-xs text-stone-500">Check-in: {staff.checkIn}</span>
                  )}
                  {staff.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-stone-500" />
                      <span className="text-xs text-stone-500">{staff.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === 'shifts' && (
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-stone-600 mb-2">Shift Overview</h4>
          {Object.entries(data.shifts).map(([shift, shiftData]) => (
            <div key={shift} className="p-3 bg-stone-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-stone-900 capitalize">{shift} Shift</span>
                <span className="text-xs text-stone-500">
                  {shiftData.present}/{shiftData.scheduled} present
                </span>
              </div>
              <div className="w-full bg-stone-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${(shiftData.present / shiftData.scheduled) * 100}%` }}
                ></div>
              </div>
              {shiftData.late > 0 && (
                <p className="text-xs text-orange-600 mt-1">{shiftData.late} late arrivals</p>
              )}
              {shiftData.absent > 0 && (
                <p className="text-xs text-red-600 mt-1">{shiftData.absent} absent</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StaffAttendanceWidget;
