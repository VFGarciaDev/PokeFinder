import styled from "styled-components";
import { DetailedPokemonCard } from "./pokemon-card/pokemonCard";
import { useParams } from "react-router-dom";

const StyledPokemonPage = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokemonPage = () => {
    const { pokemonId } = useParams<{ pokemonId: string }>()

    return (
        <StyledPokemonPage>
            {pokemonId &&
                <DetailedPokemonCard pokemonId={pokemonId} />
            }
        </StyledPokemonPage>
    )
}