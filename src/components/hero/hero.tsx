import { StyledHero } from "./styledHero"
import { PokeCard } from "../poke-card/pokeCard"
import { fetchPokemonData, getPokemonList } from "../../json/data"
import { useEffect, useState } from "react"

interface Pokemon {
    name: string;
    url: string;
}
interface PokemonData {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export const Hero = () => {
    const [pokeCount, setPokeCount] = useState(10)
    const [data, setData] = useState<PokemonData | null>(null)
    const [pokeInfo, setPokeInfo] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchPokemonData(pokeCount)
            setData(response)
            const p = await getPokemonList(pokeCount)
            setPokeInfo(p)
            console.log(p)
        }
        fetchData()
        console.log(pokeInfo)
    }, [pokeCount])

    const handleGetMorePokemons = () => {
        console.log(pokeCount)
        setPokeCount(prevCount => prevCount + 10)
        console.log(pokeCount)
        console.log("oi")
    }

    return (
        <StyledHero>
            <div>
                <p>Count: <span>{data && data.count}</span></p>
            </div>
            <section className="card-container">
                {pokeInfo.map((value, index) => (
                    <PokeCard key={index} pName={value.name} pImage={value.sprites.front_default} />
                ))}
            </section>
            <button className="btnSeeMore" onClick={handleGetMorePokemons}>Ver mais</button>
        </StyledHero>
    )
}