import React, { useState } from 'react';
import { Phone, RefreshCcw, AlertTriangle, MapPin, Briefcase, Calendar } from 'lucide-react';

const TaskCompletionWidget = ({ data }) => {
  const [activeTaskView, setActiveTaskView] = useState('today');
  
  const getTaskIcon = (type) => {
    switch(type) {
      case 'call': return <Phone className="w-4 h-4" />;
      case 'followup': return <RefreshCcw className="w-4 h-4" />;
      case 'ticket': return <AlertTriangle className="w-4 h-4" />;
      case 'visit': return <MapPin className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };
  
  const getTaskColor = (type, status) => {
    if (status === 'completed') return 'text-green-600 bg-green-50';
    if (status === 'overdue') return 'text-red-600 bg-red-50';
    
    switch(type) {
      case 'call': return 'text-blue-600 bg-blue-50';
      case 'followup': return 'text-purple-600 bg-purple-50';
      case 'ticket': return 'text-orange-600 bg-orange-50';
      case 'visit': return 'text-teal-600 bg-teal-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-stone-900">Business Tasks</h3>
        <div className="flex items-center space-x-2">
          <div className="flex bg-stone-100 rounded-lg p-1">
            <button 
              onClick={() => setActiveTaskView('today')}
              className={`px-3 py-1 text-xs rounded ${activeTaskView === 'today' ? 'bg-white shadow-sm' : ''}`}
            >
              Today
            </button>
            <button 
              onClick={() => setActiveTaskView('upcoming')}
              className={`px-3 py-1 text-xs rounded ${activeTaskView === 'upcoming' ? 'bg-white shadow-sm' : ''}`}
            >
              Upcoming
            </button>
          </div>
        </div>
      </div>

      {/* Task Summary */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        <div className="text-center p-2 bg-green-50 rounded-lg">
          <p className="text-lg font-semibold text-green-600">{data.summary.completed}</p>
          <p className="text-xs text-stone-500">Completed</p>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded-lg">
          <p className="text-lg font-semibold text-yellow-600">{data.summary.pending}</p>
          <p className="text-xs text-stone-500">Pending</p>
        </div>
        <div className="text-center p-2 bg-red-50 rounded-lg">
          <p className="text-lg font-semibold text-red-600">{data.summary.overdue}</p>
          <p className="text-xs text-stone-500">Overdue</p>
        </div>
        <div className="text-center p-2 bg-blue-50 rounded-lg">
          <p className="text-lg font-semibold text-blue-600">{data.summary.totalToday}</p>
          <p className="text-xs text-stone-500">Total</p>
        </div>
      </div>

      {/* Task Categories */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {Object.entries(data.categories).map(([category, categoryData]) => (
          <div key={category} className="p-2 bg-stone-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-stone-700 capitalize">{category}</span>
              <span className="text-xs text-stone-500">{categoryData.completed}/{categoryData.total}</span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-1.5">
              <div 
                className="bg-stone-600 h-1.5 rounded-full" 
                style={{ width: `${(categoryData.completed / categoryData.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Task List */}
      {activeTaskView === 'today' && (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          <h4 className="font-medium text-sm text-stone-600 mb-2">Today's Tasks</h4>
          {data.todaysTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <div className={`p-1 rounded ${getTaskColor(task.type, task.status)}`}>
                    {getTaskIcon(task.type)}
                  </div>
                  <span className="font-medium text-stone-800 text-sm">{task.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-stone-500 ml-7">
                  <span>{task.dueTime}</span>
                  <span>•</span>
                  <span>{task.assignee}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-700' :
                  task.status === 'overdue' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTaskView === 'upcoming' && (
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-stone-600 mb-2">Upcoming Deadlines</h4>
          {data.upcomingDeadlines.map((deadline, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
              <div className="flex-1">
                <span className="font-medium text-stone-800 text-sm">{deadline.task}</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-stone-500">Due: {deadline.dueDate}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(deadline.priority)}`}>
                    {deadline.priority}
                  </span>
                </div>
              </div>
              <Calendar className="w-4 h-4 text-stone-500" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskCompletionWidget;
