import styled from "styled-components";

export const StyledHero = styled.main`
    width: 100%;
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    .card-container {
        width: 100%;
        display: grid;
        grid-template: min-content / repeat(auto-fit, minmax(150px, min-content));
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
    }
`