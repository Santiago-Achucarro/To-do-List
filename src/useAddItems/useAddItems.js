const useAddItems = (valor, tarea) => {
  if (valor.length > 0) {
    localStorage.setItem(tarea, valor);
    return true;
  } else {
    return false;
  }
};
export { useAddItems };
