import React, {useEffect, useState} from 'react';
import {getNotes} from '../../service/api';
import { useHistory, useParams } from 'react-router-dom';


const NotesPage = () => {
  const {id}=useParams();
  const getAllNotes=async()=>{
    const response=await getNotes(id);
    console.log(response)
  }
  useEffect(()=>{
    getAllNotes();
},[]);
  return (
    <div>
        <div>Display the notes here</div>
    </div>
  );
};

export default NotesPage;
