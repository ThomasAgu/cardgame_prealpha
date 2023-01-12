import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const Power = ({power, setCardState, cardState, poderus, setPoderus}) => {
  
  const handleDelete = (e) =>{
    e.preventDefault();
    const newArray = poderus.map((el) => {if (el.description !== power.description) return el;}).filter((el ) => el !== undefined)
    setPoderus(newArray)
  }

  return (
    <div id='card-power-description'>
        <p>{power.effectactivation}</p>
        <p>{power.description}</p>
        <button onClick={handleDelete} id="card-power-btn"><FontAwesomeIcon icon={faDeleteLeft}/></button>
    </div>
  )
}

export default Power