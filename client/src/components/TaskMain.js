import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';

const TaskMain=()=>{
  const history=useHistory();
  const [userName,setUserName]=useState();
  const callTaskMain = async () => {
    try{
      const res = await fetch('/task',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data=await res.json();
      console.log(data.name);
      setUserName(data.name);
      console.log(userName)

      if(!res.status===200){
        const error=new Error(res.error);
        throw error;
      }
    }
    catch(err){
      console.log(err);
      history.push('/login');
    }
  }

  useEffect(()=>{
    callTaskMain();
  },[])
  return(
    <div>
        <h1 method='GET'>{userName}</h1>
    </div>
    
  )
}

export default TaskMain;