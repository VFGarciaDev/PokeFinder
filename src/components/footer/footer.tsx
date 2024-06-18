import { StyledFooter } from "./styledFooter"

export const Footer = () => {
    
    return (
        <StyledFooter>
            <div className="author">
                <p>@created by: </p>
                <a href="https://github.com/VFGarciaDev" target="_blank" rel="noreferrer noopener">Victor Garcia</a>
            </div>
            <div>
                social
            </div>
        </StyledFooter>
    )
}