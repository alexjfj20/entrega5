import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexidPage from './pages/PokedexidPage'


function App() {

  return (
    <div>
       <h1>Pokemon</h1>

       <Routes>
         <Route path='/' element={<HomePage />} />
         <Route element={<ProtectedRoutes />}>
         <Route path='/pokedex' element={<PokedexPage />} />
         <Route path='/pokedex/:id' element={<PokedexidPage />} />
         </Route>
       </Routes>
       
    </div>
  )
}

export default App
