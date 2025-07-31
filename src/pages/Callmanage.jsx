import React, { useState, useEffect } from 'react';
import { 
  Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed,
  Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Users, 
  Filter, Search, Clock, TrendingUp, TrendingDown, CheckCircle, 
  XCircle, ArrowRight, BarChart3, PieChart, FileText, Settings,
  Shield, Zap, Calendar, Download, AlertTriangle, Mic, MicOff,
  Forward, PhoneForwarded, Ban, Star, MoreVertical, Eye,
  Activity, Headphones, Upload, MessageSquare, User, MapPin
} from 'lucide-react';

const CallManagementSystem = () => {
  const [selectedCall, setSelectedCall] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [liveCallsCount, setLiveCallsCount] = useState(3);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Enhanced mock data
  const callLogs = [
    {
      id: 1,
      caller: 'Toby Daniels',
      phone: '(215) 555-0142',
      email: 'toby.daniels@gmail.com',
      type: 'incoming',
      status: 'completed',
      priority: 'high',
      disposition: 'business',
      duration: '4:32',
      timestamp: '7/9/25 12:32PM',
      clientType: 'new',
      resolved: true,
      resolvedBy: 'transfer',
      summary: 'Emergency plumbing services for broken water heater',
      transcript: 'Hello, this is Toby Daniels calling about an emergency plumbing issue. My water heater broke this morning and there\'s water everywhere. I need someone out here as soon as possible. The address is 964 Woodburn Road, Levittown, Pennsylvania...',
      keywords: ['emergency', 'plumbing', 'water heater', 'urgent'],
      location: 'Levittown, PA',
      rating: 5,
      recordingUrl: '/audio/call-001.mp3',
      aiConfidence: 96,
      sentiment: 'urgent',
      transferredTo: 'Emergency Services',
      callbackScheduled: false,
      notes: 'Customer was very distressed, handled with care and urgency'
    },
    {
      id: 2,
      caller: 'Sarah Wilson',
      phone: '(415) 555-0198',
      email: 'sarah.w@email.com',
      type: 'outgoing',
      status: 'completed',
      priority: 'normal',
      disposition: 'follow-up',
      duration: '2:15',
      timestamp: '7/9/25 11:45AM',
      clientType: 'existing',
      resolved: true,
      resolvedBy: 'knowledge-base',
      summary: 'Follow-up on installation appointment confirmation',
      transcript: 'Hi Sarah, this is calling from Mountain Services to confirm your installation appointment scheduled for tomorrow at 2 PM. Please let me know if this time still works for you...',
      keywords: ['appointment', 'installation', 'confirmation', 'follow-up'],
      location: 'San Francisco, CA',
      rating: 4,
      recordingUrl: '/audio/call-002.mp3',
      aiConfidence: 92,
      sentiment: 'positive',
      transferredTo: null,
      callbackScheduled: true,
      notes: 'Customer confirmed appointment, very satisfied with service'
    },
    {
      id: 3,
      caller: 'Mike Johnson',
      phone: '(555) 123-4567',
      email: 'mike.j@company.com',
      type: 'incoming',
      status: 'missed',
      priority: 'low',
      disposition: 'sales',
      duration: '0:00',
      timestamp: '7/9/25 10:22AM',
      clientType: 'prospect',
      resolved: false,
      resolvedBy: null,
      summary: 'Missed call - potential new client inquiry',
      transcript: null,
      keywords: ['sales', 'inquiry'],
      location: 'New York, NY',
      rating: null,
      recordingUrl: null,
      aiConfidence: null,
      sentiment: 'neutral',
      transferredTo: null,
      callbackScheduled: true,
      notes: 'Follow-up call scheduled for tomorrow morning'
    },
    {
      id: 4,
      caller: 'Jennifer Adams',
      phone: '(303) 555-0099',
      email: 'jen.adams@email.com',
      type: 'incoming',
      status: 'live',
      priority: 'high',
      disposition: 'support',
      duration: '3:42',
      timestamp: '7/9/25 2:15PM',
      clientType: 'existing',
      resolved: false,
      resolvedBy: null,
      summary: 'Live call - Technical support needed',
      transcript: 'Currently in progress...',
      keywords: ['support', 'technical', 'live'],
      location: 'Denver, CO',
      rating: null,
      recordingUrl: null,
      aiConfidence: 94,
      sentiment: 'concerned',
      transferredTo: null,
      callbackScheduled: false,
      notes: 'Customer experiencing technical difficulties'
    }
  ];

  const stats = {
    totalCalls: 1247,
    resolvedCalls: 1156,
    unresolvedCalls: 91,
    resolvedByKnowledgeBase: 742,
    resolvedByTransfer: 414,
    spamBlocked: 89,
    averageHandleTime: '3:45',
    satisfactionScore: 4.6
  };

  const clientDistribution = [
    { name: 'New Clients', value: 342, percentage: 27.4, color: '#1f2937', trend: 12 },
    { name: 'Existing Clients', value: 689, percentage: 55.3, color: '#374151', trend: 8 },
    { name: 'Prospects', value: 216, percentage: 17.3, color: '#6b7280', trend: -3 }
  ];

  const liveMonitoring = [
    { id: 1, caller: 'Jennifer Adams', duration: '3:42', keywords: ['support', 'technical'], confidence: 94 },
    { id: 2, caller: 'Robert Chen', duration: '1:23', keywords: ['billing', 'payment'], confidence: 87 },
    { id: 3, caller: 'Lisa Martinez', duration: '0:45', keywords: ['appointment', 'schedule'], confidence: 91 }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying && selectedCall) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const maxTime = parseFloat(selectedCall.duration.replace(':', '.')) * 60;
          return prev < maxTime ? prev + 1 : maxTime;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedCall, playbackSpeed]);

  // Auto-route calls based on keywords
  useEffect(() => {
    callLogs.forEach(call => {
      if (!call.transferredTo && call.keywords?.includes('emergency')) {
        call.transferredTo = 'Emergency Services';
      } else if (!call.transferredTo && call.keywords?.includes('billing')) {
        call.transferredTo = 'Billing Department';
      }
    });
  }, []);

  const filteredCalls = callLogs.filter(call => {
    const matchesFilter = filterType === 'all' || call.clientType === filterType;
    const matchesSearch = searchQuery === '' || 
      call.caller.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.phone.includes(searchQuery) ||
      call.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Transfer handler
  const handleTransfer = (callId, to = "Tech Support") => {
    const call = callLogs.find(c => c.id === callId);
    if (call) {
      call.transferredTo = to;
      alert(`Call from ${call.caller} transferred to ${to}`);
    }
  };

  const CallCard = ({ call }) => (
    <div 
      className={`bg-white border-2 rounded-xl p-5 mb-4 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
        selectedCall?.id === call.id ? 'border-gray-900 shadow-lg' : 'border-gray-200'
      } ${call.status === 'live' ? 'ring-2 ring-green-500 ring-opacity-50' : ''}`}
      onClick={() => setSelectedCall(call)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-full ${
            call.type === 'incoming' ? 'bg-gradient-to-r from-green-400 to-green-600' : 
            call.type === 'outgoing' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 
            'bg-gradient-to-r from-red-400 to-red-600'
          }`}>
            {call.type === 'incoming' ? <PhoneIncoming className="w-5 h-5 text-white" /> :
             call.type === 'outgoing' ? <PhoneOutgoing className="w-5 h-5 text-white" /> :
             <PhoneMissed className="w-5 h-5 text-white" />}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{call.caller}</h3>
            <p className="text-sm text-gray-500 flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>{call.phone}</span>
            </p>
            {call.location && (
              <p className="text-xs text-gray-400 flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{call.location}</span>
              </p>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 font-medium">{call.timestamp}</p>
          <div className="flex items-center space-x-2 mt-1">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              call.priority === 'high' ? 'bg-red-100 text-red-800' :
              call.priority === 'normal' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {call.priority}
            </span>
            {call.status === 'live' && (
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-red-600 font-medium">LIVE</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            call.clientType === 'new' ? 'bg-green-100 text-green-800' :
            call.clientType === 'existing' ? 'bg-blue-100 text-blue-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            <User className="w-3 h-3 mr-1" />
            {call.clientType}
          </span>
          <span className="text-sm text-gray-600 font-medium flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{call.duration}</span>
          </span>
          {call.aiConfidence && (
            <span className="text-xs text-gray-500">
              AI: {call.aiConfidence}%
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {call.resolved ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
          {call.rating && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-600">{call.rating}</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{call.summary}</p>
      
      {call.keywords.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {call.keywords.slice(0, 3).map((keyword, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
              {keyword}
            </span>
          ))}
          {call.keywords.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
              +{call.keywords.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Call Management</h1>
            <p className="text-gray-600">Comprehensive AI-powered call management system</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full">
              <Activity className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                {liveCallsCount} Live Calls
              </span>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 bg-white rounded-lg shadow-sm">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Call List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters and Search */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search calls, names, numbers..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  >
                    <option value="all">All Clients</option>
                    <option value="new">New Clients</option>
                    <option value="existing">Existing Clients</option>
                    <option value="prospect">Prospects</option>
                  </select>
                  <button className="px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                    <Filter className="w-4 h-4 mr-2 inline" />
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Call List */}
            <div className="space-y-4">
              {filteredCalls.map(call => (
                <CallCard key={call.id} call={call} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Live Monitoring */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Headphones className="w-5 h-5 mr-2 text-gray-700" />
                Live Monitoring
              </h3>
              <div className="space-y-3">
                {liveMonitoring.map((call, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{call.caller}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-600">{call.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {call.keywords.map((keyword, i) => (
                          <span key={i} className="px-2 py-1 bg-white text-gray-600 rounded text-xs">
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">AI: {call.confidence}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Distribution */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-gray-700" />
                Client Distribution
              </h3>
              <div className="space-y-4">
                {clientDistribution.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{item.value}</span>
                        <div className="flex items-center">
                          {item.trend > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500" />
                          )}
                          <span className={`text-xs ml-1 ${item.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {Math.abs(item.trend)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500" 
                        style={{ 
                          width: `${item.percentage}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{item.percentage}% of total calls</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call Resolution Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-gray-700" />
                Resolution Analytics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Knowledge Base</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stats.resolvedByKnowledgeBase}</span>
                    <span className="text-xs text-gray-500">
                      {Math.round((stats.resolvedByKnowledgeBase / stats.totalCalls) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(stats.resolvedByKnowledgeBase / stats.totalCalls) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Transfer Resolution</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stats.resolvedByTransfer}</span>
                    <span className="text-xs text-gray-500">
                      {Math.round((stats.resolvedByTransfer / stats.totalCalls) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(stats.resolvedByTransfer / stats.totalCalls) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Unresolved</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stats.unresolvedCalls}</span>
                    <span className="text-xs text-gray-500">
                      {Math.round((stats.unresolvedCalls / stats.totalCalls) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(stats.unresolvedCalls / stats.totalCalls) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => selectedCall && alert(`Spam block activated for ${selectedCall.caller}`)}
                  className="p-3 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                >
                  <Shield className="w-4 h-4 mx-auto mb-1" />
                  Spam Block
                </button>
                <button className="p-3 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                  <PhoneForwarded className="w-4 h-4 mx-auto mb-1" />
                  Call Route
                </button>
                <button 
                  onClick={() => selectedCall && handleTransfer(selectedCall.id)} 
                  className="p-3 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                >
                  <Forward className="w-4 h-4 mx-auto mb-1" />
                  Transfer
                </button>
                <button className="p-3 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                  <Upload className="w-4 h-4 mx-auto mb-1" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Call Player Modal */}
        {selectedCall && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      selectedCall.type === 'incoming' ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                      selectedCall.type === 'outgoing' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 
                      'bg-gradient-to-r from-red-400 to-red-600'
                    }`}>
                      {selectedCall.type === 'incoming' ? <PhoneIncoming className="w-6 h-6 text-white" /> :
                       selectedCall.type === 'outgoing' ? <PhoneOutgoing className="w-6 h-6 text-white" /> :
                       <PhoneMissed className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedCall.caller}</h2>
                      <p className="text-gray-600">{selectedCall.phone} • {selectedCall.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCall(null)}
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Call Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Duration</p>
                    <p className="font-semibold text-lg">{selectedCall.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <p className="font-semibold text-lg capitalize">{selectedCall.status}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Priority</p>
                    <p className="font-semibold text-lg capitalize">{selectedCall.priority}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">AI Confidence</p>
                    <p className="font-semibold text-lg">{selectedCall.aiConfidence || 'N/A'}%</p>
                  </div>
                </div>

                {/* AI Transcript */}
                {selectedCall.transcript && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">AI Transcript</h4>
                    <p className="text-sm text-gray-600 whitespace-pre-wrap">{selectedCall.transcript}</p>
                  </div>
                )}

                {/* Advanced Audio Player */}
                {selectedCall.recordingUrl && (
                  <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Volume2 className="w-5 h-5 mr-2" />
                      Call Recording
                    </h3>
                    
                    {/* Waveform Visualization */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-1 h-16 bg-black bg-opacity-30 rounded-lg p-2">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`flex-1 rounded-full ${
                              i < (currentTime / 240) * 50 ? 'bg-gray-400' : 'bg-gray-600'
                            }`}
                            style={{ height: `${Math.random() * 80 + 20}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Audio Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
                        >
                          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                        </button>
                        <div className="text-sm">
                          <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
                          <span className="mx-2">/</span>
                          <span>4:00</span>
                        </div>
                        <button 
                          onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-3 py-1 text-sm transition-all"
                        >
                          {playbackSpeed}x
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => setIsMuted(!isMuted)}>
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={isMuted ? 0 : volume} 
                          onChange={(e) => setVolume(e.target.value)}
                          className="w-20 accent-green-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Call Actions */}
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => handleTransfer(selectedCall.id, 'Tech Support')}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <PhoneForwarded className="w-4 h-4" />
                    <span>Transfer Call</span>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Back</span>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Shield className="w-4 h-4" />
                    <span>Block Number</span>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>

                {/* Call Notes */}
                {selectedCall.notes && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Call Notes
                    </h4>
                    <p className="text-yellow-700 text-sm">{selectedCall.notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallManagementSystem;