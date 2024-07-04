import styled from "styled-components"

const StyledFooter = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    font-weight: 500;

    a {
        margin-left: 5px;
        color: darkblue;
        font-weight: 700;
    }
`

export const Footer = () => {

    return (
        <StyledFooter>
            <p> @created by:
                <a href="https://vgarcia-portfolio.vercel.app"
                    target="_blank" rel="noreferrer noopener">
                    Victor Garcia
                </a>
            </p>
        </StyledFooter>
    )
}