import { Upload, Users } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MyDocuments from "../../components/Dashboard/mydocuments";
import UploadFileForm from "../../components/forms/UploadFileForm";

const MyFiles = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <div className=" flex flex-col gap-1">
          <h2 className="text-xl md:text-2xl font-semibold">Manage Files</h2>
          <p className="text-sm text-gray-500">
            Manage Your Files All In One Place.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-800 text-white cursor-pointer font-semibold rounded-md  hover:bg-blue-600 transition duration-300 flex items-center gap-2 "
        >
          <Upload className="w-5" />
          <p className="font-semibold">Upload File</p>
        </button>
      </div>
      <div className="flex flex-col mt-5">
        <MyDocuments />
      </div>
      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl cursor-pointer"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Upload a File</h2>
            <UploadFileForm showModal={setShowModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFiles;
