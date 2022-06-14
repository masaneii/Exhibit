import { Box, Heading, SimpleGrid, VStack} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import RenderPhotos from "./RenderPhotos";

function AllCollections() {
    //get albums from reducer
  const { album } = useSelector((state) => state.collection);
//   console.log(album);
  
  return (
    <VStack marginY="1rem" paddingY="1rem" spacing="20px">
      <Box>
        {album.length > 0 ? <Heading as="h1" size="2xl">
          All Collections
        </Heading> : "No Collection."}
      </Box>
      <Box>
        <SimpleGrid
          position="relative"
          paddingX="2rem"
          marginY="1rem"
          textAlign="center"
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 8, md: 10 }}
        >
          {album &&
            album.map((albom) => {
              return <RenderPhotos albom={albom} key={albom.id} />;
            })}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default AllCollections;
