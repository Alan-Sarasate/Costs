import styled from 'styled-components'

export const CardWrapper = styled.div`
    min-height: 250px;
    max-width: 21vw;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid #bbbbbb;
    border-radius: 10px;
    font-size: 15px;
`

export const CardTitle = styled.h5`
    background-color: #111111;
    color: #e7bf0d;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 30px;
`
export const NoBreak = styled.div`
    display: flex;
    color: #888;
    margin-bottom: 20px;

    span{
        color: #555;
        font-weight: 600;
    }
`

export const CardButton = styled.button`
    height: 40px;
    background-color: #eeeeee;
    color: #666;
    display: flex;
    flex-direction: row;
    border: 1px solid #555;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin: 0 15px 10px 0;

    svg{
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }

    &:hover{
        background-color: #222;
        color: #b8990e;
        transition: 400ms linear;
    }
`