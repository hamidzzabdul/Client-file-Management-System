import { Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import CreateClientForm from "../../components/forms/CreateClientForm";
const CreateClient = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <div className=" flex flex-col gap-1">
          <h2 className="text-xl md:text-2xl font-semibold">Add Clients</h2>
          <p className="text-sm text-gray-500">
            Add your clients in one place.
          </p>
        </div>
        <NavLink to="/dashboard/manage-clients">
          <button className="px-4 py-2 bg-blue-800 text-white cursor-pointer font-semibold rounded-md  hover:bg-blue-600 transition duration-300 flex items-center gap-1 ">
            <Users className="w-5" />
            <p className="font-semibold">Manage Clients</p>
          </button>
        </NavLink>
      </div>
      <CreateClientForm />
    </div>
  );
};

export default CreateClient;
