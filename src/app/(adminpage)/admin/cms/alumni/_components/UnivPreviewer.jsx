import { useState, useEffect } from "react";
import { FaCircleXmark } from "react-icons/fa6";

const UnivPreviewer = ({ file, onDelete }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file instanceof File && file.name && file.size) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Simpan URL gambar untuk preview
      };
      reader.readAsDataURL(file);
    } else setPreview(file);
  }, [file]);

  if (!preview) return null; // Jangan tampilkan jika tidak ada gambar

  return (
    <div className="relative w-48 h-20">
      <img
        src={preview}
        alt="Preview"
        className="w-full h-full object-contain rounded-lg"
      />
      <div className="text-red-600 hover:text-red-800 absolute -right-4 -top-2 cursor-pointer">
        <FaCircleXmark onClick={onDelete} />
      </div>
    </div>
  );
};

export default UnivPreviewer;
