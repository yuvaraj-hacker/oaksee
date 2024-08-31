import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return (props) => (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.42, 0.52, 0.58, 1], delay: 0.3 }}
    >
      <OgComponent {...props} />
    </motion.div>
  );
};

export default Transition;
