import React, {useEffect, useState} from 'react';
import {getNotes} from '../../service/api';
import { useHistory, useParams } from 'react-router-dom';
import NoteCard from '../Notes/NoteCard';
import '../../style/NotesPage.css';

const NotesPage = () => {
  const {id}=useParams();
  const [notes,setNotes]=useState([]);
  const getAllNotes=async()=>{
    const response=await getNotes(id);
    console.log(response.data);
    setNotes(response.data);
  }
  useEffect(()=>{
    getAllNotes();
},[]);

  return (
    <div className="notesDisplay">
        {
          notes.map(note=>(
            <NoteCard
              _id={note._id}
              title={note.title}
              description={note.description}
            />
          ))
        }
    </div>
  );
};

export default NotesPage;
