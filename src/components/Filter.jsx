import { useEffect, useState } from "react"
import { typeColors } from "../constants/typeColors"
import '../styles/Filter.css'

export const Filter = ({setTypeFilter, setOrder, resetFilters}) => {
    const [types, setTypes] = useState([])

    const fetchTypes = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()
        setTypes(data.results)
    }

    useEffect(() => {
        fetchTypes()
    },[])

  return (
    <section className="content-filter">
        <div className="content-tb">
            <p>Filter by type:</p>
            {types.map(type => (
                <button 
                className="buttons-types"
                key={type.name}
                style={{backgroundColor: typeColors[type.name] || "gray", color:"#fff"}}
                onClick={() => setTypeFilter(type.name)}
                >
                    {type.name}
                </button>
            ))}
        </div>

        
        <button className="reset-fiñters" onClick={() => resetFilters()}>
            Reset Filters
        </button>

        <select onChange={(e) => setOrder(e.target.value)}>
            <option value="">ID ASC</option>
            <option value="id-dsc">ID DSC</option>
            <option value="exp-asc">Base Experience ASC</option>
            <option value="exp-dsc">Base Experience DSC</option>
        </select>

    </section>
  )
}
