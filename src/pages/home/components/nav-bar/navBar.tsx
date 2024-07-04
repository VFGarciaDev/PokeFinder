import { fetchPokemonData } from "@/json/pokemonData"
import { useEffect, useState } from "react"
import styled from "styled-components"

const StyledNavbar = styled.nav`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`

export const NavBar = () => {
    const [totalCount, setTotalCount] = useState<number>()

    useEffect(() => {
        const fetchData = async () => {
            const { total } = await fetchPokemonData(0)
            setTotalCount(total)
        }
        fetchData()
    },[])

    return (
        <StyledNavbar>
            <p>Count: <span>{totalCount}</span></p>
            <p>filter</p>
        </StyledNavbar>
    )
}