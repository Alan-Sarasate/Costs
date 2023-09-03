import { LinksContainer, StyledHeader, StyledNav } from "./Header.styles"
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <StyledHeader>
            <img src={Logo} alt="Logo Icon"/>
            <StyledNav>
                <LinksContainer>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projetos</Link>
                    <Link to='/'>Empresa</Link>
                    <Link to='/'>Contato</Link>
                </LinksContainer>
            </StyledNav>
        </StyledHeader>
    )
}