import { Users } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="w-full h-[100px] rounded-md shadow-md bg-white p-4">
          <div className="p-2 flex justify-center items-center rounded-md bg-blue-200">
            <Users className="w-[15px] text-blue-800" />
          </div>
        </div>
        <div className="w-full h-[100px] rounded-md shadow-md bg-white p-4"></div>
        <div className="w-full h-[100px] rounded-md shadow-md bg-white p-4"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
