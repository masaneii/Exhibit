import { Heading} from "@chakra-ui/react";
import React from "react";
import AddNewCollection from "./AddNewCollection";

function CreateCollection() {
  return (
    <>
      <Heading p="2" textAlign="center" marginY="1rem" paddingTop="1rem">Add New Collection</Heading>
      <AddNewCollection />
    </>
  );
}

export default CreateCollection;
