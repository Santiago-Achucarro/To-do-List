import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AddItem } from "../AddItem";
import { Items } from "../Items";

export const Main = () => {
  const [send, setSend] = useState("");

  return (
    <Flex
      height="90vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={{ base: "80vw", sm: "50vw", lg: "50vw", xl: "30vw" }}
        height={{base:"70vh", lg:"50vh", xl:"70vh"}}
        boxShadow="dark-lg"
        color="white"
        borderRadius="10"
        backgroundColor="#1A202C"
      >
        <Flex justifyContent="center" fontSize="40" mt="3">
          <h1>Todo List</h1>
        </Flex>

        <Flex justifyContent="center">
          <AddItem setSend={setSend} />
        </Flex>

        <Box
          width="100%"
          height="70%"
          mt="5"
          color="red"
          overflowY="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex align="center"  flexDirection="column" gap="2">
            <Items send={send} setSend={setSend} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
