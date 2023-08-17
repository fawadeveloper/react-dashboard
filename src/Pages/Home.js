import { Outlet } from "react-router-dom";
import "../App.css";
import Main from "../components/Main";
import Right from "../components/Right";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass  grid h-[97%] w-[97%] rounded-[2rem] md:overflow-hidden overflow-scroll">
        <Sidebar />
        <Outlet />
        <Right />
      </div>
    </div>
  );
}

export default App;
