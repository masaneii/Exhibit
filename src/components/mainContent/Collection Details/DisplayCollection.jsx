import {
  Box,
  HStack,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteCollection } from "../../../redux/collectionReducer/collectionSlice";
import UpdateCollectionModal from "./UpdateCollectionModal";

function CollectionDetails({ albom }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { photos } = albom;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCollection(albom.id));
    Navigate("/all-collections");
  };
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 20 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {albom.name} Collection
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <HStack spacing={{ base: 4, sm: 6 }} m="auto">
              <Button onClick={onOpen}>Edit Collection</Button>
              <Button onClick={handleDelete}>Delete Collection</Button>
            </HStack>
          </Stack>
          <VStack spacing={{ base: 2, sm: 4 }}>
            <UpdateCollectionModal isOpen={isOpen} onClose={onClose} albom={albom}/>
            <Heading>About Collection</Heading>
            <Text fontSize={"lg"}>{albom.description}</Text>
          </VStack>
        </Stack>
        <HStack>
          <Heading
            m="auto"
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            Full Gallery
          </Heading>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
          <Flex>
            {photos.map((foto, index) => {
              return (
                <Image
                  key={index}
                  rounded={"md"}
                  alt={albom.name}
                  src={foto}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              );
            })}
          </Flex>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
}

export default CollectionDetails;
