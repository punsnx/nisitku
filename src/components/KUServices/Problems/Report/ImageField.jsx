import React, { useState } from 'react';

function ImageField({onImageChange}) {
  
  const handleImageChange = (e) => {
    onImageChange(e.target.files)
  };

  

  return (
    <div className="mb-4">
      <label htmlFor="attach_img" className="block text-sm font-medium text-gray-700 mb-2">
        รูปภาพเพิ่มเติม:
      </label>
      <input
        type="file"
        name="attach_img"
        id="attach_img"
        accept="image/*"
        multiple
        className="w-full p-2 border rounded-md"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImageField