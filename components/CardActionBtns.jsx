import React from 'react'
import {useState} from 'react'
//fontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faWrench } from '@fortawesome/free-solid-svg-icons'

const CardActionBtns = ({active, setActive, setActiveDelete}) => {
  
  
  return (


    
    <>    
    {active &&
    <div id='card-action-btns'>
        <button id='delete' onClick={()=>setActiveDelete(true)}><FontAwesomeIcon icon={faBan} className='card-action-icon' /></button>
        <button id='update'><FontAwesomeIcon icon={faWrench} className='card-action-icon' /></button>
    </div>
    }
    </>
    
  )
}

export default CardActionBtns