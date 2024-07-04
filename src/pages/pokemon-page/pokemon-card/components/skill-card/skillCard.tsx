import { useState } from "react";
import { useSpring, animated } from '@react-spring/web'
import { StyledSkillCard } from "./styledSkillCard";
import { IoIosArrowDown } from "react-icons/io";

type SkillProps = {
    skillName: string,
    skillEffect: string,
}

export const SkillCard = ({ skillName, skillEffect }: SkillProps) => {
    const [open, setOpen] = useState<boolean>(false)

    const openAnimation = useSpring({
        maxHeight: open ? "250px" : "0px",
        config: { duration: 400 }
    });
    const iconAnimation = useSpring({
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        config: { duration: 300 }
    });

    return (
        <StyledSkillCard>
            <button className="accordion-header" onClick={() => setOpen(!open)}>
                <p>{skillName}</p>
                <animated.i style={iconAnimation}>
                    <IoIosArrowDown size={24} />
                </animated.i>
            </button>
            <animated.p style={openAnimation} className="accordion-content">
                {skillEffect}
            </animated.p>
        </StyledSkillCard>
    )
}