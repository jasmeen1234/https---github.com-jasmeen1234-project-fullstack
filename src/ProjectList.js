import React, { useState } from 'react';
import Data from './Data.json'
import './projectlist.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const ProjectList = () => {
//   
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // Number of projects per page

//   // Calculate the indexes of projects to display on the current page
  const indexOfLastProject = currentPage * recordsPerPage;
  const indexOfFirstProject = indexOfLastProject - recordsPerPage;
  const records = Data.slice(indexOfFirstProject, indexOfLastProject);
const npage=Math.ceil(Data.length/recordsPerPage)
const numbers=[...Array(npage + 1).keys()].slice(1)
//   // Handle page change
//  

  return (
    <div>
      <h2>Project List</h2>
      <table className="table">
        <thead >
          <tr >
            <th>Project Name</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Division</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Dept</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((project, i) => (
            <tr   key={i}>
              <td>{project. Project}</td>
              <td>{project.Reason}</td>
              <td>{project.Type}</td>
              <td>{project.Division}</td>
              <td>{project.Category}</td>
              <td>{project.Priority}</td>
              <td>{project.Dept}</td>
              <td>{project.Location}</td>
              <td>{project.Status}</td>
              <td className="btn-active">
                <button >Start</button>
                <button >Close</button>
                <button >Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className='page-link' onClick={prePage}>Prev</a>
        </li>
        {
          numbers.map((n, i)=>{
            <li className={`page-item ${currentPage === n? 'active': ''}`} key={i}>
              <a href='#' className='page-item' onClick={()=>changeCPage(n)}>{n}</a>

            </li>
          })
        }
        <li className="page-item">
          <a href="#" className='page-link' onClick={nextPage}>Next</a>
        </li>
      </ul>
    </div>
  );
  function prePage(){
if(currentPage !==1){
  setCurrentPage(currentPage - 1)
}
  }
  function changeCPage(i){

  }
  function nextPage(){
    if(currentPage !==npage){
      setCurrentPage(currentPage + 1)
    }
  }
};

export default ProjectList;
