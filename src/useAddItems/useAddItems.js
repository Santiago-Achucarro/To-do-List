const useAddItems = (valor) => {
  if (valor.length > 0) {
    localStorage.setItem("tareas", JSON.stringify(valor));
  }else {
    localStorage.removeItem("tareas")
  }
};
export { useAddItems };
