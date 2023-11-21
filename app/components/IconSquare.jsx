import React from "react";
import Image from "next/image";

const IconSquare = ({ name, tab, index }) => {
  const boxStyle = [
    "bg-gray-800 rounded-md p-4 text-white flex flex-col items-center",
    "bg-gray-800 rounded-md p-4 text-white flex flex-col items-center hover:bg-gray-600 hover:cursor-pointer",
  ];

  return (
    <div
      index={index}
      className={tab != "skills" ? boxStyle[1] : boxStyle[0]}
    >
      {tab === "skills" && (
        <div className="icon w-12 h-12 mb-2">
          <Image
            src={`/images/icons/${name.toLowerCase()}-logo.png`}
            alt={`${tab} - ${name}`}
            width={45}
            height={25}
          />
        </div>
      )}
      <div className="text-center">{name}</div>
    </div>
  );
};

export default IconSquare;
