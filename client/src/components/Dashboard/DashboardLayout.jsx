import { ClipboardClock, FileText, Users } from "lucide-react";
import QuickActions from "./QuickActions";
import RecentUploads from "./RecentUploads";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="w-full h-[100px] rounded-md shadow-md bg-white p-4 flex gap-2">
          <div className="w-12 h-14 px-3 flex justify-center items-center rounded-md bg-blue-100">
            <Users className="w-[20px] text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Total Users</span>
            <span className="font-bold text-xl">10</span>
          </div>
        </div>
        <div className="w-full h-[100px] rounded-md shadow-md bg-white p-4 flex gap-2">
          <div className="w-12 h-14 px-3 flex justify-center items-center rounded-md bg-green-100">
            <FileText className="w-[20px] text-green-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Total Documents</span>
            <span className="font-bold text-xl">20</span>
          </div>
        </div>
        <div className="w-full h-[100px] rounded-md shadow-md bg-white p-4 flex gap-2">
          <div className="w-12 h-14 px-3 flex justify-center items-center rounded-md bg-yellow-100">
            <ClipboardClock className="w-[20px] text-yellow-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Pending Verifications</span>
            <span className="font-bold text-xl">3</span>
          </div>
        </div>
      </div>

      <QuickActions />
      <RecentUploads />
    </div>
  );
};

export default DashboardLayout;
