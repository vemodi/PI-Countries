import React from "react";
import './Paginado.css'

export default function Paginado({countriesPerPage, countries, paginado}){
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbrers.push(i)   
    }
    return(
        <nav className='paginadoContainer'>
            <ul className ='ul'>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a className ='numeroPaginado' href onClick={()=>paginado(number)}> {number} </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}