import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowsRotate, faLayerGroup, faSkullCrossbones} from '@fortawesome/free-solid-svg-icons'


const Card = ({cardState, imagenLocal}) => {
    return (
        <div id="card">
          <div id='card-head'>
            <h3 id='card-title'>{cardState.name}</h3>
            <div id='card-cost'>
              <h3>{cardState.mana_cost}</h3>
              <FontAwesomeIcon icon={faBolt}  id="card-cost-icon"/>
              
            </div>
          </div>
    
          <div id='card-img-create'>
            <img src={imagenLocal} alt="" id='card-img-img-create' />
          </div>
    
          {/* arreglar las barras */}
          <div id='card-types'>
              {cardState.types.map((el) => ` ${el.name}` )} / {cardState.subtype} / {cardState.rarity.name}
          </div>
          
    
          <div id='card-description'>
            {cardState.effects.map((effect) => {
              switch(effect.effectactivation){
                case 'Girar':
                  return(<div><FontAwesomeIcon icon={faArrowsRotate}  id="card-cost-icon" />: {effect.description}</div>)
                
                case 'Puntos':
                  return(<div>{effect.cost} <FontAwesomeIcon icon={faBolt}  id="card-cost-icon" />: {effect.description}</div>);  
                 
                case 'Invocacion':
                  return(<div><FontAwesomeIcon icon={faLayerGroup}  id="card-cost-icon" />: {effect.description}</div>)
    
                case 'Cementerio':
                  return(<div><FontAwesomeIcon icon={faSkullCrossbones}  id="card-cost-icon" />: {effect.description}</div>)
    
                default:
                  break;
                }
    
              
            })}
    
          </div>
    
          {cardState.commander_effect !== "" &&
          <div id="card-commander">
            <span>comandar: </span>{ cardState.commander_effect}
          </div>
          }
    
          {cardState.quote !== "" &&
          <div id="card-quote">{cardState.quote} </div>
          }
          
          {/* Estilo fijo para los daños */}
          {cardState.attack !== undefined && 
          <div id='card-points'>
            {cardState.attack}/
            {cardState.health}
          </div>
          }
          
    
          
          
          
          
        </div>
      )
    }

export default Card