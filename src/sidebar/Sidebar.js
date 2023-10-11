import React from 'react'
import "./Sidebar.css";
import { ReactComponent as Dash } from "../imagefile/Dashboard.svg";
import { ReactComponent as Proj } from "../imagefile/Projectlist.svg";
import { ReactComponent as AddProj } from "../imagefile/createproject.svg";
// import { ReactComponent as Logout } from "../imagefile/Logout.svg";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <aside id="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/Dashbord"> <Dash /></Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/CreatProject"> <Proj /></Link>
        </li>
        <hr className="line" />
        <li className="sidebar-list-item">
          <a href="">
            <AddProj />
          </a>
        </li>
        <div className="logout">
          <li className="sidebar-list-item">
            <a href="">
              {/* <Logout /> */}
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
}
export default Sidebar;