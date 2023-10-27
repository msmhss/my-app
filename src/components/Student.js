import React, { Component } from "react";

class Student extends Component {
    state = {
        counter: 0,
        students : [
            {
                name : "John",
                class : 10,
            },
            {
                name : "Jane",
                class : 10,
            },
            {
                name : "Joe",
                class : 10,
            },
        ],
    };
    render() {
        return (
            <>
                <div>
                    {this.state.students.map((student) => (
                        <>
                        <h1>Name : {student.name}</h1>
                        <p>Class : {student.class}</p>
                        </>
                    ))};
                </div>
            </>
        )
    }
}

export default Student;