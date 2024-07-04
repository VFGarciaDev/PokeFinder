import styled from "styled-components"

type CardProps = {
    className?: string,
    label: string,
    children: React.ReactNode,
    $column?: boolean,
}

const StyledCard = styled.div<{ $column?: boolean }>`
    background-color: hsl(0, 0%, 76%, 0.4);
    border: 1px solid hsl(0, 0%, 76%);
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
    }
    h2 {
        font-size: 1.25rem;
    }
    
    ul {
        flex: 1;
        display: flex;
        flex-direction: ${props => props.$column ? "column" : "row"};
        justify-content: ${props => props.$column ? "start" : "space-evenly"};
        align-items: ${props => props.$column ? "start" : "center"};
    }
`

export const CardSection = ({ className, $column, label, children }: CardProps) => {

    return (
        <StyledCard className={className} $column={$column}>
            <h2>{label}</h2>
            <ul>
                {children}
            </ul>
        </StyledCard>
    )
}