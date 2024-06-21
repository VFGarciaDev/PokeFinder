import axios from "axios";
import { useCount } from "../contexts/pokemon-context";

const { count } = useCount()

export async function fetchPokemonData(count: number) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${count}&limit=${count}`)
    //console.log(response.data)
    return await response.data
}

export async function getPokemonResults(count: number) {
    const response = await fetchPokemonData(count)
    // console.log(response.results)
    const data = await response.results
    const pokeList = data.map((p: { url: string; }) => p.url)
    // console.log(pokeList)
    return pokeList
}

export async function getPokemonList(count: number) {
    const response = await getPokemonResults(count)
    const data = await Promise.all(
        response.map(async (value: string) => {
        const response = await axios.get(`${value}`)
        return response.data
    }))
    return data
}