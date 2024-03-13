import { useContext } from "react";
import InputContext from "../context/InputContext";
import DataContext from "../context/context";

const Edit = ({
  todo,
  setDeleteDisability,
  deleteDisabled,
  setAddButtonEnability,
  editedTodo,
}) => {
  const setInputDisplay = useContext(InputContext);
  const [setText, setDate] = useContext(DataContext);

  const handleEdit = (item, date, id) => {
    console.log(item, date, id);
    let deleteID = { [id]: true };
    setDeleteDisability(deleteID);
    setAddButtonEnability(false);
    setInputDisplay(true);
    setText(item);
    setDate(date);
    editedTodo(id);
  };

  return (
    <button id="edit" onClick={() => handleEdit(todo.item, todo.date, todo.id)}>
      <img src="./pen-to-square-solid.svg" />
    </button>
  );
};

export default Edit;
