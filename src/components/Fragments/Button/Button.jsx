import { StyledButton } from "./Button.styles";

export default function Button ({buttonText, handleClickFunction}){

    return(
        <>
            <StyledButton onClick={()=>handleClickFunction()}>
                {buttonText}
            </StyledButton>
        </>
    )
}