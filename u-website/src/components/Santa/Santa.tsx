import { motion } from "framer-motion";

export const Santa = () => {
  return (
    <motion.img
      className="w-64 h-64 fixed right-0 bottom-0"
      src="/ZgUz.gif"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};
