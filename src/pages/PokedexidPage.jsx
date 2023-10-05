import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Pagination from "./Pagination";




const PokedexidPage = () => {
  
  const { id } = useParams(); 

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemons, getPokemon] = useFetch(url);



  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // Muestra un Pokémon a la vez, como una página de un libro.


  useEffect(() => {
    getPokemon();
  }, [id]); 



  if (!pokemons) {
    return <div>Cargando...</div>;
  }

  // Tu código para obtener la información del Pokémon con el ID proporcionado.

  // Obtén la lista de Pokémon que quieres mostrar, por ejemplo, "pokemons.results".
  const pokemonsList = pokemons.results || [];

 

 

  // Calcula el índice de inicio y fin para mostrar los Pokémon en la página actual.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtra la lista de Pokémon para mostrar solo los de la página actual.
  const pokemonToShow = pokemonsList.slice(startIndex, endIndex);

  // Función para cambiar de página.
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const weight = pokemons?.weight ? (pokemons.weight * 0.1).toFixed(1) : "";
  const height = pokemons?.height ? (pokemons.height * 0.1).toFixed(1) : "";

  const navigate = useNavigate();
  const navigatenext = useNavigate();


  const handleBack = () => {
    navigate("/pokedex");
  };

  const handleNext = () => {
    navigatenext(1);
  };



  return (
    <div>

<div>
          <header className='logo_pokemon-card' >
          <img src="/img/logo-cabezera-pge-2.png" alt="" />
          </header>
      </div>

      {/* Mostrar información del Pokémon actual, por ejemplo, pokemonToShow[0] */}
      <div className="pokemons-container">
        {pokemonToShow.map((pokemon, index) => (
          <div key={index}>
            <h2>{pokemon.name}</h2>
            {/* Aquí puedes mostrar más detalles del Pokémon */}
          </div>
        ))}
      </div>
      
      <article className="pokedata">
        <div className="pokedata__frame">
          <header
            className={`pokedata__header ${pokemons?.types[0].type.name}-gradient`}
          >
            <div className="pokedata__img-container">
              <img
                className="pokedata__img"
                src={pokemons?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>
          </header>
          <section className="pokedata__body">
            <div className="pokedata__headerinfo">
              <div className="pokedata__nameid  texto-separado">
                <button className="btns__id" onClick={handleBack}>
                  ←
                </button>
                <h3
                  className={`pokedata__name ${pokemons?.types[0].type.name}-letter`}
                >
                  {pokemons?.name}
                </h3>
                <h4
                  className={`pokedata__id ${pokemons?.types[0].type.name}-letter`}
                >
                  #{pokemons?.id}
                </h4>
                <button className="btns__id" onClick={handleNext}>
                  →
                </button>
              </div>
              <div className="pokedata__weight">
                  <span className="pokedata__item">Weight:</span>
                  <p className="texto-con-espacio"><br /></p>
                  <p><br /></p>
                  <p><span>{weight}</span> kg</p>
                </div>

                <div className="pokedata__height">
                  <span className="pokedata__item">Height:</span>
                  <p className="texto-con-espacio"><br /></p>
                  <p><br /></p>
                  <p><span>{height}</span> mts</p>
                </div>

                <div className="pokedata__type">
                  <p className="pokedata__item">Type</p>
                  {pokemons?.types.map((typeInfo) => (
                    <li className="pokedata__typeinfo" key={typeInfo.type.url}>
                      {typeInfo.type.name}
                    </li>
                  ))}
                  <p className="texto-con-espacio">
                    <br />
                  </p>
                </div>
                <div className="pokedata__abilities">
                  <p className="pokedata__item">Abilities</p>
                  <ul> {/* Utiliza una lista ul para mostrar las habilidades */}
                    {pokemons?.abilities.map((abilityInfo) => (
                      <li className="pokedata__abilityinfo" key={abilityInfo.ability.url}>
                        {abilityInfo.ability.name}
                      </li>
                    ))}
                  </ul>
                </div>

              
            </div>
            <hr />
            
          </section>
        </div>
      </article>

     

      {/* Agregar la paginación */}
      <Pagination
        /*data={pokemonToShow} // No tienes una lista de resultados aquí */
        data={pokemonToShow}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      /*  onPageChange={() => {handlePageChange}} // Puedes cambiar esto según tus necesidades */
      />
    </div>
  );
};

export default PokedexidPage;
