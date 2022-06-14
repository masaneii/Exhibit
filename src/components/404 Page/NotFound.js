import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
      <VStack w="50%" m="auto" marginY="5rem" spacing="2rem">
        <Heading>Error 404</Heading>
        <Text>UH OH! You're lost!</Text>
          <Text align="center">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </Text>
          <NavLink to="/home">
            <Button variant="solid">Back to homepage</Button>
          </NavLink>
      </VStack>
    );
}

export default NotFound
