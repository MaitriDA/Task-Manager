import axios from 'axios';

const url='http://localhost:5000';

export const addContact=async(contact)=>{
    return await axios.post(`${url}/add`,contact);
}

export const getTask=async()=>{
    return await axios.get(`${url}/see`);
}
