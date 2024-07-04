import { ColorType, colors, ColoredCard } from "@/contexts/custom-typeColor"
import styled from "styled-components"

const StyledTypeCard = styled(ColoredCard)`
    border: 2px solid hsl(0, 0%, 76%);
    border-radius: 5px;
	padding: 4px 15px;

    p {
    	color: #fff;
		text-transform: capitalize;
        font-weight: 600;
    }
`

type TypeCardProps = {
    typeName: string,
    typeColor: ColorType,
}

export const TypeCard = ({typeName, typeColor}:TypeCardProps) => {

    return (
        <StyledTypeCard $cardColor={colors[typeColor] || '#777'}>
            <p>{typeName}</p>
        </StyledTypeCard>
    )
}