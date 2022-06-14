import { Box, Stack, Text, useColorModeValue} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import AddNewCollectionButton from "./AddNewCollectionButton"
import ToggleThemeMode from './ToggleThemeMode'

const MenuLinks = ({isOpen}) => {
    return (
      <Box
        display={{
          base: isOpen ? "block" : "none",
          md: isOpen ? "block" : "none",
          lg: "block",
        }}
        flexBasis={{ base: "100%", lg: "auto" }}
        px={2}
        bg={{ bg: useColorModeValue("gray.500") }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Link to="/home">
            <Text fontWeight="semibold" _hover={{ color: "gray.500" }}>
              Home
            </Text>
          </Link>
          <Link
            to="/all-collections"
          >
            <Text fontWeight="semibold" _hover={{ color: "gray.500" }}>
              All Collections
            </Text>
          </Link>
          <AddNewCollectionButton />
          <ToggleThemeMode />
        </Stack>
      </Box>
    );
}
 
export default MenuLinks;