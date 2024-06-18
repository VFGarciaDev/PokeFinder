import { StyledPokeCard } from "./styledPokeCard"

interface CardProps {
    pName: string,
    pImage: string,
}

export const PokeCard = ({pName, pImage}:CardProps) => {

    return (
        <StyledPokeCard>
            <p>{pName}</p>
            <img src={pImage} alt={pName} />
            {/* <img src="https://placehold.co/200x300" alt="pokemon name" /> */}
        </StyledPokeCard>
    )
}