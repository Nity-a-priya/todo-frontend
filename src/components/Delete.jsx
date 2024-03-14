import { useContext } from "react";
import ToDoDataContext from "../context/ToDoDataContext";
import { postReq } from "../helpers/helpers";

const Delete = ({ todo, deleteDisabled }) => {
  const [todoData, setTodoData] = useContext(ToDoDataContext);

  const handleDelete = async (id) => {
    const method = "/delete";
    let body = {
      index: id,
    };
    const data = await postReq(method, body);
    setTodoData(data);
  };

  return (
    <button
      id="delete"
      onClick={() => handleDelete(todo.id)}
      disabled={deleteDisabled[todo.id]}
      style={
        deleteDisabled[todo.id]
          ? {
              pointerEvents: "none",
              cursor: "not-allowed",
            }
          : {}
      }
    >
      <img src="./dustbin.jpeg" />
    </button>
  );
};

export default Delete;
