import Table from "../Table";

const RecentUploads = () => {
  // Define columns for the table
  const columns = [
    { header: "Client", accessor: "client" },
    { header: "File Name", accessor: "fileName" },
    { header: "Date Uploaded", accessor: "date" },
    { header: "Actions", accessor: "actions" },
  ];

  // Mock data (replace later with API data)
  const data = [
    {
      client: "John Doe",
      fileName: "Invoice_001.pdf",
      date: "2025-10-08",
    },
    {
      client: "Jane Smith",
      fileName: "Contract_ABC.docx",
      date: "2025-10-07",
    },
  ];

  // Render each row
  const renderRow = (item) => (
    <>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.client}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.fileName}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4">{item.date}</div>
      </td>
      <td className="border-b border-gray-200">
        <div className="pl-5 py-4 text-blue-500 cursor-pointer hover:underline">
          View
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

export default RecentUploads;
