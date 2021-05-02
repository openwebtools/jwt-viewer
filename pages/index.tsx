import { Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../src/components/Layout";
import jwt_decode from "jwt-decode";
import TokenBodyViewer from "../src/components/TokenBodyViewer";

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
          pb={4}
        />
        {decodedTokenPayload ? (
          <TokenBodyViewer
            payload={decodedTokenPayload}
            header={decodedTokenHeader}
          />
        ) : null}
      </VStack>
    </Layout>
  );
}
