import React from 'react'
import "./CreatProject.css";
// import { ReactComponent as Logo } from "../image/Logocopy.svg";


function CreateProject() {

  return (
    <main className="CreatprojectMain-container">
      <div className="CreatprojectMain-title">
        <div>
      
        </div>
      </div>

      <div className="CreatprojectMain-cards">
        <div className="CreatprojectMain-card">
          <div className="textareaandbtn">
            <textarea
              className="Creatprojectmaintextarea"
              placeholder="Enter Project Theme"
            />
            <button className="btn btn-primary">Save Project</button>
          </div>
          <form action="post" className="projectform">
            <div className="Creatprojectform">
              <label htmlFor="Reason">Reason</label>
              <select id="Reason" className="Creatprojectformfild">
                <option value="Business">For Business</option>
                <option value="Dealership">For Dealership</option>
                <option value="Transport">For Transport</option>
              </select>
              <label htmlFor="Category">Category</label>
              <select id="Category" className="Creatprojectformfild">
                <option value="Quality A">Quality A</option>
                <option value="Quality B">Quality B</option>
                <option value="Quality C">Quality C</option>
                <option value="Quality D">Quality D</option>
              </select>
              <label htmlFor="Start_Date">Start Date as per Project Plan</label>
              <input
                type="date"
                id="Start_Date"
                className="Creatprojectforminput"
              />
            </div>
            <div className="Creatprojectform">
              <label htmlFor="Type">Type</label>
              <select id="Type" className="Creatprojectformfild">
                <option value="Internal">Internal</option>
                <option value="External">External</option>
                <option value="Vendor">Vendor</option>
              </select>
              <label htmlFor="Priority">Priority</label>
              <select id="Priority" className="Creatprojectformfild">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <label htmlFor="End_Date">End Date as per Project Plan</label>
              <input
                type="date"
                id="Reason"
                className="Creatprojectforminput"
              />
            </div>
            <div className="Creatprojectform">
              <label htmlFor="Division">Division</label>
              <select id="Division" className="Creatprojectformfild">
                <option value="Filters">Filters</option>
                <option value="Compressor">Compressor</option>
                <option value="Pumps">Pumps</option>
                <option value="Glass">Glass</option>
                <option value="Water Heater">Water Heater</option>
              </select>
              <label htmlFor="Department">Department</label>
              <select id="Department" className="Creatprojectformfild">
                <option value="Startegy">Startegy</option>
                <option value="Finance">Finance</option>
                <option value="Quality">Quality</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Stores">Stores</option>
              </select>
              <label htmlFor="Location">Location</label>
              <select id="Location" className="Creatprojectformfild">
                <option value="Pune">Pune</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div>
                <p>
                  Status:{" "}
                  <span className="CreatprojectformStatus">Registered</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreateProject;
