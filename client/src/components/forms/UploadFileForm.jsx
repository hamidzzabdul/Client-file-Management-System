import { Upload } from "lucide-react";
import React from "react";

const UploadFileForm = ({ setShowModal }) => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="block gap-2">
          <p className="block text-sm font-medium my-2">File Title</p>
          <input
            type="text"
            placeholder="Enter file title"
            className="placeholder:text-sm w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          <p className="mb-2">Upload File</p>
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg h-[140px] flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition group overflow-hidden">
            <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2" />
            <p className="text-gray-500 text-sm group-hover:text-blue-600">
              Drag & drop your file here
            </p>
            <p className="text-xs text-gray-400 mt-1">or click to browse</p>

            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Description (Optional)
        </label>
        <textarea
          placeholder="Add a short description..."
          className="w-full text-xs border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default UploadFileForm;
