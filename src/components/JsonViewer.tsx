import { Box, Text } from "@chakra-ui/react";

const JsonViewer = (props: any) => {
  return (
    <Box {...props}>
      <Text>{props.title}</Text>
      <Box borderWidth="1px" borderRadius="lg" w="100%" h="100%" p={4}>
        <pre>{props.text}</pre>
      </Box>
    </Box>
  );
};
export default JsonViewer;
