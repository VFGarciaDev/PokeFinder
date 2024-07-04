import styled from "styled-components";

export const StyledSkillCard = styled.div`
    position: relative;

    .accordion-header {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.2rem;
        background-color: #2c2c2c;
        border: none;
        border-radius: 5px;
        padding: 10px;
        
        &:hover{
            cursor: pointer;
        }
        p {
            text-transform: capitalize;
        }
    }
    .accordion-content {
        font-size: 0.75rem;
        overflow: hidden;
        width: 100%;
        position: absolute;
        background-color: red;
    }
`