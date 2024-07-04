import styled from "styled-components"

const StyledStats = styled.div<{$statsLevel: number}>`
    span {
        font-size: 0.8rem;
    }    

    .stats-bar {
        position: relative;
        display: block;
        background-color: hsl(0, 0%, 76%, 0.4);
        border: 1px solid #2c2c2c;
        border-radius: 5px;
        height: 20px;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            background-color: hsl(60, 100%, 50%, 0.6);
            height: 100%;
            width: ${props => props.$statsLevel}%;
        }
    }
`
type StatsProps = {
    className: string,
    statsName: string,
    statsPoint: number,
    statsPercentage: number,
}

export const calculateStatsLevel = (type:string, percentage:number) => {
    switch(type) {
        case "hp":
            return percentage * 100 / 255;
        case "speed":
            return percentage * 100 / 180;
        case "attack":
            return percentage * 100 / 181;
        case "special-attack":
            return percentage * 100 / 180;
        case "defense":
            return percentage * 100 / 230;
        case "special-defense":
            return percentage * 100 / 230;
        default:
            return 0;  
    }
}

export const StatsInfo = ({ className, statsName, statsPoint, statsPercentage }: StatsProps) => {

    return (
        <StyledStats $statsLevel={statsPercentage} className={className}>
            <p>{statsName}<span> ({statsPoint})</span></p>
            <div className="stats-bar"></div>
        </StyledStats>
    )
}