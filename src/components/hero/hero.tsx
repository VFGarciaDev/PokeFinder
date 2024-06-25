import { StyledHero } from "./styledHero"
import { PokeCard } from "../pokemon-card/pokeCard"
import { fetchPokemonData, getPokemonList } from "../../json/data"
import { useEffect, useState } from "react"
import { useCount } from "../../contexts/pokemon-context";
import { getPokemonCount } from "../../json/pokemon-data";

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

const totalCount = await getPokemonCount()

export const Hero = () => {
    const { count, setCount } = useCount()
    const [data, setData] = useState<PokemonData | null>(null)
    // data { count, next, previous, results }
    const [pokeInfo, setPokeInfo] = useState<any[]>([])
    // data [ {p1},{p2},{p3},... ]

    //console.log(pokeInfo)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchPokemonData(count)
            setData(response)
            const p = await getPokemonList(count)
            setPokeInfo(p)
        }
        fetchData()
    }, [count])

    const handleGetMorePokemons = () => {
        setCount(count + 10)
    }

    return (
        <StyledHero>
            <nav className="nav">
                <p>Count: <span>{totalCount}</span></p>
                <p>filter</p>
            </nav>
            <section className="card-container">
                {pokeInfo.map((value, index) => (
                    <PokeCard key={index} pName={value.name} pImage={value.sprites.front_default} pTypes={value.types} />
                ))}
            </section>
            <button className="btnSeeMore" onClick={handleGetMorePokemons}>Ver mais</button>
        </StyledHero>
    )
}