import Table from "../Table";
import authApi from "../../api/authApi"; // or your helper to get the user
import { Download, Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import useFiles from "../../hooks/useFile";

const MyDocuments = () => {
  const user = authApi.getUser(); // get current user
  const { files, loading, error } = useFiles();
  // Base columns visible to everyone
  const baseColumns = [
    { header: "#", accessor: "number" },
    { header: "File Name", accessor: "title" },
    { header: "File Type", accessor: "type" },
    { header: "Size", accessor: "size" },
    { header: "Date Uploaded", accessor: "date" },
    { header: "Actions", accessor: "actions" },
  ];

  // Add client column only if admin
  const columns =
    user?.role === "admin"
      ? [
          baseColumns[0],
          { header: "Client", accessor: "client" },
          ...baseColumns.slice(1),
        ]
      : baseColumns;

  // download handle
  const handleDownload = (url, filename, extension) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderRow = (item) => (
    <>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4 font-medium">{item.number}</div>
      </td>
      {user?.role === "admin" && (
        <td className="border-b border-gray-200">
          <div className="pl-5 py-4">{item.uploadedBy}</div>
        </td>
      )}

      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">
          {item.title}.{item.type}
        </div>
      </td>

      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.size}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.type}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.date}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4 flex items-center gap-4">
          <Eye className="w-5 text-blue-500 cursor-pointer hover:scale-110 transition" />
          <Download
            className="w-5 text-green-500 cursor-pointer hover:scale-110 transition"
            onClick={() => handleDownload(item.url, item.title, item.type)}
          />

          <Trash2 className="w-5 text-red-500 cursor-pointer hover:scale-110 transition" />
        </div>
      </td>
    </>
  );

  return (
    <div className="bg-white rounded-md">
      <div className="w-full p-6 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Uploaded Files</h1>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading files...</div>
        ) : files.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No files found.</div>
        ) : (
          <Table columns={columns} data={files} renderRow={renderRow} />
        )}
      </div>
    </div>
  );
};

export default MyDocuments;
