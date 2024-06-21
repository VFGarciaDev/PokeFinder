import { createContext, useContext, useEffect, useState } from "react"
import { fetchPokemonData, getPokemonList } from "../json/data";

type Count = number;

type ContextProps = {
    children: React.ReactNode
    defaultCount?: Count
}

type PokemonProviderState = {
    count: Count,
    setCount: (count: Count) => void
}

const initialState: PokemonProviderState = {
    count: 10,
    setCount: () => null,
}

export const PokemonContext = createContext<PokemonProviderState>(initialState)


export function PokemonProvider
    ({ children, defaultCount = 10, ...props }: ContextProps) {
    const [count, setCount] = useState<Count>(defaultCount)

    const value = {
        count,
        setCount: (count: Count) => {
            setCount(count)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchPokemonData(count)
            setData(response)
            const p = await getPokemonList(count)
            setPokeInfo(p)
        }
        fetchData()
    }, [count])

    return (
        <PokemonContext.Provider {...props} value={value}>
            {children}
        </PokemonContext.Provider>
    )
}

export const useCount = () => {
    const context = useContext(PokemonContext)

    if(context === undefined)
        throw new Error("useCount must be used within a PokemonContext")
    return context
}