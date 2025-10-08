const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full border-collapse ">
      <thead>
        <tr className="text-sm text-left text-gray-500 border-b border-gray-200">
          {columns.map((col) => (
            <th
              key={col.accessor}
              className={`py-2 pl-5 font-normal ${col.className || ""}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 text-sm py-4"
            >
              {renderRow(item)}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={columns.length}
              className="text-center py-4 text-gray-400"
            >
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
