import { motion } from "framer-motion";
import React from "react";

const WaveLine = () => {
  return (
    <svg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <motion.path
        initial={{ strokeOpacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{ strokeOpacity: 1, pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#dbd9db"
        strokeOpacity="0.05"
        strokeWidth="10"
      />
      {/* stroke="#D96ED4" */}
    </svg>
  );
};

export default WaveLine;
