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
              onclick={completed(todo.id, props.calendarIndex)}
              style={{ color: "black" }}
            >
              {todo.item}
            </li>
            <button
              id="edit"
              onclick={handleEdit(todo.item, todo.date, todo.id)}
            >
              <img src="./pen-to-square-solid.svg" />
            </button>
            <button id="delete" onclick={handleDelete(todo.id)}>
              <img src="./dustbin.jpeg" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Displaytodo;
