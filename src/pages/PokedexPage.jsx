import { useSelector } from "react-redux"
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedexPage/PokeCard'
import { useEffect, useRef, useState } from "react"
import SelectType from '../components/pokedexPage/SelectType'



const  PokedexPage = () => {
  const [inputValue, setInputValue] = useState('')

  const [typeSelcted, setTypeSelectd] = useState('allPokemons')

 const trainer = useSelector(store => store.trainer)
 console.log(trainer)

 const inputSearch = useRef()

 const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
 const[pokemons, getPokemons, getTypePokemon] = useFetch(url)

 useEffect(() => {
   if(typeSelcted === 'allPokemons'){
     getPokemons()
   } else {
    getTypePokemon(typeSelcted)
   }
 }, [typeSelcted])

 const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputValue.current.value.trim().tolowercase())
 }

   const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <p className="tituloPricipal">Hi {trainer}</p>
      <form className="claseform" onSubmit={handleSearch}>
       <input className="buscador" ref={inputSearch} type="text" />
       <button className="buscador__bnt">Search</button>

      </form>
      <div className="selectopcion">
      < SelectType setTypeSelectd={setTypeSelectd} />
      </div>
      
      <div className="container">
        {
          pokeFiltered?.map(poke => (
            <PokeCard  
               key={poke.url}
               url={poke.url}
            
            />
          ))

        }

      </div>

    </div>
  )
}

export default PokedexPage