import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import {NavLink, useParams} from 'react-router-dom';
import axios from 'axios';
import {getTask} from '../../service/api';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';


const useStyle=makeStyles({
  table:{
      width:'85%',
      margin:'auto',
      marginTop:'30px'
  },
  header:{
      backgroundColor:'#add8e6',
      fontSize:'25px',
      
  },
  editBtn:{
      backgroundColor:'#87CEFA'
  },
  deleteBtn:{
      backgroundColor:'#191970',
      color:'white',
      marginLeft:'-40px'
  }
})


const SeeTask=()=>{
    const classes=useStyle();
  const [tasks,setTasks]=useState([]);
  const getAllTask=async()=>{
    const response=await getTask();
    setTasks(response.data);
    console.log(response.data)
  } 
  
  useEffect(()=>{
    getAllTask();
  },[])
  return(
    <div>
      
      <Table className={classes.table}>
                <TableHead className={classes.header}>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tasks.map(task=>(
                            <TableRow>
                                <TableCell>{task._id}</TableCell>
                                <TableCell>{task.UserName}</TableCell>
                                <TableCell>{task.Name}</TableCell>
                                <TableCell>{task.Email}</TableCell>
                                <TableCell>{task.Phone}</TableCell>
                                {/* <TableCell>
                                    <Button className={classes.editBtn} component={Link} to={`/edit/${contact._id}`}>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button className={classes.deleteBtn} onClick={()=>deleteContactData(contact._id)}>Delete</Button>
                                </TableCell> */}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
    </div>
    
  )
}

export default SeeTask;