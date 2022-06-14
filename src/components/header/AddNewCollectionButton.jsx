import { Button, DarkMode, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddNewCollectionButton = () => {
  const { colorMode } = useColorMode();
  return (
    <Link to="/create-collection">
      <Button
        size="sm"
        rounded="md"
        bg={"green.400"}
        color={colorMode === DarkMode ? "white" : "white"}
        _hover={{ bg: "green.500" }}
      >
        Add Collection
      </Button>
    </Link>
  );
};

export default AddNewCollectionButton;
