import EditButton from "./Edit";
import DeleteButton from "./Delete";
import { useContext, useState } from "react";
import axios from "axios";
import ToDoDataContext from "../context/ToDoDataContext";

const DisplayEachTodo = ({
  todo,
  calendarIndex,
  setDeleteDisability,
  deleteDisabled,
  setAddButtonEnability,
  isEditDisabled,
  setEditDisability,
}) => {
  const [todoData, setTodoData] = useContext(ToDoDataContext);

  const completed = async (TodoId, calendarID) => {
    console.log(TodoId, calendarID);
    const method = "/completeSign";
    let body = {
      id: TodoId,
    };
    const data = await axios.post(method, body);
    setTodoData(data.data);
    let disableID = { [TodoId]: true };
    console.log(disableID);
    setDeleteDisability({ ...deleteDisabled, ...disableID });
    setEditDisability({ ...isEditDisabled, ...disableID });
  };

  return (
    <div
      className="row"
      id={`items${todo.id}`}
      key={todo.id}
      style={
        todo.isCompleted
          ? {
              backgroundColor: "rgba(6, 65, 17, 0.51)",
              textShadow: "none",
            }
          : {}
      }
    >
      <li
        id="li"
        onClick={() => completed(todo.id, calendarIndex)}
        style={{ color: "black" }}
      >
        {todo.item}
      </li>
      <EditButton
        todo={todo}
        setDeleteDisability={setDeleteDisability}
        deleteDisabled={deleteDisabled}
        isEditDisabled={isEditDisabled}
        setEditDisability={setEditDisability}
        setAddButtonEnability={setAddButtonEnability}
      />
      <DeleteButton todo={todo} deleteDisabled={deleteDisabled} />
    </div>
  );
};

export default DisplayEachTodo;
