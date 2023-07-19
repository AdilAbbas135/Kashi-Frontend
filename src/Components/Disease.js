import React, { useState } from "react";
import { AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const Disease = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleImageReset = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">
        Tomato Plant Disease Detection
      </h2>

      {selectedImage ? (
        <div className="w-full max-w-md mb-6">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Tomato Plant"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2"
              onClick={handleImageReset}
            >
              <AiOutlineClose className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md mb-6">
          <label
            htmlFor="image-upload"
            className="flex items-center justify-center bg-gray-200 rounded-lg cursor-pointer h-48"
          >
            <AiOutlineCloudUpload className="w-8 h-8 text-gray-500 mr-2" />
            <span className="text-gray-500">Upload an image</span>
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      )}

      {selectedImage && (
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-6">
          Detect Disease
        </button>
      )}

      <button className="flex items-center text-blue-500">
        <IoIosArrowBack className="w-5 h-5 mr-1" />
        <span>Go Back</span>
      </button>
    </div>
  );
};

export default Disease;
