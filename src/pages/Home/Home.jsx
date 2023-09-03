import { HomeSubtitle, HomeTitle, HomeWrapper } from "./Home.styles"
import HomeImage from '../../assets/HomeImage.png'
import { useNavigate } from "react-router-dom"
import Button from "../../components/Fragments/Button/Button"

export default function Home(){

    const ProjectsCreationPage = useNavigate()

    function Navigate(){
        ProjectsCreationPage('/projectscreation')
    }

    return(
        <HomeWrapper>
            <HomeTitle>
                Bem-vindo ao <span>Costs</span>
            </HomeTitle>
            <HomeSubtitle>
                Comece a gerenciar seus projetos agora mesmo!
            </HomeSubtitle>
            <Button handleClickFunction={Navigate} buttonText={"Criar Projeto"}/>
            <img src={HomeImage} alt="Home Image"/>
        </HomeWrapper>
    )
}