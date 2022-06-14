import { Heading, useColorModeValue} from '@chakra-ui/react';
import React, { useState } from 'react'
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';
import NavBarContainer from './NavBarContainer'

function Header(props) {
    const [isOpen, setIsOpen] = useState(false)
     const toggle = () => setIsOpen(!isOpen);
    return (
      <NavBarContainer
        bg={useColorModeValue('gray.50', 'gray.900')}
        paddingX={{ base: "1rem", md: "4rem" }}
        boxShadow='base'
      >
        <Heading>Gallery</Heading>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    );
}

export default Header
