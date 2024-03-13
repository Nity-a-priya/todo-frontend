const Displaytodo = (props) => {
  const completed = () => {};
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <>
      {props.calendarTodos.todos.map((todo) => {
        return (
          <div className="row" id={`items${todo.id}`} key={todo.id}>
            <li
              id="li"
              onClick={completed(todo.id, props.calendarIndex)}
              style={{ color: "black" }}
            >
              {todo.item}
            </li>
            <button
              id="edit"
              onClick={handleEdit(todo.item, todo.date, todo.id)}
            >
              <img src="./pen-to-square-solid.svg" />
            </button>
            <button id="delete" onClick={handleDelete(todo.id)}>
              <img src="./dustbin.jpeg" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Displaytodo;
