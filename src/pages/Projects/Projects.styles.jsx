import styled from "styled-components"

export const ProjectsWrapper = styled.section`
    width: 100%;
    min-height: 70vh;
    background-color: #dddddd;
    padding:  50px 80px;
`

export const TopSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const ProjectsTitle = styled.h3`
    color: #111111;
    font-size: 35px;
`

export const CardsSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const CardsSectionEmpty = styled.div`
    width: 100%;
    height: 200px;
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #555;
    background-color: #eeeeee;
    color: #666;
    border-radius: 10px;
    font-size: 30px;
`
