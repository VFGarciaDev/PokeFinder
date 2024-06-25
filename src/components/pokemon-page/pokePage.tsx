import { PokemonType } from "../pokemon-card/pokeCard"
import { StyledPokePage } from "./styledPokePage"
import { useEffect, useState } from "react"
import { fetchPokemonAbility, fetchPokemonInfo } from "../../json/pdata"


const p = await fetchPokemonInfo(1)
console.log(p)
const typesList = p.types
const skillsList = p.abilities
const results = await Promise.all(skillsList.map(async (value: { ability: { url: string } }) => {
    return await fetchPokemonAbility(value.ability.url)
}))
//console.log(results)

export const PokePage = () => {
    const skills = results.map((value) => {
        const info = {name: "", desc: ""}
        info.name = value.name
        if(value.effect_entries[0].language.name === "en"){
            info.desc = value.effect_entries[0].effect
        } else {
            info.desc = value.effect_entries[1].effect
        }
        return info
    })

    return (
        <StyledPokePage>
            <article className="container">
                <img src={p.sprites.front_default} alt={p.name} />
                <aside className="pokeInfo">
                    <h1>{p.name}</h1>
                    <ul className="typeList">
                        {typesList.map(({ slot, type }: PokemonType) => (
                            <li key={slot}>
                                <img src={""} alt={type.name} />
                                <p>{type.name}</p>
                            </li>
                        ))}
                    </ul>
                    <section>
                        <div>
                            <h2>Habilidades</h2>
                            <ul>
                                {skills.map((item, index) => (
                                    <li key={index}>
                                        <p>{item.name}</p>
                                        <p>{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2>Movimentos</h2>
                            <ul></ul>
                        </div>
                    </section>
                </aside>
            </article>
        </StyledPokePage>
    )
}