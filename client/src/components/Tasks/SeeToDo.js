import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import { getToDoTasks } from '../../service/api';
import TaskCard from './TaskCard';

const useStyle=makeStyles({
    
  });

const SeeToDo = () => {
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();
    const [tasks,setTasks]=useState([]);

    const getToDoAllTasks=async()=>{
        const response=await getToDoTasks(id,"todo");
        console.log(response.data)
        setTasks(response.data);
    }

    useEffect(()=>{
        getToDoAllTasks();
    },[]);

  return(
    <div>
      <div>
         {
             tasks.map(task=>(
               

               <TaskCard
                 _id={task._id}
                 title={task.title}
                 description={task.description}
                 status={task.status}
               />
               
             ))
         }
      </div> 
    </div>
  );
};

export default SeeToDo;
