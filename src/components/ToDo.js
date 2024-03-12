import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "../context/context";
import "../styles/style.css";
import Input from "./Input";

const ToDo = () => {
  //   const [data, setData] = useContext(DataContext);
  const [showInput, setInputDisplay] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const addInput = () => {
    if (showInput) {
      setInputDisplay(false);
    } else {
      setInputDisplay(true);
    }
  };

  const showData = (data) => {
    console.log("--->", JSON.stringify(data));
  };

  return (
    <DataContext.Provider value={[text, setText, date, setDate]}>
      <div className="first-div">
        <div className="main-div">
          <div>
            <button className="add" onClick={addInput}>
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
            <Input onSubmitData={showData} />
          </div>

          <ul className="list"></ul>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default ToDo;
