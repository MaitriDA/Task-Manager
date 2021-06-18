import React, { useEffect,useState } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/TaskMain.css';
import {getUser} from '../service/api';
import SeeTask from '../components/Tasks/SeeTasks';
import TaskPage from '../components/Tasks/TaskPage.js';

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
      <div className="taskMain_container">
        <header className="navbar_main">
          <div className="nav_brand">My Brand</div>
          {/* <div className="user_name">Hello, {user.name} !!</div> */}
          <div className="button_taskMain">
            <NavLink to={`/note/${user._id}/add`} className="button_note">ADD Note</NavLink>
            <NavLink to={`/task/${user._id}/add`} className="button_task">ADD Task</NavLink>
            <NavLink to="/" className="button_logout">Logout</NavLink>
          </div>
        </header>

        <div className="contentMain">
          <div className="notes_date_notification">
            <div className="date_notification">
              <div className="date_continer">Date</div>
              <div className="notification_continer">Notification</div>
            </div>
            <div className="note_container">Notes</div>
          </div>
          <div className="task_container">
            <TaskPage/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default TaskMain;