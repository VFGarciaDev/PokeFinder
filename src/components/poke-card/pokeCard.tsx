import { StyledPokeCard } from "./styledPokeCard"
import './card.css'

interface CardProps {
    pName: string,
    pImage: string,
}

export const PokeCard = ({pName, pImage}:CardProps) => {

    return (
        <StyledPokeCard>
            <p>{pName}</p>
            <img src={pImage} alt={pName} />
        </StyledPokeCard>
    )
}