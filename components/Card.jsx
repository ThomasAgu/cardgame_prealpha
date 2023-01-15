import React from 'react'
import {useState} from 'react'

/* Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowsRotate, faLayerGroup, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
//components
import CardActionBtns from './CardActionBtns'


const Card = ({card, setActiveDelete, setCartaActualElegida}) => {

  const [active, setActive] = useState(false);


  const handleClickActiveCard = () =>{
    setActive((pv)=> !pv);
    setCartaActualElegida(card);
  }

  const construirEffectos = () =>{
    if(card.effect.includes('::')){
      return card.effect.split('::');
    }
    else return card.effect
  } 

  const type = card.types[0].name;
  return (
    
    <div id={type} className="card" onClick={handleClickActiveCard}>
      <div id='card-head' className='card-head'>
        <h3 id='card-title' className='card-title'>{card.name}</h3>
        <div id='card-cost' className='card-cost'>
          <h3>{card.mana_cost}</h3>
          <FontAwesomeIcon icon={faBolt}  id="card-cost-icon" className='card-cost-icon' />
        </div>
      </div>

      <div id='card-img' className='card-img'>
        <img src={card.image} alt="" id='card-img-img' className='card-img-img' />
      </div>

      {/* arreglar las barras */}
        <div id='card-types' className='card-types'>
          {card.types.map((el) => ` ${el.name}` )} {card.subtypes !== null ? `/ ${card.subtypes}`:""} / {card.rarity.name}
      </div>
      
      <div id='card-description' className='card-description'>
        {card.effect === null ? <></>:
          card.effect.includes('::')?
            card.effect.split('::').map((el) => <p key={el}>{el}</p>)
          : 
            card.effect
        }
        
        
      
      </div>

      {card.quote !== null &&
      <div id="card-quote" className='card-quote'> 	&#34;{card.quote}&#34; </div>}
      
      {/* Estilo fijo para los daños */}
      {(card.attack !== (null) && (card.health) !== (null)) &&
      <div id='card-points' className='card-points'>
        {card.attack}/
        {card.health}
      </div>
      }
      <CardActionBtns active={active} setActive={setActive} setActiveDelete={setActiveDelete}/>
    </div>
  )

}

export default Card