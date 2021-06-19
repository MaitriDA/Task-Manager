import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import {getSingleTask} from '../../service/api';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




const EditTask = () => {
    const {id}=useParams();
    const {id2}=useParams();
    const history=useHistory();
    const [open, setOpen] = React.useState(true);

    const handleDone = async() => {
        history.push(`/task/${id}`);
        setOpen(false);
        
    };

    const handleCancel = () => {
        history.push(`/task/${id}`);
        setOpen(false);
        
    };
    const getTaskData=async()=>{
        const response=await getSingleTask(id,id2);
        console.log(response);
    }
    useEffect(()=>{
        getTaskData();
    },[]);
  return (
    <div>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" maxWidth="xl">
        <DialogContentText>
        
            
        
Hello
        
        
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleDone} color="primary">
            DONE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTask;
