import { Box } from "@chakra-ui/react";

const Items = ({ toDo }) => {
  console.log(toDo);
  return (
    toDo &&
    toDo.map((item, index) => (
      <Box
        backgroundColor="white"
        width="90%"
        height="36"
        borderRadius="10"
        color="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
        key={index}
      >
        {item}
      </Box>
    ))
  );
};

export { Items };
