import React from "react";

const RegionModal = ({ selectedRegion, onClose, attachment }) => {
  if (!selectedRegion) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-50 ">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-[70vw] p-6 relative">
        <div className="mb-4">
          <p className="font-bold text-center text-3xl">{selectedRegion}</p>
          <button
            className="absolute top-7 right-7 text-gray-600 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {attachment &&
            attachment.map((res) => (
              <div className="relative w-48 h-20 flex items-center justify-center">
                <img src={res} alt="Preview" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RegionModal;
