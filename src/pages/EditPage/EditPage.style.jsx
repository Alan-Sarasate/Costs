import styled from 'styled-components'

export const EPWraper = styled.section`
    width: 100%;
    background-color: #dddddd;
    padding:  50px 80px;
    display: flex;
    flex-direction: column;

    span{
        font-size: 15px;
        margin: 20px 0;
        color: #333;
    }
`

export const EPTitle = styled.h2`
    font-size: 30px;
    background-color: #111111;
    color: #e7bf0d;
    padding: 15px 10px;
    margin-bottom: 20px;
`

export const Information = styled.h5`
    color: #222222;
    font-size: 15px;
    margin-bottom: 10px;
    span{
        font-weight: 100;
    }
`
export const EPSubtitle = styled.h2`
    color: #111111;
    font-size: 25px;
`

export const BoxWithBorder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #333333;
`
export const PrimaryBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const EditBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 40px 0;

    input{ 
        width: 100%;
        height: 40px;
        background-color: #eeeeee;
        padding: 10px 8px;
        border: none;
        border-radius: 3px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #333;

        &::placeholder{
            color: #999;
        } 
    }

    select{
        width: 100%;
        height: 40px;
        background-color: #eeeeee;
        padding: 10px 8px;
        border: none;
        border-radius: 3px;
        font-weight: 600;
        margin-bottom: 15px;
        option{
            color: #777777;
        }
    }

`

export const InformationsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`
export const Box = styled.div`
    margin-bottom: 20px;
`

export const EPLabel = styled.label`
    font-size: 15px;
    color: "111111";
    font-weight: 600;
    margin-bottom: 10px;
` 

export const ServicesHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 20px 0;
`

export const ServicesContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

export const ServicesBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
`