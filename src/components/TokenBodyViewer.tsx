import React from "react";
import { Stack, VStack } from "@chakra-ui/react";
import JsonViewer from "./JsonViewer";

const TokenBodyViewer = (props: any) => {
  return (
    <Stack
      direction={["column", "column", "row", "row"]}
      w="100%"
      h="100%"
      pb={4}
      spacing={["40px", "40px", "20px", "20px"]}
    >
      <JsonViewer
        title="Decoded Token Payload"
        text={props.payload}
        h="100%"
        w={["100%", "100%", "50%", "50%"]}
      ></JsonViewer>
      <VStack w={["100%", "100%", "50%", "50%"]} h="100%">
        <JsonViewer
          title="Decoded Token Header"
          text={props.header}
          h="auto"
          w="100%"
        ></JsonViewer>
      </VStack>
    </Stack>
  );
};

export default TokenBodyViewer;
