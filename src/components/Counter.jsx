import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-light text-amber-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

export default Counter;
