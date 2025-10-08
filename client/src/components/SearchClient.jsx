import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const SearchClient = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("filter by status");
  const options = ["Active", "Inactive", "Pending"];
  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };
  return (
    <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-200">
      <div className="w-[80%] rounded-md border border-gray-200 cursor-pointer flex item-center gap-3 p-2">
        <Search className="w-5 ml-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by File # by Client..."
          className="outline-none w-full h-full placeholder:text-gray-400 placeholder:text-sm"
        />
      </div>

      {/* custom dropdown */}
      <div
        className="w-[15%] md:w-[20%] border border-gray-200 rounded-md px-3 py-2 flex justify-between items-center cursor-pointer relative hover:border-gray-300"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-sm text-gray-600 font-semibold capitalize">
          {selected}
        </span>
        <ChevronDown
          className={`w-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />

        {open && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 txs rounded-md shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(option);
                }}
                className="px-3 py-2 hover:bg-gray-100 text-sm text-gray-600 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchClient;
