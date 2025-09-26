import '../styles/CardPokemon.css'
import { typeColors } from "../constants/typeColors"

export const CardPokemon = ({id, name, sprites, base_experience, type}) => {
  return (
    <article className='card-pokemon'>
        <div className="poke-image">
            <img src={sprites} alt={name} />
        </div>

        <div className="poke-exp">
            <span>#{id}</span>
            <span>EXP:{base_experience}</span>
        </div>

        <div className="poke-description">
            <span className='poke-name'>{name}</span>
            <span
            className='type-poke'
            style={{background:typeColors[type], color:"#fff"}}
            >{type}</span>
        </div>

    </article>
  )
}
