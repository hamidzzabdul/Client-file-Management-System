import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
