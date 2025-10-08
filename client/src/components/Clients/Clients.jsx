import { Plus } from "lucide-react";
import ClientsTable from "./ClientsTable";
import SearchClient from "../SearchClient";
import { NavLink } from "react-router-dom";
const Clients = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <div className=" flex flex-col gap-1">
          <h2 className="text-xl md:text-2xl font-semibold">All Clients</h2>
          <p className="text-sm text-gray-500">
            Manage all your clients in one place.
          </p>
        </div>
        <NavLink to="/dashboard/create-clients">
          <button className="px-4 py-2 bg-blue-800 text-white cursor-pointer font-semibold rounded-md  hover:bg-blue-600 transition duration-300 flex items-center gap-1 ">
            <Plus className="w-5" />
            <p className="font-semibold">Add Client</p>
          </button>
        </NavLink>
      </div>

      <div className="w-full h-full bg-white rounde-md flex flex-col gap-3">
        <SearchClient />
        <ClientsTable />
      </div>
    </div>
  );
};

export default Clients;
