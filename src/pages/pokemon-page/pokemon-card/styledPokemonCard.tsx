import styled from "styled-components";

export const StyledPokemonCard = styled.article`
    display: grid;
    grid-template-areas: 
        'poke-section main-section main-section'
        'poke-section types-section mov-section'
        'poke-section skills-section skills-section';
    grid-template-rows: 1fr minmax(auto, 120px) 1fr;
    grid-template-columns: auto 1fr 0.9fr;
    gap: 20px 40px;
    background-color: #2c2c2c;
    padding: 40px;
    border-radius: 25px;

    .poke-section {
        grid-area: poke-section;
        display: flex;
        flex-direction: column;

        .pokeImg {
            position: relative;
            padding: 20px;
            border-radius: 10px 10px 0 0;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
            p {
                position: absolute;
                top: 10px;
                right: 20px;
                letter-spacing: 2px;
                font-size: 1.3rem
            }
        }
        .stats-section {
            background-color: hsl(0, 0%, 76%, 0.4);
            border: 1px solid hsl(0, 0%, 76%);
            border-radius: 0 0 10px 10px;
            padding: 10px;
            text-align: center;
            font-size: 14px;

            ul {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 5px 20px;
                font-weight: 700;
                text-transform: capitalize;

                .hp{order: 1}
                .attack{order: 2}
                .defense{order: 3}
                .speed{order: 4}
                .special-attack{order: 5}
                .special-defense{order: 6}
            }
        }   
    }
        
    .main-section {
        grid-area: main-section;
        justify-content: space-between;
        
        h1 {text-transform: capitalize}
        p {
            text-align: justify;
            margin: 5px 0;
            max-width: 25rem;
        }
        .poke-info {
            display: flex;
            justify-content: space-around;
            font-weight: 700;
        }
        .i-weight {
            display: flex;
            gap: 4px;

            .i {
                position: relative;
                color: darkblue;
                font-size: 1.1rem;
                &:hover {
                    cursor: pointer;
                    .i-text {
                        display: inline;
                    }
                }
            }
            .i-text {
                display: none;
                position: absolute;
                top: -15px;
                margin-left: 5px;
                text-wrap: nowrap;
                font-size: 1rem;
                background-color: #333333;
                color: #f7f7f7;
                padding: 1px 4px;
                border: 1px solid #f7f7f7;
                border-radius: 8px;
            }
        }
    }
    
    .types-section {
        grid-area: types-section;
    }
    .skills-section {
        grid-area: skills-section;
        ul {
            display: grid;
            grid-template-columns: repeat(2, 200px);
            justify-items: center;
            row-gap: 5px;
        }
    }
    .mov-section {
        padding: 0 10px;
        grid-area: mov-section;
        max-height: ;
        overflow-y: scroll;

        div {
            margin-top: 5px;
            text-align: start;
        }
    }
`

export const StyledCard = styled.section`
    background-color: hsl(0, 0%, 76%, 0.4);
    border: 1px solid hsl(0, 0%, 76%);
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
    }
    h2 {
        font-size: 1.25rem;
    }
`