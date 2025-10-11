import Table from "../Table";
import authApi from "../../api/authApi"; // or your helper to get the user
import { Eye, Pencil, Trash2 } from "lucide-react";

const MyDocuments = () => {
  const user = authApi.getUser(); // get current user

  // Base columns visible to everyone
  const baseColumns = [
    { header: "#", accessor: "number" },
    { header: "File Name", accessor: "fileName" },
    { header: "File Type", accessor: "fileType" },
    { header: "Size", accessor: "fileSize" },
    { header: "Date Uploaded", accessor: "dateUploaded" },
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

  // Mock data (replace with API data later)
  const data = [
    {
      client: "John Doe",
      fileName: "Invoice_001.pdf",
      fileType: "PDF",
      fileSize: "2.3 MB",
      dateUploaded: "2025-10-08",
      uploadedBy: "Admin",
    },
    {
      client: "Jane Smith",
      fileName: "Contract_ABC.docx",
      fileType: "DOCX",
      fileSize: "1.5 MB",
      dateUploaded: "2025-10-07",
      uploadedBy: "Jane Smith",
    },
  ];

  const renderRow = (item) => (
    <>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4 font-medium">{item.number}</div>
      </td>
      {user?.role === "admin" && (
        <td className="border-b border-gray-200">
          <div className="pl-5 py-4">{item.client}</div>
        </td>
      )}

      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.fileName}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.fileType}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.fileSize}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.dateUploaded}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4 flex items-center gap-4">
          <Eye className="w-5 text-blue-500 cursor-pointer hover:scale-110 transition" />
          <Pencil className="w-5 text-green-500 cursor-pointer hover:scale-110 transition" />
          <Trash2 className="w-5 text-red-500 cursor-pointer hover:scale-110 transition" />
        </div>
      </td>
    </>
  );

  return (
    <div className="bg-white rounded-md">
      <div className="w-full p-6 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Recent Uploads</h1>
        <button className="text-sm text-blue-500 hover:underline cursor-pointer">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <Table columns={columns} data={data} renderRow={renderRow} />
      </div>
    </div>
  );
};

export default MyDocuments;
