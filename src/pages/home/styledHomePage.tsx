import styled from "styled-components";

export const StyledHero = styled.main`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .card-container {
        width: 100%;
        display: grid;
        grid-template: min-content / repeat(auto-fit, minmax(200px, min-content));
        justify-content: space-evenly;
        gap: 40px 20px;
    }

    .btnSeeMore {
        padding: 10px 20px;
        font-size: 1.4rem;
        border-radius: 9999px;
        border: 0;
        background-color: #FF3B3F;
        &:hover {
            cursor: pointer;
        }
        &:active {
            transition: ease-out;
        }
    }
`