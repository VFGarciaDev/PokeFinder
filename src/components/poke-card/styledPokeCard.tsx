import styled from "styled-components";

export const StyledPokeCard = styled.article`
    position: relative;
    width: 200px;
    aspect-ratio: 0.75;
    background-color: red;

    p {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        padding: 2px 0;
        background-color: lightblue;
    }

    img {
        display: block;

    }
`