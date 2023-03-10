import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAddItems } from "../../useAddItems/useAddItems";

const Items = ({ send, setSend }) => {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState(false);
  const getItem = JSON.parse(localStorage.getItem("tareas"));

  useEffect(() => {
    if (getItem && !deleteData) {
      setData(getItem);
    }

    if (deleteData) {
      useAddItems(data);
      setDeleteData(false);
    }
  }, [send]);

  const removeTask = (indexItem) => {
    const newData = data.filter((item, index) => index !== indexItem);
    setData(newData);
    setSend((prev) => prev + 1);
    setDeleteData(true);
  };

  const getDay = (item) => {
    const index = item.indexOf("(");
    const otherIndex = item.indexOf(")");
    const day = item.slice(index, otherIndex + 1);
    const itemDay = day.replace("(", "").replace(")", "");
    return itemDay;
  };

  const getHours = (item) => {
    const index = item.indexOf(")");
    const hours = item.slice(index + 1);
    return hours;
  };

  const getOnlyTask = (item) => {
    const index = item.indexOf("(");
    const separate = item.slice(0, index);
    const divide = separate.split("");
    const upperCase = divide[0].toUpperCase();
    const letter = upperCase.toLowerCase();
    const task = divide.join().replaceAll(",", "").replace(letter, upperCase);

    return task;
  };

  return (
    data &&
    data.map((item, index) => (
      <Box
        backgroundColor="white"
        width="80%"
        height="75px"
        borderRadius="10"
        color="black"
        display="flex"
        flexDir="column"
        key={index}
        _hover={{ backgroundColor: "#9c9c9c", transition: "all ease-out 0.2s" }}
        onClick={() => removeTask(index)}
      >
        <Box display="flex" ml="3" fontWeight="thin" fontStyle="italic">
          <Box width="50%">{getDay(item)}</Box>
          <Box width="50%" display={"flex"} justifyContent="end" mr="3">
            {getHours(item)}
          </Box>
        </Box>
        <Box display="flex" justifyContent={"center"} fontWeight="medium" textAlign="center"fontSize="15">
          {getOnlyTask(item)}
        </Box>
      </Box>
    ))
  );
};

export { Items };
