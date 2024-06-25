import styled from "styled-components";

export const StyledPokeCard = styled.a`
    position: relative;
    width: 200px;
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
        padding: 28px 0 34px;
        width: 100%;
    }
    .typeList {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 15px;
        padding: 5px;
        color: #ffffff;
        background-color: hsl(0, 0%, 95%, 0.2);
    }
`