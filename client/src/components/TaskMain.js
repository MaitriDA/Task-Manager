import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import {NavLink, useParams} from 'react-router-dom';
import '../style/TaskMain.css';
import axios from 'axios';
import {getTask} from '../service/api';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import SeeTask from './Task/SeeTask';


const TaskMain=()=>{
  const url='http://localhost:5000';
  const [name,setName]=useState({});
  const callgetID = async () => {
    try{
      const res = await fetch('/getName')
      const data=await res.json();
      setName(data);

      if(!res.status===200){
        const error=new Error(res.error);
        throw error;
      }
    }
    catch(err){
      console.log(err);
    }
  }
  
  
  useEffect(()=>{
    callgetID();
    
  },[])
  return(
    <div>
      <header className="navbar_main">
        <div className="nav_brand">My Brand</div>
        <div className="user_name">Hello, {name.name} !!</div>
        <div className="user_name">
        <NavLink to="/" className="logout_taskMain">Logout</NavLink>
        </div>
      </header>
      <div className="taskMainContainer">
        <div className="addButton_taskMain">
        <button class="btn addTaskbutton">
        <NavLink to="/add">ADD Task</NavLink>
        </button>
        </div>
      </div>
      <SeeTask/>
      
    </div>
    
  )
}

export default TaskMain;