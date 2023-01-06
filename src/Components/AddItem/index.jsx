import { Input } from "@chakra-ui/react";
import react, { useState } from "react";

const AddItem = ({ handleAddToDo }) => {
  const [searchInput, setSearchInput] = useState("");

  const handlerChangeInput = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const handlerForm = (e) => {
    e.preventDefault();
    handleAddToDo(searchInput);
  };

  return (
    <>
      <form onSubmit={handlerForm}>
        <Input width="80" value={searchInput} onChange={handlerChangeInput} />
      </form>
    </>
  );
};

export { AddItem };
