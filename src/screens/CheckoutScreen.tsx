import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, CreditCard, Wallet } from "lucide-react";

export function CheckoutScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    paymentMethod: "card",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Navigate to success or confirmation
    navigate("/home");
  };

  const steps = [
    { number: 1, label: "Info" },
    { number: 2, label: "Delivery" },
    { number: 3, label: "Pay" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/cart")}
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
          Checkout
        </motion.h2>
      </div>

      {/* Step Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                    currentStep >= step.number
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-xs mt-2 ${
                    currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 transition-colors ${
                    currentStep > step.number ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-lg mb-4 text-foreground">Contact</h3>
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
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
        </div>
      </motion.div>

      {/* Delivery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-lg mb-4 text-foreground">Delivery</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
            />
            <input
              type="text"
              placeholder="Postal"
              value={formData.postal}
              onChange={(e) => handleInputChange("postal", e.target.value)}
              className="w-32 px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
            />
          </div>
        </div>
      </motion.div>

      {/* Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-lg mb-4 text-foreground">Payment Method</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleInputChange("paymentMethod", "card")}
            className={`w-full p-4 rounded-3xl border-2 transition-all flex items-center gap-4 ${
              formData.paymentMethod === "card"
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <div className={`p-3 rounded-2xl ${formData.paymentMethod === "card" ? "bg-primary/10" : "bg-muted"}`}>
              <CreditCard className={`w-5 h-5 ${formData.paymentMethod === "card" ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <span className="text-foreground">Card</span>
          </button>
          <button
            onClick={() => handleInputChange("paymentMethod", "cashless")}
            className={`w-full p-4 rounded-3xl border-2 transition-all flex items-center gap-4 ${
              formData.paymentMethod === "cashless"
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <div className={`p-3 rounded-2xl ${formData.paymentMethod === "cashless" ? "bg-primary/10" : "bg-muted"}`}>
              <Wallet className={`w-5 h-5 ${formData.paymentMethod === "cashless" ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <span className="text-foreground">Digital Wallet</span>
          </button>
        </div>
      </motion.div>

      {/* Confirmation Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          You'll receive a confirmation message shortly.
        </p>
      </motion.div>

      {/* Fixed Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-sm border-t border-border"
      >
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Place Order
        </button>
      </motion.div>
    </div>
  );
}
