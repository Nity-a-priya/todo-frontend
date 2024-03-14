import { useEffect, useState } from "react";
import Displaytodos from "./Displaytodos";
const getDatesWiseTodos = (data) => {
  return data.reduce((datesWiseTodos, todo) => {
    const index = datesWiseTodos.findIndex(
      (dateWiseTodo) => dateWiseTodo.date === todo.date
    );

    if (index === -1) {
      return [...datesWiseTodos, { date: todo.date, todos: [todo] }];
    } else {
      datesWiseTodos[index].todos.push(todo);
      return [...datesWiseTodos];
    }

    // [{date: date, todos:[{id:,item:,date:},{...}]}]
  }, []);
};

const sortDates = (array) => {
  return array.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};

const renderCompletedCount = (
  datewiseTodos,
  setEditDisability,
  setDeleteDisability
) => {
  let completeObject = {};
  let disableID;
  datewiseTodos.forEach((calendarTodo, index) => {
    let count = 0;
    calendarTodo.todos.forEach((todo) => {
      if (todo.isCompleted) {
        count = count + 1;
        disableID = { ...disableID, [todo.id]: true };
      }
    });
    completeObject = { ...completeObject, [index]: count };
  });
  setDeleteDisability({ ...disableID });
  setEditDisability({ ...disableID });
  return completeObject;
};

const List = ({
  todoData,
  setAddButtonEnability,

  deleteDisabled,
  setDeleteDisability,
  isEditDisabled,
  setEditDisability,
}) => {
  const [no_of_completed, set_no_of_completed] = useState({});
  const [calendarTodos, setCalendarTodos] = useState([]);

  useEffect(() => {
    console.log(todoData);
    const datesWiseTodos = getDatesWiseTodos(todoData);
    const sortedDatewiseTodos = sortDates(datesWiseTodos);
    set_no_of_completed(
      renderCompletedCount(
        sortedDatewiseTodos,
        setEditDisability,
        setDeleteDisability
      )
    );
    setCalendarTodos(sortedDatewiseTodos);
  }, [todoData]);

  return (
    <>
      {calendarTodos.map((calendarTodo, index) => {
        return (
          <div className="outer_calendar" key={index}>
            <div className="calendar" id={`calendar${index}`}>
              <div className="calendar_heading">
                <h3 className="date">{calendarTodo.date}</h3>
                <h4 className="count">
                  Completed: {no_of_completed[index]}/
                  {calendarTodo.todos.length}
                </h4>
              </div>
              <div className="calendar_body" id={`calendar_body${index}`}>
                <Displaytodos
                  calendarTodos={calendarTodo}
                  key={index}
                  calendarIndex={index}
                  deleteDisabled={deleteDisabled}
                  setDeleteDisability={setDeleteDisability}
                  setAddButtonEnability={setAddButtonEnability}
                  isEditDisabled={isEditDisabled}
                  setEditDisability={setEditDisability}
                  no_of_completed={no_of_completed}
                  set_no_of_completed={set_no_of_completed}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
