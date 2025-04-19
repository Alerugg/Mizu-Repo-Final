import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServiceCard({ reverse=false, img, title, subtitle, to, children }) {
  const { ref, inView } = useInView({ threshold:0.2, triggerOnce:true });

  return (
    <motion.article
      ref={ref}
      className={`service-card${reverse ? " reverse":""}`}
      onClick={to}
      initial={{ opacity:0, y:60 }}
      animate={inView ? { opacity:1, y:0 } : { opacity:0, y:60 }}
      transition={{ duration:0.6, ease:"easeOut" }}
    >
      <div className="service-image-wrapper">
        <img src={img} alt={title} loading="lazy" className="service-image" />
      </div>

      <div className="service-text">
        <h3 className="service-title">{title}</h3>
        <h4 className="service-subtitle">{subtitle}</h4>
        {children}
      </div>
    </motion.article>
  );
}
