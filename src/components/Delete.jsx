const Delete = ({ todo, deleteDisabled }) => {
  const handleDelete = (id) => {
    console.log("deleteee", id);
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
