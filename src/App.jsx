import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Nav";
import About from "./About";
import Skills from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Task from "./To-do/Todo";
import User from "./Crud/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/To-do" element={<Task />} />
          <Route path="/crud" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
