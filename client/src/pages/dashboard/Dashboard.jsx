import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import DashboardNav from "../../components/Dashboard/DashboardNav";
import Menu from "../../components/Dashboard/Menu";

const Dashboard = () => {
  return (
    <div className="h-[100vh] flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:[14%] p-4 h-[100vh] overflow-scroll no-scrollbar">
        <NavLink
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          {/* <Image src="/logo.svg" alt="logo" width={32} height={32} /> */}
          <span className="hidden lg:block font-bold uppercase">
            Accutax MIS
          </span>
        </NavLink>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[84%] h-screen  md:[92%] lg:w-[84%] xl:[86%] bg-[#F7F8FA] overflow-scroll no-scrollbar flex flex-col">
        <DashboardNav />
        <div className=" w-full h-screen p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
