import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "../context/context";
import InputContext from "../context/InputContext";
import EditContext from "../context/EditContext";
import ToDoDataContext from "../context/ToDoDataContext";
import "../styles/style.css";
import Input from "./Input";
import List from "./List";

const ToDo = () => {
  //   const [data, setData] = useContext(DataContext);
  const [showInput, setInputDisplay] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [todoData, setTodoData] = useState(null);
  const [enableAddButton, setAddButtonEnability] = useState(true);
  const [isEdited, setEditStatus] = useState({});
  const [deleteDisabled, setDeleteDisability] = useState({});

  const addInput = () => {
    if (showInput) {
      setInputDisplay(false);
    } else {
      setInputDisplay(true);
    }
  };

  const editedToDoID = (id) => {
    let editID = { [id]: true };
    setEditStatus(editID);
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        axios.get("/get").then((response) => setTodoData(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [todoData]);

  return (
    <InputContext.Provider value={setInputDisplay}>
      <DataContext.Provider value={[setText, setDate]}>
        <EditContext.Provider value={[isEdited, setEditStatus]}>
          <ToDoDataContext.Provider value={[todoData, setTodoData]}>
            <div className="first-div">
              <div className="main-div">
                <div>
                  <button
                    className="add"
                    onClick={addInput}
                    disabled={!enableAddButton}
                  >
                    ADD
                  </button>

                  <button className="logout">
                    <a href="/logout">Logout</a>
                  </button>
                </div>

                <div
                  className="input-div"
                  style={showInput ? { display: "" } : { display: "none" }}
                >
                  <Input
                    text={text}
                    setText={setText}
                    date={date}
                    setDate={setDate}
                    showInput={showInput}
                    setInputDisplay={setInputDisplay}
                    enableAddButton={enableAddButton}
                    setAddButtonEnability={setAddButtonEnability}
                    editedItem={isEdited}
                    setEditStatus={setEditStatus}
                    deleteDisabled={deleteDisabled}
                    setDeleteDisability={setDeleteDisability}
                  />
                </div>

                <ul className="list">
                  {todoData != null && (
                    <List
                      todoData={todoData}
                      setAddButtonEnability={setAddButtonEnability}
                      editedToDoID={editedToDoID}
                      deleteDisabled={deleteDisabled}
                      setDeleteDisability={setDeleteDisability}
                    />
                  )}
                </ul>
              </div>
            </div>
          </ToDoDataContext.Provider>
        </EditContext.Provider>
      </DataContext.Provider>
    </InputContext.Provider>
  );
};

export default ToDo;
