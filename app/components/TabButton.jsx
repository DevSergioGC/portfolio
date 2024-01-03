import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? null
    : "dark:text-[#ADB7BE] text-[#BEBFC5]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold dark:hover:text-white hover:text-black ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 dark:bg-dark-button bg-light-button mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
