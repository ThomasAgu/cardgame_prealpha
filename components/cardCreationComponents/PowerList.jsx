import React from 'react'
import Power from './Power'

import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons'


/* Style */


const PowerList = ({poderes, setCardState, cardState}) => {


    
    
    const [activacion, setActivacion] = useState('');
    /* Pryueba */
    const [poderus, setPoderus] = useState([])

    useEffect(() => {
      setCardState({...cardState, effects: poderus})
    }, [poderus])
    
    const handleSelectActivacion = (e) =>{
        setActivacion(activacion =>  e.target.value);
    }

    const handleAddPower = (e) =>{
        e.preventDefault();
        let cost;
        try {
            cost = document.getElementById('coste').value ;
        }
        catch{
            cost = 0
        }
        
        const descr = document.getElementById('description').value;
        const poder = ({'effectactivation': activacion, 'cost': cost, 'description': descr})
  
        setPoderus([...poderus, poder]);
        console.log(poderes)
    }


  return (
    <div id='card-powers'>
        <h2>Poderes: </h2>
        <div id='card-power-list'>{poderus.map((poder) => <Power key={poder.description} power={poder} setCardState={setCardState} cardState={cardState}  poderus={poderus} setPoderus={setPoderus}/>)}</div>
        <label for="tipo">Rareza:</label>
        <div className='card-powers-powerForm'>
        <select  name="activacion" id="activacion" onChange={handleSelectActivacion}>
          <option value="">None</option>
          <option value="Girar">Girar</option>
          <option value="Puntos">Puntos</option>
          <option value="Invocacion">Invocacion</option>
          <option value="Cementerio">Cementerio</option>
        </select>
        {activacion === 'Puntos' 
        ? 
        <input type="number" name="" id="coste"  />
        :
        ""}
        <input type="text" name="" placeholder='Descripcion' id="description" />
        <button onClick={handleAddPower} id="addBtn"> <FontAwesomeIcon id='addbtnicon' icon={faCirclePlus} /></button>
        </div>
    </div>
  )
}

export default PowerList