import React from "react";
import "./Home.css";
import desktopImage from '../images/bgimg-1.jpg';
import mobileImage from '../images/bgimg-2.jpg';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate=useNavigate();
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content ">
               <button type="button" className="btn btn-warning btn-rounded" onClick={()=>{navigate("/HostEvent")}}> Get Started</button>
            </div>
        </div>
    );
}

export default Home;
