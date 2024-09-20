import { motion } from "framer-motion";
const Transition = (OgComponent) => {
  return () => (
    <motion.div
      initial={{ opacity: 0.15 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.15 }}
      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
    >
      <OgComponent />
    </motion.div>
  );
};
export default Transition;



