import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Points from './Points'
import Danios from './Danios'
import Commander from './Commander'
/* import Efecto from './Efecto' */
import PowerList from './PowerList'
import Type from './Type'
import FeedbackComponent from '../feedback/FeedbackComponent';

import { useSelector } from 'react-redux'
import {selectValue} from '../../slices/cardsSlice'
//services
import { post } from '../../services/cards'
import { redirect } from 'next/dist/server/api-utils'

const Form = ({setCardState, cardState, setImagenLocal, setActiveF, feedStatus, setFeedStatus}) => {


  const router = useRouter();



  const [img, setImg] = useState();

  const cartas = useSelector(selectValue);
  const handleChangeName= (e) =>{

    const repetida =(cartas.filter((card) => card.name.toUpperCase() == e.target.value.toUpperCase()).length)
    
    if(repetida > 0){
      setFeedStatus({...feedStatus, text: 'No puede haber cartas con el mismo nombre', color: '#9A3C29'})
      setActiveF(true);
      document.getElementById('card-submit').disabled = true;
    }
    else{
      setCardState({...cardState, name: e.target.value})
      document.getElementById('card-submit').disabled = false;
    }
  }

  const handleChangeSubtype =(e) =>{
    setCardState({...cardState, subtype: e.target.value})
  }

  const handleSelectRarity= (e) =>{
    var select = document.getElementById("rarity"); /*Obtener el SELECT */
    var valor = select.options[select .selectedIndex].id;
    setCardState({...cardState, rarity: { id: e.target.value, name: valor}})
  }

  const handleAckChange = (e) => {
    setCardState({...cardState, attack: e.target.value})
  }
  const handleDefChange = (e) => {
    setCardState({...cardState, health: e.target.value})
  }


  const handleLoadImage = (e) =>{
    const [file] = e.target.files;
    setCardState({...cardState, image: file})
    setImagenLocal(URL.createObjectURL(file))
  }

  const handleCommanderAction = (e) =>{
    setCardState({...cardState,  commander_effect: e.target.value})
  }

  const handleQuoteChange = (e) =>{
    setCardState({...cardState, quote: e.target.value})
  }

  const handleSumbitNewCard = (e) =>{
    e.preventDefault();
    const typeCheckedCant = Array.from(document.querySelectorAll("input[type=checkbox]")).filter((each) => each.checked === true ).length;
    /* Chequear el tipo */
    if( typeCheckedCant > 0){
      post(cardState).then(
        //redirec aca mas feedback
        setFeedStatus({...feedStatus, text: 'Carta creada correctamente', color: '#85A490'})
      );
    }
    else{
      setFeedStatus({...feedStatus, text: 'Elija por lo menos un tipo de carta', color: '#9A3C29'})
    }
    setActiveF(true);
    
  }

  const returnTypes = () =>{ //ver porque no devuelve l oque pido
    return cardState.types.map((el) => el.name)

  }

  return (
    <div>
      <form id="card-form" onSubmit={handleSumbitNewCard}  >
        <label for="name" >Nombre</label>
        <input type="text" name="name" id="name" onChange={handleChangeName} required/>

        <label for="cost">Costo</label>
        <Points setCardState={setCardState} cardState={cardState} />

        <Type setCardState={setCardState} cardState={cardState} />

        <label htmlFor="subtype">Subtipo</label>
        <input
          type="text"
          name="subtype"
          id="subtype"
          onChange={handleChangeSubtype}
          maxLength='15'
        />

        <label for="rarity">Rareza:</label>
        <select
          name="rarity"
          id="rarity"
          onChange={handleSelectRarity}
          required
        >
          <option value="" >None</option>
          <option value="1" id='comun'>Común</option>
          <option value="2" id='rara'>Rara</option>
          <option value="3" id='infrecuente'>Infrecuente</option>
          <option value="4" id='mitica'>Mítica</option>
        </select>

        {/* poder/es */}
        <PowerList
          poderes={cardState.effects}
          setCardState={setCardState}
          cardState={cardState}
        />
        
        <Danios
          handleAckChange={handleAckChange}
          handleDefChange={handleDefChange}
        />
        {
        
        returnTypes().includes('comandante')  && (
          <Commander handleCommanderAction={handleCommanderAction} />
        )}

        <label htmlFor="img">Imagen</label>
        <input type="file" name="" id="form-img-input" onChange={handleLoadImage} required />


        <label htmlFor="quote">Cita</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          onChange={handleQuoteChange}
        ></textarea>
          <button id="card-submit" type="submit" disabled>
            Crear Carta
          </button>
        
      </form>
    </div>
  );
}

export default Form