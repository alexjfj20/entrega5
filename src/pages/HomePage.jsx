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
    <div>
       <div>
        <header className='logo_App' >
          <img src="/img/logo.jpg" alt="" />
        </header>
        </div>
        <h2 className='ticle_home'>Hi Trainer!</h2>
        <p className='text_home'> To staar, plase, enter your trainer name</p>
        <form  className='from_home'   onSubmit={hadletTrainer}>
          <input className='starch_home' ref={inputTrainer}type="texto" />
          <button className='home_btn' >Search</button>
          

        </form>
        
        <div>

        <footer className='logo-piepage'>
        <img src="/img/logo-piepagina.png" alt="" />
        </footer>

       </div>
    </div>

  )
}

export default HomePage