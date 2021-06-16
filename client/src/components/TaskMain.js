import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import {NavLink, useParams} from 'react-router-dom';
import '../style/TaskMain.css';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import {getUser} from '../service/api';


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
        <div className="user_name">Hello, {user.name} !!</div>
        <div className="user_name">
        <NavLink to="/" className="logout_taskMain">Logout</NavLink>
        </div>
      </header>
      <div className="taskMainContainer">
        <div className="addButton_taskMain">
        <button class="btn addTaskbutton">
        <NavLink to={`/task/${user._id}/add`}>ADD Task</NavLink>
        </button>
        </div>
      </div>
    </div>
    
  )
}

export default TaskMain;