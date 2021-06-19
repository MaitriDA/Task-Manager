import React, {useEffect, useState} from 'react';
import { Button,makeStyles } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import '../../style/TaskCard.css';

const TaskCard = ({_id,title,description}) => {
    return (
    <div className="taskCard">
        <div className="taskCardTitle">{title}</div>
        <div className="taskCardDescription">{description}</div>
    </div>
    );
};

export default TaskCard;
