import React from "react";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-3 py-2 border rounded-md w-full focus:outline-none focus:border-orange-500"
    />
  );
};

export default SearchInput;
