import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  DollarSign, 
  Clock, 
  Calendar, 
  Users, 
  TrendingUp, 
  Package, 
  Settings,
  Bell,
  Search,
  ChevronDown,
  Activity,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  BarChart3,
  Brain,
  PieChart,
  MapPin,
  Star,
  Zap,
  ArrowUp,
  ArrowDown,
  Briefcase,
  CreditCard,
  ShoppingCart,
  ThumbsUp,
  MessageSquare,
  Globe,
  Award,
  TrendingDown,
  Plus,
  Filter,
  Download,
  Smartphone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Chrome,
  RefreshCcw
} from 'lucide-react';
import { motion } from 'framer-motion';
import StatCard from './dashboard/StatCard';
import AppointmentCard from './dashboard/AppointmentCard';
import RevenueChart from './dashboard/RevenueChart';
import CustomerSourcesChart from './dashboard/CustomerSourcesChart';
import TaskCompletionWidget from './dashboard/TaskCompletionWidget';
import CustomerSatisfactionWidget from './dashboard/CustomerSatisfactionWidget';
import InventoryWidget from './dashboard/InventoryWidget';
import StaffAttendanceWidget from './dashboard/StaffAttendanceWidget';
import WebsiteAnalyticsWidget from './dashboard/WebsiteAnalyticsWidget';
import AIInsightsWidget from './dashboard/AIInsightsWidget';
import CalendarModal from './dashboard/CalendarModal';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(5);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  // Enhanced sample data with more comprehensive metrics
  const [dashboardData, setDashboardData] = useState({
    calls: {
      received: 47,
      missed: 3,
      answered: 44,
      averageTime: '3m 24s',
      trend: '+12%',
      peakHours: '10 AM - 2 PM',
      satisfaction: 4.6
    },
    payments: {
      received: 28450,
      pending: 5200,
      overdue: 1200,
      thisMonth: 156780,
      lastMonth: 142300,
      methods: [
        { name: 'Credit Card', amount: 18200, percentage: 64 },
        { name: 'Bank Transfer', amount: 7800, percentage: 27 },
        { name: 'Cash', amount: 2450, percentage: 9 }
      ]
    },
    revenue: {
      thisMonth: {
        weeks: [
          { week: 1, total: 50350, days: [7200, 8100, 6800, 9200, 5500, 6000, 7550] },
          { week: 2, total: 49500, days: [7000, 7800, 6500, 8800, 5000, 6200, 8200] },
          { week: 3, total: 51000, days: [7500, 8500, 7000, 9500, 5800, 6500, 6200] },
          { week: 4, total: 52500, days: [7800, 8800, 7200, 9800, 6000, 6800, 6100] },
        ]
      },
      lastMonth: {
        weeks: [
          { week: 1, total: 48000, days: [6800, 7800, 6500, 8800, 5200, 5800, 7100] },
          { week: 2, total: 47000, days: [6500, 7500, 6200, 8500, 4800, 6000, 7500] },
          { week: 3, total: 49000, days: [7000, 8000, 6800, 9000, 5500, 6200, 6500] },
          { week: 4, total: 50000, days: [7200, 8200, 7000, 9200, 5800, 6500, 6100] },
        ]
      },
      today: 28450,
      month: 203350,
      growth: 12.5,
      forecast: 485000
    },
    appointments: [
      { time: '9:00 AM', client: 'Vidyut Kumar', type: 'Consultation', status: 'confirmed', phone: '+91 1234567890' },
      { time: '10:30 AM', client: 'Sahil Khan', type: 'Follow-up', status: 'confirmed', phone: '+91 1234567891' },
      { time: '12:00 PM', client: 'Shahnaz Gill', type: 'New Client', status: 'pending', phone: '+91 1234567892' },
      { time: '2:30 PM', client: 'Viswas Kumar', type: 'Consultation', status: 'confirmed', phone: '+91 1234567893' },
      { time: '4:00 PM', client: 'Priyanka Singh', type: 'Review', status: 'confirmed', phone: '+91 1234567894' }
    ],
    inventory: {
      lowStock: 8,
      expiringSoon: 3,
      totalItems: 450,
      value: 125000,
      topProducts: [
        { name: 'Product A', stock: 45, sold: 23, revenue: 12500 },
        { name: 'Product B', stock: 12, sold: 45, revenue: 18900 },
        { name: 'Product C', stock: 8, sold: 34, revenue: 15600 },
        { name: 'Product D', stock: 67, sold: 12, revenue: 8900 }
      ]
    },
    customerSources: [
      { source: 'Google Ads', count: 23, percentage: 35, growth: '+8%' },
      { source: 'Referrals', count: 18, percentage: 28, growth: '+15%' },
      { source: 'Social Media', count: 12, percentage: 18, growth: '-3%' },
      { source: 'Website', count: 8, percentage: 12, growth: '+5%' },
      { source: 'Print Ads', count: 4, percentage: 7, growth: '-12%' }
    ],
    staff: {
      summary: {
        total: 18,
        checkedIn: 14,
        onBreak: 2,
        absent: 1,
        onLeave: 1,
        late: 3,
        overtime: 2
      },
      shifts: {
        morning: { scheduled: 8, present: 7, late: 1 },
        afternoon: { scheduled: 6, present: 5, absent: 1 },
        evening: { scheduled: 4, present: 4, late: 0 }
      },
      liveStatus: [
        { id: 1, name: 'Rajesh Kumar', role: 'Manager', shift: 'Morning', checkIn: '08:45', status: 'present', location: 'Floor 1', punctuality: 'on-time' },
        { id: 2, name: 'Priya Sharma', role: 'Receptionist', shift: 'Morning', checkIn: '09:15', status: 'present', location: 'Reception', punctuality: 'late' },
        { id: 3, name: 'Amit Patel', role: 'Technician', shift: 'Morning', checkIn: '08:30', status: 'on-break', location: 'Break Room', punctuality: 'early' },
        { id: 4, name: 'Sneha Singh', role: 'Sales', shift: 'Morning', checkIn: '09:00', status: 'present', location: 'Sales Floor', punctuality: 'on-time' },
        { id: 5, name: 'Rahul Verma', role: 'Support', shift: 'Afternoon', checkIn: '13:30', status: 'present', location: 'Support Desk', punctuality: 'on-time' }
      ]
    },
    satisfaction: {
      average: 4.6,
      total: 156,
      recent: [
        { customer: 'John D.', rating: 5, comment: 'Excellent service!', date: '2 hours ago' },
        { customer: 'Sarah M.', rating: 4, comment: 'Very satisfied', date: '4 hours ago' },
        { customer: 'Mike R.', rating: 5, comment: 'Outstanding!', date: '6 hours ago' }
      ]
    },
    businessTasks: {
      summary: {
        totalToday: 18,
        completed: 12,
        pending: 4,
        overdue: 2
      },
      categories: {
        calls: { total: 8, completed: 6 },
        followups: { total: 5, completed: 3 },
        tickets: { total: 3, completed: 2 },
        visits: { total: 2, completed: 1 }
      },
      todaysTasks: [
        { id: 1, title: 'Call Mr. Sharma', type: 'call', status: 'completed', priority: 'high', dueTime: '10:00 AM', assignee: 'John' },
        { id: 2, title: 'Follow up on proposal', type: 'followup', status: 'pending', priority: 'medium', dueTime: '2:00 PM', assignee: 'Sarah' },
        { id: 3, title: 'Site visit preparation', type: 'visit', status: 'pending', priority: 'high', dueTime: '4:00 PM', assignee: 'Mike' },
        { id: 4, title: 'Resolve ticket #123', type: 'ticket', status: 'overdue', priority: 'high', dueTime: '9:00 AM', assignee: 'Alex' }
      ],
      upcomingDeadlines: [
        { task: 'Quarterly report submission', dueDate: 'Jan 31', priority: 'high' },
        { task: 'Client presentation prep', dueDate: 'Feb 1', priority: 'medium' },
        { task: 'Staff performance reviews', dueDate: 'Feb 2', priority: 'low' }
      ]
    },
    website: {
      visitors: 2847,
      bounceRate: '32%',
      sessionDuration: '4m 15s',
      social: [
        { platform: 'Facebook', followers: 1250, growth: 1.2 },
        { platform: 'Instagram', followers: 890, growth: 3.1 },
        { platform: 'Twitter', followers: 456, growth: -0.5 },
      ]
    }
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Calls Today"
              value={dashboardData.calls.received}
              subtitle={`${dashboardData.calls.answered} answered`}
              icon={Phone}
              trend={dashboardData.calls.trend}
              trendDirection="up"
            />
            <StatCard
              title="Payments"
              value={`₹${dashboardData.payments.received.toLocaleString()}`}
              subtitle={`₹${dashboardData.payments.pending.toLocaleString()} pending`}
              icon={DollarSign}
              trend={dashboardData.payments.trend}
              trendDirection="up"
            />
            <StatCard
              title="Revenue Today"
              value={`₹${dashboardData.revenue.today.toLocaleString()}`}
              subtitle={`₹${dashboardData.revenue.month.toLocaleString()} this month`}
              icon={BarChart3}
              trend={dashboardData.revenue.growth}
              trendDirection="up"
            />
            <StatCard
              title="Active Users"
              value="1,234"
              subtitle="+12% from last week"
              icon={Users}
              trend="+12%"
              trendDirection="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart data={dashboardData.revenue} />
            <CustomerSourcesChart data={dashboardData.customerSources} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-stone-900">Today's Appointments</h3>
                <Calendar className="w-6 h-6 text-stone-600" />
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {dashboardData.appointments.map((appointment, index) => (
                  <AppointmentCard key={index} appointment={appointment} />
                ))}
              </div>
              <button
                onClick={() => setShowCalendarModal(true)}
                className="w-full mt-4 py-2 text-stone-900 hover:bg-stone-50 rounded-lg transition-colors border border-stone-200"
              >
                View Full Calendar
              </button>
            </div>
            
            {/* AI Performance Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-stone-900">AI Performance Today</h3>
                <Brain className="w-6 h-6 text-stone-600" />
              </div>
              
              <div className="space-y-4">
                {/* AI Accuracy */}
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">AI Accuracy</p>
                      <p className="text-sm text-stone-600">Call handling success</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">94.2%</p>
                    <p className="text-sm text-green-600">+3.1%</p>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Avg Response</p>
                      <p className="text-sm text-stone-600">Time per call</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">1.8s</p>
                    <p className="text-sm text-green-600">-12.3%</p>
                  </div>
                </div>
                
                {/* Automation Rate */}
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Automation</p>
                      <p className="text-sm text-stone-600">Calls handled by AI</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">87.5%</p>
                    <p className="text-sm text-green-600">+5.2%</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 text-stone-900 hover:bg-stone-50 rounded-lg transition-colors border border-stone-200">
                View Detailed Analytics
              </button>
            </div>
          </div>

          {/* Staff Performance and Website Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StaffAttendanceWidget data={dashboardData.staff} />
            <WebsiteAnalyticsWidget data={dashboardData.website} />
          </div>

          {/* AI Insights - Full Width */}
          <AIInsightsWidget />
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-stone-200">
          <h3 className="text-2xl font-medium text-stone-900 mb-6">Profile Settings</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Placeholder for settings content */}
          </div>
        </div>
      )}
      {/* Calendar Modal */}
      <CalendarModal
        showCalendarModal={showCalendarModal}
        setShowCalendarModal={setShowCalendarModal}
        appointments={dashboardData.appointments}
      />
    </>
  );
};

export default Dashboard;
