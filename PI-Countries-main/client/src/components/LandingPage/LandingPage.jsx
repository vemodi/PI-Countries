import React from "react";
import{Link} from 'react-router-dom';
import './LandingPage.css'
import video from '../../video_img/LandingVideo.mkv'


export default function LandingPage(){
    return(
        <div>
            <div className="titulo">
            <h1>PAISES</h1>
            <h2>Bienvenidos</h2>
            </div>
            <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
            <Link to ='/home'>
                <button className='btn'> Ingresar </button>
            </Link>
        </div>
    )
}