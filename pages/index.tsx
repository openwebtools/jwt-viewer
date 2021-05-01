import { Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../src/components/Layout";
import jwt_decode from "jwt-decode";
import JsonViewer from "../src/components/JsonViewer";

export default function Home() {
  const [token, setToken] = React.useState("");
  const [decodedTokenPayload, setDecodedTokenPayload] = React.useState("");
  const [decodedTokenHeader, setDecodedTokenHeader] = React.useState("");

  const handleTokenInputChange = (e) => {
    const tokenInput = e.target.value;
    setToken(tokenInput);
    if (tokenInput) {
      try {
        const decodedPayload = JSON.stringify(jwt_decode(tokenInput), null, 2);
        const decodedHeader = JSON.stringify(
          jwt_decode(tokenInput, { header: true }),
          null,
          2
        );
        setDecodedTokenPayload(decodedPayload);
        setDecodedTokenHeader(decodedHeader);
      } catch {
        console.log("Error!!!");
      }
    }
  };
  return (
    <Layout
      title="JWT Viewer | Open Web Tools"
      p={4}
      justify="center"
      align="top"
    >
      <VStack w={["100%", "90%", "70%", "60%"]}>
        <Text align="center">A simple tool to decode JSON Web Tokens(JWT)</Text>
        <Textarea
          value={token}
          onChange={handleTokenInputChange}
          placeholder="Enter the encoded JSON Web Token"
          size="md"
        />
        <Stack
          direction={["column", "column", "row", "row"]}
          w="100%"
          h="100%"
          pb={2}
          spacing="30px"
        >
          <JsonViewer
            title="Decoded Token Payload"
            text={decodedTokenPayload}
            h="100%"
            w={["100%", "100%", "50%", "50%"]}
          ></JsonViewer>
          <VStack w={["100%", "100%", "50%", "50%"]} h="100%">
            <JsonViewer
              title="Decoded Token Header"
              text={decodedTokenHeader}
              h="auto"
              w="100%"
            ></JsonViewer>
          </VStack>
        </Stack>
      </VStack>
    </Layout>
  );
}
