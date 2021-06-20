import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import {addTask} from '../../service/api';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyle=makeStyles({
    textField:{
        width:'100%',
    },
    radio:{
      color:'primary'
    }
  });

const initialValue={
    title:'',
    description:'',
    status:'',
}

const AddTask = () => {
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();
    const [open, setOpen] = React.useState(true);

    const [task,setTask]=useState(initialValue);
    const {title,description,status}=task;

    const onValueChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
    }
    const handleDone = async() => {
        await addTask(id,task);
        setOpen(false);
        history.push(`/task/${id}`);
    };

    const handleCancel = () => {
        setOpen(false);
        history.push(`/task/${id}`);
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
        <div className="staus">
        <div className="stausBox">

        <FormControl component="fieldset">
      <RadioGroup aria-label="task" name="status" value={status} onChange={(e)=>onValueChange(e)}>
        <FormControlLabel value="todo" control={<Radio/>} label="To Do"/>
        <FormControlLabel value="inProgress" control={<Radio />} label="In Progress" />
      </RadioGroup>
    </FormControl>
        </div>
        </div>
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

export default AddTask;
