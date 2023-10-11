import './App.css';
import CreateProject from './CreateProject';
// import Register from './Register';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProjectList from './ProjectList';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
       <Routes>
       <Route path="/sidebar" element={<Sidebar/>} />
       <Route path="creatproject" element={<CreateProject/>} />
       {/* <Route path='/' element={<Register/>}/> */}
       <Route path='/login' element={<Login/>}/>
       <Route path='/projectlist' element={<ProjectList/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;