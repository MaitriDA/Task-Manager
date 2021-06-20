import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button,makeStyles } from "@material-ui/core";
import '../../style/EditTask.css';
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
    const [open, setOpen] = useState(true);
    const [task,setTask]=useState({});


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
        console.log(response.data[0]);
        setTask(response.data[0]);

    }
    useEffect(()=>{
        getTaskData();
    },[]);
  return (
    <div>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title" maxWidth="xl">
        <DialogContentText>
        
        <div className="dialog">
                  <div className="AddToDos">Edit To-dos..</div>

                    <div className="todoContentEdit">
                        <div className="contentItem">
                            <div className="contentHeading">Title: </div>
                            <div className="contectDes">{task.title}</div>
                        </div>

                        <div className="contentItem">
                            <div className="contentHeading">Desc: </div>
                            <div className="contectDes">{task.description}</div>
                        </div>

                        <div className="contentItem">
                            <div className="contentHeading">Status: </div>
                            <div className="contectDes">{task.status}</div>
                        </div>  
                    </div>

                    <div className="Title">
                      <TextField
                        id="standard-basic"
                        label=" NewTitle"
                        style={{width: 300}}
                        // onChange={e => setToDoTitle(e.target.value)}
                        type="text" 
                        placeholder="New Task Title"
                      />
                    </div>
                    <div className="Description">
                      <TextField
                        id="standard-basic"
                        label="New Description"
                        style={{width: 300}}
                        // onChange={e => setToDoDescription(e.target.value)}
                        type="text" 
                        placeholder="New Task Description"
                      />
                    </div>
                    <div className="toDoBtn">
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

export default EditTask;
