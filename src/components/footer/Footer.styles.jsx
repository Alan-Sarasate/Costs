import styled from 'styled-components'

export const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111111;
    color: white;
`

export const IconsContainer = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0 30px 0; 

    svg{
        width: 20px;
        height: 20px;
    }

    svg:hover{
        color: #fdd10f;
        cursor: pointer;
    }
`

export const CopyrightContainer = styled.div`
    color: #eeeeee;
    margin-bottom: 20px;
    font-size: 14px;

    span{
        color: #fdd10f;
        font-weight: bold;
    }
`