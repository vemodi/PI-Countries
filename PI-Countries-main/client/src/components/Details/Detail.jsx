import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, restartDetail } from "../../actions";
import NavBar from "../NavBar/NavBar";
import './Detail.css'



export default function Detail (props){
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(restartDetail())
      dispatch(getDetail(props.match.params.id)) 
    },[dispatch, props.match.params.id])

    const countriesDetail = useSelector((state)=> state.detail)

  return (

    <div key={countriesDetail.id} className='detailE'>
      <div>
      <NavBar/>
      </div>

      <div className='detailContainer'>{
          countriesDetail.length ?
              <div className='detailContent'>
                  <img className='objDetail' src={countriesDetail[0].flag} alt='Imagen no encontrada' width='250px' height='175px'/>
                  <h1 className='objDetail'>{countriesDetail[0].name}</h1>
                  <div className='obj2Detail'>
                  <h2>Id: {countriesDetail[0].id}</h2>
                  <h2>Capital: {countriesDetail[0].capital}</h2>
                  <h2>Continente: {countriesDetail[0].continent}</h2>
                  <h2>Subregion: {countriesDetail[0].subregion}</h2>
                  <h2>Area: {countriesDetail[0].area} km2</h2>
                  <h2>Poblacion: {countriesDetail[0].population}</h2>
                  </div>
                  <div className='activitiesDetail'>  {countriesDetail[0].activities?.map(el=>{
                    return(
                      <div>
                        <Link className='linkDetail' to='/activities'>
                        <h2>Actividad</h2>
                        </Link>
                        <div className='obj3Detail'>
                        <h3>{el.name}</h3>
                        <h3>Dificultad: {el.difficulty}</h3>
                        <h3>Duracion: {el.duration}</h3>
                        <h3>Temporada: {el.season}</h3>
                      </div>
                      </div>
                  )})}</div>
  
  
              </div> : <div className='loading'>
                <p> Loading... </p>
                </div>
                
      }</div>
    </div>
  );
};
