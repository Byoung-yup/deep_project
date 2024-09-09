import { Outlet } from "react-router-dom";
import Navibar from "../Navibar";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navibar />
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Layout;
