//Dependencรe คือ depen on ตัวอื่น
import "./App.scss";
import { FaHome } from "react-icons/fa";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ListItem from "../components/ListItem";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__listItem">
        <ListItem />
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
