import { Button } from "flowbite-react";
import { useRef } from "react";

const AddUnivFileBtn = ({ onFileSelect, onDelete }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger input file
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file); // Kirim file ke parent component
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Button color={"success"} onClick={handleButtonClick}>
        Upload File
      </Button>

      <Button color={"failure"} onClick={onDelete}>
        Delete Negara
      </Button>

      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        className="hidden" // Disembunyikan
      />
    </div>
  );
};

export default AddUnivFileBtn;
