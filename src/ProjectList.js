import React, {useEffect,  useState } from 'react';
import Data from './Data.json'
import './projectlist.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const ProjectList = () => {
//   
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // Number of projects per page
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
//   // Calculate the indexes of projects to display on the current page
  const indexOfLastProject = currentPage * recordsPerPage;
  const indexOfFirstProject = indexOfLastProject - recordsPerPage;
  // const records = Data.slice(indexOfFirstProject, indexOfLastProject);
  const [records, setRecords]=useState([]);
const npage=Math.ceil(Data.length/recordsPerPage)
const numbers=[...Array(npage + 1).keys()].slice(1)
const handleStatusChange=(project,updatedStatus)=>{
  project.status=updatedStatus;
  setRecords([...records]);
  fetch(`http://localhost:8080/project/${project._id}`, {

  method: 'PATCH',
  
  
  
  body: JSON.stringify(project)
  
  })
  
  .then(response => {
  
  if (!response.ok) {
  
  throw new Error('Network response was not ok');
  
  }
  
  return response.json();
  
  })
  
  .then(data => {
  
  // Handle the response data
  console.log(data);
  
  })
  
  .catch(error => {
  
  });
}
//   // Handle page change
 useEffect(()=>{
fetch("http://localhost:8080/project").then((response)=>response.json())
.then((data)=>{
console.log(data);
setRecords(data);
 })
 },[])

  return (
    <div>
      <h2 className='projectlist'>Project List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        /></div>
      <table className="table">
        <thead >
          <tr >
            <th>Project Name</th>
            <th>Reason</th>
            <th>Type</th>
            <th>division</th>
            <th>Category</th>
            <th>Dept</th>
            <th>Location</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {records.map((project, i) => (
            <tr   key={i}>
              <td>{project.name}</td>
              <td>{project.reason}</td>
              <td>{project.type}</td>
              <td>{project.division}</td>
              <td>{project.cateogary}</td>
              <td>{project.priority}</td>
              <td>{project.dept}</td>
              <td>{project.location}</td>
              <td>{project.status}</td>
              <td className="btn-active">
                <button  onClick={()=>handleStatusChange(project,"Running")}>Start</button>
                <button onClick={()=>handleStatusChange(project,"Closed")}>Close</button>
                <button  onClick={()=>handleStatusChange(project,"Register")}>Cancel</button>
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
