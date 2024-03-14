import React, { useContext } from "react";
import DataContext from "../context/context";
import ToDoDataContext from "../context/ToDoDataContext";
import { postReq } from "../helpers/helpers";

const Input = ({
  text,
  date,
  showInput,
  setInputDisplay,
  enableAddButton,
  setAddButtonEnability,
  editedItem,
  setEditStatus,
  deleteDisabled,
  setDeleteDisability,
}) => {
  const [setText, setDate] = useContext(DataContext);
  const [todoData, setTodoData] = useContext(ToDoDataContext);

  const handleSubmit = async (event) => {
    const id = Number(Object.keys(editedItem)[0]);
    event.preventDefault();

    if (text != "" && date != "") {
      let method = "/add";
      let body = {
        value: text,
        date,
      };
      if (Object.values(editedItem)[0]) {
        body = {
          value: text,
          date,
          index: id,
        };
        method = "/edit";
      }
      const data = await postReq(method, body);
      setText("");
      setDate("");
      setAddButtonEnability(true);
      setInputDisplay(false);
      setEditStatus({});
      setDeleteDisability({ ...deleteDisabled, [id]: false });
      setTodoData(data);
    }
  };

  const handleCancel = () => {
    const id = Number(Object.keys(editedItem)[0]);
    setText("");
    setDate("");
    setAddButtonEnability(true);
    setInputDisplay(false);
    setEditStatus({});
    setDeleteDisability({ ...deleteDisabled, [id]: false });
  };
  return (
    <>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input id="submit" type="submit" onClick={handleSubmit} />
      <button type="reset" id="cancel" value="Reset" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
};
export default Input;
