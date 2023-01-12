import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

/* Style */


const Points = ({setCardState, cardState}) => {

    
    const handleClick = (e) =>{
        e.preventDefault();
        setCardState({...cardState, mana_cost: e.currentTarget.id})
        const actId = e.currentTarget.id;
        const buttonsIcons = document.querySelectorAll('#point button');
        if(cardState.mana_cost === e.currentTarget.id ){
          setCardState({...cardState, mana_cost: 0})
          buttonsIcons.forEach((btn) =>{ btn.style.setProperty('color', '#F7F7F7')})
        }
        else{
          buttonsIcons.forEach((each) => {
            if(each.id <= Number(actId)){
              each.style.setProperty('color', '#E9CA87')
            }
            else{
              each.style.setProperty('color', '#F7F7F7')
            }
        })
        }
        
    }
  return (
    <div id='point'>
        <button onClick={handleClick} id="1"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="2"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"   /></button>
        <button onClick={handleClick} id="3"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="4"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="5"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="6"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="7"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="8"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="9"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="10"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="11"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="12"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="13"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="14"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="15"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="16"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="17"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="18"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="19"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
        <button onClick={handleClick} id="20"><FontAwesomeIcon icon={faBoltLightning} className="point-icon"  /></button>
    </div>
  )
}

export default Points