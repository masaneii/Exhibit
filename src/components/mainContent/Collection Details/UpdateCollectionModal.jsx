import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Image,
  Button,
  Box,
  FormErrorMessage,
  Input,
  Text,
  HStack,
  FormLabel,
  Textarea,
  FormControl,
  Stack,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCollection } from "../../../redux/collectionReducer/collectionSlice";
import { useNavigate } from "react-router";
import { FiUpload } from "react-icons/fi";

function UpdateCollectionModal({ isOpen, onClose, albom }) {
  //Form states
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [imageUpload, setImageUpload] = useState([]);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // convert Image to url/Blob
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

  //Dispatch states to reducer
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
        updateCollection({
          id: albom.id,
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

  // file Blob to image
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
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={"xl"}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="none" backdropFilter="blur(2px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalHeader>Update {albom.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box position="relative">
              <FormControl
                isInvalid={isError}
                onClick={handleSubmit}
                p="1rem"
                w="100%"
                maxWidth="600px"
                m="auto"
              >
                <Stack spacing={5} padding="1rem">
                  <Box>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder={albom.name}
                      variant="flushed"
                      isRequired={true}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {isError && (
                      <FormErrorMessage>Name is required</FormErrorMessage>
                    )}
                  </Box>
                  <Box>
                    <FormLabel htmlFor="name">Description</FormLabel>
                    <Textarea
                      id="description"
                      placeholder={albom.description}
                      variant="flushed"
                      isRequired={true}
                      value={describe}
                      onChange={(e) => setDescribe(e.target.value)}
                    />
                    {isError && (
                      <FormErrorMessage>Description required</FormErrorMessage>
                    )}
                  </Box>
                  <Box>
                    <FormLabel htmlFor="upload" cursor="pointer">
                      <HStack>
                        <Text>Upload Images</Text> <FiUpload />
                      </HStack>
                    </FormLabel>
                    <Input
                      border="none"
                      id="upload"
                      type="file"
                      multiple
                      isRequired={true}
                      size="xs"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    {isError && (
                      <FormErrorMessage>Image is required</FormErrorMessage>
                    )}
                  </Box>
                  <Box>{renderPhotos(imageUpload)}</Box>
                  <ModalFooter justifyContent={"space-around"}>
                    <Button
                      mr={3}
                      onClick={onClose}
                      paddingX="12"
                      paddingY="6"
                      colorScheme="gray"
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      paddingX="12"
                      paddingY="6"
                      bg={"green.400"}
                      _hover={{ bg: "green.500", color: "white" }}
                      color={"white"}
                    >
                      Upload
                    </Button>
                  </ModalFooter>
                </Stack>
              </FormControl>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateCollectionModal;
