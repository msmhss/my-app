import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/screens/Users";
import Home from "./components/screens/Home";
import Contact from "./components/screens/Contact";
import About from "./components/screens/About";
import Todo from "./components/screens/ToDo";
import HelloWould from "./components/screens/HelloWould";
import Nav from "./components/includes/Nav";
import Youtube from "./components/screens/Youtube";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="contact" element={<Contact />}>
          </Route>
          <Route path="about" element={<About />}>
          </Route>
          <Route path="users" element={<Users />}>
          </Route>
          <Route path="todo" element={<Todo />}>
          </Route>
          <Route path="counter" element={<HelloWould />}>
          </Route>
          <Route path="hello" element={<HelloWould />}>
          </Route>
          <Route path="youtube" element={<Youtube />}>
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App;