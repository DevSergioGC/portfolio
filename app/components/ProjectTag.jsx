import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-[#36C4E5]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
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
