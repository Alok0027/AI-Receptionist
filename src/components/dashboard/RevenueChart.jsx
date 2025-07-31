import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueChart = ({ data }) => {
  const [view, setView] = useState('monthly'); // monthly, weekly
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [compare, setCompare] = useState(false);

  const handleBarClick = (data) => {
    if (view === 'monthly' && data && data.activePayload) {
      const weekIndex = data.activePayload[0].payload.name.split(' ')[1] - 1;
      setSelectedWeek(weekIndex);
      setView('weekly');
    }
  };

  const monthlyData = data.thisMonth.weeks.map((week, index) => ({
    name: `Week ${week.week}`,
    thisMonth: week.total,
    lastMonth: data.lastMonth.weeks[index].total,
  }));

  const weeklyData = selectedWeek !== null ? data.thisMonth.weeks[selectedWeek].days.map((day, index) => ({
    name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index],
    thisMonth: day,
    lastMonth: data.lastMonth.weeks[selectedWeek].days[index],
  })) : [];

  const chartData = view === 'monthly' ? monthlyData : weeklyData;
  const totalRevenue = view === 'monthly'
    ? data.thisMonth.weeks.reduce((acc, week) => acc + week.total, 0)
    : (selectedWeek !== null ? data.thisMonth.weeks[selectedWeek].total : 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium text-stone-900">Revenue Trend</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => { setView('monthly'); setSelectedWeek(null); }}
            className={`px-3 py-1 border rounded-lg ${view === 'monthly' ? 'bg-stone-800 text-white' : 'border-stone-300'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => {
              setView('weekly');
              const currentWeekIndex = data.thisMonth.weeks.length - 1;
              setSelectedWeek(currentWeekIndex);
            }}
            className={`px-3 py-1 border rounded-lg ${view === 'weekly' && selectedWeek === (data.thisMonth.weeks.length - 1) ? 'bg-stone-800 text-white' : 'border-stone-300'}`}
          >
            Weekly
          </button>
          <button
            onClick={() => setCompare(!compare)}
            className={`px-4 py-2 text-sm text-white rounded ${compare ? 'bg-stone-800' : 'bg-stone-500'}`}
          >
            {compare ? 'Hide Comparison' : 'Compare Last Month'}
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} barSize={20} onClick={handleBarClick}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A5568" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#EDF2F7" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="thisMonth" fill="url(#colorUv)" name="This Month" />
          {compare && <Bar dataKey="lastMonth" fill="#000000" name="Last Month" />}
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6 text-center">
        <h4 className="text-lg font-medium text-stone-900">Total Revenue: ₹{totalRevenue.toLocaleString()}</h4>
      </div>
    </div>
  );
};

export default RevenueChart;
