// ViewToggleButton.js

import React from "react";

const ViewToggleButton = ({ onToggle }) => {
  const handleChange = () => {
    onToggle();
  };

  return (
    <div>
      <label className="relative inline-flex items-center mt-1 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleChange}
        />
        <div className="w-11 h-6 outline outline-blue-900 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blue-900 after:border-blue-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900 bg-white"></div>
      </label>
    </div>
  );
};

export default ViewToggleButton;
