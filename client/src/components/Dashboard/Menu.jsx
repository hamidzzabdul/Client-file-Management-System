import { NavLink, useNavigate } from "react-router-dom";
import {
  Files,
  LayoutDashboard,
  LogOut,
  Plus,
  User,
  Users,
} from "lucide-react";
import { getStoredUser } from "../../utils/authHelper";
import authApi from "../../api/authApi";
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
    icon: <Plus className="w-[23px] font-semibold" />,
    label: "Create Client",
    href: "/dashboard/create-clients",
    visible: ["admin"],
  },
  {
    icon: <Files className="w-[23px] font-semibold" />,
    label: "Files",
    href: "/dashboard/my-files",
    visible: ["admin", "client"],
  },
  {
    icon: <User className="w-[23px] font-semibold" />,
    label: "Profile",
    href: "/dashboard/my-profile",
    visible: ["admin", "client"],
  },
];

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authApi.logout();
    navigate("/");
  };
  const user = getStoredUser();
  const filteredMenu = menuItems.filter((item) =>
    item.visible.includes(user.role)
  );
  return (
    <div className=" mt-8 text-sm flex flex-col gap-5 ">
      {filteredMenu.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 hover:text-gray-900 transition duration-300 py-2 md-px-2 rounded-md hover:bg-lamaSkyLight"
        >
          {item.icon}
          <span className="hidden lg:block ">{item.label}</span>
        </NavLink>
      ))}
      <div
        to={"/logout"}
        className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 hover:text-gray-900 transition duration-300 py-2 md-px-2 rounded-md hover:bg-lamaSkyLight cursor-pointer"
        onClick={handleLogout}
      >
        <LogOut className="w-[23px] font-semibold" />{" "}
        <span className="hidden lg:block ">Logout</span>
      </div>
    </div>
  );
};

export default Menu;
