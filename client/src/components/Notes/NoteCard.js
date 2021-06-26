import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import '../../style/NotesPage.css';
// className={(status==='done' ? 'taskCardDone taskCard':(status==='todo' ? 'taskCardToDo taskCard':'taskCardInProgress taskCard'))}
const NoteCard = ({_id,title,description}) => {
    const {id}=useParams();
    let num=Math.floor(Math.random()*5);
    return (
        <div className={(num===0 ? 'NoteCard NoteCardPink':(num===1 ? 'NoteCard NoteCardOrange':(num==2 ? 'NoteCard NoteCardGreen':(num==3 ? 'NoteCard NoteCardBlue':'NoteCard NoteCardGray'))))}>
            <div className='NoteContent'>
                <div div className={(num===0 ? 'NoteCardTitle NoteCardTitlePink':(num===1 ? 'NoteCardTitle NoteCardTitleOrange':(num==2 ? 'NoteCardTitle NoteCardTitleGreen':(num==3 ? 'NoteCardTitle NoteCardTitleBlue':'NoteCardTitle NoteCardTitleGray'))))}>{title}</div>
                <div className="NoteCardDescription">{description}</div>
            </div>
        </div>
    );
};

export default NoteCard;
