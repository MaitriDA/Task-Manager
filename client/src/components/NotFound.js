import React from 'react';
import { NavLink ,useParams} from 'react-router-dom';
import NotFoundImage from '../images/404NotFound.jpg';
import '../style/NotFound.css';

const NotFound=()=>{
  
    const {id}=useParams();
    console.log(id);

  
  return(
    <div>
        <div className="notFoundMain">
            <img src={NotFoundImage} alt="404errorVecorImage" className="notFound"/>
        </div>
        <div className="buttonNotFound">
            <button class="btn homebuttonNotFound">
                <NavLink to="/">HOME</NavLink>
            </button>
        </div>
    </div>
    
  )
}

export default NotFound;