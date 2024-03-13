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

const List = ({
  todoData,
  setAddButtonEnability,
  
  deleteDisabled,
  setDeleteDisability,
  isEditDisabled,
  setEditDisability,
}) => {
  //   console.log(todoData);
  const [no_of_completed, set_no_of_completed] = useState(0);
  const [calendarTodos, setCalendarTodos] = useState([]);

 

  useEffect(() => {
    const datesWiseTodos = getDatesWiseTodos(todoData);
    const sortedDatewiseTodos = sortDates(datesWiseTodos);
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
                  Completed: {no_of_completed}/{calendarTodo.todos.length}
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
