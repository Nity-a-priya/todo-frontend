import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/context";
import EditContext from "../context/EditContext";
import ToDoDataContext from "../context/ToDoDataContext";

const Input = ({
  onSubmitData,
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
    event.preventDefault();

    if (text != "" && date != "") {
      let method = "/add";
      let body = {
        value: text,
        date,
      };
      if (Object.values(editedItem)[0]) {
        const id = Number(Object.keys(editedItem)[0]);
        body = {
          value: text,
          date,
          index: id,
        };
        method = "/edit";
      }
      const data = await axios.post(method, body);
      setText("");
      setDate("");
      setAddButtonEnability(true);
      setInputDisplay(false);
      setEditStatus({});
      setDeleteDisability({});
      setTodoData(data.data);
    }
  };

  const handleCancel = () => {
    setText("");
    setDate("");
    setAddButtonEnability(true);
    setInputDisplay(false);
    setEditStatus({});
    setDeleteDisability({});
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
