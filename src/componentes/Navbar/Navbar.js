import React from 'react'
import { Container, /*Covercontainer,*/ LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from './Navbar.elements'
import { FaEarlybirds } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Link } from "react-router-dom";
/*import covervideo from '../media/covervideo.mp4';*/


const Navbar = () => {
  return (
    
    /*<Covercontainer>
        <video class='video'src={covervideo} autoPlay loop muted/>*/
    
    <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: {fontSize: "2em"}}}>

          <LogoContainer>
            <FaEarlybirds/>
            <p>DANIEL </p>
            <p> Xtream</p>            
          </LogoContainer>
          </IconContext.Provider>

          <Menu>
            <MenuItem>
            <MenuItemLink>
            <Link to={'/inicio'}>Inicio</Link>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink>
            <Link to={'/sobremi'}>Sobremi</Link>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              <Link to={'/contacto'}>Contacto</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              <Link to={'/portafolio'}>Portafolio</Link>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
    </Container>
    /*</Covercontainer>*/
  )
}

export default Navbar;