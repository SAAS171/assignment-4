import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ViewSubmitAssignment = () => {
    const [assignment, setAssignment] = useState({question,subject,marks});
    const [answer, setanswer] = useState("");

    useEffect(() => {
        const getAssignment = async () => {
            const res = await fetch("http://localhost:3000/teacher/viewAssignment");
            const data = await res.json();
            console.log(" recieved Assignment", data);
            setAssignment(data);
        };
        getAssignment();
    }, []);

    return (
        <div className="App">
            <br></br>
            <h1>All Assignment</h1>
            {assignment.map((val, key) => {
            <div key = {key}>
            <p>question{assignment.question}</p>
            <p>subject{assignment.subject}</p>
            <p>marks{assignment.marks}</p>
            })};
            <div/>
                
        </div>
    );
};

export default ViewSubmitAssignment;
