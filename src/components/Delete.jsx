import { useContext } from "react";
import ToDoDataContext from "../context/ToDoDataContext";
import axios from "axios";

const Delete = ({ todo, deleteDisabled }) => {
  const [todoData, setTodoData] = useContext(ToDoDataContext);

  const handleDelete = async (id) => {
    console.log("deleteee", id);
    const method = "/delete";
    let body = {
      index: id,
    };
    const data = await axios.post(method, body);
    setTodoData(data.data);
  };

  return (
    <button
      id="delete"
      onClick={() => handleDelete(todo.id)}
      disabled={deleteDisabled[todo.id]}
      style={
        deleteDisabled[todo.id] && {
          pointerEvents: "none",
          cursor: "not-allowed",
        }
      }
    >
      <img src="./dustbin.jpeg" />
    </button>
  );
};

export default Delete;
