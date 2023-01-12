import React from 'react'
import { useState } from 'react'
import Card from '../components/cardCreationComponents/Card'
import Form from '../components/cardCreationComponents/Form'
import FeedbackComponent from '../components/feedback/FeedbackComponent'

const Newcard = () => {

    const [imagenLocal, setImagenLocal] = useState(null);
   
    const [activeF, setActiveF] = useState(false);
    const [feedStatus, setFeedStatus] = useState({text: '', color:''});

    const [cardState, setCardState] = useState({
        "name":"", 
        "mana_cost": 0, 
        "image": null,
        "rarity": { 
          id: null, 
          name: ""
        }, 
        "types": [{
            id: null,
            name: ''
          }
        ],
        "subtype":"",
        "effects": [],  
        "attack": undefined , 
        "health": undefined,
        "commander_effect":"", 
        "quote": ""})
  return (
    <>
      <div id='newcardComponent'>
          <Form setCardState={setCardState} cardState={cardState} setImagenLocal={setImagenLocal} setActiveF={setActiveF} feedStatus={feedStatus} setFeedStatus={setFeedStatus}/>
          <Card cardState={cardState} imagenLocal={imagenLocal}/>
      </div>
      <FeedbackComponent active={activeF} setActive={setActiveF} descripcion={feedStatus.text} color={feedStatus.color}/>

    </>
  )
}

export default Newcard