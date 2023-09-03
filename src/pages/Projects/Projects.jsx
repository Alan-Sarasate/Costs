import Card from "../../components/Card/Card";
import Button from "../../components/Fragments/Button/Button";
import { CardsSection, CardsSectionEmpty, ProjectsTitle, ProjectsWrapper, TopSection } from "./Projects.styles";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import ProjectsContext from "../../providers/ProjectsContext";

export default function Projects({setEditProject}){

    const navigateToPC = useNavigate()
    const navigateToEP = useNavigate()

    const ProjectsDatas = useContext(ProjectsContext)
    console.log(ProjectsDatas)

    function ProjectsNavigate(){
        navigateToPC('/projectscreation')
    }

    function removeProject(id){
        const oldList = [...ProjectsDatas.projects]
        const filteredList = oldList.filter((project, index)=>(
            index !== id 
            ))
        ProjectsDatas.setProjects(filteredList)
    }

    function editProject(item){
        navigateToEP('/editpage')
        setEditProject(item)
    }

    return(
        <ProjectsWrapper>
            <TopSection>
                <ProjectsTitle>Meus projetos</ProjectsTitle>
                <Button buttonText={"Criar projeto"} handleClickFunction={ProjectsNavigate}/>
            </TopSection>
            <CardsSection>
                {ProjectsDatas.projects.length > 0 ? 
                    ProjectsDatas.projects.map((project, index) => (
                        <Card Title={project.title} Budget={` R$ ${project.budget}`} Category={project.category} key={index} removeFunction={()=>removeProject(index)} editFunction={()=>editProject(index)}/>
                     )) : <CardsSectionEmpty>Sem projetos ativos!</CardsSectionEmpty>}
            </CardsSection>
        </ProjectsWrapper>
    )
} 