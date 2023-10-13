import React,{useState, useEffect} from 'react'
import './dashboard.css';
import axios from 'axios';
function DashBoard() {
  const[data, setData]=useState([]);
  const[responseData, setResponseData]= useState({});
  const[totalProject, setTotalProject]=useState(0);
  const[totalClosed, setTotalClosed]=useState(0);
  const[totalRunning, setTotalRunning]=useState(0);
  const[totalCancel, setTotalCancel]=useState(0);
  const[closerid, setTotalCloser]=useState(0);

  useEffect(()=>{
   axios. get("http://localhost:8080/dashboard")
    .then((response)=>
    setResponseData(response.data))
    
    // .then((response)=>{
    // console.log(response);
    // // setResponseData(response);
    // response.json()})
    // .then((json)=>{
    //   console.log(json);
      
     
      
    // })
    .catch((error)=>{
      console.error("Error to fetch Data", error);
    });
    
  } ,[]);
  // useEffect(()=>{
  //   //calculate total number 
  //   // if(responseData && Array.isArray(responseData)){
  //   //   const id=responseData.map((item)=>item.id);
  //   //   const total=id.length;
  //   //   setTotalProject(total);
  //   //   const closedid=responseData.filter((item)=>item.status==="Closed");
  //   //   setTotalClosed(closedid.length);
  //   //   const runningid=responseData.filter((item)=>item.status==="Running");
  //   //   setTotalRunning(runningid.length);

  //   //   const cancelid=responseData.filter((item)=>item.status==="Cancel");
  //   //   setTotalCancel(cancelid.length);

  //   // //   const closerid=responseData.filter((item)=>{
  //   // //     item.status==="Running" && new Date(item.endDate).getTime});
  //   // //   setTotalCloser(cancelid.length);
  //   // }
  // },[responseData]);
  return (
    <div>
      <h2 className='dashboard'>Dashboard</h2>
      <div className="status">
      <div className="sts-field">
          <h3>Total Project</h3>
          <h2>{responseData.total}</h2>
         </div>
         <div className="sts-field">
          <h3>Closed</h3>
          <h2>{responseData.close}</h2>
         </div>
         <div className="sts-field">
          <h3>Running</h3>
          <h2>{responseData.running}</h2>
         </div>

        
         <div className='sts-field'>
          <h3>Closure Delay</h3>
          <h2>4</h2>
         </div>

         <div className='sts-field'>
          <h3>Cancelled</h3>
          <h2>{responseData.canceled}</h2></div>
        
      </div>
      {/* chartgraph part */}
      
    </div>
  )
}

export default DashBoard
