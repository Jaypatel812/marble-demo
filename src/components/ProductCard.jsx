import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProductCard = ({ product, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 border border-white/5 hover:border-amber-500/30 transition-all duration-300"
    >
      <div className="aspect-square bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
        <div className="text-7xl text-amber-500/20 group-hover:text-amber-500/30 transition-colors">
          ◆
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-light mb-1 group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex gap-2 mt-3">
          <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded">
            {product.finish}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
