import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import {addTask} from '../../service/api';
import { getTasks } from '../../service/api';
import TaskCard from './TaskCard';

const useStyle=makeStyles({
    
  });

const SeeTask = () => {
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();
    const [tasks,setTasks]=useState([]);

    const getAllTasks=async()=>{
        const response=await getTasks(id);
        setTasks(response.data[0].tasks);
    }

    useEffect(()=>{
        getAllTasks();
    },[]);

    const handleEdit=()=>{
      console.log('hello');
    }
  return (
    <div>
      <div>
         {
             tasks.map(task=>(
               <NavLink to={`/task/${id}/edit`}>

               <TaskCard
                 _id={task._id}
                 title={task.title}
                 description={task.description}
               />
               </NavLink>
             ))
         }
      </div>
    </div>
  );
};

export default SeeTask;
