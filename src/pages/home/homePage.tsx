import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { StyledHero } from "./styledHomePage"
import { useCount } from "@/contexts/pokemon-context";
import { fetchPokemonSprite, getPokemonList } from "@/json/pokemonData";
import { PokeCard } from "./components/mini-cards/pMiniCard"
import { PokeProps } from "../pokemon-page/pokemon-card/pokemonCard";
import { NavBar } from "./components/nav-bar/navBar";

export const HomePage = () => {
    const { count, setCount } = useCount()
    const [pokeInfo, setPokeInfo] = useState<PokeProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonList(count)
            setPokeInfo(data)
        }
        fetchData()
    }, [count])

    const handleGetMorePokemons = () => {
        setCount(count + 10)
    }

    return (
        <StyledHero>
            <NavBar />
            <section className="card-container">
                {pokeInfo.map((value, index) => (
                    <Link key={index} to={`/pokemon/${value.id}`}>
                        <PokeCard
                            name={value.name}
                            image={fetchPokemonSprite(value.id)}
                            types={value.types}
                            bgColor={value.types[0].type.name} />
                    </Link>
                ))}
            </section>
            <button className="btnSeeMore" onClick={handleGetMorePokemons}>Ver mais</button>
        </StyledHero>
    )
}