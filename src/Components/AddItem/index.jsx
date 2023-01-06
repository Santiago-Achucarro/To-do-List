import { Input, Button } from "@chakra-ui/react";
import react, { useEffect, useState } from "react";

const AddItem = ({ handleAddToDo }) => {
  const [searchInput, setSearchInput] = useState("");

  const handlerChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handlerForm = (e) => {
    handleAddToDo(searchInput);
  };

  

  return (
    <>
      <Input width="80" value={searchInput} onChange={handlerChangeInput} />
      <Button onClick={handlerForm}>send</Button>
    </>
  );
};

export { AddItem };
