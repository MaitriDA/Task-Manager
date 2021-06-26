import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {getUser} from '../service/api';
import '../style/Date.css';

const DateCard = () => {
    const [user,setUser]=useState([]);
  const callgetUser = async () => {
    const result=await getUser();
    console.log(result)
    setUser(result);
  }
  let today = new Date().toLocaleTimeString();
  let dateToday=new Date();
  const [currTime,setCurrTime]=useState(today);
  //const day=dateToday.getDay();
  const date=dateToday.getDate();
  //const month=dateToday.getMonth();
  const dateArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const day=dateArray[dateToday.getDay()];
  const month=monthArray[dateToday.getMonth()];
  const updateTime=()=>{
    today = new Date().toLocaleTimeString();
    setCurrTime(today);
  }
  useEffect(()=>{
    callgetUser();
    
  },[])

  setInterval(updateTime,1000);
  return(
    <div>

    <div className="userName">
      Hello,  {user.name}
      
    </div>
    <div className="line"></div>
    <div className="dateAndTime">

    <div className="time">
      {currTime}
    </div>
    <div className="dayAndDate">
      {day} | {date} {month}
    </div>
    </div>
    
    </div>
  );
};

export default DateCard;
