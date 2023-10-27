import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import HelloWould from "./components/screens/HelloWould";
import ToDo from "./components/screens/ToDo";
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
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Youtube/>} />
                        <Route path="home" element={<Home/>} />
                        <Route path="hello" element={<HelloWould/>} />
                        <Route path="todo" element={<ToDo/>} />
                        <Route path="about" element={<About/>} />
                        <Route path="contact" element={<Contact/>} />
                        <Route path="users" element={<Users/>} />
                    </Routes>
                </Router>
                <Heading color="നീല">Nafil</Heading>;
                <SubHeading color="മഞ്ഞ">MSM</SubHeading>;
            </>
        )
    }
}

const Heading = styled.h1`
    font-size: 55px;
    margin-top: 300px;
    text-align:center;
    color: ${({color}) => (color === "മഞ്ഞ" ? "yellow" : "#993")};
    @media all and (max-width: 768px) {
        font-size:23px;
    }
`;

const SubHeading = styled(Heading)`
    font-size: 45px;
    margin-top: 55px;
    color: ${({color}) => (color === "നീല" ? "blue" : "#993")};
    @media all and (max-width: 768px) {
    font-size:19px;
    }
`;

export default App;