import {
  Lightbulb,
  UserPlus,
  Upload,
  Users,
  FileText,
  LogOut,
} from "lucide-react";

const actions = [
  {
    label: "Add New Client",
    icon: <UserPlus size={18} />,
    onClick: () => console.log("Add new client clicked"),
  },
  {
    label: "View All Clients",
    icon: <Users size={18} />,
    onClick: () => console.log("View all clients clicked"),
  },
  {
    label: "Upload Document",
    icon: <Upload size={18} />,
    onClick: () => console.log("Upload document clicked"),
  },
  {
    label: "View All Files",
    icon: <FileText size={18} />,
    onClick: () => console.log("View all files clicked"),
  },
  {
    label: "Logout",
    icon: <LogOut size={18} />,
    onClick: () => console.log("Logout clicked"),
  },
];

const QuickActions = () => {
  return (
    <div className="w-full p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <Lightbulb className="text-yellow-400" />
        <p className="text-xl font-semibold">Quick Actions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 hover:bg-blue-50 rounded-md transition duration-200 cursor-pointer border border-gray-200"
          >
            <div className="mb-2 text-blue-500">{action.icon}</div>
            <span className="text-sm font-medium text-gray-700 text-center">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
