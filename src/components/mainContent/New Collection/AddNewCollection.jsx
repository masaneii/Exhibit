import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createCollection } from "../../../redux/collectionReducer/collectionSlice";
import { v4 as uuidv4 } from "uuid";

function AddNewCollection() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  //Form States
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [imageUpload, setImageUpload] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [formData, setFormData] = useState({
  //   id: uniqueId(),
  //   name: '',
  //   description: '',
  //   photos: []
  // })

  //Form Submit onclick function
  const handleSubmit = (e) => {
    if (name === "") {
      return setIsError(true);
    } else if (describe === "") {
      return setIsError(true);
    } else if (imageUpload.length === 0) {
      return setIsError(true);
    } else {
      console.log("1");
      dispatch(
        createCollection({
          id: uuidv4(),
          name: name,
          description: describe,
          photos: imageUpload,
        })
      );
      console.log("2");
      Navigate("/all-collections");
    }
    setIsError(false);
  };
  // convert Image to url
  const handleImageUpload = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setImageUpload((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  // preview image
  const renderPhotos = (source) => {
    // console.log("source: ", source);
    return source.map((photo) => {
      return (
        <VStack spacing={3}>
          <Image marginTop="2rem" src={photo} alt={name} key={photo} w="200" />
        </VStack>
      );
    });
  };

  return (
    <Box
      position="relative"
      p={"1rem"}
      textAlign={"center"}
      m={"auto"}
      marginBottom="1rem"
    >
      <FormControl
        isInvalid={isError}
        p="1rem"
        paddingY="2rem"
        w="100%"
        maxWidth="600px"
        m="auto"
        bg={useColorModeValue("gray.50", "gray.900")}
        borderRadius={20}
        shadow={'lg'}
      >
        <Stack spacing={5} padding="1rem">
          <Box marginY="10px">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              variant="flushed"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {isError && <FormErrorMessage>Name is required</FormErrorMessage>}
          </Box>
          <Box>
            <FormLabel htmlFor="name">Description</FormLabel>
            <Textarea
              id="description"
              placeholder="Describe this collection.."
              variant="flushed"
              required
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
            {isError && (
              <FormErrorMessage>Description required</FormErrorMessage>
            )}
          </Box>
          <Box paddingY="1rem">
            <FormLabel htmlFor="upload" cursor="pointer">
              <HStack>
                <Text>Upload Image(s)</Text> <FiUpload />
              </HStack>
            </FormLabel>
            <Input
              border="none"
              id="upload"
              type="file"
              multiple
              required
              size="xs"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {isError && <FormErrorMessage>Image is required</FormErrorMessage>}
          </Box>
          <Box>{renderPhotos(imageUpload)}</Box>
          <Box>
            <Button
              type="submit"
              onClick={handleSubmit}
              paddingX="12"
              paddingY="6"
            >
              Upload
            </Button>
          </Box>
        </Stack>
      </FormControl>
    </Box>
  );
}

export default AddNewCollection;
