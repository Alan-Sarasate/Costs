import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    height: 95px;
    background-color: #111111;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    color: #eeeeee;

    img{
        width: 60px;
        height: 65px;
    }
`

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
    width: 250px;
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    a{
        color: #eeeeee;
        text-decoration: none;
    }

    a:hover{
        color: #fdd10f;
        cursor: pointer;
    }
`