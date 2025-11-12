import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={5}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-4 bg-linear-to-r from-amber-600 to-amber-500 text-white font-medium rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300"
      >
        Send Message
      </motion.button>
    </form>
  );
};

export default ContactForm;
