import { useEffect, useState } from "react";


const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [availability, setAvailability] = useState({
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    maxBookingsPerSlot: 2,
  });
  const [newAppointment, setNewAppointment] = useState({
    name: "",
    date: "",
    time: "",
    service: "",
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [
      { id: 1, name: "Priya Sharma", date: "2025-08-01", time: "09:00", service: "Consultation" },
      { id: 2, name: "Rahul Verma", date: "2025-08-01", time: "10:00", service: "Follow-up" },
      { id: 3, name: "Anjali Gupta", date: "2025-08-02", time: "11:00", service: "New Installation" },
      { id: 4, name: "Vikram Singh", date: "2025-08-02", time: "14:00", service: "Maintenance Check" },
      { id: 5, name: "Sunita Reddy", date: "2025-08-03", time: "09:00", service: "Consultation" },
      { id: 6, name: "Amit Patel", date: "2025-08-03", time: "15:00", service: "Emergency Repair" },
      { id: 7, name: "Deepika Kumar", date: "2025-08-04", time: "10:00", service: "Follow-up" },
      { id: 8, name: "Rajesh Kumar", date: "2025-08-04", time: "11:00", service: "Consultation" },
    ];
    setAppointments(storedAppointments);
  }, []);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleInputChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (!newAppointment.name || !newAppointment.date || !newAppointment.time || !newAppointment.service) {
      alert("Please fill in all fields");
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
      setAppointments([...appointments, { ...newAppointment, id: newId }]);
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <main>
          <h2 className="text-2xl font-bold mb-4">Appointment Scheduling</h2>

          <div className="bg-stone-50 p-6 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">
              {editingAppointment ? "Edit Appointment" : "Add New Appointment"}
            </h3>
            <form onSubmit={handleAddAppointment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Customer Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAppointment.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newAppointment.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Time</label>
                <select
                  name="time"
                  value={newAppointment.time}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select time</option>
                  {availability.timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Service</label>
                <input
                  type="text"
                  name="service"
                  value={newAppointment.service}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter service type"
                />
              </div>
              <button type="submit" className="bg-gray-800 text-stone-50 px-4 py-2 rounded hover:bg-black">
                {editingAppointment ? "Update Appointment" : "Add Appointment"}
              </button>
              {editingAppointment && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingAppointment(null);
                    setNewAppointment({ name: "", date: "", time: "", service: "" });
                  }}
                  className="ml-2 bg-gray-700 text-stone-50 px-4 py-2 rounded hover:bg-black"
                >
                  Cancel
                </button>
              )}
            </form>
          </div>

          <div className="bg-stone-50 p-6 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Appointments</h3>
            {appointments.length === 0 ? (
              <p>No appointments scheduled.</p>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Time</th>
                    <th className="p-2 text-left">Service</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr key={appt.id} className="border-b">
                      <td className="p-2">{appt.name}</td>
                      <td className="p-2">{appt.date}</td>
                      <td className="p-2">{appt.time}</td>
                      <td className="p-2">{appt.service}</td>
                      <td className="p-2">
                        <button
                          onClick={() => handleEditAppointment(appt)}
                          className="text-gray-800 hover:underline mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAppointment(appt.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="bg-stone-50 p-6 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-4">Booking Rules</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Available Days (comma-separated)</label>
                <input
                  type="text"
                  name="days"
                  value={availability.days.join(",")}
                  onChange={handleAvailabilityChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Available Time Slots (comma-separated)</label>
                <input
                  type="text"
                  name="timeSlots"
                  value={availability.timeSlots.join(",")}
                  onChange={handleAvailabilityChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Max Bookings per Slot</label>
                <input
                  type="number"
                  name="maxBookingsPerSlot"
                  value={availability.maxBookingsPerSlot}
                  onChange={handleAvailabilityChange}
                  className="w-full p-2 border rounded"
                  min="1"
                />
              </div>
              <button
                onClick={() => alert("Booking rules updated")}
                className="bg-gray-800 text-stone-50 px-4 py-2 rounded hover:bg-black"
              >
                Save Booking Rules
              </button>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Calendar Integration</h3>
            <button
              onClick={handleCalendarSync}
              className="bg-gray-800 text-stone-50 px-4 py-2 rounded hover:bg-black"
            >
              Sync with Calendar
            </button>
            <p className="mt-2 text-sm text-gray-800">
              Click to sync appointments with your calendar (e.g., Google Calendar).
            </p>
          </div>
        </main>
    </div>
  );
};

export default Appointment;