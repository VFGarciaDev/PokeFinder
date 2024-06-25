import styled from "styled-components";

export const StyledPokePage = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        display: grid;
        grid-template-columns: 2fr 3fr;
    }

    .pokeInfo {
        h1 {
            text-align: center;
        }
    }
    .typeList {
        display: flex;
        justify-content: space-evenly;
        margin: 10px 0 20px;
    }
`