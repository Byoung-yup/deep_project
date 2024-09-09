import { Outlet } from "react-router-dom";
import Navibar from "../Navibar";

const Layout = () => {
  return (
    <div className="flex flex-col mt-20">
      <Navibar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
