import { CopyrightContainer, IconsContainer, StyledFooter } from "./Footer.styles";
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Footer(){

    return(
        <StyledFooter>
            <IconsContainer>
                <BsFacebook/>
                <AiOutlineInstagram/>
                <BsLinkedin/>
            </IconsContainer>
            <CopyrightContainer>
                <span>Costs</span> ₢ 2023
            </CopyrightContainer>
        </StyledFooter>
    )
}