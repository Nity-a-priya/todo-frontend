import { useContext } from "react";
import InputContext from "../context/InputContext";
import DataContext from "../context/context";
import EditContext from "../context/EditContext";

const Edit = ({
  todo,
  setDeleteDisability,
  deleteDisabled,
  isEditDisabled,
  setEditDisability,
  setAddButtonEnability,
}) => {
  const setInputDisplay = useContext(InputContext);
  const [setText, setDate] = useContext(DataContext);
  const [isEdited, setEditStatus] = useContext(EditContext);

  const handleEdit = (item, date, id) => {
    let deleteID = { [id]: true };
    // console.log(item, date, id);
    if (Object.keys(isEdited).length != 0) {
      let oldID = Object.keys(isEdited)[0];
      console.log("old ID ", oldID);

      setDeleteDisability({ ...deleteDisabled, [oldID]: false, ...deleteID });
    } else {
      setDeleteDisability({ ...deleteDisabled, ...deleteID });
    }
    setAddButtonEnability(false);
    setInputDisplay(true);
    setText(item);
    setDate(date);
    console.log("***********", isEdited);
    let editID = { [id]: true };
    setEditStatus(editID);
  };

  return (
    <button
      id="edit"
      onClick={() => handleEdit(todo.item, todo.date, todo.id)}
      disabled={isEditDisabled[todo.id]}
      style={
        isEditDisabled[todo.id]
          ? {
              pointerEvents: "none",
              cursor: "not-allowed",
            }
          : {}
      }
    >
      <img src="./pen-to-square-solid.svg" />
    </button>
  );
};

export default Edit;
