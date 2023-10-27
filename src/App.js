import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HelloWould from "./components/screens/HelloWould";
import ToDo from "./components/screens/ToDo";
import Table from "./components/screens/Table";
import Home from "./components/screens/Home";
import Youtube from "./components/screens/Youtube";
import About from "./components/screens/About";
import Contact from "./components/screens/Users";
import Header from "./components/includes/Header";
import Users from "./components/screens/Users"
class App extends Component {
    render() {
        return (
            <>
                <Heading color="നീല">Nafil</Heading>;
                <SubHeading color="മഞ്ഞ">MSM</SubHeading>;
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home/>}>
                        </Route>
                        <Route path="youtube" element={<Youtube/>}>
                        </Route>
                        <Route path="hello" element={<HelloWould/>}>
                        </Route>
                        <Route path="todo" element={<ToDo/>}>
                        </Route>
                        <Route path="about" element={<About/>}>
                        </Route>
                        <Route path="contact" element={<Contact/>}>
                        </Route>
                        <Route path="users" element={<Users/>}>
                        </Route>
                    </Routes>
                </Router>
            </>
        )
    }
}

const Heading = styled.h1`
    font-size: 55px;
    margin-top: 100px;
    text-align:center;
    color: ${({color}) => (color === "മഞ്ഞ" ? "yellow" : "#993")};
    @media all and (max-width: 768px) {
        font-size:23px;
    }
`;

const SubHeading = styled(Heading)`
    font-size: 45px;
    color: ${({color}) => (color === "നീല" ? "blue" : "#993")};
    @media all and (max-width: 768px) {
    font-size:19px;
    }
`;

export default App;