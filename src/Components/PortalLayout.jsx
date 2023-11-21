import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function PortalLayout() {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PortalLayout;
