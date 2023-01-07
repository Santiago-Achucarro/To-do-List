import { Input, Button } from "@chakra-ui/react";
import react, { useEffect, useState } from "react";
import { useAddItems } from "../../useAddItems/useAddItems";

const AddItem = ({ setSend }) => {
  const data = JSON.parse(localStorage.getItem("tareas"));
  const [searchInput, setSearchInput] = useState("");
  const [valor, setValor] = useState(data ? data : []);

  const handlerChangeInput = (e) => {
    let input = e.target.value;
    setSearchInput(input.toLowerCase());
  };

  const handleAddToDo = (e) => {
    e.preventDefault();
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();

    if (mes == 0) {
      mes = 1;
    }

    const fullData = searchInput + ` (${dia}/${mes})`;

    if (data === null) {
      setValor([fullData]);
    } else {
      setValor([...valor, fullData]);
    }
    setSearchInput("");
  };

  useEffect(() => {
    const test = () => {
      if (valor.length > 0) {
        useAddItems(valor);
        setSend((prev) => prev + 1);
      }
    };
    test();
  }, [valor]);
  return (
    <>
      <form onSubmit={handleAddToDo}>
        <Input
          width={{ base: "30", lg: "96" }}
          value={searchInput}
          onChange={handlerChangeInput}
        />
      </form>
    </>
  );
};

export { AddItem };
