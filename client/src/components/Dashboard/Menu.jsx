import { NavLink } from "react-router-dom";
import { Files, LayoutDashboard, LogOut, User, Users } from "lucide-react";
const menuItems = [
  {
    icon: <LayoutDashboard className="w-[23px] font-semibold" />,
    label: "Dashboard",
    href: "/dashboard",
    visible: ["admin", "client"],
  },
  {
    icon: <Users className="w-[23px] font-semibold" />,
    label: "Manage Clients",
    href: "/dashboard/manage-clients",
    visible: ["admin"],
  },
  {
    icon: <Files className="w-[23px] font-semibold" />,
    label: "Files",
    href: "/dashboard/my-files",
    visible: ["client"],
  },
  {
    icon: <User className="w-[23px] font-semibold" />,
    label: "Profile",
    href: "/dashboard/my-profile",
    visible: ["admin", "client"],
  },
  {
    icon: <LogOut className="w-[23px] font-semibold" />,
    label: "Logout",
    href: "/logout",
    visible: ["admin", "client"],
  },
];

const Menu = () => {
  return (
    <div className=" mt-8 text-sm flex flex-col gap-5 ">
      {menuItems.map((item) => (
        <NavLink
          to={item.href}
          key={item.label}
          className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 hover:text-gray-900 transition duration-300 py-2 md-px-2 rounded-md hover:bg-lamaSkyLight"
        >
          {item.icon}
          <span className="hidden lg:block ">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
