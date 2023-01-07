import { Input, useToast } from "@chakra-ui/react";
import react, { useEffect, useState } from "react";
import { useAddItems } from "../../useAddItems/useAddItems";

const AddItem = ({ setSend }) => {
  const toast = useToast()
  const data = JSON.parse(localStorage.getItem("tareas"));
  const [searchInput, setSearchInput] = useState("");
  const [valor, setValor] = useState(data ? data : []);

  const handlerChangeInput = (e) => {
    let input = e.target.value;
    if (input.length < 40) setSearchInput(input.toLowerCase());
  };

  const handleAddToDo = (e) => {
    e.preventDefault();
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    let hora = date.getHours();
    let minutos = date.getMinutes();

    if(minutos < 10 ){
      minutos = `0${minutos}`
    }
    
    if (mes == 0) {
      mes = 1;
    }
    
    let time = `${hora}: ${minutos}`;
    const fullData = searchInput + ` (${dia}/${mes})  ${time}`;
    const compareData = valor.every((value, index) =>
      data ? value === data[index] : value
    );

    if (data && data.length === valor.length && compareData) {
      setValor([...valor, fullData]);
    } else {
      if (data) {
        setValor([...data, fullData]);
      } else {
        setValor([fullData]);
      }
    }

    toast({
      position:"bottom-left",
      title:"Tarea creada",
      variant:"subtle",
      isClosable:true
    })



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
