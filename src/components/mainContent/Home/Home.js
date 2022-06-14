import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorMode,
  DarkMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Illustration } from "./Illustration";

function Home() {
  const { colorMode } = useColorMode();
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Gallery Collection{" "}
          <Text as={"span"} color={"green.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          tempora quis enim nobis tempore assumenda ipsam, laboriosam
          perferendis ab dolore ex a voluptatem voluptates placeat? Dolor
          adipisci tempora rem cum.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link to="/create-collection">
            <Button
              rounded={"full"}
              px={6}
              color={colorMode === DarkMode ? { color: "gray.500" } : "white"}
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
            >
              Add Collection
            </Button>
          </Link>
          <Link to="/all-collections">
            <Button rounded={"full"} px={6}>
              Go To Collections
            </Button>
          </Link>
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export default Home;
