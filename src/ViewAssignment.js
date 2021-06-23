import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ViewAssignment = () => {
  const [assignment, setAssignment] = useState({});
  const [answer, setanswer] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    const getAssignment = async () => {
      const res = await fetch("http://localhost:3000/teacher/viewAssignment");
      const data = await res.json();
      console.log(" recieved Assignment", data);
      setAssignment(data);
    };
    getAssignment();
  }, []);
  function submitAssignment ()  {

    alert("Assignment submitted")
  }
  return (
    <div className="App">
      <br></br>
      <h1>All Assignment</h1>
      <p> question{assignment.question}</p>
      <p> subject{assignment.subject}</p>
      
      <p>marks{assignment.marks}</p>
      <TextField
        label="Enter Marks"
        value={marks}
        onChange={(e) => setanswer(e.target.value)}
      />
      <br></br>
      <Button variant="outlined" color="primary" onClick={submitAssignment}>
        Add Assignment
      </Button>
    </div>
  );
  }
export default ViewAssignment;
