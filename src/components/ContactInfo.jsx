import { motion } from "framer-motion";

const ContactInfo = ({ icon, title, info }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-lg"
    >
      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xl">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-white font-light">{info}</p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

