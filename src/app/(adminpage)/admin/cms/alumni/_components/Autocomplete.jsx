import React, { useEffect, useState } from "react";

const AlumniAutocomplete = ({ options, value = "", onChange }) => {
  const [query, setQuery] = useState(value);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isValid, setIsValid] = useState(false); // Tambahkan state validasi

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsValid(false); // Reset validasi karena user mengetik ulang

    if (value.length > 0) {
      const filtered = options.filter((item) =>
        item.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (item) => {
    setQuery(item.name.common); // Set input sesuai pilihan
    setIsValid(true); // Tandai sebagai valid
    onChange(item);
    setShowDropdown(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && activeIndex < filteredSuggestions.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(filteredSuggestions[activeIndex]);
    }
  };

  const handleBlur = () => {
    if (!isValid) {
      setQuery(""); // Kosongkan input jika tidak valid
    }
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ketik Negara..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      {showDropdown && filteredSuggestions.length > 0 && (
        <ul className="absolute z-50 left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md">
          {filteredSuggestions.map((item, index) => (
            <li
              key={item.name.common}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                activeIndex === index ? "bg-blue-200" : ""
              }`}
              onMouseDown={() => handleSelect(item)}
            >
              {item.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlumniAutocomplete;
