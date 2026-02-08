import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

const eventSummaries: Record<string, any> = {
  "1": { name: "Mending Circle", date: "Sunday, Feb 24", time: "3:00 PM" },
  "2": { name: "Sunday Swap Day", date: "Sunday, Mar 03", time: "11:00 AM" },
  "3": { name: "Coffee Conversations", date: "Tuesday, Feb 20", time: "9:00 AM" },
};

export function EventRegisterScreen() {
  const navigate = useNavigate();
  const { id = "1" } = useParams();
  const event = eventSummaries[id] || eventSummaries["1"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendanceType: "member",
    notes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    navigate(`/event/${id}/success`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button
          onClick={() => navigate(`/event/${id}`)}
          className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-foreground"
        >
          Register
        </motion.h2>
      </div>

      {/* Event Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <div className="p-6 rounded-3xl bg-muted/30 border border-border">
          <h3 className="text-xl mb-3 text-foreground">{event.name}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Registration Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-6 space-y-6"
      >
        {/* Name & Email */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
        </div>

        {/* Attendance Type */}
        <div>
          <p className="text-sm text-muted-foreground mb-3 px-2">Attendance Type</p>
          <div className="space-y-3">
            <button
              onClick={() => handleInputChange("attendanceType", "member")}
              className={`w-full p-4 rounded-3xl border-2 transition-all text-left ${
                formData.attendanceType === "member"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base text-foreground mb-1">Member</h4>
                  <p className="text-sm text-muted-foreground">Part of the loop</p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-colors ${
                    formData.attendanceType === "member"
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`}
                />
              </div>
            </button>
            <button
              onClick={() => handleInputChange("attendanceType", "guest")}
              className={`w-full p-4 rounded-3xl border-2 transition-all text-left ${
                formData.attendanceType === "guest"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base text-foreground mb-1">Guest</h4>
                  <p className="text-sm text-muted-foreground">First time joining</p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-colors ${
                    formData.attendanceType === "guest"
                      ? "border-primary bg-primary"
                      : "border-border"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Notes */}
        <div>
          <textarea
            placeholder="Anything we should know? (optional)"
            value={formData.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
            rows={4}
            className="w-full px-6 py-4 rounded-3xl bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
          />
        </div>
      </motion.div>

      {/* Fixed Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-sm border-t border-border"
      >
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Confirm Registration
        </button>
      </motion.div>
    </div>
  );
}
