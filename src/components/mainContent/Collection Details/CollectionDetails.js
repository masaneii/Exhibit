import { Box } from '@chakra-ui/layout'
import React from 'react'
import DisplayCollection from './DisplayCollection'
import { useParams } from "react-router";
import { useSelector } from 'react-redux';

function CollectionDetails() {
  const { slug } = useParams();
  const { album } = useSelector((state) => state.collection);
  return (
    <Box
      position="relative"
      top="3rem"
      p="1rem"
      textAlign="center"
      m="auto"
    >
      { album.map((albom) => {
        if (albom.name !== slug) {
          return null
        } return <DisplayCollection albom={albom} key={albom.id} />;
      })
      }
    </Box>
  );
}

export default CollectionDetails
