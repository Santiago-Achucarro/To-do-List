import { Box } from "@chakra-ui/react";
import react from "react";

const Items = ({ toDo }) => {
  return (
    <Box
      backgroundColor="white"
      width="90%"
      height="36"
      borderRadius="10"
      color="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {toDo}
    </Box>
  );
};

export { Items };
