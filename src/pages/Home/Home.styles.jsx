import styled from 'styled-components'

export const HomeWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dddddd;

    img{
        height: 300px;
        margin-top: 30px;
        margin-bottom: 70px;
    }
`
export const HomeTitle = styled.h2`
    font-size: 40px;
    color: #111111;
    margin-top: 60px;

    span{
        background-color: #111111;
        color: #fdd10f;
    }
`

export const HomeSubtitle = styled.h5`
    font-size: 15px;
    color: #aaa;
    margin: 24px 0;
    
`