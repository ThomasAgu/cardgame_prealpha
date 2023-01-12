import React from 'react'

const Efecto = () => {
  return (
    <div>
        <label htmlFor="activation">Activacion</label>
        <select  name="type" id="type" >
          <option value="">None</option>
          <option value="flip">Girar</option>
          <option value="points">Por tierras</option>
          <option value="artefacto">Artefacto</option>
        </select>
        <input type="text"  placeholder='Descripción'/>
    </div>
  )
}

export default Efecto