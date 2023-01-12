import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
//components
//services
import { getAll } from '../services/cards'
//components
import CardsList from '../components/CardsList'
//slices
import { initCards } from '../slices/cardsSlice'
import { selectValue } from '../slices/cardsSlice'
const Cards = () => {

  const dispatch = useDispatch()

  useEffect(() =>{    
    getAll().then(cards => {
      dispatch(initCards(cards))
      console.log(cards)
    })
    
  }, [dispatch])
  /* Cargar las cartas cuando el usuario va a la opcion de cartas. */

  
  const cartas = useSelector(selectValue)

  const [filtro, setFiltro] = useState('rareza');

 
  /* Aca va el intento de hacer funcionar el buscador */

  //Esto esta porque a veces el componente se carga antes que se carguen las cartas
    //provocando un array vacio de cartas. De esta manera, cuando hay un cambio en cartas original se actualiza el componente
    useEffect(() =>{
      setCards([...cartas])
  }, [cartas])


  const [cards, setCards] = useState([...cartas]); //Usamos el spread porque necesitamos interactuar con una copia
  
  /* Fin buscador */

  const cambiarFiltro =(string) =>{
    const botonA = document.getElementById('rareza')
    const botonB = document.getElementById('costo')
    const botonC = document.getElementById('tipo')
    
    const botones = [botonA, botonB, botonC];

    botones.map((boton) =>{
      if(boton.id === string){
        boton.classList.add('active')
        setFiltro(boton.id);
      }
      else{
        boton.classList.remove('active')
      }
    })
  }

  const handleChangeSearch = (e) =>{
    const cartasF = cards.filter((card) => card.name.toUpperCase().includes(e.target.value.toUpperCase()));
    
    if(e.target.value !== ''){
      setCards(cartasF)
    }
    else{
      setCards([...cartas])
    }
  } 
  return (
    <div id='card-component'>
        <div id='div-ribon'><Link href={'/Newcard'}><button ><FontAwesomeIcon icon={faSquarePlus}/></button></Link></div>
        <h1>Cartas</h1>
        <div id='card-barra'>
          <div id='card-barra-trapecio-izq'></div>
          <div id='cards-options'>
            <button id='rareza' className='active'  onClick={()=> cambiarFiltro('rareza')}>Rareza</button>
            <button id='costo'  onClick={()=> cambiarFiltro('costo')}>Costo</button>
            <button id='tipo'  onClick={()=> cambiarFiltro('tipo')}>Tipo</button>
            <div id='cards-option-searchbar'>
                <FontAwesomeIcon id='iconmagnify' icon={faMagnifyingGlass} />
                <input type="text" name="" placeholder='Nombre de la carta' id="" onChange={handleChangeSearch}/>
            </div>
          </div>
          <div id='card-barra-trapecio-der'></div>
        </div>
        <CardsList ordenamiento={filtro} cards={cards} setCards={setCards}/>
    </div>
  )
}

export default Cards
