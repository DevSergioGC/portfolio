import React from "react";
import Image from "next/image";

const IconSquare = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          index={index}
          className="dark:bg-dark-shadow-box bg-light-shadow-box rounded-md p-4  flex flex-col items-center"
          key={index}
        >
          <div className="icon w-12 h-12 mb-2">
            <Image
              src={`/images/icons/${item.name.toLowerCase()}-logo.png`}
              alt={`${item.name}`}
              width={50}
              height={50}
            />
          </div>
          <div className="text-center mt-2">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default IconSquare;
