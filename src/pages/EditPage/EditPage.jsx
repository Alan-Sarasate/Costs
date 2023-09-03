import { useRef, useContext, useState, useEffect } from "react";
import Button from "../../components/Fragments/Button/Button";
import { BoxWithBorder, EPWraper, EditBox, PrimaryBox, InformationsBox, EPTitle, Information, EPLabel, Box, EPSubtitle, ServicesHeader, ServicesContent, ServicesBox } from "./EditPage.style";
import ProjectsContext from "../../providers/ProjectsContext";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

export default function EditPage({ProjectEdit}){
    
    const ProjectsDatas = useContext(ProjectsContext)

    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenServices, setIsOpenServices] = useState(false)
    const [editButtonName, setEditButtonName] = useState("Editar projeto")
    const [servicesButtonName, setServicesButtonName] = useState("Adicionar serviço")
    const [inputName, setInputName] = useState(ProjectsDatas.projects[ProjectEdit].title)
    const [inputBudget, setInputBudget] = useState(ProjectsDatas.projects[ProjectEdit].budget)

    const ServiceNameInput = useRef(null)
    const ServiceCostInput = useRef(null)
    const ServiceDescriptionInput = useRef(null)
    const ProjectCategory = useRef(null)

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

    const AddService = () => {
        if(ServiceNameInput.current.value && ServiceCostInput.current.value && ServiceDescriptionInput.current.value){
            const service = {
                name: ServiceNameInput.current.value,
                cost: ServiceCostInput.current.value,
                description: ServiceDescriptionInput.current.value}
                ProjectsDatas.projects[ProjectEdit].services.push(service)
                ProjectsDatas.setProjects(ProjectsDatas.projects)
                console.log(ProjectsDatas.projects[ProjectEdit].services.length)
                console.log(ProjectsDatas.projects[ProjectEdit].services)
        }else{
            console.log("DEU RUIM")
        }
    }

    function removeService(id){
        ProjectsDatas.projects[ProjectEdit].services.filter((service, index)=>(
            index !== id 
            ))
    }

    const ModifyProject = () => {
        ProjectsDatas.projects[ProjectEdit].title = inputName
        ProjectsDatas.projects[ProjectEdit].budget = inputBudget
        ProjectsDatas.projects[ProjectEdit].category = ProjectCategory.current.value
        setIsOpenEdit(!isOpenEdit)
        setEditButtonName(editButtonName == "Fechar"? "Editar projeto" : "Fechar")
    }
 
    return(
        <EPWraper>
            <BoxWithBorder>
                <PrimaryBox>
                    <InformationsBox>
                        <EPTitle>{ProjectsDatas.projects[ProjectEdit].title}</EPTitle>
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
                        <select defaultValue={ProjectsDatas.projects[ProjectEdit].category} ref={ProjectCategory}>
                            <option value="Infra">Infra</option>
                            <option value="Desenvolvimento">Desenvolvimento</option>
                            <option value="Design">Design</option>
                            <option value="Planejamento">Planejamento</option>
                        </select>
                        <Button buttonText={"Concluir edição"} handleClickFunction={ModifyProject}/>
                    </EditBox> :
                    <Box>
                        <Information>Categoria: <span>{ProjectsDatas.projects[ProjectEdit].category}</span></Information>
                        <Information>Total do orçamento: <span>{ProjectsDatas.projects[ProjectEdit].budget}</span></Information>
                        <Information>Total utilizado: <span>{ProjectsDatas.projects[ProjectEdit].budget}</span></Information>
                    </Box>}
            </BoxWithBorder>
            <BoxWithBorder>
                <ServicesHeader>
                    <EPSubtitle>Adicionar Serviços</EPSubtitle>
                    <Button buttonText={servicesButtonName} handleClickFunction={ServicesHandleClick}/>
                </ServicesHeader>
                {isOpenServices &&
                    <EditBox>
                        <EPLabel>Nome do serviço: </EPLabel>
                        <input type="text" placeholder="Nome do serviço" ref={ServiceNameInput}/>
                        <EPLabel>Custo do serviço: </EPLabel>
                        <input type="number" placeholder="Custo do serviço" ref={ServiceCostInput}/>
                        <EPLabel>Descrição do serviço: </EPLabel>
                        <input type="text" placeholder="Descrição do serviço" ref={ServiceDescriptionInput}/>
                        <Button buttonText={"Adicionar serviço"} handleClickFunction={AddService}/> 
                    </EditBox>}
            </BoxWithBorder>
            <ServicesContent>
                <EPSubtitle>Serviços</EPSubtitle>
                {ProjectsDatas.projects[ProjectEdit].services.length ? 
                    <ServicesBox>
                        {ProjectsDatas.projects[ProjectEdit].services.map((service, index) => (
                            <ServiceCard Title={service.name} Cost={service.cost} Description={service.description} key={index} removeFunction={() => removeService(index)}/>
                        ))}
                    </ServicesBox> : 
                    <span>Não há serviços cadastrados!</span>}
            </ServicesContent>
        </EPWraper>
    )
}