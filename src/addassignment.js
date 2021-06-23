import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const AddQuiz = () => {
    const [tid, setTid] = useState("");
    

    

  
    const [subject, setSubject] = useState("");
  
    const [marks, setMarks] = useState("");
    let baseUrl = "http://localhost:3000/teacher/";

   
    

    

    const addAssignment = () => {
        // console.log("Add QUiz")
        if (question.length === 0) {
            alert("Please enter name of question");
            return;
        }
        if (subject.length === 0) {
            alert("Please enter subject name");
            return;
        }
        if (marks.length === 0) {
            alert("Please enter marks");
            return;
        }
        let Assignment = {
            Subject: subject,
           Question: questions,
            Marks: marks,
        };
        let token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM0MmI0NTIyMDFhNzFlZDgyOWEwZDkiLCJpYXQiOjE2MjQzNjM3NTUsImV4cCI6MTYyNDM2NzM1NX0.LEu-PGdQAYnqh42UgF1Ku0BlL-Uktc7nUbz70KvAJKE";

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${token}`,
            body: JSON.stringify(assignment),
        };
        fetch(baseUrl + "addAssignment/" + qid, requestOptions)
            .then((response) => response.json())
            .then((data) => {
        
                alert("Assignment Added successfully");
                setQuestion("");
                setSubject("");
                setMarks("");
            });

    };

   

    return (
        <div>
            <h1 >Add Assignment</h1>
            <h3 >
                Please fill fields the to add new question in Assignment
            </h3>
            <TextField
            
                label="Enter Question"
                value={question}
                onChange={(e) => setSubject(e.target.value)}
            />
            <br></br>
            
            <TextField
                
                label="Enter Marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
            />
            <br></br>
            <Button
                
                variant="outlined"
                color="primary"
                onClick={addAssignment}
            >
                Add Assignment
            </Button>
        
        
        </div>
    );
};

export default AddQuiz;
