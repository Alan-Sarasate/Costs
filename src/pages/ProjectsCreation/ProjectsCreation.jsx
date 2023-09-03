import Label from "../../components/Fragments/Label/Label";
import Select from "../../components/Select/Select";
import TextInput from "../../components/Fragments/Input/Input";
import Button from "../../components/Fragments/Button/Button";
import { PCSection, ProjectsCreationSubtitle, ProjectsCreationTitle, ProjectsCreationWrapper, StyledForm, TextBox } from "./ProjectsCreation.styles";
import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import ProjectsContext from "../../providers/ProjectsContext";

export default function ProjectsCreation(){

    const Navigate = useNavigate()
    const Input = useRef(null)
    const BudgetInput = useRef(null)
    const CategorySelect = useRef(null)
    const Information = useRef(null)

    const ProjectsDatas = useContext(ProjectsContext)

    function ProjectsNavigate(){
        if(Input.current.value && BudgetInput.current.value && BudgetInput.current.value >= 0 && CategorySelect.current.value){
            const newProject = {
                title: Input.current.value,
                budget: BudgetInput.current.value,
                category: CategorySelect.current.value,
                services: []
            }
            ProjectsDatas.setProjects(oldList => [...oldList, newProject])
            Navigate("/projects")
        }else{
            console.log("MAJUIQWHQUWHQU")
        }
    }
    

    return(
        <ProjectsCreationWrapper>
            <PCSection>
                <ProjectsCreationTitle>Criar Projeto</ProjectsCreationTitle>
                <ProjectsCreationSubtitle>
                    Crie seu projeto para depois adicionar os serviços
                </ProjectsCreationSubtitle>
                <TextBox ref={Information}></TextBox>
                <StyledForm>
                    <Label LabelText={"Nome do projeto: "}/>
                    <TextInput Ref={Input} Type={"text"} Placeholder={"Insira o nome do projeto"}/>
                    <Label LabelText={"Orçamento do projeto: "}/>
                    <TextInput Ref={BudgetInput} Type={"number"} Placeholder={"Insira o orçamento do projeto"}/>
                    <Label LabelText={"Selecione a categoria: "}/>
                    <Select Ref={CategorySelect}/>
                </StyledForm>
                <Button buttonText={"Criar Projeto"} handleClickFunction={ProjectsNavigate}/>
            </PCSection>
        </ProjectsCreationWrapper>
    )
}