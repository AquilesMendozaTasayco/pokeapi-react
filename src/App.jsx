import { Navbar } from './components/Navbar'
import { Filter } from './components/Filter'
import { Footer } from './components/Footer'
import { ListPokemons } from './components/ListPokemons'
import { useState } from 'react'
import './App.css'

function App() {
  const [texto, setTexto] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [order, setOrder] = useState('')
  
  const resetFilters = () => {
    setTexto('')
    setTypeFilter('')
    setOrder('')  
  }

  return (
    <>
      <div className='logo-Poke'>
        <img src="https://assets.website-files.com/62c1627eee0defc3a1256898/62cf234679dbabe18fa50a1e_pokeapi_256%201.svg" alt="PokeApi" />
      </div>

      <Navbar texto={texto} setTexto={setTexto}/>

      <Filter setTypeFilter={setTypeFilter} setOrder={setOrder} resetFilters={resetFilters}/>

      <ListPokemons typeFilter={typeFilter} order={order} texto={texto}/>

      <Footer />
    </>
  )
}

export default App
