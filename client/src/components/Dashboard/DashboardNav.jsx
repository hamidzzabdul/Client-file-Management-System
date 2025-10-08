import React from "react";

const DashboardNav = () => {
  return (
    <div className="w-full h-[4rem] bg-white flex items-center justify-between px-8">
      <h2 className="text-base font-semibold">Welcome Admin</h2>

      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] rounded-md bg-blue-800 flex items-center justify-center px-2 py-1 ">
          <p className="text-white text-sm font-semibold">A</p>
        </div>
        <div className="flex items-center flex-col gap-2 cursor-pointer">
          <div className="flex flex-col">
            <p className="t">Admin</p>
            <p className="text-gray-500 text-xs font-semibold">
              admin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
