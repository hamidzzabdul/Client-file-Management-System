import { ChevronDown, Eye, Pencil, Plus, Search, Trash2 } from "lucide-react";
import SearchClient from "../SearchClient";

import Table from "../Table";

const ClientsTable = () => {
  // Define columns for the table
  const columns = [
    { header: "#", accessor: "number" },
    { header: "Client Name", accessor: "client" },
    { header: "Email", accessor: "email" },
    { header: "Date Created", accessor: "date" },
    { header: "Status", accessor: "status" },
    { header: "Actions", accessor: "actions" },
  ];

  // Mock data (replace later with API data)
  const data = [
    {
      number: 1,
      client: "John Doe",
      email: "john.doe@example.com",
      date: "2025-10-08",
      status: "Active",
    },
    {
      number: 2,
      client: "Jane Smith",
      email: "jane.smith@example.com",
      date: "2025-10-08",
      status: "Pending",
    },
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

  return <Table columns={columns} data={data} renderRow={renderRow} />;
};

export default ClientsTable;
