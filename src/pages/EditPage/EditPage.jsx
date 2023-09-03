import { useRef, useContext, useState } from "react";
import Button from "../../components/Fragments/Button/Button";
import TextInput from "../../components/Fragments/Input/Input";
import { BoxWithBorder, EPWraper, EditBox, PrimaryBox, InformationsBox, EPTitle, Information, EPLabel, Box, EPSubtitle, ServicesHeader, ServicesContent } from "./EditPage.style";
import ProjectsContext from "../../providers/ProjectsContext";

export default function EditPage({ProjectEdit}){

    const ProjectsDatas = useContext(ProjectsContext)

    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenServices, setIsOpenServices] = useState(false)
    const [editButtonName, setEditButtonName] = useState("Editar projeto")
    const [servicesButtonName, setServicesButtonName] = useState("Adicionar serviço")
    const [inputName, setInputName] = useState("Name")
    const [inputBudget, setInputBudget] = useState(500)

    function HandleChangeName(ev){
        setInputName(ev.target.value)
    }
    function HandleChangeBudget(ev){
        setInputBudget(ev.target.value)
    }

    function EditHandleClick () {
        setIsOpenEdit(!isOpenEdit)
        setEditButtonName(editButtonName == "Fechar"? "Editar projeto" : "Fechar")
    }

    function ServicesHandleClick () {
        setIsOpenServices(!isOpenServices)
        setServicesButtonName(servicesButtonName == "Fechar"? "Adicionar serviço" : "Fechar")
    }

    return(
        <EPWraper>
            <BoxWithBorder>
                <PrimaryBox>
                    <InformationsBox>
                        <EPTitle>TESTE</EPTitle>
                    </InformationsBox>
                    <Button buttonText={editButtonName} handleClickFunction={EditHandleClick}/>
                </PrimaryBox>
                {isOpenEdit ? 
                    <EditBox>
                        <EPLabel>Nome do projeto: </EPLabel>
                        <input type="text" placeholder="TESTE" value={inputName} onChange={HandleChangeName}/>
                        <EPLabel>Orçamento do projeto: </EPLabel>
                        <input type="number" placeholder="Number" value={inputBudget} onChange={HandleChangeBudget}/>
                        <EPLabel>Nome do projeto: </EPLabel>
                        <select defaultValue={"Infra"}>
                            <option value="Infra">Infra</option>
                            <option value="Desenvolvimento">Desenvolvimento</option>
                            <option value="Design">Design</option>
                            <option value="Planejamento">Planejamento</option>
                        </select>
                        <Button buttonText={"Concluir edição"}/>
                    </EditBox> :
                    <Box>
                        <Information>Categoria: <span>teste</span></Information>
                        <Information>Total do orçamento: <span>teste</span></Information>
                        <Information>Total utilizado: <span>teste</span></Information>
                    </Box>
                    }
            </BoxWithBorder>
            <BoxWithBorder>
                <ServicesHeader>
                    <EPSubtitle>Adicionar Serviços</EPSubtitle>
                    <Button buttonText={servicesButtonName} handleClickFunction={ServicesHandleClick}/>
                </ServicesHeader>
            </BoxWithBorder>
            <ServicesContent>
                <EPSubtitle>Serviços</EPSubtitle>
                <span>Não há serviços cadastrados!</span>
            </ServicesContent>
        </EPWraper>
    )
}