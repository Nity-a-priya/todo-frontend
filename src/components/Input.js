import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/context";

const Input = (props) => {
  const [text, setText] = useContext(DataContext);
  const [date, setDate] = useState(DataContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text != "" && date != "") {
      let body = {
        value: text,
        date,
      };
      //   console.log(body);
      const data = await axios.post("/add", body);
      //   console.log(JSON.stringify(data.data));
      props.onSubmitData(data.data);
    }
  };
  const handleCancel = () => {};
  return (
    <>
      <input type="text" id="text" onChange={(e) => setText(e.target.value)} />
      <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
      <input id="submit" type="submit" onClick={handleSubmit} />
      <button type="reset" id="cancel" value="Reset" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
};
export default Input;
