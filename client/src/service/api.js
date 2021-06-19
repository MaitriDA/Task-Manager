import axios from 'axios';
const url='http://localhost:5000';

export const getUser=async()=>{
    try{
        const res = await fetch('/getName');
        const data=await res.json();
        
        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export const addTask=async(id,task)=>{
    return await axios.post(`${url}/add/${id}`,task);
}

export const getTasks = async (id) => {
    return await axios.get(`${url}/see/${id}`);
}

export const getSingleTask=async(id1,id2)=>{
    return await axios.get(`${url}/${id1}/get/${id2}`);
}

