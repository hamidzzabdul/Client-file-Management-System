import { File, Upload, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadSchema } from "../../schemas/uploadFileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import fileApi from "../../api/fileApi";
import { toast } from "react-hot-toast";
const UploadFileForm = ({ showModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(uploadSchema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setValue("file", file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setValue("file", null);

    // reset the input value when removing
    const fileInput = document.getElementById("fileInput");
    if (fileInput) fileInput.value = "";
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.title);
      formData.append("description", data.description || "");
      formData.append("file", selectedFile);

      await fileApi.create(formData);
      toast.success("File uploaded successfully");
      reset();
      handleRemoveFile();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // Set the error for the field
        setError("title", {
          type: "manual",
          message: error.response.data.message,
        });
      } else {
        toast.error("Failed to upload file");
      }
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block gap-2">
          <p className="block text-sm font-medium my-2">File Title</p>
          <input
            type="text"
            placeholder="Enter file title"
            {...register("title")}
            className={`placeholder:text-sm w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
              errors.title
                ? "border-red-500"
                : "border-gray-400 focus:ring-blue-300"
            }`}
          />
        </label>
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <p className="block text-sm font-medium mb-2">Upload File</p>
        <div
          className={`relative border-2 border-dashed rounded-lg h-[140px] flex flex-col items-center justify-center cursor-pointer transition group overflow-hidden ${
            errors.file
              ? "border-red-500"
              : "border-gray-300 hover:border-blue-500"
          }`}
        >
          <Upload
            className={`w-8 h-8 mb-2 ${
              errors.file
                ? "text-red-500"
                : "text-gray-400 group-hover:text-blue-500"
            }`}
          />
          <p
            className={`text-sm ${
              errors.file
                ? "text-red-500"
                : "text-gray-500 group-hover:text-blue-600"
            }`}
          >
            {selectedFile ? "Change file" : "Drag & drop your file here"}
          </p>
          <p className="text-xs text-gray-400 mt-1">or click to browse</p>

          <input
            id="fileInput"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
        </div>
        {errors.file && (
          <p className="text-red-500 text-xs mt-1">{errors.file.message}</p>
        )}

        {/* File preview */}
        {selectedFile && (
          <div className="mt-3 flex items-center justify-between  bg-gray-50 border border-green-500 rounded-md p-2 text-sm">
            <div className=" flex items-center gap-2">
              <File className="w-[40px]" />
              <div className="">
                <p className="font-medium text-xs">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-gray-500 cursor-pointer hover:text-red-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Description (Optional)
        </label>
        <textarea
          placeholder="Add a short description..."
          {...register("description")}
          className="w-full text-xs border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          onClick={() => showModal(false)}
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
