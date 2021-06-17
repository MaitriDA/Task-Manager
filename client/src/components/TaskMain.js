import React, { useEffect,useState } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/TaskMain.css';
import {getUser} from '../service/api';
import SeeTask from '../components/Tasks/SeeTasks';


const TaskMain=()=>{
  const [user,setUser]=useState({});
  const callgetUser = async () => {
    const result=await getUser();
    console.log(result)
    setUser(result);
  }
  useEffect(()=>{
    callgetUser();
    
  },[])
  return(
    <div>
      <header className="navbar_main">
        <div className="nav_brand">My Brand</div>
        {/* <div className="user_name">Hello, {user.name} !!</div> */}
        <div className="button_taskMain">
          <NavLink to={`/task/${user._id}/add`} className="button_task">ADD Task</NavLink>
          <NavLink to={`/note/${user._id}/add`} className="button_note">ADD Note</NavLink>
          <NavLink to="/" className="button_logout">Logout</NavLink>
        </div>
      </header>
      <SeeTask/>
    </div>
    
  )
}

export default TaskMain;