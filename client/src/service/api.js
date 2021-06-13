import axios from 'axios';

const url='http://localhost:5000';

export const addContact=async(contact)=>{
    return await axios.post(`${url}/add`,contact);
}
