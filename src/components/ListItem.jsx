import { FaInbox } from "react-icons/fa";

import "./ListItem.scss";

function ListItem() {
  return (
    <div className="listItem">
      <div className="listItem__project">
        <span className="marginX1">Project</span>
      </div>
      <div className="listItem__work">
        <FaInbox />
        <span className="marginX1">Work</span>
      </div>
      <div className="listItem__home">
        <FaInbox />
        <span className="marginX1">Home</span>
      </div>
    </div>
  );
}

export default ListItem;
