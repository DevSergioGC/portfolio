import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "dark:text-white text-black bg-light-button text-light-main"
    : "dark:text-[#ADB7BE] text-black border-slate-600 hover:bg-light-button hover:border-light-button hover:text-light-main";
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
