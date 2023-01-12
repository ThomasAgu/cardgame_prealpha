import React from 'react'

const Type = ({setCardState,  cardState}) => {

    const handleChangeBox = (e) =>{
        const checkbox = document.getElementById(`${e.target.id}`)
        const allCheckbox = Array.from(document.querySelectorAll("input[type=checkbox]"));
        
        
        /* PRODIGIO DEGENERADO */
        if(((checkbox.id === "conjuro")||(checkbox.id === "instantaneo"))&&(checkbox.disabled === false)&&(checkbox.checked === false)){
          console.log("ejecutando el if");        
          allCheckbox.map((each) => each.disabled = false );       
          checkbox.checked = false;

        }
        else if(((checkbox.id === "conjuro")||(checkbox.id === "instantaneo"))&&(checkbox.disabled === false)&&(checkbox.checked === true)){
          allCheckbox.map((each) => each.checked = false );        
          allCheckbox.map((each) => each.disabled = true );       
          checkbox.checked = true;
          checkbox.disabled = false;
        }
           
        const typeArrays = allCheckbox.map((each) =>  { if(each.checked === true) return { id: each.value , name: each.id}}).filter((each) => each !== undefined)
        
        console.log(typeArrays)
        setCardState({...cardState, types: typeArrays})
    }
  return ( 
    <div id='type-form'>
        <label htmlFor="type">Tipo</label>
        <div id='checklist'> 
          <div className='checklist-item'>Comandante </div><input type="checkbox" name="comandante" id="comandante" value={5} onChange={handleChangeBox}/> 
          <div className='checklist-item'>Criatura</div> <input type="checkbox" name="criatura" id="criatura" value={2} onChange={handleChangeBox}/> 
          <div className='checklist-item'>Encantamiento </div><input type="checkbox" name="encantamiento" id="encantamiento" value={3} onChange={handleChangeBox}/> 
          <div className='checklist-item'>Conjuro </div><input type="checkbox" name="conjuro" id="conjuro" value={6} onChange={handleChangeBox}/> 
          <div className='checklist-item'>Instantaneo</div><input type="checkbox" name="instantaneo" id="instantaneo" value={1} onChange={handleChangeBox}/> 
          <div className='checklist-item'>Artefacto</div><input type="checkbox" name="artefacto" id="artefacto" value={4} onChange={handleChangeBox}/>   
      </div>
    </div>
  )
}

export default Type