import React from 'react'
import "./Pokedex.css"
import Pokecard from './Pokecard'

const Pokedex = ({pokemon}) =>{
    return(
        <>
            <div className='Pokedex'>
                {pokemon.map(p =>
                     <Pokecard 
                        key={p.id} 
                        id={p.id}
                        name={p.name} 
                        type={p.type} 
                        base_experience={p.base_experience}/>
                )}
            </div>
        </>
    )
}

export default Pokedex