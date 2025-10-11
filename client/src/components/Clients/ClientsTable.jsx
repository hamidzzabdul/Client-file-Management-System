import { Eye, Pencil, Plus, Search, Trash2 } from "lucide-react";

import Table from "../Table";
import useClients from "../../hooks/useClients";

const ClientsTable = () => {
  const { clients, loading, error } = useClients();
  // Define columns for the table
  const columns = [
    { header: "#", accessor: "number" },
    { header: "Client Name", accessor: "client" },
    { header: "Email", accessor: "email" },
    { header: "Date Created", accessor: "date" },
    { header: "Status", accessor: "status" },
    { header: "Actions", accessor: "actions" },
  ];

  // Render each row
  const renderRow = (item) => (
    <>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.number}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.client}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.email}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.date}</div>
      </td>
      <td className="border-b border-gray-200">
        <div
          className={`pl-5 py-4 font-medium ${
            item.status === "Active"
              ? "text-green-600"
              : item.status === "Pending"
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {item.status}
        </div>
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
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return <Table columns={columns} data={clients} renderRow={renderRow} />;
};

export default ClientsTable;
