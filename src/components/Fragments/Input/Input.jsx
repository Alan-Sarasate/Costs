import { useState } from "react";
import { StyledTextInput } from "./Input.styles";

export default function TextInput({Placeholder, Type, Ref, Value}){

    const [input, setInput] = useState(Value? Value : "")

    function HandleChange(ev){
        setInput(ev.target.value)
    } 

    return(
        <>
            <StyledTextInput type={Type} placeholder={Placeholder? Placeholder : "Adicione um placeholder"} ref={Ref? Ref : null} value={input} onChange={HandleChange}/>
        </>
    )
}