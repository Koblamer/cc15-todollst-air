import { FaInbox } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./SideBar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <FaInbox />
        <span className="marginX1">Inbox</span>
      </div>
      <div className="sidebar__item">
        <FaRegCalendar />
        <span className="marginX1">Today</span>
      </div>
      <div className="sidebar__item">
        <FaRegCalendarAlt />
        <span className="marginX1">Next 7 days</span>
      </div>
    </div>
  );
}

export default Sidebar;
