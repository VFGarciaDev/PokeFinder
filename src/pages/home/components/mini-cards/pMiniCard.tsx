import { StyledPokeCard } from "./styledMiniCard"
import './card.css'
import { ColorType, colors } from "@/contexts/custom-typeColor"

type MiniCard = {
    bgColor: ColorType,
    name: string,
    image: string,
    types: {
        slot: number,
        type: {
            name: string,
        }
    }[],
}

export const PokeCard = ({ bgColor, name, image, types }: MiniCard) => {

    return (
        <StyledPokeCard $cardColor={colors[bgColor] || '#777'}>
            <p>{name}</p>
            <img src={image} alt={name} />
            <ul className="typeList">
                {types.map((value) => (
                    <li key={value.slot}>{value.type.name}</li>
                ))}
            </ul>
        </StyledPokeCard>
    )
}