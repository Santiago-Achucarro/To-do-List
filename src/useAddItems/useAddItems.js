const useAddItems = (valor) => {
  if (valor.length > 0) {
    localStorage.setItem("tareas", JSON.stringify(valor));
  } else {
    return false;
  }
};
export { useAddItems };
