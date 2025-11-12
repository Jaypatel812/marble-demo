import { motion } from "framer-motion";

const GalleryItem = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative aspect-4/3 rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center text-8xl text-white/10 group-hover:text-white/20 transition-colors">
        ◆
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
        <p className="text-white font-light">Interior Design {index}</p>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
