import React from 'react'

const Commander = ({handleCommanderAction}) => {
  return (
    <div id='form-commander'>
      <label htmlFor="commander">Comandar</label>
      <textarea name="" id="" cols="30" rows="5" onChange={handleCommanderAction}></textarea>
    </div>
  )
}

export default Commander