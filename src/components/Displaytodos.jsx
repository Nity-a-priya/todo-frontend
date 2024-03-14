import React from "react";
import DisplayEachTodo from "./DisplayEachTodo";

const Displaytodos = ({
  calendarTodos,
  calendarIndex,
  deleteDisabled,
  setDeleteDisability,
  setAddButtonEnability,
  isEditDisabled,
  setEditDisability,
  no_of_completed,
  set_no_of_completed,
}) => {
  return (
    <>
      {calendarTodos.todos.map((todo) => {
        {
          return todo.isCompleted ? (
            <div className="complete_div">
              <img
                src="./done.jpeg"
                id="done"
                style={{ backgroundColor: "#5a6b59" }}
              />
              <DisplayEachTodo
                todo={todo}
                key={todo.id}
                calendarIndex={calendarIndex}
                setDeleteDisability={setDeleteDisability}
                deleteDisabled={deleteDisabled}
                setAddButtonEnability={setAddButtonEnability}
                isEditDisabled={isEditDisabled}
                setEditDisability={setEditDisability}
              />
            </div>
          ) : (
            <DisplayEachTodo
              todo={todo}
              key={todo.id}
              calendarIndex={calendarIndex}
              setDeleteDisability={setDeleteDisability}
              deleteDisabled={deleteDisabled}
              setAddButtonEnability={setAddButtonEnability}
              isEditDisabled={isEditDisabled}
              setEditDisability={setEditDisability}
            />
          );
        }
      })}
    </>
  );
};

export default Displaytodos;
