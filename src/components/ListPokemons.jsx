import { useEffect, useState } from "react"
import { CardPokemon } from "./CardPokemon"

export const ListPokemons = ({texto, typeFilter, order}) => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    
    const fetchPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=156")
        const data = await res.json()

        const details = await Promise.all(
            data.results.map(async (p) => {
                const res = await fetch(p.url)
                return await res.json()
            })
        )

        setPokemons(details)
        setLoading(false)
    }

    let filters = texto.trim() === '' 
        ? pokemons
        : pokemons.filter((p) => p.name.toLowerCase().includes(texto.toLowerCase()))

    if (typeFilter) {
        filters = filters.filter((p) =>
        p.types.some(t => t.type.name === typeFilter)
        )
    }
    
    if(order === 'id-dsc'){
        filters = [...filters].sort((a, b) => b.id - a.id)
    }else if(order === 'exp-asc'){
        filters = [...filters].sort((a, b) => a.base_experience - b.base_experience)
    }else if(order === 'exp-dsc'){
        filters = [...filters].sort((a, b) => b.base_experience - a.base_experience)
    }else {
        filters = [...filters].sort((a, b) => a.id - b.id)
    }

    useEffect(() => {
        fetchPokemons()
    },[])
    
    if (loading) {
    return (
        <div className="spinner-container">
        <div className="spinner"></div>
        <p>Cargando...</p>
        </div>
    )
    }

    if(filters.length === 0) {
        return(
            <div className="vacio-content">
                <span>No se encontraron pokemones</span>
            </div>
        )
    }

    return (
        <main>
            {filters.map(p => (
                <CardPokemon 
                key={p.id}
                id={p.id}
                name={p.name}
                sprites={p.sprites.front_default}
                base_experience={p.base_experience}
                type={p.types[0].type.name}
                />
              ))
            }   
        </main>
  )
}
