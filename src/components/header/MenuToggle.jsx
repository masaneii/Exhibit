import React from 'react'
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={8} h={8} />}
    </Box>
  );
}

export default MenuToggle
