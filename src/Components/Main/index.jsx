import { Box, Flex } from "@chakra-ui/react";
import react, { useEffect, useState } from "react";
import { AddItem } from "../AddItem";
import { Items } from "../Items";
import { useAddItems } from "../../useAddItems/useAddItems";

export const Main = () => {
  const data = JSON.parse(localStorage.getItem("tareas"));
  const [toDo, setToDo] = useState(data);
  const [valor, setValor] = useState(data ? data : []);
  const handleAddToDo = (searchInput) => {
    if (searchInput.length > 0) {
      setValor((prev) => [...prev, searchInput]);
      useAddItems(valor);
    }
  };

  useEffect(() => {
    if (data) {
      setToDo((prev) => data);
    }
  }, []);

  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="60vw"
        height="75vh"
        color="white"
        borderRadius="10"
        backgroundColor="#1A202C"
      >
        <Flex justifyContent="center" fontSize="40" mt="3">
          <h1>Todo List</h1>
        </Flex>

        <Flex justifyContent="center">
          <AddItem handleAddToDo={handleAddToDo} />
        </Flex>

        <Box
          width="100%"
          height="440px"
          color="red"
          overflowY="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex align="center" mt="2" flexDirection="column" gap="2">
            <Items toDo={toDo} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
