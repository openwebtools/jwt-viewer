import React from "react";
import { Box, Button, Flex, Text, useClipboard } from "@chakra-ui/react";

const JsonViewer = (props: any) => {
  const { hasCopied, onCopy } = useClipboard(props.text);
  return (
    <Box {...props}>
      <Flex justifyContent="space-between" pb={2}>
        <Text>{props.title}</Text>
        <Button colorScheme="dark" size="xs" onClick={onCopy}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" w="100%" h="100%" p={4}>
        <pre>{props.text}</pre>
      </Box>
    </Box>
  );
};
export default JsonViewer;
