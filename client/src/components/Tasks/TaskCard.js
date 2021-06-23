import React, {useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../../style/TaskCard.css';
import { useHistory, useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { getTasks,deleteTask} from '../../service/api';


  const ITEM_HEIGHT = 48;
const TaskCard = ({_id,title,description,status}) => {
    const {id}=useParams();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleDelete=async()=>{
      await deleteTask(id,_id);
      setAnchorEl(null);
      window.location.reload();
  }

    return (
        <div className={(status==='done' ? 'taskCardDone taskCard':(status==='todo' ? 'taskCardToDo taskCard':'taskCardInProgress taskCard'))}>
            
            <div className='taskContent'>
                <div className="titleAndStatus">
                    <div className="taskCardTitle">{title}</div>
                    <div className={(status==='done' ? 'taskCardStatusDone taskCardStatus':(status==='todo' ? 'taskCardStatusToDo taskCardStatus':'taskCardStatusInProgress taskCardStatus'))}>{status}</div>

                </div>
                <div className="taskCardDescription">{description}</div>
            </div>
            
            <div className="taskCardMenu">
                <div>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                    <NavLink to={`/task/${id}/edit/${_id}`}>

                        <MenuItem>
                        <div className="menuItem">EDIT</div>
                        </MenuItem>
                    </NavLink>
                        <MenuItem className="menuItem" onClick={handleDelete}>
                        <div className="menuItem">DELETE</div>
                        </MenuItem>
                    
                </Menu>
            </div>
        </div>
        </div>
    );
};

export default TaskCard;
