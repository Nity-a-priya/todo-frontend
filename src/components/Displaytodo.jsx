import { useState } from "react";
import EditButton from "./Edit";
import DeleteButton from "./Delete";

const Displaytodo = ({
  calendarTodos,
  calendarIndex,
  deleteDisabled,
  setDeleteDisability,
  setAddButtonEnability,
  idOfEditTodo,
}) => {
  const completed = () => {};

  const sendEditedToDoID = (id) => {
    idOfEditTodo(id);
  };

  return (
    <>
      {calendarTodos.todos.map((todo) => {
        return (
          <div className="row" id={`items${todo.id}`} key={todo.id}>
            <li
              id="li"
              onClick={completed(todo.id, calendarIndex)}
              style={{ color: "black" }}
            >
              {todo.item}
            </li>
            <EditButton
              todo={todo}
              setDeleteDisability={setDeleteDisability}
              deleteDisabled={deleteDisabled}
              setAddButtonEnability={setAddButtonEnability}
              editedTodo={sendEditedToDoID}
            />
            <DeleteButton todo={todo} deleteDisabled={deleteDisabled} />
          </div>
        );
      })}
    </>
  );
};

export default Displaytodo;
