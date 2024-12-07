import React, { useState } from "react";

const RadioButtonGroup = ({ options, selectedValue, onChange }) => {
  return (
    <div className="flex  gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer space-x-2"
        >
          <div
            className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${
              selectedValue === option.value
                ? "border-orange-500"
                : "border-gray-400"
            }`}
          >
            {selectedValue === option.value && (
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            )}
          </div>
          <span className="text-gray-700">{option.label}</span>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
