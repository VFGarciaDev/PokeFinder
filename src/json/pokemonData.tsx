import axios from "axios"
import { Count } from "../contexts/pokemon-context";

// Get List of ordered Pokemons by limited amount
export async function fetchPokemonData(count: Count) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`)
    const results = await response.data.results
    const total = await response.data.count
    return { results, total }
}
// Get List of each Pokemon Info
export async function getPokemonList(count: Count) {
    const { results } = await fetchPokemonData(count)
    const pokeUrlArray = results.map((p: { url: string; }) => p.url)
    const pokemonList = await Promise.all(
        pokeUrlArray.map(async (value: string) => {
            const response = await axios.get(`${value}`)
            return response.data
        }))
    return pokemonList
}

// Get JSON from a Specific Pokemon
export async function fetchPokemonInfo(value: string | number) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
    return await response.data
}
// Get 'string' random Description from a Specific Pokemon 
export async function fetchPokemonRandomDescription(value: string | number) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${value}`)
    const descList = await response.data.flavor_text_entries
    const data = await descList.filter((desc: { language: { name: string; }; }) => desc.language.name === 'en')
    const index = Math.floor(Math.random() * data.length)
    return await data[index].flavor_text
}

// Get list of Skills from a Specific Pokemon
export async function fetchPokemonAbility(url: string) {
    const response = await axios.get(`${url}`)
    return await response.data
}
// Get 'string' Description of each Pokemon's Skill
type SkillProps = { effect_entries: { language: { name: string }, effect: string }[] }
export const getSkillDescription = (skill:SkillProps) => {
    return skill.effect_entries[0].language.name === "en" ? 
        skill.effect_entries[0].effect : 
        skill.effect_entries[1].effect
}

// Get Sprite from a Specific Pokemon
export function fetchPokemonSprite(value: string | number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${value}.svg`
}