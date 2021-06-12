import React from 'react';
import NavBar from '../components/NavBar';
import '../style/Home.css';
import homeVector from '../images/homeVector.jpg';

const Home=()=>{
  return(
    <div>
      
      <NavBar/>
      <div className="homeMain">
        <div className="homeImage">
        <img src={homeVector} alt="homeVecorImage" className="image"/>
        </div> 
        <div className="homeIntro">
        <h2 className="welcome">WELCOME :)</h2>
        <p className="introLine">Boost your productivity with Brand Name.</p>
        <p className="introLineOther">Lorem Ipdkaf dfskadsf kdsaf dskfjakd fkdsafj dksafjdsk fdskj fkdsj fkdsj f;kjdsk fjdsk fdskj </p>
        <div className="buttonContainer">
          <div className="buttonBox">
            <div className="login">
            <button class="btn loginbuttonHome">
                <a href="/login">
                  LOGIN
                </a>
              </button>
            </div>
            <div className="login">
            <button class="btn signupbuttonHome">
                <a href="/register">
                  SIGNUP
                </a>
              </button>
            </div>
          </div>
        </div>










          {/* <div className="button">
          <div className="buttonContainer">

          
            <div>
              <button class="btn loginbuttonHome">
                <a href="/login">
                  LOGIN
                </a>
              </button>
            </div>
            <div>
              <button class="btn signupbuttonHome">
                <a href="/register">
                  SIGNUP
                </a>
              </button>
            
          </div>
        </div>
      </div> */}
          </div>        
        </div>
        
      </div>
    
  )
}

export default Home;