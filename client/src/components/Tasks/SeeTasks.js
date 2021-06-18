import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import {addTask} from '../../service/api';
import { getTasks } from '../../service/api';

const useStyle=makeStyles({
    
  });

const SeeTask = () => {
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();
    const [tasks,setTasks]=useState([]);

    const getAllTasks=async()=>{
        const response=await getTasks(id);
        console.log(response.data[0].tasks)
        setTasks(response.data[0].tasks);
        console.log(tasks);
    }

    useEffect(()=>{
        getAllTasks();
    },[]);

  return (
    <div>
      <div>
         {
             tasks.map(task=>(
                 <div>{task.title}</div>
             ))
         }
      </div>
    </div>
  );
};

export default SeeTask;
