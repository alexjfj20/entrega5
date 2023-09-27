 import React, { useRef } from 'react'
 import { setTrainerSlice } from "../store/slices/trainer.slice"
 import { useDispatch } from 'react-redux'
 import { useNavigate } from 'react-router-dom'




/*guarda la info de lo que dijjita elusuario */



const HomePage = () => {
 
  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navegate = useNavigate()
  
  const hadletTrainer = (e) => {
      e.preventDefault()
      dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
      navegate('/pokedex')
      
  }

  

  return (
    <div>Pokemen
        <h2>Hi Trainer!</h2>
        <p> To staar, plase, enter your trainer name</p>
        <form onSubmit={hadletTrainer}>
          <input ref={inputTrainer}type="texto" />
          <button>Star</button>
          

        </form>
    </div>

  )
}

export default HomePage