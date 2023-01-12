import React from 'react'
import { borrarCarta } from '../services/cards'
const PopUpDeleteCard = ({card, active, setActive, setActiveFeedback, setCards}) => {


  const handleClickDelete = () =>{
    borrarCarta(card.id);
    setCards((cards) => cards.filter((el)  => el.id !== card.id));
    setActive(false);
    setActiveFeedback(true);
  }
  return (
    <>
        {active &&
        <>
            <div id='popup-background'>background</div>
            <div id='popup-content'>
                <button id='popup-close' onClick={() => setActive(false)}>x</button>
                <h2>¿Está seguro que desea eliminar la carta: <p id='popup-cardName'>{card === ''? '': `"${card.name}"` } </p>?</h2>
                <div id='popup-btns'>
                    <button id='pop-delete' onClick={handleClickDelete}>Eliminar</button>
                    <button id='pop-cancel' onClick={() => setActive(false)}>Cancelar</button>
                </div>
            </div>
        </>
        }
    </>
  )
}

export default PopUpDeleteCard