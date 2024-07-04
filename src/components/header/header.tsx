import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0rem 4rem 1rem;
    background-color: #2c2c2c;
    color: #ffffff;
    // position: sticky;
    // top: 0;

    span {
        margin-left: 4px;
        color: red;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <img src="#" alt="Logo" />
            <h1>Poke<span>Finder</span></h1>
            <p>Tema</p>
        </StyledHeader>
    )
}