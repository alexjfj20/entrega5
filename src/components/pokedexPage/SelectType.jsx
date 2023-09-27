import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const SelectType = ({setTypeSelectd}) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [types, getTypes] = useFetch(url)

 useEffect(()  => {

   getTypes()
 }, [])

 const handleChange = e => {
    setTypeSelectd(e.target.value)
 }

  return (
    <div>
        <select onChange={handleChange}>
          <option value='allPokemons'>ALL POKEMON</option>
          {
           types?.results.map(typeInfo => (
             <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
           ))


          }    


        </select>

    </div>
  )
}

export default SelectType