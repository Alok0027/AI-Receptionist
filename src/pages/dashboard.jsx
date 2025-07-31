import React, { useState, useEffect } from 'react';
import { 
  Phone, PhoneCall, Calendar, DollarSign, Clock, Users, 
  TrendingUp, TrendingDown, Star, MessageSquare, Brain,
  PhoneIncoming, PhoneMissed, AlertCircle, CheckCircle,
  User, Smile, Frown, Meh, ArrowUp, ArrowDown
} from 'lucide-react';

// Import reusable components
import MetricCard from '../components/MetricCard';
import ActiveCallTracker from '../components/ActiveCallTracker';
import CallQueue from '../components/CallQueue';
import SatisfactionSection from '../components/SatisfactionSection';
import AIInsights from '../components/AIInsights';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data for AI receptionist performance dashboard
  const [dashboardData, setDashboardData] = useState({
    aiMetrics: {
      aiAccuracy: { value: 94.2, growth: 3.1, trend: 'up', unit: '%' },
      automationRate: { value: 87.5, growth: 5.2, trend: 'up', unit: '%' },
      avgResponseTime: { value: 1.8, growth: -12.3, trend: 'down', unit: 's' },
      conversationSuccess: { value: 92.1, growth: 2.8, trend: 'up', unit: '%' },
      aiConfidence: { value: 89.3, growth: 4.1, trend: 'up', unit: '%' },
      escalationRate: { value: 8.2, growth: -15.4, trend: 'down', unit: '%' }
    },
    liveConversations: [
      {
        id: 1,
        caller: 'Sarah J.',
        intent: 'Appointment booking',
        aiConfidence: 96,
        conversationStage: 'Slot confirmation',
        sentimentScore: 0.8,
        duration: '2m 15s',
        aiDecisions: ['Identified intent', 'Checked availability', 'Proposing times'],
        nextAction: 'Confirm booking'
      },
      {
        id: 2,
        caller: 'Michael C.',
        intent: 'Billing question',
        aiConfidence: 78,
        conversationStage: 'Information gathering',
        sentimentScore: -0.2,
        duration: '4m 32s',
        aiDecisions: ['Detected frustration', 'Accessing account', 'Explaining charges'],
        nextAction: 'Escalate to human'
      }
    ],
    aiLearning: {
      recentLearnings: [
        { topic: 'New appointment types', confidence: 94, impact: 'High', time: '2 min ago' },
        { topic: 'Billing terminology', confidence: 87, impact: 'Medium', time: '8 min ago' },
        { topic: 'Customer tone detection', confidence: 92, impact: 'High', time: '15 min ago' }
      ],
      pendingReviews: [
        { conversation: 'Complex billing dispute', aiDecision: 'Escalated correctly', needsReview: true },
        { conversation: 'Appointment cancellation', aiDecision: 'Handled autonomously', needsReview: false }
      ],
      trainingQueue: [
        { scenario: 'Emergency appointment requests', priority: 'High', eta: '2 hours' },
        { scenario: 'Multi-service bookings', priority: 'Medium', eta: '4 hours' }
      ]
    },
    satisfaction: {
      rating: 4.8,
      totalReviews: 342,
      lastReview: {
        rating: 5,
        comment: "The AI was incredibly helpful and understood exactly what I needed. Booked my appointment in under 2 minutes!",
        customer: "Jennifer L.",
        time: "2 hours ago"
      },
      recentRatings: [5, 4, 5, 5, 4, 5, 4, 5, 5, 4]
    },
    aiInsights: [
      {
        type: 'improvement',
        title: 'Call Script Optimization',
        description: 'You gained 20% more appointments after updating your greeting script last week.',
        impact: '+20% appointments',
        icon: 'trending-up'
      },
      {
        type: 'learning',
        title: 'Peak Hours Identified',
        description: 'AI detected highest call volume between 10 AM - 2 PM. Consider staffing adjustments.',
        impact: 'Efficiency boost',
        icon: 'clock'
      },
      {
        type: 'alert',
        title: 'Payment Processing',
        description: 'AI successfully handled 95% of payment inquiries without human intervention.',
        impact: '95% automation',
        icon: 'check-circle'
      }
    ]
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-black" />
                <h1 className="text-xl font-medium text-black">AI Receptionist Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-stone-600">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">AI Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <MetricCard
            title="Calls Answered"
            value={dashboardData.topMetrics.callsAnswered.value}
            subtitle="Today"
            growth={dashboardData.topMetrics.callsAnswered.growth}
            trend={dashboardData.topMetrics.callsAnswered.trend}
            icon={Phone}
          />
          <MetricCard
            title="Appointments"
            value={dashboardData.topMetrics.appointmentsBooked.value}
            subtitle="Booked today"
            growth={dashboardData.topMetrics.appointmentsBooked.growth}
            trend={dashboardData.topMetrics.appointmentsBooked.trend}
            icon={Calendar}
          />
          <MetricCard
            title="Payments"
            value={`$${dashboardData.topMetrics.paymentsToday.value.toLocaleString()}`}
            subtitle="Today"
            growth={dashboardData.topMetrics.paymentsToday.growth}
            trend={dashboardData.topMetrics.paymentsToday.trend}
            icon={DollarSign}
          />
          <MetricCard
            title="Monthly Revenue"
            value={`$${dashboardData.topMetrics.paymentsMonth.value.toLocaleString()}`}
            subtitle="This month"
            growth={dashboardData.topMetrics.paymentsMonth.growth}
            trend={dashboardData.topMetrics.paymentsMonth.trend}
            icon={TrendingUp}
          />
          <MetricCard
            title="Avg Call Duration"
            value={dashboardData.topMetrics.avgCallDuration.value}
            subtitle="Per call"
            growth={dashboardData.topMetrics.avgCallDuration.growth}
            trend={dashboardData.topMetrics.avgCallDuration.trend}
            icon={Clock}
          />
          <MetricCard
            title="Active Users"
            value={dashboardData.topMetrics.activeUsers.value}
            subtitle="This week"
            growth={dashboardData.topMetrics.activeUsers.growth}
            trend={dashboardData.topMetrics.activeUsers.trend}
            icon={Users}
          />
        </div>

        {/* Active Calls & Call Queue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ActiveCallTracker activeCalls={dashboardData.activeCalls} />
          <CallQueue callQueue={dashboardData.callQueue} />
        </div>

        {/* Satisfaction & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SatisfactionSection satisfaction={dashboardData.satisfaction} />
          <AIInsights insights={dashboardData.aiInsights} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
