import { FaHome } from "react-icons/fa";
import "./SideBar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <FaHome />
        <span className="marginX1">Inbox</span>
      </div>
      <div className="sidebar__item">
        <FaHome />
        <span className="marginX1">Today</span>
      </div>
      <div className="sidebar__item">
        <FaHome />
        <span className="marginX1">Next 7 days</span>
      </div>
    </div>
  );
}

export default Sidebar;
