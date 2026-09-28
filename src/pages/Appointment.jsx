import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  CalendarDays,
  Search,
  Download,
  Settings,
  MessageSquare
} from "lucide-react";
import { appointmentsApi } from "../lib/api";

const pad = (n) => String(n).padStart(2, '0');
const toDateAndTime = (iso) => {
  const d = new Date(iso);
  return {
    date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
    time: `${pad(d.getHours())}:${pad(d.getMinutes())}`,
  };
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

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [availability] = useState({
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
  const [editingAppointment, setEditingAppointment] = useState(null);

  const loadAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const { appointments: fetched } = await appointmentsApi.list();
      setAppointments(fetched.map((a) => ({ ...a, ...toDateAndTime(a.date) })));
    } catch (err) {
      setError(err.message || "Unable to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleInputChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const getAppointmentStats = () => {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());

    return {
      total: appointments.length,
      today: appointments.filter((apt) => apt.date === todayStr).length,
      thisWeek: appointments.filter((apt) => new Date(apt.date) >= weekStart).length,
      pending: appointments.filter((apt) => apt.status === 'pending').length,
      confirmed: appointments.filter((apt) => apt.status === 'confirmed').length
    };
  };

  const filteredAppointments = appointments.filter((apt) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      apt.name.toLowerCase().includes(q) ||
      (apt.service || '').toLowerCase().includes(q) ||
      (apt.email || '').toLowerCase().includes(q);
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

  const resetForm = () => {
    setNewAppointment({ name: "", email: "", phone: "", date: "", time: "", service: "", notes: "", priority: "medium" });
    setEditingAppointment(null);
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    if (!newAppointment.name || !newAppointment.email || !newAppointment.phone || !newAppointment.date || !newAppointment.time || !newAppointment.service) {
      alert("Please fill in all required fields");
      return;
    }

    const bookedCount = appointments.filter(
      (appt) => appt.date === newAppointment.date && appt.time === newAppointment.time && appt.id !== editingAppointment?.id
    ).length;
    if (bookedCount >= availability.maxBookingsPerSlot) {
      alert("This time slot is fully booked");
      return;
    }

    const payload = {
      name: newAppointment.name,
      email: newAppointment.email,
      phone: newAppointment.phone,
      date: new Date(`${newAppointment.date}T${newAppointment.time}`).toISOString(),
      service: newAppointment.service,
      notes: newAppointment.notes,
      priority: newAppointment.priority,
    };

    setSubmitting(true);
    try {
      if (editingAppointment) {
        const { appointment } = await appointmentsApi.update(editingAppointment.id, payload);
        setAppointments((prev) => prev.map((a) => (a.id === appointment.id ? { ...appointment, ...toDateAndTime(appointment.date) } : a)));
      } else {
        const { appointment } = await appointmentsApi.create(payload);
        setAppointments((prev) => [...prev, { ...appointment, ...toDateAndTime(appointment.date) }]);
      }
      resetForm();
    } catch (err) {
      alert(err.message || "Unable to save appointment");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditAppointment = (appt) => {
    setEditingAppointment(appt);
    setNewAppointment({
      name: appt.name, email: appt.email || '', phone: appt.phone || '',
      date: appt.date, time: appt.time, service: appt.service || '', notes: appt.notes || '', priority: appt.priority,
    });
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await appointmentsApi.remove(id);
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    } catch (err) {
      alert(err.message || "Unable to delete appointment");
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
          </div>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{error}</div>
        )}

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
                      type="text" name="name" value={newAppointment.name} onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter customer name" required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email" name="email" value={newAppointment.email} onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="customer@email.com" required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel" name="phone" value={newAppointment.phone} onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 98765 43210" required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Date *
                      </label>
                      <input
                        type="date" name="date" value={newAppointment.date} onChange={handleInputChange}
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
                        name="time" value={newAppointment.time} onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                        <option value="">Select time</option>
                        {availability.timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
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
                      name="service" value={newAppointment.service} onChange={handleInputChange}
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
                    <label className="block text-sm font-medium text-stone-700 mb-2">Priority</label>
                    <select
                      name="priority" value={newAppointment.priority} onChange={handleInputChange}
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
                      name="notes" value={newAppointment.notes} onChange={handleInputChange} rows={3}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Additional notes or requirements..."
                    />
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit" disabled={submitting}
                    className="flex-1 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors font-medium disabled:opacity-60"
                  >
                    {submitting ? 'Saving...' : editingAppointment ? "Update Appointment" : "Book Appointment"}
                  </button>
                  {editingAppointment && (
                    <button type="button" onClick={resetForm}
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
              <div className="p-6 border-b border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-stone-900">Appointments</h3>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
                    <input
                      type="text" placeholder="Search appointments..." value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <select
                    value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="all">All Status</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="p-6">
                {loading ? (
                  <div className="text-center py-12 text-stone-500">Loading appointments...</div>
                ) : filteredAppointments.length === 0 ? (
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
