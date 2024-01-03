import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "dark:text-white bg-light-button text-light-main border-light-main dark:bg-dark-button dark:border-dark-main dark:text-white"
    : "dark:text-white text-black border-slate-600 hover:bg-light-button hover:border-light-button hover:text-light-main dark:hover:bg-dark-button dark:hover:border-dark-button dark:hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default ProjectTag;
