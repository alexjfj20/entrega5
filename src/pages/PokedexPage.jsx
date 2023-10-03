import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/pokedexPage/PokeCard";
import { useEffect, useRef, useState } from "react";
import SelectType from "../components/pokedexPage/SelectType";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");

  const [typeSelcted, setTypeSelectd] = useState("allPokemons");

  const trainer = useSelector((store) => store.trainer);
  console.log(trainer);

  const inputSearch = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=60";
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url);

  useEffect(() => {
    if (typeSelcted === "allPokemons") {
      getPokemons();
    } else {
      getTypePokemon(typeSelcted);
    }
  }, [typeSelcted]);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputValue.current.value.trim().toLowercase());
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pokeFiltered = pokemons?.results.filter((poke) =>
    poke.name.includes(inputValue)
  );

  const itemsPerPage = 6; // Cambia esto al número deseado de elementos por página

  return (

    <div>
        
      <div>
          <header className='logo_cabecera2' >
          <img src="/img/logo-cabezera-pge-2.png" alt="" />
          </header>
      </div>
     
      <p className="tituloPricipal">Hi {trainer}</p>
      <form className="claseform" onSubmit={handleSearch}>
        <input className="buscador" ref={inputSearch} type="text" />
        <button className="buscador__bnt">Search</button>
      </form>
      <div className="selectopcion">
        <SelectType setTypeSelectd={setTypeSelectd} />
      </div>

      <div className="container">
        {pokeFiltered &&
          pokeFiltered
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((poke) => <PokeCard key={poke.url} url={poke.url} />)}
      </div>

      <Pagination
        data={pokeFiltered || []} // Usamos una verificación de nulidad para asegurarnos de que pokeFiltered no sea undefined
        itemsPerPage={6} // Número de elementos por página
        currentPage={currentPage} // Página actual
        onPageChange={handlePageChange} // Función para cambiar de página
      />
    </div>
  );
};

export default PokedexPage;
