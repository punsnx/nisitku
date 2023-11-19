import React, { useState } from 'react';

function ProblemField({ title, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // If you want to handle the change in the parent component,
    // you can call the onChange prop with the updated value.
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default ProblemField;