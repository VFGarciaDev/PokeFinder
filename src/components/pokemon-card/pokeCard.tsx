import { StyledPokeCard } from "./styledPokeCard"
import './card.css'

export type PokemonType = {
    slot: number,
    type: {
        name: string,
        url: string,
    }
}

type CardProps = {
    pName: string,
    pImage: string,
    pTypes: PokemonType[],
}

export const PokeCard = ({pName, pImage, pTypes}:CardProps) => {

    return (
        <StyledPokeCard>
            <p>{pName}</p>
            <img src={pImage} alt={pName} />
            <ul className="typeList">
                {pTypes.map((typeObj) => (
                    <li key={typeObj.slot}>{typeObj.type.name}</li>
                ))}
            </ul>
        </StyledPokeCard>
    )
}