import React, { useState } from "react";
import Image from "next/image";
import ModalComponent from "./ModalComponent";

const IconSquare = ({ name, tab, index }) => {
  const boxStyle = [
    "bg-[#181818] rounded-md p-4 text-white flex flex-col items-center",
    "bg-[#181818] rounded-md p-4 text-white flex flex-col items-center hover:bg-gray-500 hover:cursor-pointer",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div index={index} className={tab !== "skills" ? boxStyle[1] : boxStyle[0]}>
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
      {isModalOpen && tab != "skills" && (
        <ModalComponent onClose={closeModal}>
          <Image
            src={`/images/certificates/${name
              .trim()
              .replace(/\s/g, "")
              .toLowerCase()}.png`}
            alt={`${tab} - ${name}`}
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </ModalComponent>
      )}
      <div className="text-center" onClick={tab != "skill" ? openModal : null}>
        {name}
      </div>
    </div>
  );
};

export default IconSquare;
