import React, {useState, useEffect} from 'react'
//compobnets
import PopUpDeleteCard from './PopUpDeleteCard';
import Card from './Card';
import FeedbackComponent from './feedback/FeedbackComponent';


const CardsList = ({ordenamiento, cards, setCards}) => {

    const [cartaActualElegida, setCartaActualElegida] = useState('')

    const [activeDelete, setActiveDelete] = useState(false);
    const [activeFeedback, setActiveFeedback] = useState(false);


    useEffect(()=>{
        if(ordenamiento === 'rareza'){

            setCriterio({...criterio, labels: ["COMUN", "INFRECUENTE", "RARA", "MITICA"], orderType: 'rareza'})
            const cartasOrdenadasPorRareza = cards.sort((cartaA, cartaB) => cartaA.rarity.name < cartaB.rarity.name ? -1 : 0) 
            setCards(cartasOrdenadasPorRareza)
            
        }
        if(ordenamiento === 'tipo'){
            setCriterio({...criterio, labels: ["ARTEFACTO", "COMANDANTE", "CONJURO","CRIATURA", "ENCANTAMIENTO", "INSTANTANEO"], orderType: 'tipo'})
            const cartasOrdenadasPorTipo = cards.sort((cartaA, cartaB) => cartaA.types[0].name < cartaB.types[0].name ? -1 : 0) 
            setCards(cartasOrdenadasPorTipo)
        }
        if(ordenamiento === 'costo'){
            setCriterio({...criterio, labels: [0,1,2,3,4,5,6,7,8,9, 10, 11, 12, 13,14,15,16,17,18,19,20], orderType: 'costo'})
            const cartasOrdenadasPorCosto =cards.sort((cartaA, cartaB) => cartaA.mana_cost - cartaB.mana_cost)
            setCards(cartasOrdenadasPorCosto)
        }
    }, [ordenamiento])
    
  /*   const [cards, setCards] = useState([...cartas]) */; //Usamos el spread porque necesitamos interactuar con una copia
    const [criterio, setCriterio] = useState({
        "labels": [],
        "orderType": '',
    });
    
  return (

    <div className='cartas'>
        {criterio.labels.map((label) => {
        return (
                <div key={label} >
                    <h2 className='label' id={ordenamiento === 'costo'? 'labelCosto':`label${label}`}>{label}</h2>
                    <div id='cartas-ordenamiento'>
                        {cards.map((card) => {
                        if((card.types[0].name.toUpperCase() === label)||(card.mana_cost === label)||(card.rarity.name.toUpperCase() === label)){
                            return  <Card key={card.id} card={card} setActiveDelete={setActiveDelete} setCartaActualElegida={setCartaActualElegida}/>
                        }
                    }
                    )}
                    </div>
                    <hr id='label-ordenamiento-separator'/>
                </div>
           )
        })
        }

        <PopUpDeleteCard card={cartaActualElegida} active={activeDelete} setActive={setActiveDelete} setActiveFeedback={setActiveFeedback} setCards={setCards}/>
        <FeedbackComponent active={activeFeedback} setActive={setActiveFeedback} descripcion={"La carta se ha eliminado correctamente"} color={'#9A3C29'}/>
    </div>
  )
}

export default CardsList