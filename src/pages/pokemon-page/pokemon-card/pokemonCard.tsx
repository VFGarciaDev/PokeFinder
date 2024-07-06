import { fetchPokemonAbility, fetchPokemonRandomDescription, fetchPokemonInfo, fetchPokemonSprite, getSkillDescription } from "@/json/pokemonData"
import { StyledCard, StyledPokemonCard } from "./styledPokemonCard"
import { CardSection } from "./components/card-sections/cardSection"
import { calculateStatsLevel, StatsInfo } from "./components/stats-bar/statsInfo"
import { TypeCard } from "./components/type-card/typeCard"
import { SkillCard } from "./components/skill-card/skillCard"
import { useEffect, useState } from "react"
import { ColoredCard, colors, ColorType } from "@/contexts/custom-typeColor"

type SkillProps = {
    effect_entries: { language: { name: string }, effect: string }[],
    id: number,
    name: string,
}
export type PokeProps = {
    stats: { stat: { name: string }; base_stat: number }[],
    name: string,
    id: number,
    weight: number,
    height: number,
    types: { slot: number, type: { name: ColorType, url: string } }[],
    abilities: { ability: { url: string } }[],
    moves: { move: { name: string } }[]
}

export const DetailedPokemonCard = ({ pokemonId }: { pokemonId: string }) => {
    const [pokeInfo, setPokeInfo] = useState<PokeProps | null>(null)
    const [pokeSkill, setPokeSkill] = useState<SkillProps[] | null>(null)
    const [pokeText, setPokeText] = useState<string>("")

    useEffect(() => {
        const loadData = async () => {
            const pInfoPromise = fetchPokemonInfo(pokemonId)
            const pTextPromise = fetchPokemonRandomDescription(pokemonId)
            const [pInfo, pText] = await Promise.all([pInfoPromise, pTextPromise]);
            const pSkillPromise = pInfo.abilities
                .map((value: { ability: { url: string } }) => fetchPokemonAbility(value.ability.url))
            const pSkill = await Promise.all(pSkillPromise)
            setPokeInfo(pInfo)
            setPokeSkill(pSkill)
            setPokeText(pText)
        }
        loadData()
    }, [pokemonId]);

    if (!pokeInfo) {
        return <StyledPokemonCard>Loading...</StyledPokemonCard>
    } else if (!pokeSkill) {
        return <div>Loading...</div>
    }

    const { stats, name, id, weight, height, types, moves } = pokeInfo
    const pokemonSprite = fetchPokemonSprite(pokemonId)

    return (
        <StyledPokemonCard>
            <div className="poke-section">
                <ColoredCard $cardColor={colors[types[0].type.name] || '#777'} className="pokeImg">
                    <img src={pokemonSprite} alt={name} />
                    <p>{`#${('0000' + id).slice(-4)}`}</p>
                </ColoredCard>
                <section className="stats-section">
                    <ul>
                        {stats.map((value: { stat: { name: string }; base_stat: number }, index: number) =>
                            <StatsInfo key={index}
                                className={value.stat.name}
                                statsName={value.stat.name}
                                statsPoint={value.base_stat}
                                statsPercentage={calculateStatsLevel(value.stat.name, value.base_stat)} />
                        )}
                    </ul>
                </section>
            </div>

            <StyledCard className="main-section">
                <h1>{name}</h1>
                <p>{pokeText}</p>
                <div className="poke-info">
                    <p>Height: {height}0 cm</p>
                    <div className="i-weight">
                        <p>Weight: {weight} Hg</p>
                        <p className="i">*<span className="i-text">1Hg = 0.1Kg = 100g</span></p>
                    </div>
                </div>
            </StyledCard>

            <CardSection className="types-section" label="Types">
                {types.map((value: { slot: number, type: { name: ColorType } }) =>
                    <TypeCard key={value.slot} typeName={value.type.name} typeColor={value.type.name} />
                )}
            </CardSection>

            <CardSection className="mov-section" $column label="Movements">
                {moves.map((value: { move: { name: string } }, index: number) =>
                    <p key={index}>{value.move.name}</p>
                )}
            </CardSection>

            <CardSection className="skills-section" label="Skills">
                {pokeSkill.map(value => (
                    <SkillCard key={value.id} skillName={value.name} skillEffect={getSkillDescription(value)} />
                ))}
            </CardSection>
        </StyledPokemonCard>
    )
}