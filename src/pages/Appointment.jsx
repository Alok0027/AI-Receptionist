import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  Users,
  TrendingUp,
  CalendarDays,
  Filter,
  Search,
  Download,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  Eye,
  Star,
  MessageSquare
} from "lucide-react";


const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [availability, setAvailability] = useState({
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    maxBookingsPerSlot: 2,
  });
  const [newAppointment, setNewAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
    priority: "medium"
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentView, setCurrentView] = useState("list"); // list, calendar
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [
      { id: 1, name: "Priya Sharma", email: "priya@email.com", phone: "+91 98765 43210", date: "2025-08-07", time: "09:00", service: "AI Consultation", notes: "First-time client interested in AI receptionist", priority: "high", status: "confirmed" },
      { id: 2, name: "Rahul Verma", email: "rahul@email.com", phone: "+91 87654 32109", date: "2025-08-07", time: "10:00", service: "Follow-up", notes: "Review implementation progress", priority: "medium", status: "confirmed" },
      { id: 3, name: "Anjali Gupta", email: "anjali@email.com", phone: "+91 76543 21098", date: "2025-08-08", time: "11:00", service: "System Setup", notes: "New installation and training", priority: "high", status: "pending" },
      { id: 4, name: "Vikram Singh", email: "vikram@email.com", phone: "+91 65432 10987", date: "2025-08-08", time: "14:00", service: "Technical Support", notes: "Integration issues", priority: "urgent", status: "confirmed" },
      { id: 5, name: "Sunita Reddy", email: "sunita@email.com", phone: "+91 54321 09876", date: "2025-08-09", time: "09:00", service: "Demo Session", notes: "Product demonstration", priority: "medium", status: "confirmed" },
      { id: 6, name: "Amit Patel", email: "amit@email.com", phone: "+91 43210 98765", date: "2025-08-09", time: "15:00", service: "Emergency Support", notes: "Urgent system issue", priority: "urgent", status: "confirmed" },
      { id: 7, name: "Deepika Kumar", email: "deepika@email.com", phone: "+91 32109 87654", date: "2025-08-10", time: "10:00", service: "Training Session", notes: "Staff training on new features", priority: "medium", status: "pending" },
      { id: 8, name: "Rajesh Kumar", email: "rajesh@email.com", phone: "+91 21098 76543", date: "2025-08-10", time: "11:00", service: "Consultation", notes: "Exploring AI solutions", priority: "low", status: "confirmed" },
    ];
    setAppointments(storedAppointments);
  }, []);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleInputChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const services = [
    { name: "AI Consultation", duration: "60 min", price: "₹2,500" },
    { name: "System Setup", duration: "120 min", price: "₹5,000" },
    { name: "Training Session", duration: "90 min", price: "₹3,500" },
    { name: "Technical Support", duration: "45 min", price: "₹2,000" },
    { name: "Demo Session", duration: "30 min", price: "Free" },
    { name: "Follow-up", duration: "30 min", price: "₹1,500" },
    { name: "Emergency Support", duration: "60 min", price: "₹4,000" }
  ];

  const getAppointmentStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const thisWeek = appointments.filter(apt => {
      const aptDate = new Date(apt.date);
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      return aptDate >= weekStart;
    });
    
    return {
      total: appointments.length,
      today: appointments.filter(apt => apt.date === today).length,
      thisWeek: thisWeek.length,
      pending: appointments.filter(apt => apt.status === 'pending').length,
      confirmed: appointments.filter(apt => apt.status === 'confirmed').length
    };
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         apt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         apt.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || apt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (!newAppointment.name || !newAppointment.email || !newAppointment.phone || !newAppointment.date || !newAppointment.time || !newAppointment.service) {
      alert("Please fill in all required fields");
      return;
    }

    const bookedCount = appointments.filter(
      (appt) => appt.date === newAppointment.date && appt.time === newAppointment.time
    ).length;
    if (bookedCount >= availability.maxBookingsPerSlot) {
      alert("This time slot is fully booked");
      return;
    }

    if (editingAppointment) {
      setAppointments(
        appointments.map((appt) =>
          appt.id === editingAppointment.id ? { ...newAppointment, id: appt.id } : appt
        )
      );
      setEditingAppointment(null);
    } else {
      const newId = appointments.length > 0 ? Math.max(...appointments.map((appt) => appt.id)) + 1 : 1;
      setAppointments([...appointments, { ...newAppointment, id: newId, status: 'pending' }]);
    }

    alert(`Appointment confirmed for ${newAppointment.name} on ${newAppointment.date} at ${newAppointment.time}`);
    setNewAppointment({ name: "", date: "", time: "", service: "" });

    setTimeout(() => {
      alert(`Reminder: Appointment for ${newAppointment.name} on ${newAppointment.date} at ${newAppointment.time}`);
    }, 2000);
  };

  const handleEditAppointment = (appt) => {
    setEditingAppointment(appt);
    setNewAppointment(appt);
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
    alert("Appointment deleted");
  };

  const handleCalendarSync = () => {
    console.log("Syncing appointments with calendar:", appointments);
    alert("Appointments synced with calendar (mock)");
  };

  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target;
    if (name === "days") {
      setAvailability({ ...availability, days: value.split(",") });
    } else if (name === "timeSlots") {
      setAvailability({ ...availability, timeSlots: value.split(",") });
    } else {
      setAvailability({ ...availability, [name]: parseInt(value) });
    }
  };

  const stats = getAppointmentStats();

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Appointment Scheduling</h1>
            <p className="text-stone-600 mt-2">Manage your appointments and bookings efficiently</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Appointment</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-600">Total Appointments</p>
                <p className="text-2xl font-bold text-stone-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CalendarDays className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-600">Today</p>
                <p className="text-2xl font-bold text-stone-900">{stats.today}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-600">This Week</p>
                <p className="text-2xl font-bold text-stone-900">{stats.thisWeek}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">{stats.confirmed}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-stone-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {editingAppointment ? "Edit Appointment" : "New Appointment"}
                </h3>
              </div>
              
              <form onSubmit={handleAddAppointment} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newAppointment.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter customer name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={newAppointment.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="customer@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={newAppointment.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={newAppointment.date}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Time *
                      </label>
                      <select
                        name="time"
                        value={newAppointment.time}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                        <option value="">Select time</option>
                        {availability.timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <Settings className="w-4 h-4 inline mr-2" />
                      Service *
                    </label>
                    <select
                      name="service"
                      value={newAppointment.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="">Select service</option>
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name} - {service.duration} ({service.price})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={newAppointment.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Notes
                    </label>
                    <textarea
                      name="notes"
                      value={newAppointment.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Additional notes or requirements..."
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors font-medium"
                  >
                    {editingAppointment ? "Update Appointment" : "Book Appointment"}
                  </button>
                  {editingAppointment && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingAppointment(null);
                        setNewAppointment({ name: "", email: "", phone: "", date: "", time: "", service: "", notes: "", priority: "medium" });
                      }}
                      className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
            

          </div>
          
          {/* Right Column - Appointments List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200">
              {/* Header with Search and Filters */}
              <div className="p-6 border-b border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-stone-900">Appointments</h3>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search appointments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="all">All Status</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              
              {/* Appointments List */}
              <div className="p-6">
                {filteredAppointments.length === 0 ? (
                  <div className="text-center py-12">
                    <CalendarDays className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                    <p className="text-stone-600">No appointments found.</p>
                    <p className="text-sm text-stone-500">Try adjusting your search or filters.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredAppointments.map((appt) => (
                      <div key={appt.id} className="border border-stone-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-stone-900">{appt.name}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(appt.priority)}`}>
                                {appt.priority}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(appt.status)}`}>
                                {appt.status}
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm text-stone-600 mb-3">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(appt.date).toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{appt.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Settings className="w-4 h-4" />
                                <span>{appt.service}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>{appt.phone}</span>
                              </div>
                            </div>
                            
                            {appt.notes && (
                              <div className="flex items-start space-x-2 text-sm text-stone-600 mb-3">
                                <MessageSquare className="w-4 h-4 mt-0.5" />
                                <span>{appt.notes}</span>
                              </div>
                            )}
                            
                            <div className="flex items-center space-x-2 text-sm text-stone-500">
                              <Mail className="w-4 h-4" />
                              <span>{appt.email}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleEditAppointment(appt)}
                              className="p-2 text-stone-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit appointment"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteAppointment(appt.id)}
                              className="p-2 text-stone-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete appointment"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;