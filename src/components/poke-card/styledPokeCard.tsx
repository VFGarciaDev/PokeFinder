import styled from "styled-components";

export const StyledPokeCard = styled.a`
    position: relative;
    width: 150px;
    aspect-ratio: 0.75;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    background-color: #1A1A1A;
    cursor: pointer;
    transition: transform 0.3s ease-out;
    &:hover {
        transform: scale(1.2);
    }
    
    p {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        padding: 2px 0;
        color: #FF3B3F;
        background-color: #f2f2f2;
    }
    img {
        display: block;
        padding-top: 28px;
        width: 100%;
    }
`