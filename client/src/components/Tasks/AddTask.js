import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import {addTask} from '../../service/api';


const useStyle=makeStyles({
    textField:{
        width:'100%',
    }
  });

const initialValue={
    title:'',
    description:''
}

const AddTask = () => {
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();
    const [open, setOpen] = React.useState(true);

    const [task,setTask]=useState(initialValue);
    const {title,description}=task;

    const onValueChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
        console.log(task);
    }

    const handleDone = async() => {
        await addTask(id,task);
        setOpen(false);
        history.goBack();
    };

    const handleCancel = () => {
        setOpen(false);
        history.goBack();
    };
  return (
    <div>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" maxWidth="xl">
        <DialogContentText>
        <div className="addTask_heading">Add Task Here</div>
        <div className="addTask_textField">
            
        <TextField
        autoFocus
        margin="dense"
        label="Title"
        onChange={(e)=>onValueChange(e)} name="title" value={title}
        className={classes.textField}
      />

        <TextField
        autoFocus
        margin="dense"
        label="Description"
        onChange={(e)=>onValueChange(e)} name="description" value={description}
        className={classes.textField}
      />
        </div>
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDone} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTask;
