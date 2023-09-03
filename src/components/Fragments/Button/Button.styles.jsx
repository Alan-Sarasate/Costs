import styled from 'styled-components'

export const StyledButton = styled.button`
    min-width: 100px;
    height: 40px;
    color: #eeeeee;
    background-color: #111111;
    border: none;
    padding: 5px;
    font-size: 14px;

    &:hover{
        color: #fdd10f;
        transition: 600ms linear;
        cursor: pointer;
    }
` 