import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/AddTask.css';
import { useHistory, useParams } from 'react-router-dom';
import {addNote} from '../../service/api';


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
    description:''
}

const AddNote = () => {
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();
    const [open, setOpen] = React.useState(true);

    const [note,setNote]=useState(initialValue);
    const {title,description}=note;

    const onValueChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    
    const handleDone = async() => {
        //await addTask(id,task);
        console.log(note);
        setOpen(false);
        await addNote(id,note);
        history.push(`/task/${id}`);
        //window.location.reload();
    };

    const handleCancel = () => {
        setOpen(false);
        history.push(`/task/${id}`);
    };
  return (
    <div>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" maxWidth="xl">
      <DialogContentText>
        <div className="addTask_heading">Add Note Here</div>
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

export default AddNote;
