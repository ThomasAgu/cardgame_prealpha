import axios from 'axios'

//const BASE_URL = 'http://localhost:3001/data'
const BASE_URL = 'https://card-game-4khd.onrender.com/api/card'

export const getAll = async () => {
    const res = await axios.get(BASE_URL)
    return res.data.data
}

export const post = async(cardState) => {
    const card = { 
        name:cardState.name, 
        mana_cost: cardState.mana_cost, 
        subtypes:cardState.subtype,
        rarity_id: cardState.rarity.id, 
        attack: cardState.attack, 
        health: cardState.health, 
        commander_effect:cardState.commander_effect, 
        quote: cardState.quote
     };
     //Arreglar esto dewspues
     const form_data = new FormData();

    for (var r in card){
      form_data.append(r, card[r]);
    }
    let effect = ''
    cardState.effects.map((el) => effect += `::${el.effectactivation} ${el.cost > 0 ? el.cost: ''} : ${el.description} `)
    form_data.append('effect', effect)
    //append type id
    cardState.types.map((el, index) =>{
        form_data.append("type_id", el.id)
    })
    console.log(cardState.types)
    /* form_data.append("type_id",cardState.types[0].id) */ 
    //append image
    form_data.append("image", cardState.image);
    const res = await axios({
        method: 'post',
        url: BASE_URL,
        data: form_data,
        headers: {
            'Content-Type': `multipart/form-data; boundary=${form_data._boundary}`,
        },

    });  // 'application/x-www-form-urlencoded',
}

export const borrarCarta = async(card_id) =>{
    console.log(`${BASE_URL}/${card_id}`)
    const res = await axios({
        method: 'delete',
        url: `${BASE_URL}/${card_id}`
    })
    return res
}
