import React from 'react'
import { useLocation } from 'react-router';

function Details() {
    const location = useLocation();
    
    console.log('params', location)
  return (
    <div style={{margin:30}}>
        <h1>{location.state.strDrink}</h1>
        <h6>Type: {location.state.strGlass}</h6>
        <b>Description :</b>
        <p> {location.state.strInstructions}</p>
        <img src={location.state.strDrinkThumb} alt='img' style={{height:"25%",width:"25%"}}/>
        <br/>
        
        <p><b>Category :</b> {location.state.strCategory}</p>
        <p><b>Alcoholic :</b> {location.state.strAlcoholic}</p>

    </div>
  )
}

export default Details