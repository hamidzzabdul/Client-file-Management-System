import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-[4rem] border-b border-b-gray-300 flex items-center justify-between p-4">
      <div className="w-full mx-auto flex items-center justify-between p-4 h-full">
        <div>
          <h1 className="text-xl font-semibold">Accutax</h1>
        </div>
        <div></div>
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
