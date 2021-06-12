import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const TaskMain=()=>{
  const history=useHistory();
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
      const data=await res.json;
      console.log(data);

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
        <h1 method='GET'>Hello to task manager</h1>
    </div>
    
  )
}

export default TaskMain;