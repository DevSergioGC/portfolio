import React from "react";
import Image from "next/image";

function MainSkills({ name }) {
  return (
    <div className="icon w-30 h-30 mb-2">
      <Image
        src={`/images/icons/${name.toLowerCase()}-logo.png`}
        alt={name}
        width={45}
        height={25}
      />
    </div>
  );
}

export default MainSkills;
