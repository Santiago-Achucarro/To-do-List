import { Box, Flex } from "@chakra-ui/react";
import react, { useEffect, useState } from "react";
import { AddItem } from "../AddItem";
import { Items } from "../Items";
import { useAddItems } from "../../useAddItems/useAddItems";

export const Main = () => {
  const [tarea, setTarea] = useState(0);
  const valor = JSON.parse(localStorage.getItem(tarea));
  const [toDo, setToDo] = useState(valor);

  const handleAddToDo = (searchInput) => {
    if (searchInput.length == 0) {
      const resp = useAddItems(searchInput, tarea);
      resp ? setTarea((prev) => prev + 1) : setTarea((prev) => prev);
    }
  };

  const getTarea = () => {
    if (tarea) {
      setToDo(valor);
    } else {
      setToDo(false);
    }
  };

  useEffect(() => {
    getTarea();
  });

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
