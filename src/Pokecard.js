import React from 'react'
import './Pokecard.css'

const Pokecard =({id, name, type, base_experience})=>{
    return (
        <>
            <div className='Pokecard'>
                <h4 className='Pokecard-name'>{name}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className='Pokecard-img' alt={name}></img>
                <p>Type: {type}</p>
                <p>EXP:{base_experience}</p>
            </div>
        </>
    )
}

export default Pokecard