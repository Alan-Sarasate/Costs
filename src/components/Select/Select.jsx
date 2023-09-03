import { StyledSelect } from "./Select.styles";

export default function Select({Ref}){
    return(
        <>
            <StyledSelect ref={Ref? Ref : null}>
                <option disabled selected value="">Selecionar uma opção</option>
                <option value="Infra">Infra</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Design">Design</option>
                <option value="Planejamento">Planejamento</option>
            </StyledSelect>
        </>
    )
}