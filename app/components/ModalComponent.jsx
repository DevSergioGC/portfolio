import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ModalComponent = ({ children, onClose }) => {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;

    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = originalOverflow;
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal-content bg-black p-4 relative rounded-md">
        <span
          className="absolute top-0 right-0 text-lg cursor-pointer"
          onClick={onClose}
        >
          <XMarkIcon className="h-10 w-10" />
        </span>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
