import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const  pokedexidPage = () => {

    const{ id } = useParams()
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

   const [ pokemons, getPokemon ] = useFetch(url)

   useEffect(() => {
     getPokemon()
   }, [id])

   console.log(pokemons)

  return (
    <div>

        <img src={pokemons?.sprites.other['official-artwork'].front_default} alt='' />
        <h2>{pokemons?.name}</h2>
    </div>
  )
}

export default pokedexidPage