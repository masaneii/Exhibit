import {
  Box,
  Button,
  Heading,
  Image,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCollection } from "../../../redux/collectionReducer/collectionSlice";
import { useNavigate } from "react-router";

const RenderPhotos = ({ albom }, source) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCollection(albom.id));
  };
  console.log("source: ", source);
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      as="article"
      w={{ base: "320px", md: "350px" }}
      lineHeight="2"
      marginY="auto"
      marginX="auto"
      borderWidth="1px"
      maxW="sm"
      rounded="lg"
      shadow="2xl"
      position="relative"
      _hover={{ shadow: "dark-lg" }}
    >
      <Tooltip label={albom.name}>
        <Box
          cursor="pointer"
          onClick={() => Navigate(`/collections/${albom.name}`)}
        >
          <Image
            h="fit-content"
            objectFit="fill"
            w="100%"
            src={albom.photos[0]}
            alt={albom.name}
          />
        </Box>
      </Tooltip>
      <Heading size="lg" fontWeight="bold" marginY="4" paddingX="1rem">
        {albom.name}
      </Heading>

      <Button w="100%" h="12" colorScheme="teal" onClick={handleDelete}>
        Delete Collection
      </Button>
    </Box>
  );
};

export default RenderPhotos;
