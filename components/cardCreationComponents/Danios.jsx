import React from 'react'

const Danios = ({handleAckChange,handleDefChange}) => {

    
  return (
   
    <div id='card-danio'>
        <label htmlFor="danio">Daño</label>
        <input type="number" className='input-num' name="" id="" placeholder='ATK' onChange={handleAckChange} min="0"/>
        <input type="number" className='input-num' name="" id="" placeholder='DEF'onChange={handleDefChange} min="0"/>
    </div>
  )
}

export default Danios